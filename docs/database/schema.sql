-- Goodsomeday Database Schema
-- PostgreSQL 16+
-- Database: goodsomeday_prod

-- ============================================================================
-- Table: stories
-- Purpose: Store user-submitted career journey stories
-- ============================================================================

CREATE TABLE IF NOT EXISTS stories (
    id SERIAL PRIMARY KEY,
    story_text TEXT NOT NULL CHECK (char_length(story_text) >= 100 AND char_length(story_text) <= 5000),
    pipeline_stage VARCHAR(50) NOT NULL CHECK (pipeline_stage IN ('student', 'early_career', 'mid_career')),
    current_status VARCHAR(50) CHECK (current_status IN ('stayed_in_tech', 'left_tech', 'still_navigating')),
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    approved BOOLEAN DEFAULT FALSE,
    ip_address INET,
    moderated_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Add comments for documentation
COMMENT ON TABLE stories IS 'User-submitted transformation stories from barriers to action';
COMMENT ON COLUMN stories.id IS 'Primary key, auto-increment';
COMMENT ON COLUMN stories.story_text IS 'Full narrative following the transformation arc: barrier → reflection → action → growth (100-5000 characters)';
COMMENT ON COLUMN stories.pipeline_stage IS 'When they faced the barrier: student (education), early_career (0-5 years), mid_career (5+ years)';
COMMENT ON COLUMN stories.current_status IS 'Where they are now: stayed_in_tech (with changes), left_tech, or still_navigating';
COMMENT ON COLUMN stories.submitted_at IS 'When the story was submitted';
COMMENT ON COLUMN stories.approved IS 'Whether story has been approved for display';
COMMENT ON COLUMN stories.ip_address IS 'Submitter IP address for spam prevention';
COMMENT ON COLUMN stories.moderated_at IS 'When the story was approved/rejected';

-- ============================================================================
-- Table: learning_journal
-- Purpose: Track learning from each Linear ticket completion
-- ============================================================================

CREATE TABLE IF NOT EXISTS learning_journal (
    id SERIAL PRIMARY KEY,
    issue_id VARCHAR(20) NOT NULL UNIQUE,
    title TEXT NOT NULL,
    what_built TEXT,
    what_learned TEXT,
    challenges TEXT,
    solutions TEXT,
    resources_used TEXT,
    time_estimated INTEGER, -- in minutes
    time_actual INTEGER, -- in minutes
    difficulty_rating INTEGER CHECK (difficulty_rating >= 1 AND difficulty_rating <= 5),
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Add comments for documentation
COMMENT ON TABLE learning_journal IS 'Learning documentation from Linear ticket completions';
COMMENT ON COLUMN learning_journal.id IS 'Primary key, auto-increment';
COMMENT ON COLUMN learning_journal.issue_id IS 'Linear issue ID (e.g., GOO-9)';
COMMENT ON COLUMN learning_journal.title IS 'Issue title';
COMMENT ON COLUMN learning_journal.what_built IS 'What was built/implemented';
COMMENT ON COLUMN learning_journal.what_learned IS 'Key learnings';
COMMENT ON COLUMN learning_journal.challenges IS 'Challenges encountered';
COMMENT ON COLUMN learning_journal.solutions IS 'How challenges were solved';
COMMENT ON COLUMN learning_journal.resources_used IS 'Documentation/resources consulted';
COMMENT ON COLUMN learning_journal.time_estimated IS 'Estimated time in minutes';
COMMENT ON COLUMN learning_journal.time_actual IS 'Actual time spent in minutes';
COMMENT ON COLUMN learning_journal.difficulty_rating IS 'Self-assessed difficulty (1-5)';
COMMENT ON COLUMN learning_journal.completed_at IS 'When the ticket was completed';

-- ============================================================================
-- Indexes for Performance
-- ============================================================================

-- Stories indexes
CREATE INDEX idx_stories_approved ON stories(approved) WHERE approved = TRUE;
CREATE INDEX idx_stories_pipeline_stage ON stories(pipeline_stage);
CREATE INDEX idx_stories_submitted_at ON stories(submitted_at DESC);

-- Learning journal indexes
CREATE INDEX idx_learning_journal_issue_id ON learning_journal(issue_id);
CREATE INDEX idx_learning_journal_completed_at ON learning_journal(completed_at DESC);

-- ============================================================================
-- Update Timestamp Trigger Function
-- Purpose: Automatically update updated_at column on row changes
-- ============================================================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply trigger to stories table
CREATE TRIGGER update_stories_updated_at
    BEFORE UPDATE ON stories
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Apply trigger to learning_journal table
CREATE TRIGGER update_learning_journal_updated_at
    BEFORE UPDATE ON learning_journal
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- End of Schema
-- ============================================================================
