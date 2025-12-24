"use client"

import { AppHeader } from "@/components/layout/AppHeader"
import { SecurityCheckIn } from "@/components/attendance/SecurityCheckIn"
import { DailySummary } from "@/components/attendance/DailySummary"
import { AttendanceHistory } from "@/components/attendance/AttendanceHistory"
import { AttendanceCalendar } from "@/components/attendance/AttendanceCalendar"
import { useAuth } from "@/contexts/AuthContext"

export default function EmployeeDashboard() {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-background">
      <AppHeader />

      <main className="container max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Welcome Section */}
        <div className="text-center space-y-2 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Welcome, {user?.name?.split(" ")[0]}!</h2>
          <p className="text-muted-foreground">Mark your attendance securely with photo verification</p>
        </div>

        {/* Secure Check In/Out with Photo Capture */}
        <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
          <SecurityCheckIn />
        </div>

        {/* Today's Summary */}
        <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
          <DailySummary />
        </div>

        {/* Attendance Calendar */}
        <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
          <AttendanceCalendar />
        </div>

        {/* Attendance History */}
        <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
          <AttendanceHistory />
        </div>
      </main>
    </div>
  )
}
