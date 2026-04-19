import { useScrollAnimation, useScrollAnimationChildren } from "../hooks/useScrollAnimation";

/* ── Large 80×80 SVG illustrations ── */

function IconAudit() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
      <defs>
        <radialGradient id="auditBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00bcd4" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#00bcd4" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill="url(#auditBg)" />
      {/* Clipboard */}
      <rect x="20" y="18" width="32" height="42" rx="4" stroke="#00bcd4" strokeWidth="1.5" fill="rgba(0,188,212,0.06)" />
      <rect x="30" y="14" width="12" height="8" rx="2" stroke="#00bcd4" strokeWidth="1.5" fill="rgba(0,188,212,0.1)" />
      {/* Lines on clipboard */}
      <line x1="26" y1="30" x2="46" y2="30" stroke="#26c6da" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="26" y1="37" x2="46" y2="37" stroke="#26c6da" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="26" y1="44" x2="38" y2="44" stroke="#26c6da" strokeWidth="1.2" strokeLinecap="round" />
      {/* Magnifying glass */}
      <circle cx="48" cy="52" r="10" stroke="#00bcd4" strokeWidth="2" fill="rgba(0,188,212,0.08)" />
      <circle cx="48" cy="52" r="6" stroke="#26c6da" strokeWidth="1" strokeDasharray="2 2" fill="none" />
      <line x1="55" y1="59" x2="62" y2="66" stroke="#00bcd4" strokeWidth="2.5" strokeLinecap="round" />
      {/* Sparkle top right */}
      <circle cx="60" cy="20" r="2.5" fill="#00bcd4" opacity="0.7" />
      <line x1="60" y1="15" x2="60" y2="17" stroke="#00bcd4" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="60" y1="23" x2="60" y2="25" stroke="#00bcd4" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="55" y1="20" x2="57" y2="20" stroke="#00bcd4" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="63" y1="20" x2="65" y2="20" stroke="#00bcd4" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconAutomation() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
      <defs>
        <radialGradient id="autoBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00bcd4" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#00bcd4" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill="url(#autoBg)" />
      {/* Large gear */}
      <circle cx="30" cy="38" r="13" stroke="#00bcd4" strokeWidth="2" fill="rgba(0,188,212,0.07)" />
      <circle cx="30" cy="38" r="5" stroke="#00bcd4" strokeWidth="1.5" fill="rgba(0,188,212,0.15)" />
      {/* Gear teeth large */}
      {[0,45,90,135,180,225,270,315].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 30 + 13 * Math.cos(rad), y1 = 38 + 13 * Math.sin(rad);
        const x2 = 30 + 17 * Math.cos(rad), y2 = 38 + 17 * Math.sin(rad);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#00bcd4" strokeWidth="3.5" strokeLinecap="round" />;
      })}
      {/* Small gear */}
      <circle cx="52" cy="30" r="9" stroke="#26c6da" strokeWidth="1.5" fill="rgba(0,188,212,0.06)" />
      <circle cx="52" cy="30" r="3.5" stroke="#26c6da" strokeWidth="1.5" fill="rgba(0,188,212,0.12)" />
      {[0,60,120,180,240,300].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 52 + 9 * Math.cos(rad), y1 = 30 + 9 * Math.sin(rad);
        const x2 = 52 + 12.5 * Math.cos(rad), y2 = 30 + 12.5 * Math.sin(rad);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#26c6da" strokeWidth="2.5" strokeLinecap="round" />;
      })}
      {/* Lightning bolt */}
      <path d="M38 52 L34 62 L40 58 L36 70" stroke="#00bcd4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Arrow flow */}
      <path d="M58 48 C62 44 65 50 61 54" stroke="#26c6da" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M59 54 L61 54 L61 58" stroke="#26c6da" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function IconChatbot() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
      <defs>
        <radialGradient id="chatBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00bcd4" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#00bcd4" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill="url(#chatBg)" />
      {/* Main chat bubble */}
      <rect x="12" y="18" width="44" height="30" rx="8" stroke="#00bcd4" strokeWidth="1.8" fill="rgba(0,188,212,0.08)" />
      {/* Bubble tail */}
      <path d="M22 48 L18 58 L30 48Z" stroke="#00bcd4" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(0,188,212,0.08)" />
      {/* Sound wave inside bubble */}
      <line x1="28" y1="33" x2="28" y2="33" stroke="#26c6da" strokeWidth="3" strokeLinecap="round" />
      {[[-8,5],[-4,9],[0,13],[4,9],[8,5]].map(([dx, h], i) => (
        <line key={i}
          x1={40 + dx} y1={33 - h / 2}
          x2={40 + dx} y2={33 + h / 2}
          stroke="#26c6da" strokeWidth="2.5" strokeLinecap="round"
        />
      ))}
      {/* Small reply bubble */}
      <rect x="38" y="52" width="26" height="16" rx="5" stroke="#26c6da" strokeWidth="1.5" fill="rgba(38,198,218,0.07)" />
      {/* Dots in small bubble */}
      {[46, 51, 56].map(x => (
        <circle key={x} cx={x} cy={60} r={1.8} fill="#26c6da" opacity="0.7" />
      ))}
      {/* Signal arcs top right */}
      <path d="M56 22 Q60 22 60 26" stroke="#00bcd4" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M56 18 Q65 18 65 27" stroke="#00bcd4" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
    </svg>
  );
}

