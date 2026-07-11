import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from '@/pages/LandingPage'
import DashboardPage from '@/pages/DashboardPage'
import NewAnalysisPage from '@/pages/NewAnalysisPage'
import AnalysisProgressPage from '@/pages/AnalysisProgressPage'
import AnalysisResultPage from '@/pages/AnalysisResultPage'
import HistoryPage from '@/pages/HistoryPage'
import AssistantPage from '@/pages/AssistantPage'
import ProfilePage from '@/pages/ProfilePage'
import MarketPage from '@/pages/MarketPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<DashboardPage />} />
        <Route path="/app/analysis/new" element={<NewAnalysisPage />} />
        <Route path="/app/analysis/progress" element={<AnalysisProgressPage />} />
        <Route path="/app/analysis/result" element={<AnalysisResultPage />} />
        <Route path="/app/history" element={<HistoryPage />} />
        <Route path="/app/market" element={<MarketPage />} />
        <Route path="/app/assistant" element={<AssistantPage />} />
        <Route path="/app/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}
