import { useScrollAnimation, useScrollAnimationChildren } from "../hooks/useScrollAnimation";
import { useCounter } from "../hooks/useCounter";

/* Parse value string → { prefix, target, suffix } */
function parseStat(str) {
  // "+35%" → prefix="+", target=35, suffix="%"
  // "25+"  → prefix="",  target=25, suffix="+"
  // "40%"  → prefix="",  target=40, suffix="%"
  // "70%"  → prefix="",  target=70, suffix="%"
  const m = str.match(/^([^0-9]*)(\d+)([^0-9]*)$/);
  if (!m) return { prefix: "", target: 0, suffix: str };
  return { prefix: m[1], target: parseInt(m[2], 10), suffix: m[3] };
}

function AnimatedStatValue({ value, duration = 1800 }) {
  const { prefix, target, suffix } = parseStat(value);
  const { count, elRef } = useCounter(target, duration);
  return (
    <div ref={elRef} className="text-4xl font-black" style={{ color: "#00bcd4" }}>
      {prefix}{count}{suffix}
    </div>
  );
}

const caseStudies = [
  {
    industry: "Healthcare Practice",
    location: "Los Angeles, CA",
    result: "25 hrs/week",
    resultLabel: "Time Saved",
    description: "Automated patient intake forms, appointment reminders, and follow-up messaging. Staff redirected from admin work to patient care.",
    improvements: [
      { label: "Admin hours saved weekly", value: "25 hrs" },
      { label: "No-show rate reduced", value: "−38%" },
      { label: "Patient satisfaction", value: "+22%" },
    ],
    tag: "Automation",
    barWidth: "72%",
  },
  {
    industry: "E-commerce Brand",
    location: "Santa Monica, CA",
    result: "40% faster",
    resultLabel: "Order Processing",
    description: "AI-powered inventory forecasting and order routing eliminated manual reviews. Customer support chatbot handles 70% of tickets automatically.",
    improvements: [
      { label: "Order processing speed", value: "40% faster" },
      { label: "Support ticket resolution", value: "70% automated" },
      { label: "Customer response time", value: "< 30 sec" },
    ],
    tag: "Chatbot + Analytics",
    barWidth: "85%",
  },
  {
    industry: "Real Estate Agency",
    location: "Beverly Hills, CA",
    result: "ROI +35%",
    resultLabel: "First Quarter",
    description: "AI lead scoring and automated follow-up sequences tripled qualified lead conversion. Voice agent qualifies inbound callers around the clock.",
    improvements: [
      { label: "Lead-to-client conversion", value: "+35% ROI" },
      { label: "Qualified leads per month", value: "3× more" },
      { label: "Response time to new leads", value: "< 2 min" },
    ],
    tag: "Voice AI + CRM",
    barWidth: "90%",
  },
];

const globalStats = [
  { value: "25+", label: "Hours saved per client weekly" },
  { value: "40%", label: "Faster business processes" },
  { value: "+35%", label: "Average ROI first quarter" },
  { value: "70%", label: "Support queries automated" },
];

export default function Results() {
  const titleRef = useScrollAnimation();
  const statsRef = useScrollAnimationChildren(0.1);
  const cardsRef = useScrollAnimationChildren(0.05);

  return (
    <section id="results" className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a1a27 0%, #0d1f2d 100%)" }}>
      {/* Glow */}
      <div className="absolute pointer-events-none" style={{
        bottom: "-100px", right: "-100px",
        width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(0,188,212,0.08) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div ref={titleRef} className="fade-up text-center mb-14">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest"
            style={{ background: "rgba(0,188,212,0.1)", color: "#00bcd4", border: "1px solid rgba(0,188,212,0.25)" }}>
            PROVEN RESULTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Real Numbers from{" "}
            <span className="gradient-text">Real Clients</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Every project delivers measurable impact. Here's what our clients achieved.
          </p>
        </div>

        {/* Animated global stats */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16 stagger-children">
          {globalStats.map((s) => (
            <div key={s.label}
              className="fade-in text-center py-8 px-4 rounded-2xl transition-all duration-300"
              style={{ background: "rgba(0,188,212,0.07)", border: "1px solid rgba(0,188,212,0.2)" }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(0,188,212,0.12)";
                e.currentTarget.style.borderColor = "rgba(0,188,212,0.4)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,188,212,0.15)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(0,188,212,0.07)";
                e.currentTarget.style.borderColor = "rgba(0,188,212,0.2)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <AnimatedStatValue value={s.value} />
              <div className="text-sm text-slate-400 mt-2">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Case study cards */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6 stagger-children">
          {caseStudies.map((c) => (
            <div key={c.industry} className="fade-up card-glow p-7 flex flex-col gap-5">
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-bold text-white">{c.industry}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{c.location}</div>
                </div>
                <div className="px-2.5 py-1 rounded-full text-xs font-semibold flex-shrink-0"
                  style={{ background: "rgba(0,188,212,0.12)", color: "#00bcd4" }}>
                  {c.tag}
                </div>
              </div>

              {/* Big result highlight */}
              <div className="p-5 rounded-xl text-center"
                style={{ background: "rgba(0,188,212,0.06)", border: "1px solid rgba(0,188,212,0.15)" }}>
                <div className="text-3xl font-black" style={{ color: "#00bcd4" }}>{c.result}</div>
                <div className="text-xs text-slate-400 mt-1">{c.resultLabel}</div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">{c.description}</p>

              {/* Progress bar */}
              <div>
                <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                  <span>Impact score</span>
                  <span style={{ color: "#00bcd4" }}>{c.barWidth}</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(0,188,212,0.12)" }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: c.barWidth,
                      background: "linear-gradient(to right, #00bcd4, #26c6da)",
                      boxShadow: "0 0 8px rgba(0,188,212,0.5)",
                    }}
                  />
                </div>
              </div>

              {/* Metrics */}
              <div className="flex flex-col gap-2 mt-auto">
                {c.improvements.map((imp) => (
                  <div key={imp.label} className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">{imp.label}</span>
                    <span className="font-semibold text-white">{imp.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
