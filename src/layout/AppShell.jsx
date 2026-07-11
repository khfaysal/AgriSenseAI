import { Link, useLocation } from 'react-router-dom'
import {
  Home,
  BarChart3,
  Store,
  History,
  MessageCircle,
  Plus,
  Bell,
  User,
  Settings,
  X,
  ScanLine,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { farmerProfile } from '@/data/mock'

const sidebarLinks = [
  {
    id: 'home',
    label: 'Home',
    icon: Home,
    to: '/app',
    match: (p) => p === '/app',
  },
  {
    id: 'analysis',
    label: 'Analysis',
    icon: BarChart3,
    to: '/app/analysis/new',
    match: (p) =>
      p.startsWith('/app/analysis/new') || p.startsWith('/app/analysis/progress'),
  },
  {
    id: 'market',
    label: 'Market',
    icon: Store,
    to: '/app/market',
    match: (p) => p.startsWith('/app/market'),
  },
  {
    id: 'history',
    label: 'History',
    icon: History,
    to: '/app/history',
    match: (p) => p.startsWith('/app/history') || p.startsWith('/app/analysis/result'),
  },
  {
    id: 'support',
    label: 'Support',
    icon: MessageCircle,
    to: '/app/assistant',
    match: (p) => p.startsWith('/app/assistant'),
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: User,
    to: '/app/profile',
    match: (p) => p.startsWith('/app/profile'),
  },
]

const mobileNav = [
  { label: 'Home', icon: Home, to: '/app', match: (p) => p === '/app' },
  {
    label: 'History',
    icon: History,
    to: '/app/history',
    match: (p) => p.startsWith('/app/history') || p.startsWith('/app/analysis/result'),
  },
  {
    label: 'AI Scan',
    icon: ScanLine,
    to: '/app/analysis/new',
    match: (p) => p.startsWith('/app/analysis/new') || p.startsWith('/app/analysis/progress'),
  },
  {
    label: 'Chat',
    icon: MessageCircle,
    to: '/app/assistant',
    match: (p) => p.startsWith('/app/assistant'),
  },
  {
    label: 'Profile',
    icon: User,
    to: '/app/profile',
    match: (p) => p.startsWith('/app/profile'),
  },
]

function BrandText() {
  return (
    <div className="flex flex-col px-2">
      <Link to="/app" className="text-2xl font-bold text-primary leading-none">
        AgriSense AI
      </Link>
      <span className="text-[13px] font-semibold text-on-surface-variant mt-1">
        Expert Partner
      </span>
    </div>
  )
}

function AppFooter() {
  return (
    <footer className="hidden md:block w-full border-t border-outline-variant bg-surface-container-low py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-bold text-primary">AgriSense AI</span>
          <p className="text-base text-on-surface-variant">
            © 2026 AgriSense AI. Empowering Bangladeshi Farmers through Precision. Developed By Atreides.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {['Terms of Service', 'Privacy Policy', 'Contact Support', 'Agricultural Guides'].map(
            (label) => (
              <a
                key={label}
                href="#"
                className="text-[13px] font-semibold text-on-surface-variant hover:text-primary transition-colors"
              >
                {label}
              </a>
            ),
          )}
        </div>
      </div>
    </footer>
  )
}

function SidebarNav({ pathname }) {
  return (
    <nav className="flex flex-col gap-2">
      {sidebarLinks.map((link) => {
        const Icon = link.icon
        const active = link.match(pathname)
        return (
          <Link
            key={link.id}
            to={link.to}
            className={cn(
              'px-4 py-3 flex items-center gap-3 rounded-xl transition-all duration-200',
              active
                ? 'bg-secondary-container text-on-secondary-container font-bold'
                : 'text-on-surface-variant hover:bg-surface-container group',
            )}
          >
            <Icon
              size={22}
              className={cn(
                'shrink-0 transition-colors',
                !active && 'group-hover:text-primary',
              )}
            />
            <span
              className={cn(
                'text-[13px] font-semibold transition-colors',
                !active && 'group-hover:text-primary',
              )}
            >
              {link.label}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}

function SidebarUser() {
  return (
    <Link
      to="/app/profile"
      className="flex items-center gap-3 px-2 py-3 rounded-xl hover:bg-surface-container transition-colors"
    >
      <img
        src={farmerProfile.avatar}
        alt={farmerProfile.name}
        className="w-10 h-10 rounded-full object-cover border-2 border-primary-fixed"
      />
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-bold text-on-surface truncate">{farmerProfile.name}</p>
        <p className="text-[11px] text-outline truncate">{farmerProfile.membership}</p>
      </div>
      <Settings size={16} className="text-outline shrink-0" />
    </Link>
  )
}

function MobileBottomNav({ pathname }) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 py-3 bg-surface/90 backdrop-blur-lg shadow-lg border-t border-outline-variant">
      {mobileNav.map((item) => {
        const Icon = item.icon
        const active = item.match(pathname)
        return (
          <Link
            key={item.label}
            to={item.to}
            className={cn(
              'flex flex-col items-center justify-center px-3 py-2 rounded-2xl transition-all duration-200 min-w-[56px]',
              active
                ? 'bg-secondary-container text-on-secondary-container'
                : 'text-on-surface-variant',
            )}
          >
            <Icon size={22} />
            <span className="text-[10px] font-semibold mt-1">{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}

/**
 * Shared app chrome. Use variant="minimal" only for the analysis progress screen.
 * All other app pages use the same sidebar.
 */
export default function AppShell({
  children,
  variant = 'sidebar',
  showFooter = true,
  contentClassName,
}) {
  const { pathname } = useLocation()

  if (variant === 'minimal') {
    return (
      <div className="app-root min-h-screen bg-background text-on-surface font-sans">
        <header className="fixed top-0 inset-x-0 z-50 h-20 bg-surface/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto h-full px-8 flex justify-between items-center">
            <Link to="/app" className="text-2xl font-bold text-primary">
              AgriSense AI
            </Link>
            <Link
              to="/app"
              className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors"
              aria-label="Close"
            >
              <X size={22} />
            </Link>
          </div>
        </header>
        <main className="relative z-10">{children}</main>
      </div>
    )
  }

  return (
    <div className="app-root min-h-screen bg-background text-on-surface font-sans overflow-x-hidden pb-24 md:pb-0">
      {/* Mobile top bar */}
      <header className="md:hidden flex justify-between items-center w-full px-6 h-20 fixed top-0 z-50 bg-surface/80 backdrop-blur-xl shadow-sm">
        <Link to="/app" className="text-xl font-bold text-primary">
          AgriSense AI
        </Link>
        <div className="flex gap-3 items-center">
          <button
            type="button"
            className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant"
            aria-label="Notifications"
          >
            <Bell size={20} />
          </button>
          <Link
            to="/app/profile"
            className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant"
          >
            <img
              src={farmerProfile.avatar}
              alt={farmerProfile.name}
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
      </header>

      {/* Desktop sidebar — same on every page */}
      <aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 bg-surface border-r border-outline-variant p-4 z-40">
        <div className="mb-10 pt-2">
          <BrandText />
        </div>

        <SidebarNav pathname={pathname} />

        <div className="mt-auto space-y-3 pt-4 border-t border-outline-variant">
          <Link
            to="/app/analysis/new"
            className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all"
          >
            <Plus size={20} />
            <span className="text-[13px] font-semibold">New Analysis</span>
          </Link>
          <SidebarUser />
        </div>
      </aside>

      <div className="md:ml-64 min-h-screen flex flex-col">
        <main className={cn('flex-1 pt-24 md:pt-8 px-6 md:px-8 pb-10', contentClassName)}>
          {children}
        </main>
        {showFooter && <AppFooter />}
      </div>

      <MobileBottomNav pathname={pathname} />
    </div>
  )
}
