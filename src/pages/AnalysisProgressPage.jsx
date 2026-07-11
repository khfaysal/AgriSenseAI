import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Brain, CheckCircle2, Loader2, Circle, Lightbulb } from 'lucide-react'
import AppShell from '@/layout/AppShell'
import { Progress } from '@/components/ui/progress'
import { analysisTips } from '@/data/mock'

const steps = [
  { id: 1, label: 'Upload Completed' },
  { id: 2, label: 'Image Processing' },
  { id: 3, label: 'AI Understanding' },
  { id: 4, label: 'Knowledge Retrieval' },
  { id: 5, label: 'Generating Recommendation' },
]

export default function AnalysisProgressPage() {
  const navigate = useNavigate()
  const [activeStep, setActiveStep] = useState(2)
  const [tipIndex, setTipIndex] = useState(0)
  const [progress, setProgress] = useState(35)

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setActiveStep((s) => Math.min(s + 1, steps.length))
      setProgress((p) => Math.min(p + 18, 98))
    }, 800)

    const tipTimer = setInterval(() => {
      setTipIndex((i) => (i + 1) % analysisTips.length)
    }, 4000)

    const done = setTimeout(() => navigate('/app/analysis/result'), 4200)

    return () => {
      clearInterval(stepTimer)
      clearInterval(tipTimer)
      clearTimeout(done)
    }
  }, [navigate])

  return (
    <AppShell variant="minimal">
      <>
        <div className="relative min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-8 py-12 overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />

          <div className="relative w-full max-w-md aspect-square flex items-center justify-center mb-10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full border border-primary/10 flex items-center justify-center animate-pulse">
                <div className="w-48 h-48 rounded-full border border-primary/20 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border border-primary/40 flex items-center justify-center">
                    <Brain className="text-primary" size={56} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 text-center">
              <h1 className="text-2xl font-semibold text-on-surface mb-1">
                Analyzing Your Crop Data
              </h1>
              <p className="text-on-surface-variant">Precision intelligence in progress...</p>
            </div>
          </div>

          <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[13px] font-semibold text-on-surface-variant uppercase tracking-widest">
                  Processing Pipeline
                </h2>
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:150ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
              <div className="space-y-2">
                {steps.map((step) => {
                  const done = step.id < activeStep
                  const running = step.id === activeStep
                  return (
                    <div
                      key={step.id}
                      className={`flex items-center gap-3 py-2 px-2 rounded-lg transition-all duration-300 ${
                        running ? 'bg-surface-container-high/50' : done ? '' : 'opacity-40'
                      }`}
                    >
                      {done ? (
                        <CheckCircle2 className="text-secondary" size={20} />
                      ) : running ? (
                        <Loader2 className="text-primary animate-spin" size={20} />
                      ) : (
                        <Circle className="text-on-surface-variant" size={18} />
                      )}
                      <span
                        className={`text-base ${running ? 'font-bold text-on-surface' : 'text-on-surface'}`}
                      >
                        {step.label}
                      </span>
                      {running && (
                        <span className="ml-auto text-[13px] font-semibold text-primary">
                          {progress}%
                        </span>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant">
              <h2 className="text-[13px] font-semibold text-on-surface-variant uppercase tracking-widest mb-6">
                System Status
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-[13px] mb-2">
                    <span className="text-on-surface-variant">Compute Load</span>
                    <span className="text-on-surface">Low Latency</span>
                  </div>
                  <Progress value={45} />
                </div>
                <div>
                  <div className="flex justify-between text-[13px] mb-2">
                    <span className="text-on-surface-variant">Data Confidence</span>
                    <span className="text-on-surface">98.2%</span>
                  </div>
                  <Progress value={92} />
                </div>
                <p className="pt-4 border-t border-outline-variant text-[13px] text-on-surface-variant">
                  Connected to Bangladesh Agri-Grid V4.2
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="fixed bottom-0 w-full z-40 bg-surface-container-low/90 backdrop-blur-md py-4 border-t border-outline-variant">
          <div className="max-w-7xl mx-auto px-8 flex items-center justify-center gap-3">
            <Lightbulb className="text-primary shrink-0" size={20} />
            <p
              key={tipIndex}
              className="text-base text-on-surface text-center transition-all duration-500"
            >
              {analysisTips[tipIndex]}
            </p>
          </div>
        </footer>
      </>
    </AppShell>
  )
}
