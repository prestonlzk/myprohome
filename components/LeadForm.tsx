'use client'

import { useState, FormEvent } from 'react'
import { Loader2 } from 'lucide-react'

interface LeadFormProps {
  defaultService?: string
}

interface FormErrors {
  name?: string
  phone?: string
  location?: string
  service?: string
  problem?: string
  contactTime?: string
}

const serviceOptions = [
  'Auto Gate Repair',
  'Roof Leak Repair',
  'Kitchen Hood Cleaning',
  'Water Heater Repair',
  'False Ceiling Repair',
  'Junk Removal',
  'Other',
]

const contactTimeOptions = [
  { value: 'morning', label: 'Morning (8am–12pm)' },
  { value: 'afternoon', label: 'Afternoon (12pm–5pm)' },
  { value: 'evening', label: 'Evening (5pm–8pm)' },
  { value: 'anytime', label: 'Anytime' },
]

export default function LeadForm({ defaultService }: LeadFormProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('')
  const [service, setService] = useState(defaultService ?? '')
  const [problem, setProblem] = useState('')
  const [contactTime, setContactTime] = useState('anytime')
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!name.trim()) newErrors.name = 'Please enter your full name.'
    if (!phone.trim()) newErrors.phone = 'Please enter your phone number.'
    if (!location.trim()) newErrors.location = 'Please enter your location.'
    if (!service) newErrors.service = 'Please select a service.'
    if (!problem.trim()) {
      newErrors.problem = 'Please describe your problem.'
    } else if (problem.trim().length < 20) {
      newErrors.problem = 'Please provide at least 20 characters describing your problem.'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, location, service, problem, contactTime }),
      })
      if (res.ok) {
        setSuccess(true)
        setName('')
        setPhone('')
        setLocation('')
        setService(defaultService ?? '')
        setProblem('')
        setContactTime('anytime')
        setErrors({})
      } else {
        setErrors({ problem: 'Something went wrong. Please try again.' })
      }
    } catch {
      setErrors({ problem: 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass =
    'w-full min-h-[48px] text-base border border-[#D1D5DB] rounded-lg px-3 py-2.5 text-text-primary placeholder-[#9CA3AF] focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30 transition-colors'

  const errorClass = 'mt-1 text-red-600 text-sm'

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-poppins font-semibold text-[18px] text-text-primary mb-2">
          Request Received!
        </h3>
        <p className="text-text-secondary text-base">
          Thank you! We have received your request and will be in touch within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-text-primary mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Ahmad bin Razak"
          className={`${inputClass} ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
        />
        {errors.name && <p className={errorClass}>{errors.name}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-text-primary mb-1.5">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="e.g. 012-3456789"
          className={`${inputClass} ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
        />
        {errors.phone && <p className={errorClass}>{errors.phone}</p>}
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium text-text-primary mb-1.5">
          Your Location <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="e.g. Georgetown, Penang"
          className={`${inputClass} ${errors.location ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
        />
        {errors.location && <p className={errorClass}>{errors.location}</p>}
      </div>

      {/* Service */}
      <div>
        <label className="block text-sm font-medium text-text-primary mb-1.5">
          Service Needed <span className="text-red-500">*</span>
        </label>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={`${inputClass} bg-white ${errors.service ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
        >
          <option value="">Select a service...</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.service && <p className={errorClass}>{errors.service}</p>}
      </div>

      {/* Problem */}
      <div>
        <label className="block text-sm font-medium text-text-primary mb-1.5">
          Describe Your Problem <span className="text-red-500">*</span>
        </label>
        <textarea
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          placeholder="e.g. My auto gate stopped opening two days ago and the motor makes a clicking noise when I press the remote..."
          rows={4}
          className={`${inputClass} resize-none ${errors.problem ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
        />
        {errors.problem && <p className={errorClass}>{errors.problem}</p>}
      </div>

      {/* Contact Time */}
      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">
          Best Time to Call <span className="text-red-500">*</span>
        </label>
        <div className="flex flex-wrap gap-3">
          {contactTimeOptions.map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="contactTime"
                value={opt.value}
                checked={contactTime === opt.value}
                onChange={(e) => setContactTime(e.target.value)}
                className="w-4 h-4 text-primary border-[#D1D5DB] focus:ring-primary"
              />
              <span className="text-sm text-text-primary">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent text-white font-poppins font-semibold text-lg py-[18px] px-9 rounded-lg hover:bg-green-700 disabled:opacity-70 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 mt-1"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit My Request'
        )}
      </button>

      <p className="text-center text-text-secondary text-sm">
        Free to request. No obligation. We respond within 24 hours.
      </p>
    </form>
  )
}
