import Link from 'next/link'
import { GanttChart, Home, Wind, Thermometer, Layers, Trash2, LucideIcon, ArrowRight } from 'lucide-react'
import { Service } from '@/data/services'

const iconMap: Record<string, LucideIcon> = {
  GanttChart,
  Home,
  Wind,
  Thermometer,
  Layers,
  Trash2,
}

const WA_NUMBER = '60124476688'

const waMessages: Record<string, string> = {
  'auto-gate-repair': 'Hi MyHomePro! I need help with my auto gate. Can you assist?',
  'roof-leak-repair': 'Hi MyHomePro! My roof is leaking and I need help. Can you assist?',
  'kitchen-hood-cleaning': 'Hi MyHomePro! I need my kitchen hood cleaned. Can you assist?',
  'water-heater-repair': 'Hi MyHomePro! My water heater is not working. Can you assist?',
  'false-ceiling-repair': 'Hi MyHomePro! I have a ceiling issue and need help. Can you assist?',
  'junk-removal': 'Hi MyHomePro! I need help clearing junk from my home. Can you assist?',
}

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? Home
  const message = waMessages[service.slug] ?? 'Hi MyHomePro! I need help with my home. Can you assist?'
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`

  return (
    <div className="group bg-white border border-[#E5E7EB] rounded-xl p-6 hover:border-primary hover:shadow-md transition-all duration-200">
      <div className="w-11 h-11 bg-primary-light rounded-lg flex items-center justify-center mb-4">
        <Icon size={22} className="text-primary" />
      </div>
      <h3 className="font-poppins font-semibold text-[18px] md:text-[20px] text-text-primary mb-2">
        {service.name}
      </h3>
      <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-4">
        {service.tagline}
      </p>
      <div className="flex items-center justify-between pt-3 border-t border-[#F3F4F6]">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-2.5 transition-all"
        >
          Learn more
          <ArrowRight size={15} />
        </Link>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#16A34A] font-semibold text-[14px] hover:underline"
        >
          Get help now
          <ArrowRight size={13} />
        </a>
      </div>
    </div>
  )
}
