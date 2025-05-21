import Link from "next/link"
import { Mail, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-12" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-500 pb-2 inline-block">TDL North</h3>
            <p className="text-slate-300">
              Practical, actionable solutions tailored to each client's needs — affordable, outcome-driven, and aligned
              with business goals.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-500 pb-2 inline-block">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                <Link href="mailto:contact@tdlnorth.com" className="text-slate-300 hover:text-white">
                  contact@tdlnorth.com
                </Link>
              </div>
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 mr-2 text-blue-400" />
                <Link href="https://linkedin.com/company/tdlnorth" className="text-slate-300 hover:text-white">
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-500 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-slate-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-300 hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-slate-300 hover:text-white">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} TDL North. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
