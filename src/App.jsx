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

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack MERN application with user authentication, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "https://github.com/tbabson/mealmaster",
      live: "https://mealmaster-52wg.onrender.com",
      image:
        "https://res.cloudinary.com/dwrmehhg3/image/upload/v1752685116/portfolio/Screenshot-2025-07-16-165659_nw80tt.jpg", //Add your project image path
      fallbackColor: "bg-gradient-to-br from-purple-500 to-pink-600",
    },
    {
      title: "Job Board",
      description:
        "Job listing platform with user authentication, job posting, and application management.",
      tech: ["React", "Redux", "Express", "MongoDB"],
      github: "https://github.com/tbabson/Jobify",
      live: "https://jobify-d6ws.onrender.com",
      image:
        "https://res.cloudinary.com/dwrmehhg3/image/upload/v1752684374/portfolio/Screenshot_2025-07-16_165753_ogirti.png",
      fallbackColor: "bg-gradient-to-br from-blue-500 to-cyan-600",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media metrics with interactive charts and data visualization.",
      tech: ["React", "Chart.js", "Node.js", "PostgreSQL", "JWT"],
      github: "#",
      live: "#",
      image: "bg-gradient-to-br from-green-500 to-teal-600",
    },
  ];

  const skills = [
    { name: "React", icon: Code2, level: 85 },
    { name: "Node.js", icon: Server, level: 80 },
    { name: "MongoDB", icon: Database, level: 75 },
    { name: "Express", icon: Globe, level: 80 },
    { name: "JavaScript", icon: Code2, level: 90 },
    { name: "HTML/CSS", icon: Code2, level: 95 },
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
                )
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
                )
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
          <div className="animate-pulse mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full mx-auto mb-8 animate-bounce"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Babatunde Taiwo. A
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            MERN Stack Developer
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about building modern web applications with cutting-edge
            technologies. Specialized in React, Node.js, and creating seamless
            user experiences.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/tbabson"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:babatunde.taiwoadekunle@gmail.com"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all hover:scale-110"
            >
              <Mail size={24} />
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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate junior MERN stack developer with a strong
                foundation in modern web technologies. My journey began with
                curiosity about how websites work, and it has evolved into a
                deep love for creating elegant, functional applications.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in building full-stack applications using MongoDB,
                Express.js, React, and Node.js. I'm constantly learning new
                technologies and best practices to stay current with the rapidly
                evolving web development landscape.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-cyan-400 mb-2">Frontend</h3>
                  <p className="text-sm text-gray-300">
                    React, JavaScript, HTML, CSS, Tailwind
                  </p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-cyan-400 mb-2">Backend</h3>
                  <p className="text-sm text-gray-300">
                    Node.js, Express, MongoDB, REST APIs
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800/70 transition-all hover:scale-105"
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
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group"
              >
                <div className="h-48 relative overflow-hidden">
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          // Hide image and show fallback on load error
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div
                        className={`w-full h-full ${project.fallbackColor} hidden items-center justify-center`}
                      >
                        <div className="text-white text-6xl font-bold opacity-20 group-hover:opacity-40 transition-opacity">
                          {index + 1}
                        </div>
                      </div>
                    </>
                  ) : (
                    // Show fallback directly if no image URL
                    <div
                      className={`w-full h-full ${project.fallbackColor} flex items-center justify-center`}
                    >
                      <div className="text-white text-6xl font-bold opacity-20 group-hover:opacity-40 transition-opacity">
                        {index + 1}
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
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

          <div className="flex justify-center space-x-8 mb-12">
            <a
              href="mailto:babatunde.taiwoadekunle@gmail.com"
              className="flex items-center space-x-3 bg-slate-800 px-6 py-3 rounded-lg hover:bg-slate-700 transition-all hover:scale-105"
            >
              <Mail className="text-cyan-400" />
              <span>babatunde.taiwoadekunle@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              className="flex items-center space-x-3 bg-slate-800 px-6 py-3 rounded-lg hover:bg-slate-700 transition-all hover:scale-105"
            >
              <Linkedin className="text-cyan-400" />
              <span>LinkedIn</span>
            </a>
          </div>

          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-105">
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
