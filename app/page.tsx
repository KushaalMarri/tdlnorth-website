import Navbar from "@/components/navbar"
import QuoteDisplay from "@/components/quote-display"
import ServiceCard from "@/components/service-card"
import ExecutiveRoleCard from "@/components/executive-role-card"
import TeamCard from "@/components/team-card"
import Footer from "@/components/footer"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="container mx-auto px-4 pt-20 sm:px-6 lg:px-8">
        {/* Section 1: About TDL North */}
        <section id="about" className="py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2 inline-block">
              Why TDL North?
            </h2>

            <p className="text-lg text-slate-700 mb-10">
              We are at a generational pivot point in the Financial Services Industry. As the pace of change to business
              models has dramatically increased over the past three decades, many feel overwhelmed by ever-present
              challenges.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg shadow-md border border-blue-100 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                <p className="text-slate-700">
                  Clients now expect ubiquitous access and ease of use — leading to more technology integrations and
                  greater data/system complexity.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg shadow-md border border-blue-100 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                <p className="text-slate-700">
                  Institutions often overbuild in-house or overspend on large firms instead of finding the right-sized,
                  affordable support.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg shadow-md border border-blue-100 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                <p className="text-slate-700">
                  Compliance costs and burden continue to rise, while the effectiveness of reporting diminishes.
                </p>
              </div>
            </div>

            <p className="text-lg text-slate-700 mb-10">
              TDL North brings a collaborative team with CHEE: Collaborative Nature, Honesty, Expertise, and Experience.
              We focus on practical, actionable solutions tailored to each client's needs — affordable, outcome-driven,
              and aligned with business goals. We only engage based on our client's desired outcomes.
            </p>

            <QuoteDisplay />
          </div>
        </section>

        {/* Section 2: Services We Offer */}
        <section id="services" className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-10 border-b-2 border-blue-500 pb-2 inline-block">
              How We Help
            </h2>

            <h3 className="text-xl font-semibold text-slate-700 mb-6">Service Areas:</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <ServiceCard
                title="Data and AI"
                description="Leveraging data assets and implementing AI solutions to drive business value and innovation."
                icon="database"
              />
              <ServiceCard
                title="Cybersecurity and Infrastructure"
                description="Protecting critical assets and building resilient technology infrastructure for modern financial services."
                icon="shield"
              />
              <ServiceCard
                title="Risk and Compliance"
                description="Navigating regulatory requirements while maintaining operational efficiency and business agility."
                icon="scale"
              />
              <ServiceCard
                title="Efficiency and Automation"
                description="Streamlining processes and implementing automation to reduce costs and improve service delivery."
                icon="zap"
              />
            </div>

            <h3 className="text-xl font-semibold text-slate-700 mb-6">Fractional Executive Roles:</h3>

            <div className="flex flex-wrap gap-4 mb-10">
              <ExecutiveRoleCard title="Chief Information Officer (CIO)" icon="monitor" />
              <ExecutiveRoleCard title="Chief Technology Officer (CTO)" icon="cpu" />
              <ExecutiveRoleCard title="Chief Data and AI Officer (CAIO/CDO)" icon="bar-chart" />
              <ExecutiveRoleCard title="Chief Information Security Officer (CISO)" icon="lock" />
              <ExecutiveRoleCard title="Growth and Strategy Leader" icon="trending-up" />
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-6 rounded-r-lg shadow-md">
              <p className="text-lg text-slate-700">
                We offer both project-based outcomes and short-term leadership placements, helping clients navigate
                transformation with hands-on, deeply experienced advisors.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Our Team */}
        <section id="team" className="py-16 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-10 border-b-2 border-blue-500 pb-2 inline-block">
              The Northward Expert Team
            </h2>

            <div className="mb-10">
              <TeamCard
                name="Founder & Managing Director"
                role="Leadership"
                bio="[Founder bio placeholder] Bringing decades of experience in financial services technology and transformation leadership."
                isFounder={true}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <TeamCard
                name="Team Member"
                role="Technology Expert"
                bio="[Phil bio placeholder] Specialized expertise in technology infrastructure and digital transformation."
              />
              <TeamCard
                name="Team Member"
                role="Data & AI Specialist"
                bio="[Arijeet bio placeholder] Leading data strategy and artificial intelligence implementations for financial institutions."
              />
              <TeamCard
                name="Team Member"
                role="Risk & Compliance"
                bio="[Justin bio placeholder] Expert in navigating regulatory requirements and implementing effective compliance programs."
              />
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg text-center shadow-md">
              <h3 className="text-xl font-semibold text-slate-700 mb-4">Client Testimonials</h3>
              <p className="text-slate-600 italic">Video testimonials and client quotes coming soon</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg my-16 shadow-xl">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-6">Ready to transform your financial services business?</h2>
            <p className="text-xl mb-8">
              Partner with TDL North for practical, outcome-driven solutions tailored to your needs.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold flex items-center mx-auto hover:bg-blue-50 transition-colors inline-block"
            >
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
