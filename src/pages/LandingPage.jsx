import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '@/styles/landing.css'

/* ——————————————————————— Data ——————————————————————— */

const pillars = [
  { icon: '🤖', title: 'Empowering Farmers with AI Technology', desc: 'Bringing cutting-edge artificial intelligence to every farm in Bangladesh.' },
  { icon: '📊', title: 'Data-Driven Decisions for Higher Yield', desc: 'Transforming raw agricultural data into actionable farming insights.' },
  { icon: '🛡️', title: 'Protecting Crops, Livelihoods & Our Future', desc: 'Safeguarding harvests through early disease detection and disaster alerts.' },
  { icon: '🌱', title: 'Sustainable Agriculture for a Better Bangladesh', desc: 'Promoting eco-friendly farming practices for lasting impact.' },
]

const problems = [
  { icon: '🌪️', text: 'Unpredictable weather & climate change' },
  { icon: '❓', text: 'Lack of knowledge about suitable crops' },
  { icon: '⚗️', text: 'Improper use of fertilizer & pesticides' },
  { icon: '🦠', text: 'Late detection of plant diseases' },
  { icon: '💧', text: 'Inefficient irrigation & water management' },
  { icon: '📉', text: 'Low productivity & financial loss' },
  { icon: '🚫', text: 'Limited access to expert advice' },
]

const solutionNodes = [
  { icon: '🌾', label: 'Crop\nRecommendation' },
  { icon: '⛅', label: 'Weather\nForecast' },
  { icon: '🔬', label: 'Soil Health\nAnalysis' },
  { icon: '🧪', label: 'Fertilizer\nRecommendation' },
  { icon: '💧', label: 'Irrigation\nScheduling' },
  { icon: '🦠', label: 'Disease\nDetection' },
]

const features = [
  { icon: '📍', name: 'Location-based crop recommendation' },
  { icon: '🧪', name: 'Soil health testing & analysis' },
  { icon: '🧫', name: 'Fertilizer & pesticide recommendation' },
  { icon: '🌤️', name: 'Real-time weather updates' },
  { icon: '🍃', name: 'Disease detection using leaf image' },
  { icon: '💧', name: 'Irrigation scheduling for water saving' },
  { icon: '📈', name: 'Market price prediction & trends' },
  { icon: '🚨', name: 'Disaster & pest outbreak alerts' },
  { icon: '🗣️', name: 'Bengali voice assistant for easy use' },
  { icon: '📴', name: 'Offline mode for rural connectivity' },
]

const workflowSteps = [
  { num: 1, icon: '👨‍🌾', title: 'Farmer Input', desc: 'Location, Soil Data, Crop Info, Image' },
  { num: 2, icon: '📡', title: 'Data Collection', desc: 'Sensors, APIs, Govt. DB' },
  { num: 3, icon: '🧠', title: 'AI Analysis Engine', desc: 'Machine Learning, Computer Vision, NLP' },
  { num: 4, icon: '💡', title: 'Insight Generation', desc: 'Predictions & Recommendations' },
  { num: 5, icon: '📲', title: 'Delivery', desc: 'App / Voice / SMS' },
]

const techStack = [
  { icon: '🐍', name: 'Python', cls: 'python' },
  { icon: 'TF', name: 'TensorFlow', cls: 'tensorflow' },
  { icon: '👁', name: 'OpenCV', cls: 'opencv' },
  { icon: '📱', name: 'Flutter', cls: 'flutter' },
  { icon: '🔥', name: 'Firebase', cls: 'firebase' },
  { icon: '🗺️', name: 'Google Maps API', cls: 'gmaps' },
  { icon: '🌦️', name: 'Weather API', cls: 'weather' },
  { icon: '🗃️', name: 'Database', cls: 'db' },
  { icon: '🤖', name: 'LLM / NLP', cls: 'llm' },
]

