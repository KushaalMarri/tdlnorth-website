import { User } from "lucide-react"

type TeamCardProps = {
  name: string
  role: string
  bio: string
  isFounder?: boolean
}

export default function TeamCard({ name, role, bio, isFounder = false }: TeamCardProps) {
  return (
    <div
      className={`p-6 rounded-lg shadow-md border hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] ${
        isFounder
          ? "border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100"
          : "border-slate-200 bg-gradient-to-br from-white to-slate-50"
      }`}
    >
      <div className="flex items-center justify-center mb-4">
        <div className={`rounded-full p-4 ${isFounder ? "bg-blue-200" : "bg-slate-200"}`}>
          <User className={`h-12 w-12 ${isFounder ? "text-blue-600" : "text-slate-600"}`} />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-slate-800 mb-1 text-center">{name}</h3>
      <p className="text-blue-600 font-medium mb-4 text-center">{role}</p>
      <p className="text-slate-600">{bio}</p>
    </div>
  )
}
