import { Monitor, Cpu, BarChart, Lock, TrendingUp } from "lucide-react"

type ExecutiveRoleCardProps = {
  title: string
  icon: string
}

export default function ExecutiveRoleCard({ title, icon }: ExecutiveRoleCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "monitor":
        return <Monitor className="h-5 w-5 text-blue-600" />
      case "cpu":
        return <Cpu className="h-5 w-5 text-blue-600" />
      case "bar-chart":
        return <BarChart className="h-5 w-5 text-blue-600" />
      case "lock":
        return <Lock className="h-5 w-5 text-blue-600" />
      case "trending-up":
        return <TrendingUp className="h-5 w-5 text-blue-600" />
      default:
        return <Monitor className="h-5 w-5 text-blue-600" />
    }
  }

  return (
    <div className="bg-gradient-to-r from-white to-blue-50 px-4 py-3 rounded-md shadow-sm border border-blue-100 flex items-center space-x-2 hover:shadow-md transition-all duration-300">
      <div className="bg-blue-100 p-1 rounded-full">{getIcon()}</div>
      <span className="text-slate-700 font-medium">{title}</span>
    </div>
  )
}
