# GOO-10: Setting up n8n (Visual Workflows!)

Just got n8n running on my VPS with HTTPS and I'm genuinely excited about this. Like, VISUAL WORKFLOWS. Drag and drop backend logic. This is exactly the kind of tool that makes sense for how my brain works.

The setup was interesting - had to learn about reverse proxies (Nginx sitting between the internet and n8n), SSL certificates (the padlock thing), and process managers (keeping n8n running even when things crash). Concepts I've heard about but never actually... implemented myself?

Hit a fun blocker: Docker was hogging port 80. Learned you can't have two things listening on the same port (duh in retrospect). `lsof -i :80` became my friend real fast.

The part that clicked: understanding WHY we need Nginx. It's not just "because tutorials say so." It's because you want ONE entry point that handles SSL, routes to different services, and doesn't expose internal ports to the internet. That... makes sense now.

Also: Let's Encrypt is magic. Free SSL certificates that auto-renew? Yes please.

Next up is PostgreSQL and then I get to actually BUILD workflows in n8n instead of just staring at the empty canvas. Ready for that visual backend life.

—

**One learning:** Reverse proxies are like receptionists. They answer the door (port 443), check who you're here to see (n8n.goodsomeday.com), and direct you to the right office (localhost:5678). Internal services don't deal with the public directly.

**One struggle:** PM2 systemd service kept showing "inactive" even though n8n was running. Turns out PM2 can run in user session OR as a system service, not both. Had to `pm2 kill` the user session and let systemd take over. That conflict took a while to understand.
