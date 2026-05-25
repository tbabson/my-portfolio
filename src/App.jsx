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
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const currentSection =
        sections.find((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        }) || "home";
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const skills = [
    { name: "React", icon: Code2, level: 85 },
    { name: "JavaScript", icon: Code2, level: 90 },
    { name: "TypeScript", icon: Code2, level: 75 },
    { name: "Node.js", icon: Server, level: 80 },
    { name: "Go", icon: Server, level: 70 },
    { name: "Express", icon: Globe, level: 80 },
    { name: "MongoDB", icon: Database, level: 75 },
    { name: "PostgreSQL", icon: Database, level: 70 },
    { name: "HTML / CSS", icon: Code2, level: 95 },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Babatunde Taiwo.
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`transition-colors hover:text-cyan-400 ${
                      activeSection === item.toLowerCase()
                        ? "text-cyan-400"
                        : "text-gray-300"
                    }`}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-800">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left py-2 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-4">
            <div
              className="w-60 h-60 rounded-full mx-auto mb-3 mt-6 animate-bounce relative overflow-hidden border-fuchsia-700 border-4"
              style={{
                backgroundImage: `linear-gradient(to bottom right, rgba(34, 197, 94, 0.8), rgba(168, 85, 247, 0)), url('https://res.cloudinary.com/dwrmehhg3/image/upload/v1752684375/portfolio/IMG_20241115_1656462_gbrpgi.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 sm:mt-3 px-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Babatunde Taiwo. A
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 sm:mb-8">
            Full-Stack Developer
          </p>

          <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            I build modern web applications end-to-end — from polished React
            frontends to performant Go and Node.js backends. Focused on clean
            code, real-world features, and great user experiences.
          </p>

          <div className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12">
            <a
              href="https://github.com/tbabson"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all hover:scale-110"
            >
              <Github size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all hover:scale-110"
            >
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:babatunde.taiwoadekunle@gmail.com"
              className="p-2 sm:p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all hover:scale-110"
            >
              <Mail size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection("projects")}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-105"
          >
            View My Work
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-4 sm:px-0">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I'm a full-stack developer with hands-on experience across the
                JavaScript ecosystem and beyond. My journey started with
                curiosity about how the web works and has grown into a love for
                building clean, production-ready applications.
              </p>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I build with React and TypeScript on the frontend, Node.js and
                Go on the backend, and I'm comfortable working with both SQL and
                NoSQL databases. I'm always pushing to learn new tools and ship
                software that genuinely solves problems.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                  <h3 className="font-semibold text-cyan-400 mb-2">Frontend</h3>
                  <p className="text-sm text-gray-300">
                    React, TypeScript, Tailwind CSS, Zustand
                  </p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                  <h3 className="font-semibold text-cyan-400 mb-2">Backend</h3>
                  <p className="text-sm text-gray-300">
                    Node.js, Go, PostgreSQL, MongoDB, Redis
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full mx-auto"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-slate-800 to-slate-700 rounded-full flex items-center justify-center">
                  <Code2 size={80} className="text-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-slate-800/50 p-4 sm:p-6 rounded-xl hover:bg-slate-800/70 transition-all hover:scale-105 shadow-lg border border-slate-700/40"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="text-cyan-400 mr-3" size={24} />
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-3 mb-2">
                  <div
                    className="bg-gradient-to-r from-cyan-400 to-purple-500 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                <p className="text-sm text-gray-400">
                  {skill.level}% Proficiency
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-16">
            A selection of things I've built — from side projects to full-scale
            platforms.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-0">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group border border-slate-700/50 hover:border-slate-600/80 flex flex-col"
              >
                {/* Image / Gradient fallback */}
                <div className="h-52 relative overflow-hidden flex-shrink-0">
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div
                        className={`w-full h-full ${project.fallbackColor} hidden items-center justify-center`}
                      >
                        <span className="text-white text-7xl font-black opacity-20 group-hover:opacity-30 transition-opacity">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    </>
                  ) : (
                    <div
                      className={`w-full h-full ${project.fallbackColor} flex items-center justify-center`}
                    >
                      <span className="text-white text-7xl font-black opacity-20 group-hover:opacity-30 transition-opacity">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}

                  {/* Status badge */}
                  <div className="absolute top-3 right-3">
                    {project.status === "live" ? (
                      <span className="flex items-center gap-1.5 bg-emerald-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                        Live
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 bg-amber-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                        In Development
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
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
                        className="flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
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
                        className="flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-12">
            I'm always interested in new opportunities and exciting projects.
            Let's connect and build something amazing together!
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
            <a
              href="mailto:babatunde.taiwoadekunle@gmail.com"
              className="flex items-center space-x-3 bg-slate-800 px-4 sm:px-6 py-3 rounded-lg hover:bg-slate-700 transition-all hover:scale-105 mx-4 sm:mx-0 border border-slate-700/50"
            >
              <Mail className="text-cyan-400 flex-shrink-0" />
              <span className="text-sm sm:text-base truncate">
                babatunde.taiwoadekunle@gmail.com
              </span>
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-slate-800 px-4 sm:px-6 py-3 rounded-lg hover:bg-slate-700 transition-all hover:scale-105 mx-4 sm:mx-0 border border-slate-700/50"
            >
              <Linkedin className="text-cyan-400 flex-shrink-0" />
              <span className="text-sm sm:text-base">LinkedIn</span>
            </a>
            <a
              href="tel:+2347035689102"
              className="flex items-center space-x-3 bg-slate-800 px-4 sm:px-6 py-3 rounded-lg hover:bg-slate-700 transition-all hover:scale-105 mx-4 sm:mx-0 border border-slate-700/50"
            >
              <Phone className="text-cyan-400 flex-shrink-0" />
              <span className="text-sm sm:text-base">+2347035689102</span>
            </a>
          </div>

          <button
            className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-105"
            onClick={downloadCV}
          >
            Download Resume
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Babatunde Taiwo A. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};
export default App;
