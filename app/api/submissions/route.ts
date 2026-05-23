import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

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

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'submissions.json')
    const raw = fs.readFileSync(filePath, 'utf-8')
    const submissions: Submission[] = JSON.parse(raw)

    // Sort by timestamp descending (most recent first)
    const sorted = submissions.sort(
      (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    )

    return NextResponse.json(sorted)
  } catch (error) {
    console.error('Submissions GET error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
