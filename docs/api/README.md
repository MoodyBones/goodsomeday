# Goodsomeday API Documentation

**Backend:** n8n workflows hosted on VPS
**Base URL:** `https://n8n.goodsomeday.com/webhook`

---

## Overview

The Goodsomeday backend is built with n8n (visual workflow automation) rather than traditional REST APIs. All endpoints are n8n webhook workflows that handle data validation, database operations, and business logic through drag-and-drop nodes.

**Why n8n?**
- Visual workflow design matches how the developer thinks
- Built-in PostgreSQL nodes eliminate hand-coded queries
- Easy to modify logic without touching server code
- Self-hosted on Hostinger VPS for full control

---

## Endpoints

### 1. Submit Story

**Endpoint:** `POST /webhook/submit-story`

**Purpose:** Submit a new transformation story for moderation

**Request Body:**
```json
{
  "story_text": "string (100-5000 characters)",
  "pipeline_stage": "student | early_career | mid_career",
  "current_status": "stayed_in_tech | left_tech | still_navigating | null"
}
```

**Validation Rules:**
- `story_text`: Required, 100-5000 characters
- `pipeline_stage`: Required, must be one of the three values
- `current_status`: Optional (nullable)
- IP address captured automatically for spam prevention

**Success Response (200):**
```json
{
  "success": true,
  "message": "Story submitted for moderation",
  "id": 42
}
```

**Error Response (400):**
```json
{
  "success": false,
  "error": "Story text must be between 100 and 5000 characters"
}
```

**Database Operation:**
- Inserts into `stories` table with `approved = FALSE`
- Captures `ip_address` and `submitted_at` timestamp
- Auto-generates `id` (serial primary key)

---

### 2. Get Stories

**Endpoint:** `GET /webhook/get-stories`

**Purpose:** Retrieve approved stories for public display

**Query Parameters:**
```
?pipeline_stage=student     (optional - filter by stage)
&limit=20                   (optional - default 20, max 100)
&offset=0                   (optional - for pagination)
```

**Success Response (200):**
```json
{
  "success": true,
  "stories": [
    {
      "id": 42,
      "story_text": "I was the only girl in my high school...",
      "pipeline_stage": "student",
      "current_status": "stayed_in_tech",
      "submitted_at": "2025-10-17T14:30:00Z"
    }
  ],
  "total": 150,
  "limit": 20,
  "offset": 0
}
```

**Database Operation:**
- Selects from `stories` WHERE `approved = TRUE`
- Orders by `submitted_at DESC`
- Filters by `pipeline_stage` if provided

**Note:** Does NOT expose `ip_address` or moderation metadata

---

### 3. Admin: Get Pending Stories

**Endpoint:** `GET /webhook/admin/pending-stories`

**Purpose:** Retrieve stories awaiting moderation (admin only)

**Authentication:** TBD (future implementation)

**Success Response (200):**
```json
{
  "success": true,
  "pending_stories": [
    {
      "id": 43,
      "story_text": "This story is waiting for moderation...",
      "pipeline_stage": "student",
      "current_status": null,
      "submitted_at": "2025-10-19T10:00:00Z",
      "ip_address": "203.0.113.42"
    }
  ]
}
```

**Database Operation:**
- Selects from `stories` WHERE `approved = FALSE`
- Orders by `submitted_at ASC` (oldest first)
- Includes `ip_address` for spam detection

---

### 4. Admin: Moderate Story

**Endpoint:** `POST /webhook/admin/moderate-story`

**Purpose:** Approve or reject a story (admin only)

**Authentication:** TBD (future implementation)

**Request Body:**
```json
{
  "id": 43,
  "approved": true
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Story approved",
  "id": 43
}
```

**Database Operation:**
- Updates `stories` SET `approved = ?, moderated_at = NOW()` WHERE `id = ?`

---

### 5. Learning Journal (Internal)

**Endpoint:** `POST /webhook/learning-journal`

**Purpose:** Record learning data from Linear ticket completions (internal use)