const impacts = [
  { icon: '🌾', cls: 'yield', value: '15-30%', label: 'Increase Crop Yield' },
  { icon: '💰', cls: 'income', value: '20-40%', label: 'Increase Farmer Income' },
  { icon: '💧', cls: 'water', value: '30-50%', label: 'Reduce Water Usage' },
  { icon: '🚨', cls: 'warning', value: 'Early', label: 'Warning Saves Crops & Lives' },
  { icon: '🌿', cls: 'soil', value: 'Better', label: 'Soil Health' },
  { icon: '💊', cls: 'cost', value: 'Reduce', label: 'Cost on Fertilizer & Pesticide' },
  { icon: '🏘️', cls: 'empower', value: 'Empower', label: 'Rural Farmers with AI' },
]

const sdgs = [
  { num: 2, name: 'Zero Hunger', cls: 'sdg-2' },
  { num: 8, name: 'Decent Work & Economic Growth', cls: 'sdg-8' },
  { num: 9, name: 'Industry, Innovation & Infrastructure', cls: 'sdg-9' },
  { num: 12, name: 'Responsible Consumption & Production', cls: 'sdg-12' },
  { num: 13, name: 'Climate Action', cls: 'sdg-13' },
]

const futureItems = [
  { icon: '📡', title: 'Integration with IoT Sensors & Drones', desc: 'Real-time field monitoring with connected devices.' },
  { icon: '🧠', title: 'Advanced AI Models for Higher Accuracy', desc: 'Next-gen deep learning for precision agriculture.' },
  { icon: '💬', title: 'Community Forum for Knowledge Sharing', desc: 'Connecting farmers to share tips and experiences.' },
  { icon: '🛒', title: 'Linkage with E-commerce for Selling Crops', desc: 'Direct market access for better prices.' },
  { icon: '🌏', title: 'Expansion Across South Asia & Beyond', desc: 'Scaling impact to help farmers everywhere.' },
]

const stats = [
  { icon: '📊', text: 'Agriculture contributes <strong>~13%</strong> to Bangladesh\'s GDP.' },
  { icon: '👥', text: 'More than <strong>60%</strong> of the population depends on agriculture.' },
  { icon: '🌪️', text: 'Climate related events cause huge <strong>crop losses</strong> every year.' },
  { icon: '📈', text: 'Access to timely information can <strong>increase yield significantly</strong>.' },
]

/* ——————————————————————— Navbar ——————————————————————— */

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.navbar')
      if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 50)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['Introduction', 'Solution', 'Features', 'Workflow', 'Impact', 'SDG']

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-brand">
        <div className="nav-logo">🌾</div>
        <div className="nav-title">AgriSense <span>AI</span></div>
      </div>
      <div className="nav-links">
        {links.map(l => (
          <a key={l} className="nav-link" href={`#${l.toLowerCase()}`}>{l}</a>
        ))}
        <Link className="nav-link nav-cta" to="/app">Get Started</Link>
      </div>
      <button className="mobile-menu-btn" aria-label="Toggle menu">
        <span /><span /><span />
      </button>
    </nav>
  )
}

