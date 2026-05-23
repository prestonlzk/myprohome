import { NextRequest, NextResponse } from 'next/server'
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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, location, service, problem, contactTime } = body

    if (!name || !phone || !location || !service || !problem) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const filePath = path.join(process.cwd(), 'data', 'submissions.json')
    const raw = fs.readFileSync(filePath, 'utf-8')
    const submissions: Submission[] = JSON.parse(raw)

    const newSubmission: Submission = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: String(name).trim(),
      phone: String(phone).trim(),
      location: String(location).trim(),
      service: String(service).trim(),
      problem: String(problem).trim(),
      contactTime: String(contactTime || 'anytime').trim(),
      timestamp: new Date().toISOString(),
      handled: false,
    }

    submissions.push(newSubmission)
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2), 'utf-8')

    return NextResponse.json({ success: true, id: newSubmission.id })
  } catch (error) {
    console.error('Submit error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
