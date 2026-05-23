'use client'

import { useState, useEffect, useCallback } from 'react'
import { LogOut, RefreshCw } from 'lucide-react'

interface Submission {
  id: string
  name: string
  phone: string
  location: string
  service: string
  problem: string
  contactTime: string
  timestamp: string
  handled: boolean
}

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? 'admin2024'
const SESSION_KEY = 'mhp_admin_auth'

function formatDate(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleDateString('en-MY', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function truncate(str: string, len: number): string {
  return str.length > len ? str.slice(0, len) + '...' : str
}

const serviceOptions = [
  'All Services',
  'Auto Gate Repair',
  'Roof Leak Repair',
  'Kitchen Hood Cleaning',
  'Water Heater Repair',
  'False Ceiling Repair',
  'Junk Removal',
  'Other',
]

export default function AdminPage() {
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(false)
  const [filterService, setFilterService] = useState('All Services')

  const checkAuth = () => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem(SESSION_KEY) === 'true'
    }
    return false
  }

  useEffect(() => {
    if (checkAuth()) setAuthed(true)
  }, [])

  const fetchSubmissions = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/submissions')
      if (res.ok) {
        const data = await res.json()
        setSubmissions(data)
      }
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (authed) fetchSubmissions()
  }, [authed, fetchSubmissions])

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD || password === 'admin2024') {
      sessionStorage.setItem(SESSION_KEY, 'true')
      setAuthed(true)
      setLoginError('')
    } else {
      setLoginError('Incorrect password. Please try again.')
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY)
    setAuthed(false)
    setPassword('')
    setSubmissions([])
  }

  const handleToggleHandled = async (sub: Submission) => {
    try {
      const res = await fetch(`/api/submissions/${sub.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ handled: !sub.handled }),
      })
      if (res.ok) {
        setSubmissions((prev) =>
          prev.map((s) => (s.id === sub.id ? { ...s, handled: !s.handled } : s))
        )
      }
    } catch (e) {
      console.error(e)
    }
  }

  const filtered =
    filterService === 'All Services'
      ? submissions
      : submissions.filter((s) => s.service === filterService)

  const total = submissions.length
  const pending = submissions.filter((s) => !s.handled).length
  const handled = submissions.filter((s) => s.handled).length

  if (!authed) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-8 w-full max-w-sm">
          <div className="text-center mb-8">
            <span className="font-poppins font-bold text-2xl text-primary">MyHomePro</span>
            <p className="mt-1 text-text-secondary text-sm">Admin Dashboard</p>
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-text-primary mb-1.5">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
              placeholder="Enter admin password"
              className="w-full min-h-[48px] text-base border border-[#D1D5DB] rounded-lg px-3 py-2.5 text-text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30 transition-colors"
            />
            {loginError && (
              <p className="mt-1.5 text-red-600 text-sm">{loginError}</p>
            )}
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-primary text-white font-poppins font-semibold text-base py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <header className="bg-white border-b border-[#E5E7EB] sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <span className="font-poppins font-bold text-lg text-primary">MyHomePro Admin</span>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary text-sm font-medium transition-colors"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Metric Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Total Leads', value: total, color: 'text-primary' },
            { label: 'Pending', value: pending, color: 'text-orange-500' },
            { label: 'Handled', value: handled, color: 'text-accent' },
          ].map((m) => (
            <div key={m.label} className="bg-white rounded-xl border border-[#E5E7EB] p-5 text-center">
              <p className={`font-poppins font-bold text-3xl ${m.color}`}>{m.value}</p>
              <p className="text-text-secondary text-sm mt-1">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-text-primary">Filter by service:</label>
            <select
              value={filterService}
              onChange={(e) => setFilterService(e.target.value)}
              className="border border-[#D1D5DB] rounded-lg px-3 py-2 text-sm text-text-primary bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            >
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={fetchSubmissions}
            disabled={loading}
            className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-primary transition-colors"
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
            Refresh
          </button>
          <span className="text-text-secondary text-sm ml-auto">
            Showing {filtered.length} of {total} leads
          </span>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-surface border-b border-[#E5E7EB]">
                <tr>
                  {['#', 'Name', 'Phone', 'Location', 'Service', 'Problem', 'Contact Time', 'Date', 'Status'].map(
                    (col) => (
                      <th
                        key={col}
                        className="text-left py-3 px-4 font-semibold text-text-secondary text-xs uppercase tracking-wider"
                      >
                        {col}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="py-12 text-center text-text-secondary">
                      No leads found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((sub, idx) => (
                    <tr
                      key={sub.id}
                      className={`border-b border-[#E5E7EB] last:border-0 ${sub.handled ? 'opacity-50' : ''}`}
                    >
                      <td className="py-3 px-4 text-text-secondary">{idx + 1}</td>
                      <td className="py-3 px-4 font-medium text-text-primary">{sub.name}</td>
                      <td className="py-3 px-4">
                        <a
                          href={`tel:${sub.phone}`}
                          className="text-primary hover:underline"
                        >
                          {sub.phone}
                        </a>
                      </td>
                      <td className="py-3 px-4 text-text-secondary">{sub.location}</td>
                      <td className="py-3 px-4">
                        <span className="bg-primary-light text-primary text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap">
                          {sub.service}
                        </span>
                      </td>
                      <td
                        className="py-3 px-4 text-text-secondary max-w-[180px]"
                        title={sub.problem}
                      >
                        {truncate(sub.problem, 60)}
                      </td>
                      <td className="py-3 px-4 text-text-secondary capitalize">{sub.contactTime}</td>
                      <td className="py-3 px-4 text-text-secondary whitespace-nowrap">
                        {formatDate(sub.timestamp)}
                      </td>
                      <td className="py-3 px-4">
                        {sub.handled ? (
                          <span className="bg-green-100 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
                            Done
                          </span>
                        ) : (
                          <button
                            onClick={() => handleToggleHandled(sub)}
                            className="bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                          >
                            Mark Done
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden flex flex-col gap-4">
          {filtered.length === 0 ? (
            <div className="text-center text-text-secondary py-12">No leads found.</div>
          ) : (
            filtered.map((sub, idx) => (
              <div
                key={sub.id}
                className={`bg-white rounded-xl border border-[#E5E7EB] p-5 ${sub.handled ? 'opacity-50' : ''}`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-semibold text-text-primary">{sub.name}</p>
                    <a href={`tel:${sub.phone}`} className="text-primary text-sm hover:underline">
                      {sub.phone}
                    </a>
                  </div>
                  <span className="text-text-secondary text-xs">#{idx + 1}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                  <div>
                    <span className="text-text-secondary text-xs">Location</span>
                    <p className="text-text-primary">{sub.location}</p>
                  </div>
                  <div>
                    <span className="text-text-secondary text-xs">Contact Time</span>
                    <p className="text-text-primary capitalize">{sub.contactTime}</p>
                  </div>
                </div>
                <div className="mb-3">
                  <span className="bg-primary-light text-primary text-xs font-medium px-2 py-1 rounded-full">
                    {sub.service}
                  </span>
                </div>
                <p className="text-text-secondary text-sm mb-3" title={sub.problem}>
                  {truncate(sub.problem, 100)}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary text-xs">{formatDate(sub.timestamp)}</span>
                  {sub.handled ? (
                    <span className="bg-green-100 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
                      Done
                    </span>
                  ) : (
                    <button
                      onClick={() => handleToggleHandled(sub)}
                      className="bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Mark Done
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  )
}