/* ——————————————————————— Hero ——————————————————————— */

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-pattern" />
      <div className="hero-grid-overlay" />
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            AI-Powered Farming
          </div>
          <h1>
            <span className="highlight">AgriSense AI</span>
          </h1>
          <p className="hero-subtitle">
            An Intelligent Farming Assistant for Sustainable Agriculture in Bangladesh
          </p>
          <p className="hero-tagline">
            Smart Advice. Better Farming. Stronger Tomorrow.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">🚀 Explore Features</button>
            <button className="btn-secondary">📖 Learn More</button>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">40%+</div>
              <div className="hero-stat-label">Population in Agriculture</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">~13%</div>
              <div className="hero-stat-label">GDP Contribution</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">60%+</div>
              <div className="hero-stat-label">Depend on Farming</div>
            </div>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="hero-visual">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="phone-status-bar">
                <span>9:41</span>
                <span>📶 🔋</span>
              </div>
              <div className="phone-header">
                <div className="phone-header-title">AgriSense AI</div>
                <div className="phone-header-sub">Smart Farming Assistant</div>
              </div>
              <div className="phone-body">
                <div className="phone-card">
                  <div className="phone-card-header">
                    <div className="phone-card-icon green">🌾</div>
                    <div className="phone-card-title">Today's Recommendation</div>
                  </div>
                  <div className="phone-card-value">Aman Rice</div>
                  <div className="phone-card-sub">High Suitability for your region</div>
                  <div className="phone-card-tag">✅ Recommended</div>
                </div>
                <div className="phone-card">
                  <div className="phone-card-header">
                    <div className="phone-card-icon amber">🌤️</div>
                    <div className="phone-card-title">Weather</div>
                  </div>
                  <div className="phone-card-value">28°C — Light Rain</div>
                  <div className="phone-card-sub">Humidity: 78% | Wind: 12 km/h</div>
                </div>
                <div className="phone-card">
                  <div className="phone-card-header">
                    <div className="phone-card-icon blue">🔬</div>
                    <div className="phone-card-title">Soil Health</div>
                  </div>
                  <div className="phone-card-value">Good</div>
                  <div className="phone-card-sub">pH 6.5 · N: Med · P: High · K: Low</div>
                </div>
                <div className="phone-card">
                  <div className="phone-card-header">
                    <div className="phone-card-icon green">✅</div>
                    <div className="phone-card-title">Stress Check</div>
                  </div>
                  <div className="phone-card-value" style={{ color: '#16a34a' }}>No Risk Detected</div>
                </div>
              </div>
              <div className="phone-nav">
                <div className="phone-nav-item active">
                  <span className="phone-nav-icon">🏠</span>
                  Home
                </div>
                <div className="phone-nav-item">
                  <span className="phone-nav-icon">📊</span>
                  Analysis
                </div>
                <div className="phone-nav-item">
                  <span className="phone-nav-icon">📸</span>
                  Scan
                </div>
                <div className="phone-nav-item">
                  <span className="phone-nav-icon">💬</span>
                  Assist
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ——————————————————————— Pillars ——————————————————————— */