function IconAnalytics() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
      <defs>
        <radialGradient id="analyticsBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00bcd4" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#00bcd4" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bar1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00bcd4" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#00bcd4" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="bar2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#26c6da" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#26c6da" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill="url(#analyticsBg)" />
      {/* Grid lines */}
      {[18, 28, 38, 48].map(y => (
        <line key={y} x1="16" y1={y} x2="62" y2={y} stroke="rgba(0,188,212,0.12)" strokeWidth="0.8" />
      ))}
      {/* Bars */}
      <rect x="18" y="40" width="7" height="18" rx="2" fill="url(#bar1)" />
      <rect x="28" y="33" width="7" height="25" rx="2" fill="url(#bar1)" />
      <rect x="38" y="26" width="7" height="32" rx="2" fill="url(#bar1)" />
      <rect x="48" y="18" width="7" height="40" rx="2" fill="url(#bar2)" />
      {/* Trend line */}
      <polyline points="21,42 31,35 41,28 51,20" stroke="#26c6da" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Dots on trend line */}
      {[[21,42],[31,35],[41,28],[51,20]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={3} fill="#0d1f2d" stroke="#26c6da" strokeWidth="1.5" />
      ))}
      {/* Sparkle */}
      <circle cx="62" cy="16" r="3" fill="#00bcd4" opacity="0.8" />
      <line x1="62" y1="10" x2="62" y2="12.5" stroke="#00bcd4" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="62" y1="19.5" x2="62" y2="22" stroke="#00bcd4" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="56" y1="16" x2="58.5" y2="16" stroke="#00bcd4" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="65.5" y1="16" x2="68" y2="16" stroke="#00bcd4" strokeWidth="1.5" strokeLinecap="round" />
      {/* X axis */}
      <line x1="14" y1="58" x2="64" y2="58" stroke="rgba(0,188,212,0.25)" strokeWidth="1" />
    </svg>
  );
}

function IconIntegrations() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
      <defs>
        <radialGradient id="intBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00bcd4" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#00bcd4" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill="url(#intBg)" />
      {/* Center hub */}
      <circle cx="40" cy="40" r="9" stroke="#00bcd4" strokeWidth="2" fill="rgba(0,188,212,0.15)" />
      <circle cx="40" cy="40" r="4" fill="#00bcd4" opacity="0.9" />
      {/* Satellite nodes + connecting lines */}
      {[
        [40, 16, "#00bcd4"],
        [62, 28, "#26c6da"],
        [62, 52, "#00bcd4"],
        [40, 64, "#26c6da"],
        [18, 52, "#00bcd4"],
        [18, 28, "#26c6da"],
      ].map(([nx, ny, color], i) => (
        <g key={i}>
          <line x1={40} y1={40} x2={nx} y2={ny}
            stroke={color} strokeWidth="1.2" strokeDasharray="3 3" opacity="0.5" />
          <circle cx={nx} cy={ny} r={6} stroke={color} strokeWidth="1.5" fill="rgba(0,188,212,0.08)" />
          <circle cx={nx} cy={ny} r={2.5} fill={color} opacity="0.8" />
        </g>
      ))}
      {/* Connection arcs between satellites */}
      <path d="M40 16 Q62 16 62 28" stroke="rgba(0,188,212,0.2)" strokeWidth="1" fill="none" />
      <path d="M62 52 Q62 64 40 64" stroke="rgba(38,198,218,0.2)" strokeWidth="1" fill="none" />
      <path d="M18 52 Q18 64 40 64" stroke="rgba(0,188,212,0.2)" strokeWidth="1" fill="none" />
    </svg>
  );
}

