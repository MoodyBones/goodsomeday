# Goodsomeday Backup Strategy

## Database: PostgreSQL

**Database:** `goodsomeday_prod`
**Location:** VPS at 72.60.78.175
**Version:** PostgreSQL 16.10

---

## Manual Backup (Current Method)

### Create a backup

SSH into the VPS and run:

```bash
sudo -u postgres pg_dump goodsomeday_prod > ~/backups/goodsomeday_prod_$(date +%Y%m%d_%H%M%S).sql
```

This creates a SQL dump file with timestamp (e.g., `goodsomeday_prod_20251018_235959.sql`)

### Restore from backup

```bash
sudo -u postgres psql goodsomeday_prod < ~/backups/goodsomeday_prod_YYYYMMDD_HHMMSS.sql
```

Replace `YYYYMMDD_HHMMSS` with your backup filename.

---

## Backup Schedule (To Implement)

**Current:** Manual backups only
**Planned:** Automated daily backups via cron job

### Future automation (Milestone 3+):

Create a cron job to run daily backups:

```bash
# Edit crontab
crontab -e

# Add this line (runs daily at 2 AM):
0 2 * * * sudo -u postgres pg_dump goodsomeday_prod > ~/backups/goodsomeday_prod_$(date +\%Y\%m\%d).sql
```

---

## Backup Retention

**Recommended:**
- Keep daily backups for 7 days
- Keep weekly backups for 4 weeks
- Keep monthly backups for 6 months

**Current:** Manual management

---

## Important Notes

- Backups are stored on the same VPS (not ideal for disaster recovery)
- **Future improvement:** Copy backups to external storage (S3, Backblaze, etc.)
- Test restore process periodically to ensure backups work
- Before major changes (schema updates, data migrations), always create a backup

---

## Quick Reference

**Create backup:**
```bash
mkdir -p ~/backups
sudo -u postgres pg_dump goodsomeday_prod > ~/backups/backup_$(date +%Y%m%d).sql
```

**List backups:**
```bash
ls -lh ~/backups/
```

**Restore backup:**
```bash
sudo -u postgres psql goodsomeday_prod < ~/backups/backup_YYYYMMDD.sql
```

---

*Last updated: 2025-10-18*
*Related: GOO-11 - Set up PostgreSQL database*