function Pillars() {
  return (
    <section className="pillars">
      <div className="section-container">
        <div className="pillars-grid">
          {pillars.map((p, i) => (
            <div className="pillar-card animate-on-scroll" key={i}>
              <div className="pillar-icon">{p.icon}</div>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ——————————————————————— Intro + Problem ——————————————————————— */

function IntroSection() {
  return (
    <section className="intro-section" id="introduction">
      <div className="section-container">
        <div className="section-header">
          <div className="section-number">📌 Overview</div>
          <h2 className="section-title">The Challenge &amp; <span className="accent">Our Mission</span></h2>
          <p className="section-desc">Understanding the agricultural landscape of Bangladesh and the problems farmers face every day.</p>
        </div>
        <div className="intro-grid">
          {/* Introduction */}
          <div className="intro-card animate-on-scroll">
            <div className="card-label"><span className="num">1</span> Introduction</div>
            <h3>Agriculture in Bangladesh</h3>
            <p className="intro-text">
              Agriculture is the backbone of Bangladesh, employing more than <strong>40% of the population</strong>.
              Farmers face many challenges like unpredictable weather, poor soil health, wrong crop choices, diseases,
              and lack of timely guidance. <strong>AgriSense AI</strong> brings the power of <strong>Artificial Intelligence</strong> to
              the fingertips of farmers to make smart, timely and profitable decisions.
            </p>
          </div>

          {/* Problem Statement */}
          <div className="problem-card animate-on-scroll">
            <div className="card-label"><span className="num">2</span> Problem Statement</div>
            <h3>Challenges Farmers Face</h3>
            <div className="problem-list">
              {problems.map((p, i) => (
                <div className="problem-item" key={i}>
                  <div className="problem-icon">{p.icon}</div>
                  <span className="problem-text">{p.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ——————————————————————— Solution ——————————————————————— */

function SolutionSection() {
  return (
    <section className="solution-section" id="solution">
      <div className="section-container">
        <div className="section-header">
          <div className="section-number">💡 Section 3</div>
          <h2 className="section-title">Our Solution — <span className="accent">AgriSense AI</span></h2>
          <p className="section-desc">An AI-powered farming assistant that provides personalized recommendations based on location, soil condition, weather forecasts, crop history, and market data.</p>
        </div>

        <div className="solution-content">
          <div className="solution-text-area animate-on-scroll">
            <p>
              <strong>AgriSense AI</strong> is an AI-powered farming assistant that provides personalized recommendations
              based on location, soil condition, weather forecasts, crop history, and market data.
            </p>
            <p>
              It supports farmers from <strong>planning to harvest and beyond</strong>, covering everything from crop selection
              and soil analysis to disease detection and market price prediction.
            </p>
            <p>
              Our intelligent system also includes <strong>disaster alerts</strong>, <strong>irrigation scheduling</strong>,
              and a <strong>Bengali voice assistant</strong> for ease of use in rural areas.
            </p>
          </div>

          <div className="solution-hub-wrapper animate-on-scroll">
            <div className="solution-hub">
              <div className="hub-orbit">
                {solutionNodes.map((n, i) => (
                  <div className="hub-node" key={i}>
                    <span className="hub-node-icon">{n.icon}</span>
                    <span className="hub-node-label">{n.label}</span>
                  </div>
                ))}
              </div>
              <div className="hub-center">
                <div className="hub-center-title">AgriSense AI</div>
                <div className="hub-center-sub">Smart Farming Assistant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ——————————————————————— Features ——————————————————————— */

function FeaturesSection() {
  return (
    <section className="features-section" id="features">
      <div className="section-container">
        <div className="section-header">
          <div className="section-number">⚡ Section 4</div>
          <h2 className="section-title">Key <span className="accent">Features</span></h2>
          <p className="section-desc">Everything a farmer needs, powered by artificial intelligence and designed for simplicity.</p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card animate-on-scroll" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <span className="feature-name">{f.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ——————————————————————— Workflow ——————————————————————— */

function WorkflowSection() {
  return (
    <section className="workflow-section" id="workflow">
      <div className="section-container">
        <div className="section-header">
          <div className="section-number">⚙️ Section 5</div>
          <h2 className="section-title">AI Workflow</h2>
          <p className="section-desc">From farmer input to smart recommendations — how our AI analysis engine works.</p>
        </div>
        <div className="workflow-pipeline">
          {workflowSteps.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <div className="workflow-step animate-on-scroll">
                <div className="workflow-step-num">{s.num}</div>
                <div className="workflow-step-icon">{s.icon}</div>
                <div className="workflow-step-title">{s.title}</div>
                <div className="workflow-step-desc">{s.desc}</div>
              </div>
              {i < workflowSteps.length - 1 && <div className="workflow-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ——————————————————————— Tech Stack ——————————————————————— */

function TechSection() {
  return (
    <section className="tech-section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-number">🛠️ Section 6</div>
          <h2 className="section-title">Technology <span className="accent">Stack</span></h2>
          <p className="section-desc">Built with industry-leading tools and frameworks for reliability and performance.</p>
        </div>
        <div className="tech-grid">
          {techStack.map((t, i) => (
            <div className="tech-item animate-on-scroll" key={i}>
              <div className={`tech-icon ${t.cls}`}>{t.icon}</div>
              <span className="tech-name">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ——————————————————————— Impact ——————————————————————— */

function ImpactSection() {
  return (
    <section className="impact-section" id="impact">
      <div className="section-container">
        <div className="section-header">
          <div className="section-number">🎯 Section 7</div>
          <h2 className="section-title">Expected <span className="accent">Impact</span></h2>
          <p className="section-desc">Measurable outcomes that transform farming communities across Bangladesh.</p>
        </div>
        <div className="impact-grid">
          {impacts.map((im, i) => (
            <div className="impact-card animate-on-scroll" key={i}>
              <div className={`impact-icon ${im.cls}`}>{im.icon}</div>
              <div className="impact-value">{im.value}</div>
              <div className="impact-label">{im.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ——————————————————————— SDG ——————————————————————— */

function SDGSection() {
  return (
    <section className="sdg-section" id="sdg">
      <div className="section-container">
        <div className="section-header">
          <div className="section-number">🌍 Section 8</div>
          <h2 className="section-title">SDG <span className="accent">Alignment</span></h2>
          <p className="section-desc">Contributing to the United Nations Sustainable Development Goals.</p>
        </div>
        <div className="sdg-grid">
          {sdgs.map((s, i) => (
            <div className={`sdg-card ${s.cls} animate-on-scroll`} key={i}>
              <div className="sdg-num">{s.num}</div>
              <div className="sdg-name">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ——————————————————————— Statistics ——————————————————————— */

function StatsSection() {
  return (
    <section className="stats-section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-number">📊 Section 10</div>
          <h2 className="section-title">Statistics</h2>
        </div>
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat-card animate-on-scroll" key={i}>
              <div className="stat-card-icon">{s.icon}</div>
              <div className="stat-card-text" dangerouslySetInnerHTML={{ __html: s.text }} />
            </div>
          ))}
        </div>
        <div className="stats-quote animate-on-scroll">
          <blockquote>
            "Empowering Farmers, Feeding the Nation,<br />Building a Sustainable Future."
          </blockquote>
        </div>
      </div>
    </section>
  )
}

/* ——————————————————————— Future Scope ——————————————————————— */

function FutureSection() {
  return (
    <section className="future-section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-number">🔮 Section 9</div>
          <h2 className="section-title">Future <span className="accent">Scope</span></h2>
          <p className="section-desc">What's next for AgriSense AI — scaling impact and innovation.</p>
        </div>
        <div className="future-grid">
          {futureItems.map((f, i) => (
            <div className="future-card animate-on-scroll" key={i}>
              <div className="future-icon">{f.icon}</div>
              <div>
                <div className="future-title">{f.title}</div>
                <div className="future-desc">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ——————————————————————— CTA / Team ——————————————————————— */

function CTASection() {
  return (
    <section className="cta-section" id="cta">
      <div className="section-container">
        <div className="cta-inner animate-on-scroll">
          <div className="team-info">
            <div className="team-item">
              <div className="team-item-icon">👥</div>
              <div>
                <div className="team-item-label">Team Name</div>
                <div className="team-item-value">AgriSense AI</div>
              </div>
            </div>
            <div className="team-item">
              <div className="team-item-icon">🧑‍💻</div>
              <div>
                <div className="team-item-label">Members</div>
                <div className="team-item-value">2</div>
              </div>
            </div>
            <div className="team-item">
              <div className="team-item-icon">🏷️</div>
              <div>
                <div className="team-item-label">Category</div>
                <div className="team-item-value">AI / Agriculture</div>
              </div>
            </div>
          </div>
          <h2 className="cta-heading">Together, Let's Build a Smarter &amp; Greener Bangladesh</h2>
          <p className="cta-desc">Join us in transforming agriculture with the power of Artificial Intelligence.</p>
          <div className="cta-buttons">
            <Link className="btn-primary" to="/app">🚀 View Prototype</Link>
            <button className="btn-secondary" style={{ color: 'var(--green-700)', borderColor: 'var(--green-300)' }}>📧 Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ——————————————————————— Footer ——————————————————————— */

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">TOGETHER, LET'S BUILD A SMARTER &amp; GREENER BANGLADESH 🇧🇩</p>
      <p className="footer-sub">© 2025 AgriSense AI — All rights reserved.</p>
    </footer>
  )
}

/* ——————————————————————— App ——————————————————————— */

export default function LandingPage() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <Pillars />
      <IntroSection />
      <SolutionSection />
      <FeaturesSection />
      <WorkflowSection />
      <TechSection />
      <ImpactSection />
      <SDGSection />
      <StatsSection />
      <FutureSection />
      <CTASection />
      <Footer />
    </div>
  )
}
