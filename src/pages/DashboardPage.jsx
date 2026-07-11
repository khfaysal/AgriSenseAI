import { Link } from 'react-router-dom'
import { Bot, MessageCircle, Mic } from 'lucide-react'
import AppShell from '@/layout/AppShell'
import ServiceCard from '@/components/ServiceCard'
import { services, assistantBannerImage } from '@/data/mock'

export default function DashboardPage() {
  return (
    <AppShell>
      <>
        <div className="max-w-7xl mx-auto">
          <header className="mb-16">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl md:text-5xl font-bold text-on-surface tracking-tight">
                Precision Farming Dashboard
              </h1>
              <p className="text-lg text-on-surface-variant max-w-2xl">
                Leverage AI-driven insights to maximize your harvest. Select a service to begin your
                data-backed journey.
              </p>
            </div>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}

            <div className="bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col lg:flex-row gap-6 lg:col-span-3 items-center relative overflow-hidden group transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_10px_32px_rgba(0,0,0,0.08)]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32" />
              <div className="w-full lg:w-1/3 h-48 bg-secondary-container/20 rounded-lg overflow-hidden relative flex items-center justify-center p-4">
                <img
                  src={assistantBannerImage}
                  alt="Bengali AI Assistant"
                  className="h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 flex flex-col gap-6 py-4 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="bg-primary p-3 rounded-xl text-primary-foreground">
                    <Bot size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-on-surface">
                    Bengali AI Assistant
                  </h3>
                </div>
                <p className="text-lg text-on-surface-variant">
                  Ask questions about farming, prices, or equipment in Bengali. Our expert AI is
                  here to help you 24/7 with voice and text support.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Link
                    to="/app/assistant"
                    className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold flex items-center gap-3 hover:opacity-90 active:scale-95 transition-all"
                  >
                    <MessageCircle size={20} />
                    Start Chatting
                  </Link>
                  <Link
                    to="/app/assistant"
                    className="border border-primary text-primary px-8 py-3 rounded-xl font-bold flex items-center gap-3 hover:bg-primary/5 active:scale-95 transition-all"
                  >
                    <Mic size={20} />
                    Voice Command
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </AppShell>
  )
}
