import { useScrollAnimation } from "../hooks/useScrollAnimation";

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#00bcd4" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "Simplicity",
    description: "We cut through the hype and deliver AI solutions that are clear, practical, and easy for your team to adopt.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#00bcd4" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Speed",
    description: "From audit to deployment in weeks, not months. We move fast so you start seeing ROI before the competition even starts planning.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#00bcd4" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Support",
    description: "We don't disappear after launch. Ongoing optimization, training, and dedicated support ensure your AI keeps delivering.",
  },
];

export default function About() {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d1f2d 0%, #0a1a27 100%)" }}
    >
      {/* Background glow */}
      <div className="absolute pointer-events-none" style={{
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "800px", height: "400px",
        background: "radial-gradient(ellipse, rgba(0,188,212,0.05) 0%, transparent 70%)",
      }} />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
        {/* Left — photo */}
        <div ref={leftRef} className="slide-left flex items-center justify-center">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ maxWidth: 440 }}>
            <img
              src="/about.jpg"
              alt="NFS Studio team"
              className="w-full object-cover"
              style={{ height: 460 }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(13,31,45,0.65) 0%, transparent 55%)" }}
            />
            <div
              className="absolute bottom-6 left-6 right-6 px-5 py-4 rounded-xl"
              style={{ background: "rgba(13,31,45,0.75)", backdropFilter: "blur(8px)", border: "1px solid rgba(0,188,212,0.2)" }}
            >
              <div className="text-sm font-semibold text-white">NFS Studio · Los Angeles</div>
              <div className="text-xs mt-0.5" style={{ color: "#00bcd4" }}>AI Consulting & Automation</div>
            </div>
          </div>
        </div>

        {/* Right — text + values */}
        <div ref={rightRef} className="slide-right">
          <div className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest"
            style={{ background: "rgba(0,188,212,0.1)", color: "#00bcd4", border: "1px solid rgba(0,188,212,0.25)" }}>
            ABOUT NFS STUDIO
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Enterprise-grade AI.{" "}
            <span className="gradient-text">Small business</span>
            {" "}pricing.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-4">
            NFS Studio was founded in 2024 in Los Angeles by Paul — a software engineer with 5+ years
            of hands-on experience building AI and automation systems. After years of implementing
            enterprise AI for larger organizations, Paul launched NFS Studio with one mission: to give
            small and mid-sized LA businesses access to the same AI technology that Fortune 500 companies
            use — without the enterprise price tag or six-month timelines.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            We don't sell AI for the sake of AI. Every solution we build has to pass one test: does it
            save you time, make you money, or make your customers happier? If not, we don't build it.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { num: "5+", label: "Years in AI & Tech" },
              { num: "50+", label: "Projects Completed" },
              { num: "2024", label: "Founded" },
            ].map((s) => (
              <div key={s.label} className="text-center py-4 rounded-xl"
                style={{ background: "rgba(0,188,212,0.06)", border: "1px solid rgba(0,188,212,0.15)" }}>
                <div className="text-2xl font-black mb-0.5" style={{ color: "#00bcd4" }}>{s.num}</div>
                <div className="text-xs text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="flex flex-col gap-4">
            {values.map((v) => (
              <div key={v.title}
                className="flex gap-4 p-5 rounded-2xl transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0,188,212,0.35)"; e.currentTarget.style.background = "rgba(0,188,212,0.05)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,188,212,0.12)" }}>
                  {v.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{v.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
