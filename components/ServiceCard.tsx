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

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Home

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block bg-white border border-[#E5E7EB] rounded-xl p-6 hover:border-primary hover:shadow-md transition-all duration-200"
    >
      <div className="w-11 h-11 bg-primary-light rounded-lg flex items-center justify-center mb-4">
        <Icon size={22} className="text-primary" />
      </div>
      <h3 className="font-poppins font-semibold text-[18px] md:text-[20px] text-text-primary mb-2">
        {service.name}
      </h3>
      <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-4">
        {service.tagline}
      </p>
      <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all">
        Learn more
        <ArrowRight size={15} />
      </span>
    </Link>
  )
}
