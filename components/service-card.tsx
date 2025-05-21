import { Database, Shield, Scale, Zap, BarChart, Cpu, Monitor, Lock, TrendingUp } from "lucide-react"

type ServiceCardProps = {
  title: string
  description: string
  icon: string
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "database":
        return <Database className="h-8 w-8 text-blue-600" />
      case "shield":
        return <Shield className="h-8 w-8 text-blue-600" />
      case "scale":
        return <Scale className="h-8 w-8 text-blue-600" />
      case "zap":
        return <Zap className="h-8 w-8 text-blue-600" />
      case "bar-chart":
        return <BarChart className="h-8 w-8 text-blue-600" />
      case "cpu":
        return <Cpu className="h-8 w-8 text-blue-600" />
      case "monitor":
        return <Monitor className="h-8 w-8 text-blue-600" />
      case "lock":
        return <Lock className="h-8 w-8 text-blue-600" />
      case "trending-up":
        return <TrendingUp className="h-8 w-8 text-blue-600" />
      default:
        return <Database className="h-8 w-8 text-blue-600" />
    }
  }

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg shadow-md border border-blue-100 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
      <div className="mb-4 bg-blue-100 inline-block p-3 rounded-full">{getIcon()}</div>
      <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  )
}
