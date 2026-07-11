import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Plus,
  History,
  MessageCircle,
  FileText,
  BarChart3,
  Send,
  Paperclip,
  Mic,
  Brain,
  CloudRain,
  Droplets,
  AlertTriangle,
  BadgeCheck,
  Camera,
  Bug,
  TrendingUp,
  User,
} from 'lucide-react'
import AppShell from '@/layout/AppShell'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import {
  chatMessages as initialMessages,
  previousChats,
  satelliteImage,
} from '@/data/mock'
import { cn } from '@/lib/utils'

export default function AssistantPage() {
  const [lang, setLang] = useState('en')
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState(initialMessages)
  const [chats, setChats] = useState(previousChats)

  function sendMessage() {
    if (!input.trim()) return
    setMessages((m) => [
      ...m,
      { role: 'user', text: input.trim() },
      {
        role: 'assistant',
        text:
          lang === 'bn'
            ? 'আপনার প্রশ্নটি বিশ্লেষণ করা হয়েছে। স্থানীয় কৃষি পরামর্শ অনুসারে আগামী ৪৮ ঘণ্টায় ফসল পর্যবেক্ষণ করুন এবং প্রয়োজনে পটাশ প্রয়োগ করুন।'
            : 'Got it. Based on your latest field data, monitor humidity over the next 48 hours and apply potash if stalks look weak. Want me to open a disease scan?',
      },
    ])
    setInput('')
  }

  function selectChat(id) {
    setChats((list) => list.map((c) => ({ ...c, active: c.id === id })))
  }

  return (
    <AppShell showFooter={false} contentClassName="!p-0 !pt-20 md:!pt-0">
      <>
        <div className="flex min-h-[calc(100vh-5rem)] md:min-h-screen">
          {/* Chat history rail — secondary to main app sidebar */}
          <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-outline-variant bg-surface-container-lowest p-4">
            <Button
              className="w-full mb-6 shadow-lg shadow-primary/20"
              onClick={() => {
                setMessages([])
                setChats((list) => list.map((c) => ({ ...c, active: false })))
              }}
            >
              <Plus size={18} /> New Chat
            </Button>

            <p className="text-[13px] font-semibold text-outline uppercase tracking-wider px-3 mb-2">
              Previous Chats
            </p>
            <nav className="flex flex-col gap-1 mb-6">
              {chats.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => selectChat(c.id)}
                  className={cn(
                    'rounded-xl px-4 py-3 flex items-center gap-3 text-left transition-all duration-200',
                    c.active
                      ? 'bg-secondary-container text-on-secondary-container font-bold'
                      : 'text-on-surface-variant hover:bg-surface-container',
                  )}
                >
                  {c.active ? <History size={18} /> : <MessageCircle size={18} />}
                  <span className="truncate text-sm">{c.title}</span>
                </button>
              ))}
            </nav>

            <p className="text-[13px] font-semibold text-outline uppercase tracking-wider px-3 mb-2">
              Library
            </p>
            <nav className="flex flex-col gap-1">
              <Link
                to="/app/history"
                className="text-on-surface-variant px-4 py-3 flex items-center gap-3 hover:bg-surface-container rounded-xl transition-all"
              >
                <FileText size={18} /> Saved Reports
              </Link>
              <Link
                to="/app/market"
                className="text-on-surface-variant px-4 py-3 flex items-center gap-3 hover:bg-surface-container rounded-xl transition-all"
              >
                <BarChart3 size={18} /> Market Trends
              </Link>
            </nav>
          </aside>

          {/* Chat canvas */}
          <div className="flex-1 flex flex-col relative min-w-0">
            <header className="sticky top-20 md:top-0 z-20 h-16 md:h-20 px-6 md:px-8 flex items-center justify-between bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30">
              <h2 className="text-xl font-bold text-primary">Assistant</h2>
              <div className="flex bg-surface-container rounded-full p-1 border border-outline-variant">
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={cn(
                    'px-4 py-1 text-[13px] rounded-full transition-all duration-200',
                    lang === 'en'
                      ? 'bg-primary text-primary-foreground font-bold'
                      : 'text-on-surface-variant hover:text-primary',
                  )}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLang('bn')}
                  className={cn(
                    'px-4 py-1 text-[13px] rounded-full transition-all duration-200',
                    lang === 'bn'
                      ? 'bg-primary text-primary-foreground font-bold'
                      : 'text-on-surface-variant hover:text-primary',
                  )}
                >
                  বাংলা
                </button>
              </div>
            </header>

            <section className="flex-1 overflow-y-auto px-6 md:px-8 py-8 max-w-4xl mx-auto w-full space-y-8 pb-44">
              {messages.map((msg, idx) =>
                msg.role === 'user' ? (
                  <div key={idx} className="flex justify-end items-start gap-4">
                    <div className="bg-secondary text-secondary-foreground px-6 py-4 rounded-2xl rounded-tr-none shadow-sm max-w-[80%]">
                      <p>{msg.text}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-surface-container flex-shrink-0 flex items-center justify-center text-outline">
                      <User size={16} />
                    </div>
                  </div>
                ) : (
                  <div key={idx} className="flex justify-start items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-container flex-shrink-0 flex items-center justify-center text-on-primary-container shadow-md">
                      <Brain size={20} />
                    </div>
                    <div className="flex flex-col gap-6 max-w-[85%]">
                      <div className="bg-surface-container-lowest border border-outline-variant/50 p-6 rounded-2xl rounded-tl-none shadow-sm">
                        <p className="text-on-surface mb-4">{msg.text}</p>

                        {msg.weather && (
                          <div className="bg-surface-container-high rounded-xl p-4 mb-6 flex items-center justify-between border border-primary-fixed/30">
                            <div className="flex items-center gap-4">
                              <CloudRain className="text-primary" size={36} />
                              <div>
                                <h4 className="text-[13px] font-bold text-on-surface">
                                  {msg.weather.title}
                                </h4>
                                <p className="text-xs text-on-surface-variant">
                                  {msg.weather.detail}
                                </p>
                              </div>
                            </div>
                            <span className="text-2xl font-bold text-primary">
                              {msg.weather.temp}
                            </span>
                          </div>
                        )}

                        {msg.stats && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {msg.stats.map((s) => (
                              <div
                                key={s.label}
                                className={cn(
                                  'p-4 rounded-xl border',
                                  s.tone === 'tertiary'
                                    ? 'bg-tertiary/5 border-tertiary/10'
                                    : 'bg-primary/5 border-primary/10',
                                )}
                              >
                                <div
                                  className={cn(
                                    'flex items-center gap-2 mb-2',
                                    s.tone === 'tertiary' ? 'text-tertiary' : 'text-primary',
                                  )}
                                >
                                  {s.tone === 'tertiary' ? (
                                    <AlertTriangle size={18} />
                                  ) : (
                                    <Droplets size={18} />
                                  )}
                                  <span className="text-[13px] font-bold">{s.label}</span>
                                </div>
                                <div
                                  className={cn(
                                    'text-2xl font-bold',
                                    s.tone === 'tertiary' ? 'text-tertiary' : 'text-primary',
                                  )}
                                >
                                  {s.value}
                                </div>
                                <p className="text-[11px] text-outline">{s.hint}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {msg.advice && (
                          <div className="space-y-3">
                            <h4 className="font-bold text-on-surface flex items-center gap-2">
                              <BadgeCheck className="text-primary" size={18} />
                              Fertilization & Care Strategy
                            </h4>
                            <ul className="space-y-2 text-base text-on-surface-variant">
                              {msg.advice.map((a) => (
                                <li key={a} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                                  {a}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {msg.advice && (
                        <div className="flex flex-wrap gap-2">
                          {[
                            { icon: Camera, label: 'Analyze Crop', to: '/app/analysis/new' },
                            { icon: Bug, label: 'Detect Disease', to: '/app/analysis/new' },
                            { icon: TrendingUp, label: 'Market Price', to: '/app/market' },
                          ].map((chip) => (
                            <Link
                              key={chip.label}
                              to={chip.to}
                              className="bg-surface border border-outline-variant hover:border-primary hover:text-primary px-4 py-2 rounded-full text-[13px] transition-all flex items-center gap-2"
                            >
                              <chip.icon size={16} /> {chip.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ),
              )}

              <div className="w-full h-64 rounded-3xl overflow-hidden relative shadow-xl">
                <img
                  src={satelliteImage}
                  alt="Rice field"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="text-[13px] font-bold uppercase tracking-widest opacity-80 mb-1">
                      Live Satellite View
                    </p>
                    <h3 className="text-xl font-bold">Mymensingh Sector 04B</h3>
                  </div>
                </div>
              </div>
            </section>

            <div className="sticky bottom-20 md:bottom-0 z-20 backdrop-blur-xl bg-surface/90 border-t border-outline-variant/30 p-4 md:p-6">
              <div className="max-w-4xl mx-auto flex items-end gap-4">
                <div className="flex-1 relative">
                  <Textarea
                    rows={1}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault()
                        sendMessage()
                      }
                    }}
                    placeholder="Ask AgriSense about your crops, pests, or market prices..."
                    className="pr-24 py-4 rounded-2xl bg-surface-container-low border-none shadow-inner"
                  />
                  <div className="absolute right-4 bottom-4 flex items-center gap-2 text-outline">
                    <button type="button" className="hover:text-primary transition-colors">
                      <Paperclip size={18} />
                    </button>
                    <button type="button" className="hover:text-primary transition-colors">
                      <Mic size={18} />
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={sendMessage}
                  className="w-14 h-14 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 transition-all"
                >
                  <Send size={22} />
                </button>
              </div>
              <p className="text-center text-[11px] text-outline mt-3">
                AgriSense AI can make mistakes. Check important information with local agricultural
                officers.
              </p>
            </div>
          </div>
        </div>
      </>
    </AppShell>
  )
}
