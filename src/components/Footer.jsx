const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/nfs_ai_studio/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/paul-t-aaa607398/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/me/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const links = {
  Services: [
    "AI Audit & Strategy",
    "Business Process Automation",
    "AI Chatbots & Voice Agents",
    "Data Analytics & Insights",
    "Custom AI Integrations",
    "AI Training & Support",
  ],
  Company: ["About Us", "Our Process", "Case Studies", "Contact"],
};

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-8"
      style={{
        background: "#091520",
        borderTop: "1px solid rgba(0,188,212,0.12)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-black"
                style={{ background: "linear-gradient(135deg, #00bcd4, #0097a7)", color: "#0d1f2d" }}
              >
                NFS
              </div>
              <div>
                <div className="text-sm font-bold tracking-widest text-white">NFS STUDIO</div>
                <div className="text-xs tracking-wider" style={{ color: "#00bcd4" }}>AI CONSULTING</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              AI consulting firm based in Los Angeles. We help businesses automate,
              scale, and compete smarter using practical artificial intelligence solutions.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:+18184504594" className="text-slate-400 hover:text-white transition-colors">
                📞 818-450-4594
              </a>
              <a href="mailto:nfsaistudio@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                ✉️ nfsaistudio@gmail.com
              </a>
              <span className="text-slate-400">📍 Los Angeles, CA</span>
            </div>
            <div className="flex gap-3 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.05)", color: "#94a3b8", border: "1px solid rgba(255,255,255,0.08)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(0,188,212,0.15)";
                    e.currentTarget.style.color = "#00bcd4";
                    e.currentTarget.style.borderColor = "rgba(0,188,212,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.color = "#94a3b8";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-xs font-bold tracking-widest text-white mb-5 uppercase">{heading}</h4>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 transition-colors duration-200"
                      onMouseEnter={(e) => (e.target.style.color = "#00bcd4")}
                      onMouseLeave={(e) => (e.target.style.color = "")}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p className="text-xs text-slate-500">
            © 2024 NFS Studio. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map((t) => (
              <a
                key={t}
                href="#"
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
