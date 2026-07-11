import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Tractor,
  Shield,
  HelpCircle,
  Pencil,
  MapPin,
  Cloud,
  TrendingUp,
  Brain,
  ArrowRight,
  MessageSquare,
} from 'lucide-react'
import AppShell from '@/layout/AppShell'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { farmerProfile } from '@/data/mock'

export default function ProfilePage() {
  const [prefs, setPrefs] = useState({
    weather: true,
    market: true,
    ai: false,
  })
  const p = farmerProfile

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto w-full py-2">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight">
            Profile & Settings
          </h1>
          <p className="text-lg text-on-surface-variant mt-2">
            Manage your account, farms, and notification preferences.
          </p>
        </header>

        <div className="space-y-10">
          <Card className="p-6" id="profile">
            <div className="flex justify-between items-start mb-6 gap-4 flex-wrap">
              <div>
                <h3 className="text-xl font-semibold text-primary">Profile Information</h3>
                <p className="text-on-surface-variant text-base">
                  Manage your personal details and account preferences.
                </p>
              </div>
              <Button size="sm">
                <Pencil size={16} /> Edit Profile
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-[13px] font-semibold text-outline uppercase tracking-wider mb-1">
                  Full Name
                </p>
                <p className="text-lg font-semibold text-on-surface">{p.name}</p>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-outline uppercase tracking-wider mb-1">
                  District
                </p>
                <div className="flex items-center gap-1 font-semibold text-on-surface">
                  <MapPin size={18} className="text-primary" />
                  <p className="text-lg">{p.district}</p>
                </div>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-outline uppercase tracking-wider mb-1">
                  Preferred Language
                </p>
                <p className="text-lg font-semibold text-on-surface">{p.language}</p>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-outline uppercase tracking-wider mb-1">
                  Membership Status
                </p>
                <Badge variant="soft">{p.membership}</Badge>
              </div>
            </div>
          </Card>

          <div id="farms" className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">Saved Farms</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 relative h-64 rounded-2xl overflow-hidden shadow-sm border border-outline-variant">
                <img
                  src={p.farm.mapImage}
                  alt={p.farm.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 bg-surface/90 backdrop-blur-md p-3 rounded-xl border border-outline-variant max-w-xs shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary-container p-2 rounded-lg text-on-primary-container">
                      <Tractor size={18} />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-semibold">{p.farm.name}</h4>
                      <p className="text-xs text-on-surface-variant">
                        Last scanned: {p.farm.lastScanned}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="p-6 flex flex-col justify-center gap-6">
                <div className="text-center">
                  <p className="text-[13px] font-semibold text-outline uppercase">Total Area</p>
                  <p className="text-5xl font-bold text-primary">
                    {p.farm.area}
                    <span className="text-xl">ac</span>
                  </p>
                </div>
                <div className="border-t border-outline-variant pt-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-base text-on-surface-variant">Crops</span>
                    <span className="text-[13px] font-semibold bg-surface-container text-on-surface-variant px-2 py-1 rounded">
                      {p.farm.crops}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-base text-on-surface-variant">Health</span>
                    <span className="text-[13px] font-semibold text-secondary">
                      {p.farm.health}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <Card className="p-6" id="notifications">
            <h3 className="text-xl font-semibold text-primary mb-6">Notification Preferences</h3>
            <div className="space-y-2">
              {[
                {
                  key: 'weather',
                  icon: Cloud,
                  title: 'Weather Alerts',
                  desc: 'Real-time storm and rainfall warnings for Bogura.',
                },
                {
                  key: 'market',
                  icon: TrendingUp,
                  title: 'Market Updates',
                  desc: 'Daily price changes for major crops in local hubs.',
                },
                {
                  key: 'ai',
                  icon: Brain,
                  title: 'AI Insights',
                  desc: 'Personalized crop health and harvesting recommendations.',
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.key}
                    className="flex items-center justify-between py-4 border-b border-outline-variant last:border-0 gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-surface-container p-3 rounded-xl text-primary">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-lg font-semibold">{item.title}</p>
                        <p className="text-base text-on-surface-variant">{item.desc}</p>
                      </div>
                    </div>
                    <Switch
                      checked={prefs[item.key]}
                      onCheckedChange={(v) =>
                        setPrefs((prev) => ({ ...prev, [item.key]: v }))
                      }
                    />
                  </div>
                )
              })}
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="security">
            <Card className="p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-tertiary-fixed-dim/20 p-3 rounded-xl text-tertiary">
                  <Shield size={20} />
                </div>
                <h4 className="text-lg font-bold">Security Center</h4>
              </div>
              <p className="text-base text-on-surface-variant mb-4">
                Manage passwords, biometric logins, and multi-factor authentication.
              </p>
              <button type="button" className="text-primary font-bold flex items-center gap-2 hover:underline">
                Go to Security Settings <ArrowRight size={16} />
              </button>
            </Card>
            <Card className="p-6 hover:shadow-md transition-shadow" id="support">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-primary-fixed/20 p-3 rounded-xl text-primary">
                  <HelpCircle size={20} />
                </div>
                <h4 className="text-lg font-bold">Customer Support</h4>
              </div>
              <p className="text-base text-on-surface-variant mb-4">
                Need help with analysis? Our experts are available 24/7 for you.
              </p>
              <Link
                to="/app/assistant"
                className="text-primary font-bold flex items-center gap-2 hover:underline"
              >
                Start Chat with Expert <MessageSquare size={16} />
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
