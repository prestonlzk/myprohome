import { CheckCircle } from 'lucide-react'

const trustItems = [
  { label: '100% Free to Request' },
  { label: 'Response Within 24 Hours' },
  { label: 'Serving All of Malaysia' },
]

export default function TrustBar() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-6">
      {trustItems.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <CheckCircle size={18} className="text-accent flex-shrink-0" />
          <span className="text-[#374151] font-medium text-sm md:text-base">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}
