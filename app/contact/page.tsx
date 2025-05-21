import { Mail, Phone, MapPin, ArrowLeft } from "lucide-react"
import Link from "next/link"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">Contact Us</h1>
          <p className="text-xl text-slate-600 mb-12">
            Get in touch with our team to discuss how we can help transform your financial services business.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2 inline-block">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-lg shadow-md text-white">
                <h2 className="text-2xl font-semibold mb-6 border-b-2 border-white/30 pb-2 inline-block">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-4 mt-1 text-blue-200" />
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <a href="mailto:contact@tdlnorth.com" className="text-blue-100 hover:text-white">
                        contact@tdlnorth.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-4 mt-1 text-blue-200" />
                    <div>
                      <h3 className="font-medium text-lg">Phone</h3>
                      <p className="text-blue-100">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-4 mt-1 text-blue-200" />
                    <div>
                      <h3 className="font-medium text-lg">Location</h3>
                      <p className="text-blue-100">Financial District</p>
                      <p className="text-blue-100">New York, NY</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="font-medium text-lg mb-2">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://linkedin.com/company/tdlnorth"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                    >
                      <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/tdlnorth"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                    >
                      <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
