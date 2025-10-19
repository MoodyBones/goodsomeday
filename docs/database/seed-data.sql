-- Goodsomeday Seed Data
-- Test data for development and testing

-- ============================================================================
-- Seed Data: stories
-- ============================================================================

INSERT INTO stories (story_text, pipeline_stage, current_status, approved, submitted_at) VALUES
(
    'I was the only girl in my high school computer science class. Every time I asked a question, I got eye rolls from the guys. My teacher would say things like "maybe this subject isn''t for everyone" when I struggled with concepts. I started feeling like I didn''t belong, like I was too dumb for tech.

One day I realized: the problem wasn''t me. The problem was an environment that made me feel unwelcome. I decided I wasn''t going to let other people''s attitudes define what I could do.

I found online communities of women in tech who actually supported each other. I switched to self-study and online courses where I could learn at my own pace without the toxic environment. I got better at coding when I stopped being in survival mode.

Now I''m in university studying CS and I help run a mentorship program for girls in high school who are interested in tech. I stayed in tech, but I had to find my own path to do it. The change wasn''t in becoming "good enough" - it was in refusing to accept being treated as less than.',
    'student',
    'stayed_in_tech',
    TRUE,
    CURRENT_TIMESTAMP - INTERVAL '2 days'
),
(
    'My first job out of university was at a startup. I was so excited. But within months, the 60-hour weeks, the "we''re a family" culture that meant no boundaries, and watching my male colleagues get promoted while I was told I needed to be "more assertive" wore me down. I started having panic attacks on Sunday nights.

The breaking point was when I landed in the ER with stress-related chest pain. I was 24 years old. I realized I was sacrificing my health for a company that saw me as expendable.

I quit without another job lined up. Scariest decision I''ve ever made. I spent three months recovering, going to therapy, and figuring out what I actually wanted. I learned that boundaries aren''t negotiable - they''re essential.

I came back to tech, but at a company with actual work-life balance. I work 40 hours a week. I take my vacation days. I say no to weekend work. And you know what? I''m better at my job because I''m not constantly burnt out. Leaving that toxic job taught me that my worth isn''t measured in how much I can endure.',
    'early_career',
    'stayed_in_tech',
    TRUE,
    CURRENT_TIMESTAMP - INTERVAL '5 days'
),
(
    'I''d been in tech for 8 years when I had my first child. I thought I could do it all - the demanding job, the perfect parent, the person who never drops a ball. I was wrong. My company had no real parental leave, no flexibility, and a culture that saw taking time off as weakness.

I was pumping breast milk in bathroom stalls between meetings. I was missing bedtime every night. I was failing at work and failing at home, or at least that''s how it felt. I realized the system wasn''t built for people like me.

I made the decision to leave. Not tech entirely, but that job and that way of working. I pivoted to freelance consulting where I control my schedule. Some months I take on more work, some months less. I can be present for my kid and still do work I''m proud of.

I''m still figuring it out. Some days are harder than others. But I learned that "having it all" is a myth created by a system that benefits from our burnout. I changed my definition of success from climbing a ladder to building a life that works for me. That''s the real transformation.',
    'mid_career',
    'still_navigating',
    TRUE,
    CURRENT_TIMESTAMP - INTERVAL '1 day'
),
(
    'This story is waiting for moderation. It should not appear in the public feed yet.',
    'student',
    NULL,
    FALSE,
    CURRENT_TIMESTAMP - INTERVAL '3 hours'
);

-- ============================================================================
-- Seed Data: learning_journal
-- ============================================================================

INSERT INTO learning_journal (
    issue_id,
    title,
    what_built,
    what_learned,
    challenges,
    solutions,
    time_estimated,
    time_actual,
    difficulty_rating,
    completed_at
) VALUES
(
    'GOO-9',
    'Provision and secure VPS',
    'Secured VPS with SSH keys, non-root user, disabled password auth, configured UFW firewall',
    'Defense-in-depth security, SSH key authentication, UFW firewall configuration, Linux user management',
    'usermod command didn''t work initially for sudo permissions',
    'Used visudo to manually add user to sudoers file',
    120, -- 2 hours estimated
    120, -- 2 hours actual
    4,
    CURRENT_TIMESTAMP - INTERVAL '3 days'
),
(
    'GOO-10',
    'Install and configure n8n',
    'Installed n8n with SSL (Let''s Encrypt), Nginx reverse proxy, PM2 process manager',
    'Reverse proxy concept, SSL/TLS certificates, process management with PM2, DNS configuration',
    'Docker was using port 80, Nginx config not loading, PM2 systemd service conflicts',
    'Stopped Docker, created proper Nginx config with symbolic links, cleaned up PM2 daemon conflicts',
    180, -- 3 hours estimated
    150, -- 2.5 hours actual
    3,
    CURRENT_TIMESTAMP - INTERVAL '2 days'
),
(
    'GOO-11',
    'Set up PostgreSQL database',
    'Installed PostgreSQL, created goodsomeday_prod database and user, configured n8n connection',
    'PostgreSQL hierarchy (server/database/user/schema), permission model, psql commands, backup basics',
    'systemctl showed PostgreSQL as inactive but it was running, psql meta-command syntax',
    'Used lsof to verify port listening, learned \c command needs own line',
    120, -- 2 hours estimated
    60, -- 1 hour actual
    2,
    CURRENT_TIMESTAMP - INTERVAL '1 day'
);

-- ============================================================================
-- Verify Data
-- ============================================================================

-- Count records
SELECT 'stories' AS table_name, COUNT(*) AS record_count FROM stories
UNION ALL
SELECT 'learning_journal', COUNT(*) FROM learning_journal;

-- Show sample approved stories
SELECT id, LEFT(story_text, 50) || '...' AS story_preview, pipeline_stage, approved
FROM stories
ORDER BY submitted_at DESC;

-- Show learning journal entries
SELECT issue_id, title, difficulty_rating, time_actual
FROM learning_journal
ORDER BY completed_at DESC;
