import { useEffect, useRef } from "react";

// Static particles: [top%, left%, size-px, duration-s, delay-s, opacity]
const PARTICLES = [
  ["5%","8%",2,7,0,0.5],["12%","22%",1,9,1.2,0.35],["8%","55%",2,6,0.5,0.45],
  ["3%","73%",1,8,2,0.3],["18%","88%",3,10,0.8,0.4],["28%","4%",1,7,3,0.35],
  ["35%","45%",2,8,1.5,0.3],["42%","91%",1,6,2.5,0.45],["55%","18%",3,9,0.3,0.4],
  ["60%","67%",2,7,1.8,0.35],["70%","38%",1,8,0.7,0.3],["75%","82%",2,10,2.2,0.5],
  ["80%","12%",1,6,3.5,0.35],["85%","50%",3,7,1,0.4],["92%","30%",2,9,2.8,0.3],
  ["88%","70%",1,8,0.4,0.45],["50%","96%",2,6,1.6,0.35],["20%","32%",1,10,3.2,0.3],
  ["65%","25%",2,7,2,0.4],["45%","60%",1,8,1.1,0.35],
];

export default function Hero() {
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    const items = [badgeRef, headingRef, subRef, ctaRef];
    items.forEach((ref, i) => {
      const el = ref.current;
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(32px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.75s ease, transform 0.75s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 120 + i * 160);
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0d1f2d 0%, #112233 55%, #091d2c 100%)" }}
    >
      {/* Animated gradient sweep */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(0,188,212,0.04) 0%, transparent 50%, rgba(0,150,170,0.03) 100%)",
          animation: "gradientShift 8s ease infinite alternate",
        }}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      {/* Floating particles */}
      {PARTICLES.map(([top, left, size, dur, delay, opacity], i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            top, left,
            width: size + "px", height: size + "px",
            background: "#00bcd4",
            opacity,
            animation: `floatParticle ${dur}s ease ${delay}s infinite`,
          }}
        />
      ))}

      {/* Large ambient glows */}
      <div className="absolute pointer-events-none" style={{
        top: "10%", right: "5%",
        width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(0,188,212,0.09) 0%, transparent 65%)",
        borderRadius: "50%",
      }} />
      <div className="absolute pointer-events-none" style={{
        bottom: "5%", left: "-8%",
        width: "380px", height: "380px",
        background: "radial-gradient(circle, rgba(0,188,212,0.06) 0%, transparent 65%)",
        borderRadius: "50%",
      }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left content */}
        <div>
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-semibold tracking-widest"
            style={{ background: "rgba(0,188,212,0.12)", border: "1px solid rgba(0,188,212,0.3)", color: "#00bcd4" }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#00bcd4" }} />
            AI CONSULTING · LOS ANGELES
          </div>

          <h1 ref={headingRef} className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 text-white">
            Practical{" "}
            <span className="gradient-text">AI Solutions</span>
            {" "}for Los Angeles{" "}
            <span className="gradient-text">Small Businesses</span>
          </h1>

          <p ref={subRef} className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
            We help LA businesses automate workflows, cut operating costs, and grow faster
            with AI built around your actual processes — not generic templates.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-cyan text-center">
              Book Your Consultation
            </a>
            <a href="#services" className="btn-outline text-center">
              Explore Services
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap gap-8">
            {[
              { num: "50+", label: "Projects Delivered" },
              { num: "35%", label: "Average ROI Boost" },
              { num: "24/7", label: "AI Support" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-black" style={{ color: "#00bcd4" }}>{stat.num}</div>
                <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — hero photo */}
        <div
          className="hidden lg:flex items-center justify-center relative"
          style={{ height: "480px", animation: "fadeSlideIn 1s ease 0.4s both" }}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/hero.jpg"
              alt="AI Business Solutions"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(13,31,45,0.45) 0%, rgba(0,188,212,0.08) 100%)" }}
            />
            {/* Cyan border glow */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ border: "1px solid rgba(0,188,212,0.25)" }}
            />
          </div>

          {/* Floating stat badges */}
          <div
            className="absolute top-6 right-2 px-4 py-2.5 rounded-xl text-center"
            style={{
              background: "rgba(13,31,45,0.9)",
              border: "1px solid rgba(0,188,212,0.3)",
              backdropFilter: "blur(8px)",
              animation: "fadeSlideIn 0.7s ease 1s both",
            }}
          >
            <div className="text-xl font-black" style={{ color: "#00bcd4" }}>+35%</div>
            <div className="text-xs text-slate-400">Avg ROI</div>
          </div>
          <div
            className="absolute bottom-10 left-2 px-4 py-2.5 rounded-xl text-center"
            style={{
              background: "rgba(13,31,45,0.9)",
              border: "1px solid rgba(0,188,212,0.25)",
              backdropFilter: "blur(8px)",
              animation: "fadeSlideIn 0.7s ease 1.2s both",
            }}
          >
            <div className="text-xl font-black" style={{ color: "#00bcd4" }}>25 hrs</div>
            <div className="text-xs text-slate-400">Saved / week</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <div className="text-xs text-slate-500 tracking-widest">SCROLL</div>
        <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, #00bcd4, transparent)" }} />
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) scale(1); }
          33%       { transform: translateY(-18px) scale(1.3); }
          66%       { transform: translateY(-8px) scale(0.8); }
        }
        @keyframes gradientShift {
          0%   { opacity: 0.6; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
