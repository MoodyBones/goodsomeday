# Goodsomeday Setup Guide

Complete deployment guide for setting up the Goodsomeday platform from scratch.

**Target Environment:** Ubuntu 22.04 LTS on Hostinger VPS
**Prerequisites:** Domain name, basic command line knowledge
**Time Estimate:** 3-4 hours for complete setup

---

## Table of Contents

1. [VPS Provisioning & Security](#1-vps-provisioning--security)
2. [Domain & DNS Configuration](#2-domain--dns-configuration)
3. [n8n Installation](#3-n8n-installation)
4. [PostgreSQL Setup](#4-postgresql-setup)
5. [Frontend Deployment](#5-frontend-deployment)
6. [Verification & Testing](#6-verification--testing)
7. [Ongoing Maintenance](#7-ongoing-maintenance)

---

## 1. VPS Provisioning & Security

**Ticket:** GOO-9 - Provision and secure VPS

### 1.1 Create VPS

1. Sign up for Hostinger VPS (or your preferred VPS provider)
2. Create new VPS:
   - **OS:** Ubuntu 22.04 LTS
   - **Plan:** KVM 2 (2GB RAM recommended)
   - **Location:** Choose closest to your users
   - **Authentication:** SSH key (generate if you don't have one)

**Generate SSH key locally (if needed):**
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
cat ~/.ssh/id_ed25519.pub  # Copy this to Hostinger
```

3. Create VPS and note the IP address

### 1.2 Initial Connection

```bash
# First connection as root
ssh root@YOUR_VPS_IP

# Update system packages
apt update && apt upgrade -y
```

### 1.3 Create Non-Root User

```bash
# Create user (replace 'mel' with your username)
adduser mel

# Add to sudo group
# Option 1: Try usermod (may not work on all systems)
usermod -aG sudo mel

# Option 2: Use visudo if usermod fails
visudo
# Add this line under the root user entry:
# mel ALL=(ALL:ALL) ALL
# Save and exit (Ctrl+X, Y, Enter)

# Test sudo access
su - mel
sudo whoami  # Should output: root
```

### 1.4 Configure SSH for New User

```bash
# As the new user (mel), create .ssh directory
mkdir -p ~/.ssh
chmod 700 ~/.ssh

# Copy root's authorized_keys
sudo cp /root/.ssh/authorized_keys ~/.ssh/
sudo chown mel:mel ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

**Test SSH access from your local machine:**
```bash
# From your local terminal
ssh mel@YOUR_VPS_IP
```

### 1.5 Harden SSH Security

```bash
# Edit SSH config
sudo nano /etc/ssh/sshd_config

# Make these changes:
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes

# Save and exit (Ctrl+X, Y, Enter)

# Restart SSH service
sudo systemctl restart ssh  # On Ubuntu 22.04
# OR
sudo systemctl restart sshd  # On other systems
```

### 1.6 Configure Firewall (UFW)

```bash
# Check current status
sudo ufw status verbose

# Set defaults
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Allow essential ports
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS

# Enable firewall (IMPORTANT: Make sure port 22 is allowed first!)
sudo ufw enable

# Verify rules
sudo ufw status verbose
```

**Security Checklist:**
- ✅ Non-root user created with sudo privileges
- ✅ SSH key authentication working
- ✅ Root login disabled
- ✅ Password authentication disabled
- ✅ Firewall configured (ports 22, 80, 443 only)

---

## 2. Domain & DNS Configuration

### 2.1 Add DNS A Record

**Using Hostinger (or your DNS provider):**

1. Log into your domain registrar (Hostinger, Namecheap, etc.)
2. Find DNS management for your domain
3. Add A record:
   - **Type:** A
   - **Name:** `n8n` (creates n8n.goodsomeday.com)
   - **Value:** Your VPS IP address
   - **TTL:** 300 (or default)

### 2.2 Verify DNS Propagation

```bash
# From your local machine
nslookup n8n.goodsomeday.com

# Should show your VPS IP address
# May take 5-15 minutes to propagate
```

**Don't wait for full propagation** - you can continue with VPS setup while DNS updates.

---

## 3. n8n Installation

**Ticket:** GOO-10 - Install and configure n8n

### 3.1 Install Node.js 20.x

```bash
# Add NodeSource repository
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

# Install Node.js
sudo apt install -y nodejs

# Verify installation
node --version  # Should show v20.x.x
npm --version
```

### 3.2 Install n8n Globally

```bash
sudo npm install -g n8n

# Verify installation
n8n --version
```

### 3.3 Configure n8n Environment

```bash
# Create config directory
mkdir -p ~/.n8n

# Set environment variables
nano ~/.n8n/config
```

**Add these lines to `~/.n8n/config`:**
```bash
export N8N_HOST=n8n.goodsomeday.com
export N8N_PORT=5678
export N8N_PROTOCOL=https
export WEBHOOK_URL=https://n8n.goodsomeday.com
```

### 3.4 Install PM2 (Process Manager)

```bash
# Install PM2 globally
sudo npm install -g pm2

# Start n8n with PM2
pm2 start n8n

# Save PM2 process list
pm2 save

# Generate startup script (run the command PM2 outputs)
pm2 startup
# This will output a command like:
# sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u mel --hp /home/mel
# Copy and run that command

# Verify n8n is running
pm2 status
pm2 logs n8n
```

### 3.5 Install and Configure Nginx

**3.5.1 Stop conflicting services (if any):**

```bash
# Check if Docker is using port 80
sudo lsof -i :80

# If Docker is running, stop it
sudo systemctl stop docker
sudo systemctl disable docker
```

**3.5.2 Install Nginx:**

```bash
sudo apt install -y nginx

# Verify Nginx is installed
nginx -v
```

**3.5.3 Create n8n Nginx configuration:**

```bash
sudo nano /etc/nginx/sites-available/n8n.goodsomeday.com
```

**Add this configuration:**
```nginx
server {
    listen 80;
    server_name n8n.goodsomeday.com;

    location / {
        proxy_pass http://localhost:5678;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # WebSocket support
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

**3.5.4 Enable the site:**

```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/n8n.goodsomeday.com /etc/nginx/sites-enabled/

# Remove default site
sudo rm /etc/nginx/sites-enabled/default

# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

### 3.6 Install SSL Certificate (Let's Encrypt)

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Get certificate (replace with your domain)
sudo certbot --nginx -d n8n.goodsomeday.com

# Follow prompts:
# - Enter your email
# - Agree to terms of service
# - Choose "2" to redirect HTTP to HTTPS

# Verify auto-renewal is configured
sudo certbot renew --dry-run
```

**Certbot will automatically:**
- Update Nginx config with SSL settings
- Add SSL certificates
- Set up auto-renewal

### 3.7 Verify n8n is Accessible

1. Open browser and visit: `https://n8n.goodsomeday.com`
2. You should see n8n setup wizard
3. Create admin account
4. Save credentials securely

**Test Workflow:**
1. Create new workflow in n8n
2. Add "Webhook" trigger node
3. Add "Respond to Webhook" node
4. Connect them
5. Click "Execute Workflow"
6. Copy webhook URL
7. Test with curl:
   ```bash
   curl https://n8n.goodsomeday.com/webhook-test/YOUR_WEBHOOK_PATH
   ```

---

## 4. PostgreSQL Setup

**Ticket:** GOO-11 - Set up PostgreSQL database

### 4.1 Install PostgreSQL

```bash
# Install PostgreSQL
sudo apt install -y postgresql postgresql-contrib

# Verify installation
psql --version  # Should show PostgreSQL 14+

# Check if PostgreSQL is running
sudo systemctl status postgresql
# OR verify port is listening
sudo lsof -i :5432
```

### 4.2 Create Database and User

```bash
# Switch to postgres user
sudo -u postgres psql

# In psql prompt:
```

```sql
-- Create database
CREATE DATABASE goodsomeday_prod;

-- Create user with password (change 'your_password')
CREATE USER goodsomeday_user WITH PASSWORD 'your_secure_password';

-- Grant all privileges on database
GRANT ALL PRIVILEGES ON DATABASE goodsomeday_prod TO goodsomeday_user;

-- Exit psql
\q
```

### 4.3 Grant Schema Permissions

```bash
# Connect to the new database
sudo -u postgres psql
\c goodsomeday_prod
```

```sql
-- Grant schema permissions (psql meta-command needs own line!)
GRANT ALL ON SCHEMA public TO goodsomeday_user;

-- Grant permissions on future tables
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO goodsomeday_user;

-- Exit
\q
```

### 4.4 Test Connection

```bash
# Test connection as goodsomeday_user
psql -h localhost -U goodsomeday_user -d goodsomeday_prod

# If prompted for password, enter the one you set above
# You should see: goodsomeday_prod=>

# Exit
\q
```

### 4.5 Run Database Schema

```bash
# Download or create schema.sql (see docs/database/schema.sql)
# Then run:
sudo -u postgres psql goodsomeday_prod < /path/to/schema.sql

# Verify tables were created
sudo -u postgres psql goodsomeday_prod -c "\dt"
```

**Expected output:**
```
             List of relations
 Schema |      Name       | Type  |  Owner
--------+-----------------+-------+----------
 public | learning_journal| table | postgres
 public | stories         | table | postgres
```

### 4.6 Load Seed Data (Optional)

```bash
# Load test data
sudo -u postgres psql goodsomeday_prod < /path/to/seed-data.sql

# Verify data
sudo -u postgres psql goodsomeday_prod -c "SELECT COUNT(*) FROM stories;"
```

### 4.7 Configure n8n Database Credential

1. Open n8n UI: `https://n8n.goodsomeday.com`
2. Go to "Credentials" → "New"
3. Select "Postgres"
4. Fill in:
   - **Name:** Goodsomeday Postgres
   - **Host:** localhost
   - **Database:** goodsomeday_prod
   - **User:** goodsomeday_user
   - **Password:** [your password]
   - **Port:** 5432
   - **SSL:** Disabled (localhost connection)
5. Click "Test" → Should show "Connection successful"
6. Save credential

---

## 5. Frontend Deployment

### 5.1 Prerequisites

- GitHub account
- Vercel account (free tier)
- Repository pushed to GitHub

### 5.2 Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New" → "Project"
3. Import your `goodsomeday` repository
4. Configure:
   - **Framework Preset:** Next.js
   - **Root Directory:** ./
   - **Build Command:** `npm run build`
   - **Output Directory:** .next
5. Add Environment Variable:
   - **Key:** `NEXT_PUBLIC_API_URL`
   - **Value:** `https://n8n.goodsomeday.com/webhook`
6. Click "Deploy"

### 5.3 Configure Custom Domain (Optional)

1. In Vercel project settings → Domains
2. Add `goodsomeday.com` or `www.goodsomeday.com`
3. Follow DNS instructions to point domain to Vercel
4. Wait for SSL certificate generation

### 5.4 Verify Frontend

1. Visit your Vercel URL (e.g., `goodsomeday.vercel.app`)
2. Check that the site loads
3. Test story submission (should connect to n8n backend)

---

## 6. Verification & Testing

### 6.1 End-to-End Test

**Test Story Submission:**

1. Visit frontend: `https://goodsomeday.vercel.app`
2. Click "Share Your Story"
3. Fill out form with test data
4. Submit
5. Check n8n workflow execution logs
6. Verify data in PostgreSQL:
   ```bash
   sudo -u postgres psql goodsomeday_prod -c "SELECT * FROM stories ORDER BY id DESC LIMIT 1;"
   ```

**Test Story Retrieval:**

```bash
# From your local machine
curl https://n8n.goodsomeday.com/webhook/get-stories
```

Should return JSON array of approved stories.

### 6.2 Security Checklist

- [ ] HTTPS working on n8n subdomain
- [ ] HTTPS working on frontend
- [ ] SSH accessible only with key
- [ ] Root login disabled
- [ ] Firewall configured correctly
- [ ] PostgreSQL only accessible from localhost
- [ ] n8n admin panel password-protected

### 6.3 Monitoring Setup

**PM2 Status:**
```bash
pm2 status
pm2 logs n8n  # View n8n logs
```

**System Resources:**
```bash
htop  # Install with: sudo apt install htop
df -h  # Check disk space
free -h  # Check memory
```

---

## 7. Ongoing Maintenance

### 7.1 Backup Database

**Manual Backup:**
```bash
# Create backup directory
mkdir -p ~/backups

# Run backup (see BACKUP-STRATEGY.md for details)
sudo -u postgres pg_dump goodsomeday_prod > ~/backups/goodsomeday_prod_$(date +%Y%m%d_%H%M%S).sql
```

**Automated Backups (Future):**
```bash
# Add to crontab
crontab -e

# Add this line for daily 2 AM backups:
0 2 * * * sudo -u postgres pg_dump goodsomeday_prod > ~/backups/goodsomeday_prod_$(date +\%Y\%m\%d).sql
```

### 7.2 Update System Packages

```bash
# Update package list
sudo apt update

# Upgrade packages
sudo apt upgrade -y

# Reboot if kernel was updated
sudo reboot
```

### 7.3 Monitor Logs

**n8n Logs:**
```bash
pm2 logs n8n
```

**Nginx Logs:**
```bash
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

**PostgreSQL Logs:**
```bash
sudo tail -f /var/log/postgresql/postgresql-14-main.log
```

### 7.4 Renew SSL Certificate

**Auto-renewal is configured**, but you can test it:
```bash
sudo certbot renew --dry-run
```

Certificates auto-renew 30 days before expiration.

---

## Troubleshooting

### n8n Not Accessible

**Check PM2 status:**
```bash
pm2 status
pm2 logs n8n
```

**Check Nginx:**
```bash
sudo systemctl status nginx
sudo nginx -t  # Test config
sudo tail -f /var/log/nginx/error.log
```

**Check Firewall:**
```bash
sudo ufw status verbose
```

### Database Connection Failed

**Check PostgreSQL is running:**
```bash
sudo systemctl status postgresql
sudo lsof -i :5432
```

**Test connection:**
```bash
psql -h localhost -U goodsomeday_user -d goodsomeday_prod
```

**Check permissions:**
```bash
sudo -u postgres psql goodsomeday_prod -c "\du"
```

### PM2 Service Conflicts

**If PM2 shows inactive but n8n is running:**
```bash
# Kill user session
pm2 kill

# Restart systemd service
sudo systemctl restart pm2-mel

# Verify
pm2 status
```

---

## Quick Reference Commands

```bash
# Check n8n status
pm2 status
pm2 logs n8n

# Restart n8n
pm2 restart n8n

# Check database
sudo -u postgres psql goodsomeday_prod

# Backup database
sudo -u postgres pg_dump goodsomeday_prod > backup.sql

# Check Nginx
sudo systemctl status nginx
sudo nginx -t

# View logs
pm2 logs n8n
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/postgresql/postgresql-14-main.log

# Firewall
sudo ufw status verbose

# System resources
htop
df -h
free -h
```

---

## Related Documentation

- [ARCHITECTURE.md](ARCHITECTURE.md) - System architecture overview
- [API Documentation](api/README.md) - n8n webhook endpoints
- [BACKUP-STRATEGY.md](BACKUP-STRATEGY.md) - Database backup procedures
- [Schema Design Philosophy](Schema-Design-Philosophy.md) - Database design rationale
- [Learning Resources](learning-resources/foundation.md) - Ticket documentation

---

**Last Updated:** 19 October 2025
**Tested On:** Ubuntu 22.04 LTS, Hostinger VPS
