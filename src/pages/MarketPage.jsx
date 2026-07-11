import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  TrendingUp,
  TrendingDown,
  MapPin,
  Clock,
  Truck,
  Users,
  Sparkles,
  ArrowRight,
  Store,
  MessageCircle,
} from 'lucide-react'
import AppShell from '@/layout/AppShell'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  marketPrices,
  marketSummary,
  marketHubs,
  sellTips,
} from '@/data/mock'
import { cn } from '@/lib/utils'

const cropFilters = ['All Crops', 'Rice (Boro)', 'Potato', 'Jute', 'Tomato', 'Wheat', 'Maize']

const tipIcons = { Clock, Truck, Users }

function Sparkline({ values, up }) {
  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = max - min || 1

  return (
    <div className="flex items-end gap-1 h-12 w-full">
      {values.map((v, i) => {
        const h = ((v - min) / range) * 100
        return (
          <div
            key={i}
            className={cn(
              'flex-1 rounded-t-sm transition-all',
              up ? 'bg-primary/70' : 'bg-tertiary/60',
              i === values.length - 1 && (up ? 'bg-primary' : 'bg-tertiary'),
            )}
            style={{ height: `${Math.max(h, 12)}%` }}
            title={`Day ${i + 1}: ৳${v}`}
          />
        )
      })}
    </div>
  )
}

function formatPrice(n) {
  return n.toLocaleString('en-BD')
}

export default function MarketPage() {
  const [filter, setFilter] = useState('All Crops')

  const items = useMemo(() => {
    if (filter === 'All Crops') return marketPrices
    return marketPrices.filter((p) => p.crop === filter)
  }, [filter])

  return (
    <AppShell>
      <>
        <div className="max-w-7xl mx-auto">
          <header className="mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-primary mb-2">
                <Store size={16} />
                Market Intelligence
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-on-surface tracking-tight">
                Crop Market Prices
              </h1>
              <p className="text-lg text-on-surface-variant max-w-2xl mt-2">
                7-day AI price forecasts and local mandi trends for Bangladeshi farmers — plan when
                and where to sell for better income.
              </p>
            </div>
            <div className="text-sm text-on-surface-variant bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3">
              <p className="font-semibold text-on-surface">Updated {marketSummary.updatedAt}</p>
              <p className="flex items-center gap-1 mt-1">
                <MapPin size={14} className="text-primary" />
                Based on {marketSummary.district} & nearby hubs
              </p>
            </div>
          </header>

          {/* AI insight banner */}
          <Card className="p-6 mb-8 rounded-2xl border-primary/20 bg-gradient-to-r from-secondary-container/40 to-surface-container-lowest">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                <Sparkles size={22} />
              </div>
              <div className="flex-1">
                <p className="text-[13px] font-bold uppercase tracking-wider text-primary mb-1">
                  AI Selling Insight
                </p>
                <p className="text-base text-on-surface">{marketSummary.insight}</p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3 min-w-[140px]">
                  <p className="text-[12px] text-on-surface-variant">Best crop</p>
                  <p className="font-bold text-on-surface">{marketSummary.bestCrop}</p>
                </div>
                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3 min-w-[140px]">
                  <p className="text-[12px] text-on-surface-variant">Action</p>
                  <p className="font-bold text-primary">{marketSummary.bestAction}</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {cropFilters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={cn(
                  'px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-200',
                  filter === f
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-surface-container-high text-on-surface-variant hover:bg-outline-variant',
                )}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Price cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {items.map((item) => {
              const up = item.trend === 'up'
              return (
                <Card
                  key={item.id}
                  className="p-6 rounded-2xl hover:-translate-y-1 hover:shadow-[0px_10px_32px_rgba(0,0,0,0.08)] transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-on-surface">{item.crop}</h3>
                      <p className="text-[13px] text-on-surface-variant mt-0.5">
                        {item.market} · {item.unit}
                      </p>
                    </div>
                    <Badge variant={up ? 'soft' : 'warning'}>
                      {up ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                      {up ? '+' : ''}
                      {item.change}%
                    </Badge>
                  </div>

                  <p className="text-3xl font-bold text-primary mb-1">
                    ৳{formatPrice(item.price)}
                    <span className="text-sm font-normal text-on-surface-variant ml-1">
                      {item.unit}
                    </span>
                  </p>
                  <p className="text-[13px] text-on-surface-variant mb-4">
                    Demand:{' '}
                    <span className="font-semibold text-on-surface">{item.demand}</span>
                  </p>

                  <p className="text-[12px] font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                    7-Day Forecast
                  </p>
                  <Sparkline values={item.forecast} up={up} />
                  <div className="flex justify-between text-[11px] text-outline mt-2">
                    <span>D-6</span>
                    <span>Today</span>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Hubs + tips */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl font-semibold text-on-surface">Nearby Market Hubs</h2>
              <div className="space-y-4">
                {marketHubs.map((hub) => (
                  <Card key={hub.name} className="p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                      <MapPin size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-on-surface">{hub.name}</h3>
                      <p className="text-sm text-on-surface-variant">
                        {hub.district} · {hub.distance} · {hub.status}
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-[12px] text-on-surface-variant">Top crop</p>
                      <p className="font-semibold text-on-surface">{hub.topCrop}</p>
                      <p className="text-sm text-primary font-bold">{hub.priceNote}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-2xl font-semibold text-on-surface">Sell Smarter</h2>
              {sellTips.map((tip) => {
                const Icon = tipIcons[tip.icon] || Clock
                return (
                  <Card key={tip.title} className="p-5 rounded-2xl flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-on-surface">{tip.title}</h3>
                      <p className="text-sm text-on-surface-variant mt-1">{tip.detail}</p>
                    </div>
                  </Card>
                )
              })}

              <Card className="p-6 rounded-2xl bg-secondary-container/30 border-secondary-container">
                <p className="font-bold text-lg text-on-surface mb-2">Need a price check?</p>
                <p className="text-sm text-on-surface-variant mb-4">
                  Ask the Bengali AI Assistant about today&apos;s mandi rates or when to sell your
                  harvest.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <Link to="/app/assistant">
                      <MessageCircle size={16} /> Ask Assistant
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/app/analysis/new?service=market">
                      Market Analysis <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </>
    </AppShell>
  )
}
