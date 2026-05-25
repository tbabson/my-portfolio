import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Server,
  Globe,
  ChevronDown,
  Menu,
  X,
  Phone,
  Terminal,
  Zap,
  Palette,
} from "lucide-react";

const TerminalWindow = () => (
  <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-purple-900/20">
    <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700/50">
      <span className="w-3 h-3 rounded-full bg-red-400/80" />
      <span className="w-3 h-3 rounded-full bg-amber-400/80" />
      <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
      <span className="ml-3 text-xs text-slate-500 font-mono tracking-wide">
        ~/babatunde — bash
      </span>
    </div>
    <div className="p-6 font-mono text-sm leading-relaxed space-y-3">
      <div>
        <span className="text-emerald-400">❯ </span>
        <span className="text-gray-300">whoami</span>
      </div>
      <p className="text-cyan-400 pl-4">Babatunde Taiwo · Full-Stack Developer</p>

      <div>
        <span className="text-emerald-400">❯ </span>
        <span className="text-gray-300">cat stack.txt</span>
      </div>
      <div className="pl-4 space-y-1 text-gray-400">
        <p>
          <span className="text-purple-400">▸ </span>React · TypeScript · Tailwind CSS
        </p>
        <p>
          <span className="text-purple-400">▸ </span>Node.js · Express · Go (chi)
        </p>
        <p>
          <span className="text-purple-400">▸ </span>PostgreSQL · MongoDB · Redis
        </p>
        <p>
          <span className="text-purple-400">▸ </span>Docker · Nginx · Linux
        </p>
      </div>

      <div>
        <span className="text-emerald-400">❯ </span>
        <span className="text-gray-300">status --hire</span>
      </div>
      <div className="flex items-center gap-2 pl-4">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-emerald-400">Open to opportunities</span>
      </div>

      <div className="flex items-center gap-1.5">
        <span className="text-emerald-400">❯ </span>
        <span className="w-2 h-4 bg-gray-400/50 animate-pulse rounded-sm" />
      </div>
    </div>
  </div>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [displayRole, setDisplayRole] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const roles = [
    "Full-Stack Developer",
    "Go Backend Engineer",
    "React Developer",
    "UI Enthusiast",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const current =
        sections.find((s) => {
          const el = document.getElementById(s);
          if (el) {
            const r = el.getBoundingClientRect();
            return r.top <= 100 && r.bottom >= 100;
          }
          return false;
        }) || "home";
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const current = roles[roleIdx];
    let t;
    if (!deleting && displayRole === current) {
      t = setTimeout(() => setDeleting(true), 2500);
    } else if (deleting && displayRole === "") {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    } else {
      t = setTimeout(
        () =>
          setDisplayRole(
            deleting
              ? current.slice(0, displayRole.length - 1)
              : current.slice(0, displayRole.length + 1)
          ),
        deleting ? 40 : 90
      );
    }
    return () => clearTimeout(t);
  }, [displayRole, deleting, roleIdx]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href =
      "https://res.cloudinary.com/dwrmehhg3/image/upload/v1752688080/portfolio/babatunde_taiwo_a_ccgxyf.pdf";
    link.download = "Babatunde_Taiwo_CV.pdf";
    link.click();
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack MERN application with user authentication, payment integration via Stripe, and a feature-rich admin dashboard for managing orders and products.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "https://github.com/tbabson/mealmaster",
      live: "https://mealmaster-52wg.onrender.com",
      image:
        "https://res.cloudinary.com/dwrmehhg3/image/upload/v1752685116/portfolio/Screenshot-2025-07-16-165659_nw80tt.jpg",
      fallbackColor: "bg-gradient-to-br from-purple-500 to-pink-600",
      status: "live",
    },
    {
      title: "Job Board",
      description:
        "Job listing platform with user authentication, job posting, and a full application management workflow for both employers and candidates.",
      tech: ["React", "Redux", "Express", "MongoDB"],
      github: "https://github.com/tbabson/Jobify",
      live: "https://jobify-d6ws.onrender.com",
      image:
        "https://res.cloudinary.com/dwrmehhg3/image/upload/v1752684374/portfolio/Screenshot_2025-07-16_165753_ogirti.png",
      fallbackColor: "bg-gradient-to-br from-blue-500 to-cyan-600",
      status: "live",
    },
    {
      title: "SlimPix",
      description:
        "Fast, client-friendly image compression and conversion web app. Batch-process up to 10 images, choose quality presets, convert formats (JPG, PNG, WebP), and download all results in a single ZIP file. Processed images auto-delete after 5 hours.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Sharp"],
      github: "https://github.com/tbabson/slim-pix",
      live: "https://slim-pix.vercel.app/",
      image:
        "https://res.cloudinary.com/dwrmehhg3/image/upload/v1779714985/slim_xybxzw.jpg",
      fallbackColor: "bg-gradient-to-br from-orange-500 to-rose-600",
      status: "live",
    },
    {
      title: "WorkPlace",
      description:
        "Comprehensive internal HR and operations platform covering GPS-based attendance with geofencing, project & task management, real-time WebSocket chat, leave requests, payroll supplements, memos, expense claims, and role-based access control.",
      tech: ["React", "TypeScript", "Go", "PostgreSQL", "Redis", "WebSocket"],
      github: null,
      live: null,
      image: null,
      fallbackColor: "bg-gradient-to-br from-indigo-500 to-violet-700",
      status: "development",
    },
  ];

  const skillCategories = [
    {
      category: "Languages",
      icon: Code2,
      color: "text-cyan-400",
      border: "border-cyan-400/30",
      bg: "bg-cyan-400/10",
      skills: [
        "JavaScript (ES6+)",
        "TypeScript",
        "Go (Golang)",
        "SQL",
        "HTML5",
        "CSS3",
      ],
    },
    {
      category: "Frontend",
      icon: Globe,
      color: "text-purple-400",
      border: "border-purple-400/30",
      bg: "bg-purple-400/10",
      skills: [
        "React",
        "Redux Toolkit",
        "Zustand",
        "React Query",
        "Tailwind CSS",
        "Vite",
        "Responsive Web Design",
      ],
    },
    {
      category: "Backend",
      icon: Server,
      color: "text-blue-400",
      border: "border-blue-400/30",
      bg: "bg-blue-400/10",
      skills: [
        "Node.js",
        "Express",
        "Go",
        "RESTful APIs",
        "WebSockets",
        "JWT Auth",
      ],
    },
    {
      category: "Databases",
      icon: Database,
      color: "text-emerald-400",
      border: "border-emerald-400/30",
      bg: "bg-emerald-400/10",
      skills: ["PostgreSQL (pgx)", "MongoDB (Mongoose)", "Redis"],
    },
    {
      category: "DevOps & Tools",
      icon: Terminal,
      color: "text-orange-400",
      border: "border-orange-400/30",
      bg: "bg-orange-400/10",
      skills: ["Docker", "Docker Compose", "Nginx", "Git & GitHub", "Linux"],
    },
    {
      category: "Integrations",
      icon: Zap,
      color: "text-pink-400",
      border: "border-pink-400/30",
      bg: "bg-pink-400/10",
      skills: [
        "Stripe",
        "PayPal",
        "Google OAuth2 & Calendar",
        "Cloudinary",
        "Nodemailer",
        "Web Push",
      ],
    },
    {
      category: "Design",
      icon: Palette,
      color: "text-rose-300",
      border: "border-rose-300/30",
      bg: "bg-rose-300/10",
      skills: ["Adobe Photoshop", "Adobe Illustrator", "UI / Visual Design"],
    },
  ];

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  const socialLinks = [
    {
      href: "https://github.com/tbabson",
      icon: Github,
      label: "GitHub",
      external: true,
    },
    {
      href: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
      icon: Linkedin,
      label: "LinkedIn",
      external: true,
    },
    {
      href: "mailto:babatunde.taiwoadekunle@gmail.com",
      icon: Mail,
      label: "Email",
      external: false,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <style>{`
        @keyframes spin-ring {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes blob {
          0%,100% { transform: scale(1) translate(0, 0); }
          33%     { transform: scale(1.08) translate(28px, -38px); }
          66%     { transform: scale(0.92) translate(-22px, 22px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .spin-ring { animation: spin-ring 5s linear infinite; }
        .blob-1    { animation: blob 9s ease-in-out infinite; }
        .blob-2    { animation: blob 11s ease-in-out infinite 2s; }
        .blob-3    { animation: blob 13s ease-in-out infinite 4s; }
        .dot-grid  {
          background-image: radial-gradient(circle, #475569 1px, transparent 1px);
          background-size: 36px 36px;
        }
        .dot-grid-sm {
          background-image: radial-gradient(circle, #334155 1px, transparent 1px);
          background-size: 28px 28px;
        }
      `}</style>

      {/* ── Navigation ─────────────────────────────────────────── */}
      <nav className="fixed top-0 w-full bg-slate-900/75 backdrop-blur-xl border-b border-slate-800/80 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent tracking-tight">
              Babatunde Taiwo.
            </div>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative text-sm font-medium pb-1 transition-colors hover:text-cyan-400 ${
                    activeSection === item.toLowerCase()
                      ? "text-cyan-400"
                      : "text-gray-400"
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-800 space-y-1">
              {navLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2.5 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Animated blobs */}
        <div className="absolute top-24 -left-24 w-[480px] h-[480px] bg-purple-700 rounded-full opacity-[0.09] blur-3xl blob-1 pointer-events-none" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-cyan-600 rounded-full opacity-[0.09] blur-3xl blob-2 pointer-events-none" />
        <div className="absolute bottom-24 left-1/3 w-80 h-80 bg-pink-600 rounded-full opacity-[0.06] blur-3xl blob-3 pointer-events-none" />

        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-[0.18] pointer-events-none" />

        {/* Radial vignette */}
        <div className="absolute inset-0 bg-radial-[ellipse_80%_80%_at_50%_50%] from-transparent to-slate-900/60 pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          {/* Spinning gradient ring + photo */}
          <div className="relative w-52 h-52 mb-8 mt-20">
            <div
              className="absolute -inset-[5px] rounded-full spin-ring"
              style={{
                background:
                  "conic-gradient(from 0deg, #06b6d4, #a855f7, #ec4899, #06b6d4)",
              }}
            />
            <div className="absolute inset-[2px] rounded-full bg-slate-900" />
            <div
              className="absolute inset-[6px] rounded-full overflow-hidden"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dwrmehhg3/image/upload/v1752684375/portfolio/IMG_20241115_1656462_gbrpgi.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-3 px-4 tracking-tight leading-none">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Babatunde Taiwo. A
            </span>
          </h1>

          {/* Typewriter */}
          <div className="h-9 flex items-center justify-center mb-6">
            <span className="text-lg md:text-xl text-gray-300 font-mono tracking-wide">
              {displayRole}
              <span className="inline-block w-0.5 h-5 bg-cyan-400 ml-0.5 align-middle animate-pulse" />
            </span>
          </div>

          <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
            I build modern web applications end-to-end — from polished React
            frontends to performant Go and Node.js backends.
          </p>

          {/* Social pill links */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {socialLinks.map(({ href, icon: Icon, label, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-2 px-4 py-2.5 bg-slate-800/70 border border-slate-700/60 rounded-xl hover:border-cyan-400/60 hover:bg-slate-800 transition-all duration-200"
              >
                <Icon
                  size={15}
                  className="text-gray-400 group-hover:text-cyan-400 transition-colors"
                />
                <span className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors">
                  {label}
                </span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 px-9 py-3.5 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-200"
          >
            View My Work
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={26} className="text-gray-600" />
        </div>
      </section>

      {/* ── About ──────────────────────────────────────────────── */}
      <section id="about" className="py-28 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase mb-3">
              Get to know me
            </p>
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 sm:px-0">
            {/* Left */}
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Full-Stack Software Engineer skilled in JavaScript and Go, with
                hands-on experience building production-grade web applications
                across the MERN stack and Go-based backend services.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                I've shipped multiple full-stack projects — including a
                containerised HR & operations platform with a Go API,
                PostgreSQL, Redis, and real-time WebSockets. I bring a
                designer's eye to the frontend and a systems thinker's approach
                to the backend. Previously spent nearly a decade running
                production websites, e-commerce platforms, and digital
                marketing — now applied to engineering.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {[
                  { value: "4+", label: "Projects Built" },
                  { value: "2+", label: "Tech Stacks" },
                  { value: "15+", label: "Tools & APIs" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="text-center p-4 bg-slate-800/60 rounded-xl border border-slate-700/50 hover:border-slate-600/70 transition-colors"
                  >
                    <p className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      {s.value}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                  <h3 className="font-semibold text-cyan-400 mb-1.5 text-xs uppercase tracking-widest">
                    Frontend
                  </h3>
                  <p className="text-xs text-gray-400">
                    React · TypeScript · Tailwind · Zustand
                  </p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                  <h3 className="font-semibold text-purple-400 mb-1.5 text-xs uppercase tracking-widest">
                    Backend
                  </h3>
                  <p className="text-xs text-gray-400">
                    Node.js · Go · PostgreSQL · Redis
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Terminal */}
            <TerminalWindow />
          </div>
        </div>
      </section>

      {/* ── Skills ─────────────────────────────────────────────── */}
      <section
        id="skills"
        className="py-28 px-4 bg-slate-800/30 relative overflow-hidden"
      >
        <div className="absolute inset-0 dot-grid-sm opacity-[0.08] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.2em] text-purple-400 uppercase mb-3">
              What I work with
            </p>
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <p className="text-gray-500 mt-3 text-sm">
              Tools and technologies I use across the full stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-4 sm:px-0">
            {skillCategories.map((cat) => (
              <div
                key={cat.category}
                className="bg-slate-800/60 rounded-xl p-5 border border-slate-700/50 hover:border-slate-600/70 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2 rounded-lg ${cat.bg} border ${cat.border}`}
                  >
                    <cat.icon size={15} className={cat.color} />
                  </div>
                  <h3
                    className={`font-bold text-xs tracking-[0.15em] uppercase ${cat.color}`}
                  >
                    {cat.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-slate-700/60 text-gray-300 text-xs rounded-md border border-slate-600/40 group-hover:border-slate-500/60 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ───────────────────────────────────────────── */}
      <section id="projects" className="py-28 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.2em] text-pink-400 uppercase mb-3">
              What I've built
            </p>
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-gray-500 mt-3 text-sm">
              From side projects to full-scale platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-0">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 group border border-slate-700/50 hover:border-slate-600/80 flex flex-col"
              >
                {/* Image / Gradient fallback */}
                <div className="h-52 relative overflow-hidden flex-shrink-0">
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div
                        className={`w-full h-full ${project.fallbackColor} hidden items-center justify-center`}
                      >
                        <span className="text-white text-8xl font-black opacity-[0.18]">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    </>
                  ) : (
                    <div
                      className={`w-full h-full ${project.fallbackColor} flex items-center justify-center`}
                    >
                      <span className="text-white text-8xl font-black opacity-[0.18] group-hover:opacity-[0.28] transition-opacity duration-300">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Status badge */}
                  <div className="absolute top-3 right-3">
                    {project.status === "live" ? (
                      <span className="flex items-center gap-1.5 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                        Live
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 bg-amber-500/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        In Development
                      </span>
                    )}
                  </div>

                  {/* Project number */}
                  <span className="absolute bottom-3 left-4 text-white/25 text-xs font-mono">
                    0{index + 1}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-5 leading-relaxed text-sm flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-slate-700/70 text-cyan-300 text-xs font-medium rounded-lg border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 pt-4 border-t border-slate-700/50">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                      >
                        <Github size={15} />
                        Source Code
                      </a>
                    ) : (
                      <span className="flex items-center gap-1.5 text-sm text-gray-600 select-none">
                        <Github size={15} />
                        Private Repo
                      </span>
                    )}

                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors"
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </a>
                    ) : (
                      <span className="flex items-center gap-1.5 text-sm text-gray-600 select-none">
                        <ExternalLink size={15} />
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-28 px-4 bg-slate-800/30 relative overflow-hidden"
      >
        {/* Top gradient line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
        <div className="absolute inset-0 dot-grid-sm opacity-[0.05] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center z-10">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-400 text-sm font-medium">
              Available for new opportunities
            </span>
          </div>

          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-md mx-auto text-sm leading-relaxed">
            I'm always open to new opportunities and interesting projects.
            Let's connect and build something great together.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="mailto:babatunde.taiwoadekunle@gmail.com"
              className="group flex items-center justify-center gap-3 bg-slate-800/80 border border-slate-700/60 px-6 py-3.5 rounded-xl hover:border-cyan-400/50 hover:bg-slate-700/60 transition-all"
            >
              <Mail
                size={17}
                className="text-cyan-400 flex-shrink-0"
              />
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors truncate">
                babatunde.taiwoadekunle@gmail.com
              </span>
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-slate-800/80 border border-slate-700/60 px-6 py-3.5 rounded-xl hover:border-cyan-400/50 hover:bg-slate-700/60 transition-all"
            >
              <Linkedin size={17} className="text-cyan-400 flex-shrink-0" />
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                LinkedIn
              </span>
            </a>
            <a
              href="tel:+2347035689102"
              className="group flex items-center justify-center gap-3 bg-slate-800/80 border border-slate-700/60 px-6 py-3.5 rounded-xl hover:border-cyan-400/50 hover:bg-slate-700/60 transition-all"
            >
              <Phone size={17} className="text-cyan-400 flex-shrink-0" />
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                +234 703 568 9102
              </span>
            </a>
          </div>

          <button
            onClick={downloadCV}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 px-10 py-4 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-200"
          >
            Download Resume
          </button>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © 2025 Babatunde Taiwo A. Built with React & Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/tbabson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white transition-colors"
            >
              <Github size={17} />
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white transition-colors"
            >
              <Linkedin size={17} />
            </a>
            <a
              href="mailto:babatunde.taiwoadekunle@gmail.com"
              className="text-gray-600 hover:text-white transition-colors"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default App;