function IconTraining() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
      <defs>
        <radialGradient id="trainBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00bcd4" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#00bcd4" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill="url(#trainBg)" />
      {/* Book body */}
      <rect x="14" y="22" width="34" height="38" rx="3" stroke="#00bcd4" strokeWidth="1.8" fill="rgba(0,188,212,0.07)" />
      {/* Book spine */}
      <line x1="22" y1="22" x2="22" y2="60" stroke="#00bcd4" strokeWidth="2.5" />
      {/* Book lines */}
      <line x1="28" y1="32" x2="42" y2="32" stroke="#26c6da" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="28" y1="38" x2="42" y2="38" stroke="#26c6da" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="28" y1="44" x2="36" y2="44" stroke="#26c6da" strokeWidth="1.2" strokeLinecap="round" />
      {/* Graduation cap */}
      <ellipse cx="54" cy="44" rx="10" ry="4" stroke="#00bcd4" strokeWidth="1.5" fill="rgba(0,188,212,0.1)" />
      <rect x="50" y="38" width="8" height="6" rx="1" stroke="#00bcd4" strokeWidth="1.5" fill="rgba(0,188,212,0.08)" />
      <line x1="54" y1="44" x2="54" y2="52" stroke="#00bcd4" strokeWidth="1.5" />
      <circle cx="54" cy="53" r="2.5" fill="#00bcd4" opacity="0.8" />
      {/* Sparkle */}
      <circle cx="62" cy="20" r="2.5" fill="#26c6da" opacity="0.8" />
      <line x1="62" y1="15" x2="62" y2="17" stroke="#26c6da" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="62" y1="23" x2="62" y2="25" stroke="#26c6da" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="57" y1="20" x2="59" y2="20" stroke="#26c6da" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="65" y1="20" x2="67" y2="20" stroke="#26c6da" strokeWidth="1.5" strokeLinecap="round" />
      {/* AI badge */}
      <rect x="42" y="54" width="18" height="10" rx="4" stroke="#00bcd4" strokeWidth="1.2" fill="rgba(0,188,212,0.12)" />
      <text x="51" y="62" textAnchor="middle" fontSize="7" fill="#00bcd4" fontWeight="bold" fontFamily="system-ui">AI</text>
    </svg>
  );
}

const services = [
  { icon: <IconAudit />, title: "AI Audit & Strategy", description: "We analyze your current workflows and identify the highest-impact opportunities for AI adoption — delivered as a clear, actionable roadmap." },
  { icon: <IconAutomation />, title: "Business Process Automation", description: "Replace repetitive manual tasks with intelligent AI workflows — from lead routing and invoice processing to scheduling and reporting." },
  { icon: <IconChatbot />, title: "AI Chatbots & Voice Agents", description: "Deploy conversational AI that handles customer inquiries, qualifies leads, and books appointments — 24/7, across all channels." },
  { icon: <IconAnalytics />, title: "Data Analytics & Insights", description: "Turn your raw data into strategic intelligence. We build AI-powered dashboards and prediction models that guide smarter decisions." },
  { icon: <IconIntegrations />, title: "Custom AI Integrations", description: "We integrate AI directly into your existing tools — CRM, ERP, e-commerce, or custom software — with clean APIs and zero friction." },
  { icon: <IconTraining />, title: "AI Training & Support", description: "We train your team to work confidently with AI tools and provide ongoing support so your investment keeps delivering results." },
];

export default function Services() {
  const titleRef = useScrollAnimation();
  const gridRef = useScrollAnimationChildren(0.05);

  return (
    <section id="services" className="py-24 relative overflow-hidden" style={{ background: "#0d1f2d" }}>
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/services.jpg"
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,31,45,0.6) 0%, rgba(13,31,45,0.85) 40%, #0d1f2d 100%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div ref={titleRef} className="fade-up text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest"
            style={{ background: "rgba(0,188,212,0.1)", color: "#00bcd4", border: "1px solid rgba(0,188,212,0.25)" }}>
            WHAT WE DO
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Our <span className="gradient-text">AI Services</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            End-to-end AI solutions designed to solve real problems and deliver measurable ROI.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {services.map((s) => (
            <div key={s.title} className="card-glow fade-up p-7 flex flex-col gap-5 group">
              {/* Icon */}
              <div className="transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_rgba(0,188,212,0.5)]"
                style={{ width: 80, height: 80 }}>
                {s.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.description}</p>
              </div>
              <div className="mt-auto pt-1">
                <a href="#contact"
                  className="text-sm font-semibold inline-flex items-center gap-1.5 transition-all duration-300"
                  style={{ color: "#00bcd4" }}
                  onMouseEnter={e => { e.currentTarget.style.gap = "10px"; e.currentTarget.style.textShadow = "0 0 8px rgba(0,188,212,0.5)"; }}
                  onMouseLeave={e => { e.currentTarget.style.gap = "6px"; e.currentTarget.style.textShadow = "none"; }}>
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
