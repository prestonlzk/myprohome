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

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const body = await req.json()
    const { handled } = body

    const filePath = path.join(process.cwd(), 'data', 'submissions.json')
    const raw = fs.readFileSync(filePath, 'utf-8')
    const submissions: Submission[] = JSON.parse(raw)

    const index = submissions.findIndex((s) => s.id === id)
    if (index === -1) {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 })
    }

    submissions[index].handled = Boolean(handled)
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2), 'utf-8')

    return NextResponse.json({ success: true, submission: submissions[index] })
  } catch (error) {
    console.error('PATCH submission error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
