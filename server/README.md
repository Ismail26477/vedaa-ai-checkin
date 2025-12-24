# ⚠️  DEPRECATED: Express Server

**This Express server is no longer used in production deployments.**

## Why Deprecated?

This application has migrated to using **Next.js API Routes** (located in `/app/api`) for the backend, which provides:

- ✅ Better integration with Next.js frontend
- ✅ Serverless deployment on Vercel
- ✅ Automatic scaling
- ✅ Unified codebase
- ✅ Zero configuration deployment

## Current API Routes

All endpoints have been migrated to Next.js API routes:

### Authentication (`/app/api/auth`)
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Attendance (`/app/api/attendance`)
- `POST /api/attendance/checkin` - Check-in with photo
- `POST /api/attendance/checkout` - Check-out with photo
- `GET /api/attendance/today` - Today's records
- `GET /api/attendance/employee/[employeeId]` - Employee records
- `GET /api/attendance/employee/[employeeId]/today` - Today's employee record
- `GET /api/attendance/stats` - Attendance statistics

### Users (`/app/api/users`)
- `GET /api/users/count` - Get user count

## For Development

If you still want to run this Express server locally for testing:

```bash
npm run backend
```

**Note**: The frontend (`npm run dev`) is configured to use Next.js API routes by default, not this Express server.

## Migration

The Express routes have been fully migrated to Next.js API routes. If you need to reference the old implementation, the files are:

- `server/index.js` - Express server entry point
- `server/routes/*.js` - Express route handlers
- `server/models/*.js` - Mongoose models (still used by Next.js routes)

For production deployments, only the Next.js application is deployed.
