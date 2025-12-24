# AttendEase - Employee Attendance Management System

A modern, full-stack employee attendance tracking application with photo verification, geolocation, and comprehensive admin analytics.

## Features

### Employee Features
- 🔐 Secure login with email/password
- 📸 Photo verification for check-in/check-out
- 📍 Geolocation tracking for attendance
- 📅 Personal attendance calendar
- 📊 Attendance history and statistics
- ⏰ Real-time clock and status updates

### Admin Features
- 👥 Employee directory and management
- 📈 Comprehensive analytics dashboard
- 📊 Performance metrics and leaderboards
- 📅 Date-based attendance tracking
- 🎯 Department-wise performance analysis
- 📸 Photo verification review
- 💾 Export attendance reports (CSV)

## Tech Stack

- **Frontend**: Next.js 16, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes (serverless)
- **Database**: MongoDB with Mongoose
- **UI Components**: shadcn/ui, Radix UI
- **Charts**: Recharts
- **Forms**: React Hook Form with Zod validation
- **Date Handling**: date-fns
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account (or local MongoDB)
- Modern web browser with camera access

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd attendance-tracker
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/office_management?retryWrites=true&w=majority
```

Replace with your MongoDB connection string.

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
```
http://localhost:3000
```

### Demo Credentials

**Admin Account:**
- Email: `admin@company.com`
- Password: `admin123`

**Employee Accounts:**
- Email: `john@company.com` | Password: `john123`
- Email: `sarah@company.com` | Password: `sarah123`

## Project Structure

```
attendance-tracker/
├── app/                   # Next.js App Router
│   ├── api/              # Backend API routes
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── src/
│   ├── components/       # React components
│   │   ├── admin/        # Admin-only components
│   │   ├── attendance/   # Attendance features
│   │   ├── layout/       # Layout components
│   │   └── ui/           # shadcn/ui components
│   ├── contexts/         # React Context providers
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions & API client
│   ├── pages/            # Page components
│   └── types/            # TypeScript type definitions
├── lib/                  # Backend utilities
│   ├── models/           # Mongoose schemas
│   └── mongodb.ts        # MongoDB connection
├── public/               # Static assets
└── server/               # ⚠️  Deprecated Express server
```

## Key Features Explained

### Photo Verification

The app uses the device camera to capture photos during check-in and check-out:
- Photos are stored as base64 strings in MongoDB
- Displayed in admin dashboard for verification
- Both check-in and check-out photos are captured

### Geolocation Tracking

Attendance records include precise location data:
- Latitude and longitude coordinates
- Reverse geocoded address using OpenStreetMap
- Location accuracy information

### Attendance Calendar

Interactive calendar showing:
- Present days (green)
- Late arrivals (yellow)
- Half days (blue - checked in but not out)
- Absent days (red)

### Analytics Dashboard

Comprehensive insights including:
- 30-day attendance trends
- Hourly check-in distribution
- Department-wise performance
- Top performers leaderboard

## API Routes

All API endpoints are serverless functions in `/app/api`:

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - Create new user

### Attendance
- `POST /api/attendance/checkin` - Check-in with photo & location
- `POST /api/attendance/checkout` - Check-out with photo & location
- `GET /api/attendance/today` - Get today's attendance
- `GET /api/attendance/employee/[id]` - Get employee's records
- `GET /api/attendance/stats` - Get attendance statistics

### Users
- `GET /api/users/count` - Get total user count

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions to Vercel.

**Quick Deploy:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/attendance-tracker)

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB connection string | Yes |

## Development

### Running in Development Mode

```bash
# Start Next.js development server
npm run dev
```

Access the app at `http://localhost:3000`

### Building for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Linting

```bash
npm run lint
```

## Security Features

- Password hashing with bcrypt
- MongoDB connection with authenticated credentials
- Input validation with Zod schemas
- Secure session management
- Photo data sanitization
- Location data validation

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

**Required Browser Features:**
- Camera API (getUserMedia)
- Geolocation API
- LocalStorage
- Modern JavaScript (ES2020+)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For issues and questions:
- Create an issue on GitHub
- Check existing documentation
- Review deployment logs on Vercel

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Charts powered by [Recharts](https://recharts.org/)
