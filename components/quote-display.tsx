"use client"

import { useState, useEffect } from "react"
import { Quote } from "lucide-react"

const quotes = [
  {
    text: "If you can keep your head when all about you are losing theirs... you'll be a Man, my son!",
    author: "Rudyard Kipling",
  },
  {
    text: "People don't buy what you do; they buy why you do it.",
    author: "Simon Sinek",
  },
  {
    text: "The ability to learn faster than your competitors may be the only sustainable competitive advantage.",
    author: "Arie de Geus",
  },
]

export default function QuoteDisplay() {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg relative shadow-md">
      <Quote className="text-blue-300 h-12 w-12 absolute top-4 left-4 opacity-50" />
      <div className="pl-10">
        <p className="text-xl text-slate-700 italic mb-4">"{quotes[currentQuote].text}"</p>
        <p className="text-right text-slate-600 font-medium">— {quotes[currentQuote].author}</p>
      </div>
    </div>
  )
}
