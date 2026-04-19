import { useEffect, useRef, useState } from "react";
import { useScrollAnimationChildren } from "../hooks/useScrollAnimation";

const steps = [
  {
    num: "01",
    title: "Discovery & AI Audit",
    description: "We dive deep into your business — processes, tools, pain points, and goals. We map out where AI can create the most value and where it would be overkill.",
    bullets: ["Current workflow analysis", "Opportunity scoring", "Risk & cost assessment"],
    duration: "Week 1–2",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
        <circle cx="20" cy="20" r="12" stroke="#00bcd4" strokeWidth="1.5" fill="rgba(0,188,212,0.1)" />
        <circle cx="20" cy="20" r="6" stroke="#26c6da" strokeWidth="1" strokeDasharray="2 2" fill="none" />
        <circle cx="20" cy="20" r="2.5" fill="#00bcd4" />
        <line x1="28.5" y1="28.5" x2="34" y2="34" stroke="#00bcd4" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Strategy & Implementation",
    description: "We build and deploy AI solutions tailored to your exact needs — chatbots, automations, integrations, or analytics — with your team involved every step of the way.",
    bullets: ["Custom AI development", "System integrations", "Team onboarding"],
    duration: "Week 3–8",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
        <rect x="8" y="12" width="24" height="18" rx="3" stroke="#00bcd4" strokeWidth="1.5" fill="rgba(0,188,212,0.1)" />
        <line x1="13" y1="19" x2="27" y2="19" stroke="#26c6da" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="13" y1="24" x2="21" y2="24" stroke="#26c6da" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M25 27 L30 22 L35 27" stroke="#00bcd4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="30" cy="22" r="2.5" fill="#00bcd4" opacity="0.8" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Optimization & Support",
    description: "After launch we monitor performance, gather feedback, and continuously improve. Your AI gets smarter over time — and so does your team.",
    bullets: ["Performance monitoring", "Ongoing tuning", "Dedicated support channel"],
    duration: "Ongoing",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
        <path d="M8 28 L14 20 L20 24 L28 12 L34 18" stroke="#00bcd4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {[[14,20],[20,24],[28,12]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r={2.5} fill="#0d1f2d" stroke="#26c6da" strokeWidth={1.5} />
        ))}
        <circle cx="34" cy="18" r="3.5" fill="#00bcd4" opacity="0.9" />
        <path d="M24 32 Q28 29 32 32 Q28 35 24 32Z" stroke="#00bcd4" strokeWidth="1" fill="rgba(0,188,212,0.15)" />
      </svg>
    ),
  },
];

/* Animated SVG timeline bar */
function TimelineBar({ visible }) {
  return (
    <div className="hidden lg:block relative mb-12 px-4">
      <svg viewBox="0 0 880 72" className="w-full" height="72" style={{ overflow: "visible" }}>
        <defs>
          <filter id="timelineGlow" x="-20%" y="-100%" width="140%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00bcd4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#26c6da" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* Background track */}
        <line x1="130" y1="36" x2="750" y2="36"
          stroke="rgba(0,188,212,0.12)" strokeWidth="2" />

        {/* Animated fill line */}
        <line x1="130" y1="36" x2="750" y2="36"
          stroke="url(#lineGrad)" strokeWidth="2"
          strokeDasharray="620" strokeDashoffset={visible ? "0" : "620"}
          style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1) 0.3s" }}
          filter="url(#timelineGlow)"
        />

        {/* Arrow at end */}
        <g style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.4s ease 1.6s",
        }}>
          <path d="M742 30 L754 36 L742 42"
            fill="none" stroke="#26c6da" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Step circles + numbers */}
        {[130, 440, 750].map((x, i) => (
          <g key={i} style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.5)",
            transformOrigin: `${x}px 36px`,
            transition: `opacity 0.5s ease ${0.2 + i * 0.4}s, transform 0.5s ease ${0.2 + i * 0.4}s`,
          }}>
            {/* Outer ring pulse */}
            <circle cx={x} cy={36} r={30}
              fill="rgba(0,188,212,0.06)"
              style={{ animation: `ringPulse 3s ease ${i}s infinite` }} />
            {/* Mid ring */}
            <circle cx={x} cy={36} r={22}
              fill="rgba(0,188,212,0.08)"
              stroke="rgba(0,188,212,0.2)" strokeWidth={1} />
            {/* Inner */}
            <circle cx={x} cy={36} r={14}
              fill="#0d1f2d"
              stroke="#00bcd4" strokeWidth={2} />
            {/* Number */}
            <text x={x} y={41} textAnchor="middle"
              fontSize="11" fontWeight="900" fill="#00bcd4"
              fontFamily="system-ui, sans-serif">
              0{i + 1}
            </text>
          </g>
        ))}

        {/* Midpoint arrows */}
        {[285, 595].map((x, i) => (
          <g key={i} style={{
            opacity: visible ? 0.4 : 0,
            transition: `opacity 0.4s ease ${0.8 + i * 0.4}s`,
          }}>
            <path d={`M${x - 6} 30 L${x + 6} 36 L${x - 6} 42`}
              fill="none" stroke="#00bcd4" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round" />
          </g>
        ))}
      </svg>

      <style>{`
        @keyframes ringPulse {
          0%, 100% { opacity: 0.3; r: 26; }
          50%       { opacity: 0.8; r: 32; }
        }
      `}</style>
    </div>
  );
}

export default function Process() {
  const stepsRef = useScrollAnimationChildren(0.05);
  const [timelineVisible, setTimelineVisible] = useState(false);

  const titleRef = useRef(null);
  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const section = document.getElementById("process");
    if (!section) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTimelineVisible(true); obs.unobserve(section); } },
      { threshold: 0.2 }
    );
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="process" className="py-24 relative overflow-hidden" style={{ background: "#0d1f2d" }}>
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div ref={titleRef} className="fade-up text-center mb-10">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest"
            style={{ background: "rgba(0,188,212,0.1)", color: "#00bcd4", border: "1px solid rgba(0,188,212,0.25)" }}>
            HOW WE WORK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Our <span className="gradient-text">3-Step Process</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            A proven methodology that takes you from idea to working AI in weeks.
          </p>
        </div>

        {/* Animated timeline */}
        <TimelineBar visible={timelineVisible} />

        {/* Step cards */}
        <div ref={stepsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6 stagger-children">
          {steps.map((step) => (
            <div key={step.num}
              className="fade-up relative flex flex-col p-8 rounded-2xl transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(0,188,212,0.4)";
                e.currentTarget.style.background = "rgba(0,188,212,0.05)";
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,188,212,0.1)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Icon + number row */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(0,188,212,0.1)" }}>
                  {step.icon}
                </div>
                <div className="text-5xl font-black leading-none"
                  style={{ color: "rgba(0,188,212,0.18)" }}>
                  {step.num}
                </div>
              </div>

              <div className="mb-3 self-start px-2.5 py-0.5 rounded-full text-xs font-semibold"
                style={{ background: "rgba(0,188,212,0.1)", color: "#00bcd4" }}>
                {step.duration}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{step.description}</p>

              <ul className="flex flex-col gap-2 mt-auto">
                {step.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#00bcd4" }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-slate-400 mb-5">Ready to get started?</p>
          <a href="#contact" className="btn-cyan inline-block">
            Schedule a Free Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}
