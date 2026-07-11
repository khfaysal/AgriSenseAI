import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CloudUpload, Camera, Lightbulb, MapPin, Zap, X } from 'lucide-react'
import AppShell from '@/layout/AppShell'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { crops, seasons, districts } from '@/data/mock'

const selectClass =
  'w-full h-11 rounded-xl border border-outline-variant bg-surface-container-lowest px-4 text-base text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary'

export default function NewAnalysisPage() {
  const navigate = useNavigate()
  const [preview, setPreview] = useState(null)
  const [description, setDescription] = useState('')
  const [crop, setCrop] = useState('')
  const [season, setSeason] = useState('')
  const [district, setDistrict] = useState('')
  const [autoLocation, setAutoLocation] = useState(true)
  const [submitting, setSubmitting] = useState(false)

  function handleFiles(files) {
    const file = files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (e) => setPreview(e.target.result)
    reader.readAsDataURL(file)
  }

  function onSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => navigate('/app/analysis/progress'), 600)
  }

  return (
    <AppShell>
      <>
        <main className="py-4 md:py-6 px-8 max-w-5xl mx-auto">
          <section className="mb-16 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-on-surface tracking-tight mb-2">
              New AI Crop Analysis
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl">
              Upload a photo of your crop or soil issue to get instant expert guidance powered by
              precision AI models.
            </p>
          </section>

          <form className="grid grid-cols-1 lg:grid-cols-12 gap-10" onSubmit={onSubmit}>
            <div className="lg:col-span-7 space-y-6">
              <div
                className="relative group bg-surface-container-lowest border-2 border-dashed border-outline-variant rounded-2xl p-16 flex flex-col items-center justify-center min-h-[320px] transition-all duration-300 hover:border-primary"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault()
                  handleFiles(e.dataTransfer.files)
                }}
              >
                {!preview ? (
                  <>
                    <div className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <CloudUpload className="text-on-secondary-container" size={32} />
                    </div>
                    <p className="font-semibold text-on-surface mb-1">Drag and drop images</p>
                    <p className="text-[13px] text-on-surface-variant mb-4">
                      Supported formats: JPG, PNG, WEBP (Max 10MB)
                    </p>
                    <label className="cursor-pointer bg-primary text-primary-foreground px-6 py-2 rounded-full text-[13px] font-semibold hover:opacity-90 transition-opacity">
                      Browse Files
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFiles(e.target.files)}
                      />
                    </label>
                  </>
                ) : (
                  <div className="absolute inset-0 p-3">
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-full object-contain rounded-xl"
                    />
                    <button
                      type="button"
                      className="absolute top-4 right-4 bg-error text-error-foreground p-2 rounded-full shadow-lg"
                      onClick={() => setPreview(null)}
                    >
                      <X size={18} />
                    </button>
                  </div>
                )}
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full border-2 border-primary py-6 text-[13px]"
                size="lg"
              >
                <Camera size={18} />
                Capture from Camera
              </Button>

              <div className="bg-tertiary-fixed text-on-tertiary-fixed-variant p-6 rounded-2xl flex items-start gap-4">
                <Lightbulb className="mt-0.5 shrink-0" size={22} />
                <p className="text-base">
                  Providing both a clear image and a detailed description significantly improves AI
                  diagnosis accuracy by up to 40%.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <Label className="ml-1">Problem Description</Label>
                <Textarea
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the symptoms you're seeing (e.g., yellow spots on leaves, wilting, insect presence)..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="ml-1">Crop Type</Label>
                  <select className={selectClass} value={crop} onChange={(e) => setCrop(e.target.value)}>
                    <option value="">Select Crop</option>
                    {crops.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label className="ml-1">Season</Label>
                  <select
                    className={selectClass}
                    value={season}
                    onChange={(e) => setSeason(e.target.value)}
                  >
                    <option value="">Select Season</option>
                    {seasons.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="ml-1">District</Label>
                <select
                  className={selectClass}
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                >
                  <option value="">Select District</option>
                  {districts.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-between p-4 bg-surface-container rounded-2xl">
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary" size={20} />
                  <span className="text-[13px] font-semibold text-on-surface">
                    Auto Detect Location
                  </span>
                </div>
                <Switch checked={autoLocation} onCheckedChange={setAutoLocation} />
              </div>

              <Button
                type="submit"
                size="xl"
                className="w-full shadow-lg hover:scale-[1.02] active:scale-95"
                disabled={submitting}
              >
                <Zap size={20} />
                {submitting ? 'Processing...' : 'Analyze with AI'}
              </Button>
            </div>
          </form>
        </main>
      </>
    </AppShell>
  )
}
