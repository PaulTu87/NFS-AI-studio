import { useForm, ValidationError } from "@formspree/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/nfs_ai_studio/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/paul-t-aaa607398/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/me/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const inputStyle = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
};

const inputHandlers = {
  onFocus: (e) => {
    e.target.style.borderColor = "rgba(0,188,212,0.5)";
    e.target.style.boxShadow = "0 0 0 1px rgba(0,188,212,0.3)";
  },
  onBlur: (e) => {
    e.target.style.borderColor = "rgba(255,255,255,0.1)";
    e.target.style.boxShadow = "none";
  },
};

export default function Contact() {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();
  const [state, handleSubmit] = useForm("mykljdpr");

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d1f2d 0%, #091520 100%)" }}
    >
      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          width: "700px", height: "400px",
          background: "radial-gradient(ellipse, rgba(0,188,212,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest"
            style={{ background: "rgba(0,188,212,0.1)", color: "#00bcd4", border: "1px solid rgba(0,188,212,0.25)" }}
          >
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Ready to{" "}
            <span className="gradient-text">Transform Your Business?</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Book a free consultation. No commitment. We'll identify exactly where AI can help you most.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — contact info */}
          <div ref={leftRef} className="slide-left flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="flex flex-col gap-5">
                {/* Phone */}
                <a
                  href="tel:+18184504594"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "rgba(0,188,212,0.12)" }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="#00bcd4" strokeWidth={1.5} className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Phone</div>
                    <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors">818-450-4594</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:nfsaistudio@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "rgba(0,188,212,0.12)" }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="#00bcd4" strokeWidth={1.5} className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Email</div>
                    <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors">nfsaistudio@gmail.com</div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(0,188,212,0.12)" }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="#00bcd4" strokeWidth={1.5} className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Location</div>
                    <div className="font-semibold text-white">Los Angeles, CA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <div className="text-sm text-slate-500 mb-4">Follow Us</div>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{ background: "rgba(255,255,255,0.05)", color: "#94a3b8", border: "1px solid rgba(255,255,255,0.08)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(0,188,212,0.15)";
                      e.currentTarget.style.color = "#00bcd4";
                      e.currentTarget.style.borderColor = "rgba(0,188,212,0.3)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                      e.currentTarget.style.color = "#94a3b8";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ height: 220 }}>
              <img
                src="/contact.jpg"
                alt="Get in touch with NFS Studio"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(13,31,45,0.85) 0%, rgba(13,31,45,0.2) 60%)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full animate-pulse flex-shrink-0" style={{ background: "#00bcd4" }} />
                <div>
                  <div className="text-sm font-semibold text-white">Currently Accepting New Clients</div>
                  <div className="text-xs text-slate-400">Free consultation · No commitment required</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div ref={rightRef} className="slide-right">
            <div
              className="p-8 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {state.succeeded ? (
                <div className="text-center py-10">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: "rgba(34,197,94,0.15)", border: "2px solid rgba(34,197,94,0.4)" }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth={2.5} className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Thank you!</h3>
                  <p className="text-slate-400 mb-6">We'll contact you within 24 hours.</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="btn-cyan"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="text-xl font-bold text-white mb-1">Book a Free Consultation</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Smith"
                        required
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all duration-200"
                        style={inputStyle}
                        {...inputHandlers}
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-400 mt-1" />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="(818) 000-0000"
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all duration-200"
                        style={inputStyle}
                        {...inputHandlers}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@company.com"
                      required
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all duration-200"
                      style={inputStyle}
                      {...inputHandlers}
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-400 mt-1" />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">How can we help?</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your business and what you're looking to automate or improve..."
                      required
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all duration-200 resize-none"
                      style={inputStyle}
                      {...inputHandlers}
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-400 mt-1" />
                  </div>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="btn-cyan w-full text-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? "Sending..." : "Send Message — It's Free"}
                  </button>
                  <p className="text-xs text-slate-500 text-center">
                    We respond within 24 hours. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
