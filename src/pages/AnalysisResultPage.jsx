import { Link } from 'react-router-dom'
import {
  Share2, Download, AlertTriangle, ChevronRight, Cloud,
  Leaf, Syringe, MessageCircle, ArrowRight,
} from 'lucide-react'
import AppShell from '@/layout/AppShell'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { diagnosisResult } from '@/data/mock'

const iconMap = { Leaf, Syringe }

export default function AnalysisResultPage() {
  const r = diagnosisResult

  return (
    <AppShell>
      <>
        <main className="max-w-7xl mx-auto px-8 py-4 md:py-6">
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <nav className="flex items-center gap-1 text-[13px] text-on-surface-variant mb-2">
                <Link to="/app/history" className="hover:text-primary">
                  History
                </Link>
                <ChevronRight size={16} />
                <span className="text-primary">Analysis Result #{r.id}</span>
              </nav>
              <h1 className="text-3xl md:text-5xl font-bold text-on-surface tracking-tight">
                Diagnosis Report
              </h1>
              <p className="text-lg text-on-surface-variant mt-1">
                Detailed health assessment for your Tomato crop.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="soft" className="bg-surface-container">
                <Share2 size={16} /> Share
              </Button>
              <Button className="shadow-lg">
                <Download size={16} /> Download Report
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="rounded-3xl overflow-hidden relative shadow-sm border border-outline-variant group">
                <img
                  src={r.image}
                  alt={r.disease}
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <Badge variant="destructive" className="backdrop-blur-md shadow-sm">
                    <AlertTriangle size={14} /> {r.warning}
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[13px] opacity-80">Detected Crop</p>
                      <p className="text-xl font-bold">{r.crop}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[13px] opacity-80">AI Confidence</p>
                      <p className="text-xl font-bold text-primary-fixed">{r.confidence}%</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-6 rounded-3xl">
                <h3 className="text-[13px] text-on-surface-variant uppercase tracking-wider mb-4 font-semibold">
                  14-Day Recovery Plan
                </h3>
                <div className="flex flex-col gap-3">
                  {r.recoveryPlan.map((step, i) => (
                    <div key={step.day} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                            step.active
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-surface-container-highest text-on-surface-variant'
                          }`}
                        >
                          {step.day}
                        </div>
                        {i < r.recoveryPlan.length - 1 && (
                          <div className="w-0.5 flex-1 bg-outline-variant my-1" />
                        )}
                      </div>
                      <div className="pb-3">
                        <p className="font-bold text-on-surface">{step.title}</p>
                        <p className="text-base text-on-surface-variant">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6">
              <Card className="p-8 rounded-3xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-tertiary-fixed flex items-center justify-center text-tertiary">
                    <AlertTriangle size={28} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-on-surface">{r.disease}</h2>
                    <p className="text-[13px] text-tertiary font-bold">{r.diseaseType}</p>
                  </div>
                </div>
                <p className="text-base text-on-surface-variant leading-relaxed mb-6">
                  {r.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-error-container/10 border border-error-container/30">
                    <h4 className="font-bold text-on-surface mb-3 flex items-center gap-1">
                      <AlertTriangle size={18} className="text-error" /> Immediate Actions
                    </h4>
                    <ul className="text-base text-on-surface-variant space-y-1">
                      {r.immediateActions.map((a) => (
                        <li key={a} className="flex items-start gap-2">
                          <span className="text-primary">•</span> {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 rounded-2xl bg-surface-container border border-outline-variant">
                    <h4 className="font-bold text-on-surface mb-3 flex items-center gap-1">
                      <Cloud size={18} className="text-primary" /> Weather Alert
                    </h4>
                    <div className="flex justify-between items-center bg-white p-3 rounded-xl mb-2">
                      <span className="text-[13px]">Humidity</span>
                      <span className="font-bold text-tertiary">{r.weather.humidity}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-3 rounded-xl">
                      <span className="text-[13px]">Rain Forecast</span>
                      <span className="font-bold text-primary">{r.weather.rain}</span>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {r.products.map((p) => {
                  const Icon = iconMap[p.icon] || Leaf
                  return (
                    <Card key={p.name} className="p-6 rounded-3xl flex flex-col">
                      <div className="flex items-center gap-1 mb-2">
                        <Icon size={18} className="text-primary" />
                        <span className="text-[13px] font-bold uppercase tracking-wider text-on-surface-variant">
                          {p.type}
                        </span>
                      </div>
                      <p className="font-bold text-lg mb-1">{p.name}</p>
                      <p className="text-base text-on-surface-variant mb-4">{p.detail}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-xl font-bold text-primary">
                          {p.price}
                          <span className="text-[13px] font-normal text-on-surface-variant">
                            {p.unit}
                          </span>
                        </span>
                        <button className="text-primary font-bold text-[13px] flex items-center gap-1">
                          {p.cta} <ArrowRight size={16} />
                        </button>
                      </div>
                    </Card>
                  )
                })}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-3xl overflow-hidden border border-outline-variant relative h-48">
                  <img
                    src={r.nearby.mapImage}
                    alt="Map"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 flex items-end p-4">
                    <div className="bg-white/90 p-4 rounded-2xl backdrop-blur-sm border border-outline-variant w-full">
                      <p className="text-[13px] font-bold text-primary mb-1">Nearby Support</p>
                      <p className="font-bold text-on-surface">{r.nearby.name}</p>
                      <p className="text-[13px] text-on-surface-variant">{r.nearby.distance}</p>
                    </div>
                  </div>
                </div>
                <Card className="p-6 rounded-3xl bg-secondary-container/20 border-secondary-container flex flex-col justify-center items-center text-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
                    <MessageCircle size={28} />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Talk to an Expert</p>
                    <p className="text-base text-on-surface-variant">
                      Need specialized advice? Start a session with our verified agronomists.
                    </p>
                  </div>
                  <Button variant="secondary" className="w-full" asChild>
                    <Link to="/app/assistant">Ask Follow-up</Link>
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </main>

        <div className="fixed bottom-8 right-8 z-40 hidden md:block">
          <Link
            to="/app/assistant"
            className="flex items-center bg-primary-container text-on-primary-container pl-5 pr-2 py-2 rounded-full shadow-2xl border border-primary/20 hover:scale-105 transition-transform animate-pulse"
          >
            <span className="text-[13px] font-bold mr-4">Ask AI about these results?</span>
            <span className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center">
              <ArrowRight size={18} />
            </span>
          </Link>
        </div>
      </>
    </AppShell>
  )
}