**Request Body:**
```json
{
  "issue_id": "GOO-12",
  "title": "Design PostgreSQL schema",
  "what_built": "Database schema for stories and learning journal",
  "what_learned": "Product vision alignment, transformation narrative design",
  "challenges": "Initial schema didn't match product vision",
  "solutions": "Created Schema-Design-Philosophy.md to align team",
  "resources_used": "PostgreSQL docs, n8n documentation",
  "time_estimated": 180,
  "time_actual": 240,
  "difficulty_rating": 4,
  "completed_at": "2025-10-19T16:00:00Z"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Learning entry recorded",
  "id": 4
}
```

**Database Operation:**
- Inserts into `learning_journal` table
- `issue_id` must be unique (constraint enforced)

---

## Error Handling

**Common Error Responses:**

**400 Bad Request:**
```json
{
  "success": false,
  "error": "Validation failed: pipeline_stage must be student, early_career, or mid_career"
}
```

**404 Not Found:**
```json
{
  "success": false,
  "error": "Story not found"
}
```

**500 Internal Server Error:**
```json
{
  "success": false,
  "error": "Database connection failed"
}
```

---

## Rate Limiting

**Current:** No rate limiting implemented

**Future (v2):**
- Story submission: 3 submissions per IP per day
- Get stories: 100 requests per minute per IP

---

## n8n Workflow Design

Each endpoint is a separate n8n workflow with these common patterns:

**Typical Workflow Structure:**
```
1. Webhook Trigger
   ↓
2. Validate Input (Function node)
   ↓
3. PostgreSQL Query (Database node)
   ↓
4. Format Response (Function node)
   ↓
5. Return Response (Respond to Webhook node)
```

**Error Handling Pattern:**
- Each workflow has error handling paths
- Database errors caught and returned as 500
- Validation errors returned as 400
- All responses use consistent JSON structure

---

## Database Connection

**n8n Credential Configuration:**
```
Host: localhost (n8n and PostgreSQL on same VPS)
Port: 5432
Database: goodsomeday_prod
User: goodsomeday_user
SSL: Disabled (local connection)
```

**Connection Pooling:** Handled automatically by n8n PostgreSQL node

---

## Testing Endpoints

**Using curl:**

```bash
# Submit a story
curl -X POST https://n8n.goodsomeday.com/webhook/submit-story \
  -H "Content-Type: application/json" \
  -d '{
    "story_text": "I was the only girl in my high school computer science class...",
    "pipeline_stage": "student",
    "current_status": "stayed_in_tech"
  }'

# Get stories
curl https://n8n.goodsomeday.com/webhook/get-stories?pipeline_stage=student&limit=10
```

**Using Postman/Insomnia:**
- Import the collection (TBD - future export)
- Set base URL: `https://n8n.goodsomeday.com/webhook`
- All endpoints use JSON content type

---

## Future Enhancements

**Planned (v2.0):**
- [ ] Authentication for admin endpoints (JWT tokens)
- [ ] Rate limiting per IP address
- [ ] Story search endpoint (full-text search)
- [ ] Analytics endpoint (aggregate statistics)
- [ ] User profiles (if needed for community features)
- [ ] Comments API (if comments feature is added)

**Monitoring:**
- [ ] n8n workflow execution logs
- [ ] Error tracking and alerting
- [ ] Performance metrics (response times)

---

## Security Considerations

**Current Measures:**
- HTTPS only (enforced via Nginx)
- IP address logging for spam prevention
- Input validation on all fields
- SQL injection protection (parameterized queries via n8n)

**Future Measures:**
- Admin authentication
- CORS configuration for frontend domain
- Request signing for sensitive operations
- Automated spam detection

---

## Related Documentation

- [Schema Design Philosophy](../Schema-Design-Philosophy.md) - Product vision and data model
- [Database Schema](../database/schema.sql) - PostgreSQL table definitions
- [ARCHITECTURE.md](../ARCHITECTURE.md) - System architecture overview
- [SETUP.md](../SETUP.md) - VPS and n8n deployment guide

---

**Last Updated:** 19 October 2025
**Version:** MVP (Pre-launch)
