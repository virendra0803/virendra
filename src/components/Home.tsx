'use client'

import { useState, useEffect } from "react";
import { Mail, Phone, ExternalLink, Shield, Code, Network, Users, Trophy, Mic, Github, Linkedin, Handshake } from "lucide-react";
import Navigation from "@/components/navigation";
import TerminalEffect from "@/components/terminal-effect";
import TypingAnimation from "@/components/typing-animation";

export default function Home() {
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id === 'skills') {
            setSkillsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Web Application Penetration Testing",
      subtitle: "E-Commerce Platform",
      description: "Performed a full-scope VAPT on a live e-commerce application. Discovered SQL injection, insecure direct object references (IDOR), and weak authentication mechanisms. Provided remediation steps and re-tested to ensure patch effectiveness.",
      tags: ["SQLi", "IDOR", "VAPT"],
      command: "./exploit --target e-commerce.app",
      icon: <Shield className="text-matrix text-xl" />
    },
    {
      title: "Network Security Assessment",
      subtitle: "Corporate Infrastructure",
      description: "Conducted external and internal penetration testing on a mid-sized organization's network. Identified open ports, misconfigured firewalls, and weak VPN implementations. Delivered a detailed risk report with mitigation strategies.",
      tags: ["Network", "Firewall", "VPN"],
      command: "nmap -sS -O target_network",
      icon: <Network className="text-matrix text-xl" />
    },
    {
      title: "API Security Testing",
      subtitle: "Banking Application",
      description: "Tested critical APIs for authentication bypass, broken object-level authorization (BOLA), and sensitive data exposure. Helped the client strengthen OAuth 2.0 implementation and improve input validation.",
      tags: ["API", "OAuth", "BOLA"],
      command: "curl -X POST api/auth/bypass",
      icon: <Code className="text-matrix text-xl" />
    },
    {
      title: "Social Engineering & Phishing Simulation",
      subtitle: "Phishing Simulation",
      description: "Executed controlled social engineering campaigns to test employee awareness. Designed phishing templates and measured click-through rates, reducing phishing success rates by 60% after awareness training.",
      tags: ["Phishing", "Social Eng", "Training"],
      command: "./phishing-sim --success-rate 60%",
      icon: <Users className="text-matrix text-xl" />
    }
  ];

  const skills = [
    {
      category: "Cybersecurity",
      icon: <Shield />,
      color: "text-matrix",
      items: [
        { name: "VAPT", level: 95 },
        { name: "Incident Response", level: 90 },
        { name: "Threat Hunting", level: 85 },
        { name: "Compliance", level: 88 }
      ]
    },
    {
      category: "Programming",
      icon: <Code />,
      color: "text-cyber",
      items: [
        { name: "Python", level: 90 },
        { name: "Bash", level: 85 },
        { name: "SQL", level: 80 },
        { name: "Django", level: 75 }
      ]
    },
    {
      category: "Tools",
      icon: <Network />,
      color: "text-electric",
      items: ["Burp Suite", "Nmap", "Metasploit", "Wireshark", "Nessus", "OWASP ZAP", "Splunk"]
    },
    {
      category: "Operating Systems",
      icon: <Shield />,
      color: "text-danger",
      items: [
        { name: "Linux", level: 95 },
        { name: "Kali Linux", level: 92 },
        { name: "Parrot OS", level: 88 },
        { name: "Windows", level: 80 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-dark text-white font-mono overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative matrix-bg pt-20" data-testid="hero-section">
        <div className="scan-line"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <TerminalEffect className="max-w-4xl mx-auto">
            <div className="text-left mb-6">
              <span className="text-matrix">┌──(</span><span className="text-white">root@</span><span className="text-cyber">cybersec</span><span className="text-matrix">)-[</span><span className="text-white">~/portfolio</span><span className="text-matrix">]</span>
              <br />
              <span className="text-matrix">└─$ </span><span className="text-white">whoami</span>
            </div>
            <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4" data-testid="hero-title">
              <span className="glitch-text text-white" data-text="Hi, I'm ">Hi, I'm </span>
              <span className="text-matrix glitch-text" data-text="Virendra Gawande">Virendra Gawande</span>
            </h1>
            </div>
            <div className="text-xl md:text-2xl mb-6 text-cyber" data-testid="hero-subtitle">
              <TypingAnimation 
                text="Information Security Officer | Cybersecurity Professional"
                speed={50}
              />
            </div>
            
            <div className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto" data-testid="hero-description">
              <span className="text-matrix">// </span>"I help businesses strengthen their digital security by identifying vulnerabilities, implementing security controls, and ensuring compliance with industry standards."
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8" data-testid="hero-links">
              <a href="https://linkedin.com" className="hover-glow bg-charcoal border border-matrix px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300" data-testid="link-linkedin">
                <Linkedin className="text-matrix" size={20} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com" className="hover-glow bg-charcoal border border-matrix px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300" data-testid="link-github">
                <Github className="text-matrix" size={20} />
                <span>GitHub</span>
              </a>
              <a href="mailto:connect.virendragawande@gmail.com" className="hover-glow bg-charcoal border border-matrix px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300" data-testid="link-email">
                <Mail className="text-matrix" size={20} />
                <span>Email</span>
              </a>
            </div>
            
            <div className="text-left">
              <span className="text-matrix">┌──(</span><span className="text-white">guest@</span><span className="text-cyber">portfolio</span><span className="text-matrix">)-[</span><span className="text-white">~/</span><span className="text-matrix">]</span>
              <br />
              <span className="text-matrix">└─$ </span><span className="text-white">cd about && ls -la</span><span className="animate-pulse">_</span>
            </div>
          </TerminalEffect>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-darker" data-testid="about-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="about-title">
              <span className="text-matrix">// </span>About<span className="text-cyber">.me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-matrix to-cyber mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <TerminalEffect>
              <div className="text-left mb-4">
                <span className="text-matrix">$ </span><span className="text-white">cat about.txt</span>
              </div>
              
              <div className="space-y-4 text-gray-300" data-testid="about-content">
                <p>I am an Information Security Officer and cybersecurity professional with hands-on experience in penetration testing, web application security, API security, and network defense.</p>
                
                <p>I specialize in helping organizations identify vulnerabilities, mitigate security risks, and achieve compliance with frameworks like ISO 27001 and GDPR. With expertise in security tools and real-world testing methodologies, I ensure businesses maintain a resilient and secure digital environment.</p>
              </div>
              
              <div className="mt-6 text-left">
                <span className="text-matrix">$ </span><span className="text-white">echo "Securing digital assets since 2023"</span>
                <br />
                <span className="text-cyber">Securing digital assets since 2023</span>
              </div>
            </TerminalEffect>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Multiple terminal screens showing cybersecurity code" 
                className="rounded-xl shadow-2xl hover-glow transition-all duration-300"
                data-testid="about-image"
              />
              
              <div className="absolute top-4 left-4 bg-dark/80 px-3 py-1 rounded text-sm">
                <span className="text-matrix">●</span> <span className="text-cyber">●</span> <span className="text-danger">●</span>
                <span className="ml-2 text-white">security_tools.sh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-dark" data-testid="experience-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="experience-title">
              <span className="text-matrix">// </span>Experience<span className="text-cyber">.log</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-matrix to-cyber mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Current Role */}
            <TerminalEffect>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-matrix mb-2" data-testid="job-title-current">Information Security Officer</h3>
                  <p className="text-cyber">(Nuagecx Consulting PVT LTD)</p>
                </div>
                <div className="text-gray-400 mt-2 md:mt-0">
                  <span className="bg-charcoal px-3 py-1 rounded text-sm">Dec 2024 – Present</span>
                </div>
              </div>
              
              <div className="space-y-3 text-gray-300" data-testid="job-responsibilities-current">
                <div className="flex items-start gap-3">
                  <span className="text-matrix mt-1">▸</span>
                  <p>Conducted Web, Mobile, and API Penetration Testing to identify vulnerabilities such as SQLi, XSS, IDOR, CSRF, and RCE.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-matrix mt-1">▸</span>
                  <p>Implemented SIEM monitoring, firewalls, and intrusion detection systems to improve threat visibility.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-matrix mt-1">▸</span>
                  <p>Performed phishing simulations and security awareness training for employees.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-matrix mt-1">▸</span>
                  <p>Designed and executed incident response playbooks to contain and mitigate attacks.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-matrix mt-1">▸</span>
                  <p>Worked with cross-functional teams to ensure compliance with ISO 27001 and industry best practices.</p>
                </div>
              </div>
            </TerminalEffect>
            
            {/* Intern Role */}
            <TerminalEffect>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-matrix mb-2" data-testid="job-title-intern">Cyber Security Researcher</h3>
                </div>
                <div className="text-gray-400 mt-2 md:mt-0">
                  <span className="bg-charcoal px-3 py-1 rounded text-sm">2 Years</span>
                </div>
              </div>
              
              <div className="space-y-3 text-gray-300" data-testid="job-responsibilities-intern">
                <div className="flex items-start gap-3">
                  <span className="text-matrix mt-1">▸</span>
                  <p>Built secure authentication systems with Django & MongoDB.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-matrix mt-1">▸</span>
                  <p>Developed user registration, session management, and password recovery modules.</p>
                </div>
              </div>
            </TerminalEffect>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-darker" data-testid="projects-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="projects-title">
              <span className="text-matrix">// </span>Cybersecurity<span className="text-cyber">.projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-matrix to-cyber mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <TerminalEffect key={index} className="project-card" data-testid={`project-${index}`}>
                <div className="flex items-center gap-3 mb-4">
                  {project.icon}
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm font-semibold">{project.subtitle}</p>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-charcoal text-matrix text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="text-left text-sm">
                  <span className="text-matrix">$ </span><span className="text-white">{project.command}</span>
                </div>
              </TerminalEffect>
            ))}

            {/* SIEM Project - Full Width */}
            <TerminalEffect className="md:col-span-2" data-testid="project-siem">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-matrix text-xl" />
                <h3 className="text-lg font-bold text-white">SIEM Log Analysis & Incident Response</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-400 text-sm mb-4">Configured and monitored SIEM dashboards (Splunk/Wazuh) to detect anomalies. Investigated brute force attempts, malware infections, and privilege escalation incidents, followed by containment and eradication.</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["SIEM", "Splunk", "Incident Response", "Threat Hunting"].map((tag, index) => (
                      <span key={index} className="bg-charcoal text-matrix text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-left text-sm">
                    <span className="text-matrix">$ </span><span className="text-white">splunk search "failed_login"</span>
                    <br />
                    <span className="text-cyber">Found 1,337 events in 0.042 seconds</span>
                  </div>
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250" 
                  alt="SIEM dashboard showing security monitoring data" 
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </TerminalEffect>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-dark" data-testid="skills-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="skills-title">
              <span className="text-matrix">// </span>Skills<span className="text-cyber">.json</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-matrix to-cyber mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((category, index) => (
              <TerminalEffect key={index} data-testid={`skill-category-${index}`}>
                <h3 className={`text-lg font-bold ${category.color} mb-4 flex items-center gap-2`}>
                  {category.icon}
                  {category.category}
                </h3>
                
                {Array.isArray(category.items) && typeof category.items[0] === 'object' ? (
                  <div className="space-y-3">
                    {(category.items as Array<{name: string, level: number}>).map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{skill.name}</span>
                          <span className="text-matrix">{skill.level}%</span>
                        </div>
                        <div className="bg-charcoal h-2 rounded">
                          <div 
                            className={`progress-bar rounded transition-all duration-1000 ease-out ${skillsVisible ? '' : 'w-0'}`}
                            style={{ width: skillsVisible ? `${skill.level}%` : '0%' }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2 text-sm">
                    {(category.items as string[]).map((tool, toolIndex) => (
                      <div key={toolIndex} className="flex items-center gap-2">
                        <span className="text-matrix">▸</span>
                        <span>{tool}</span>
                      </div>
                    ))}
                  </div>
                )}
              </TerminalEffect>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-darker" data-testid="certifications-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="certifications-title">
              <span className="text-matrix">// </span>Certifications<span className="text-cyber">.list</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-matrix to-cyber mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Current Certification */}
            <TerminalEffect className="text-center" data-testid="cert-current">
              <img 
                src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" 
                alt="Cybersecurity certification badge on a professional certificate" 
                className="w-full h-32 object-cover rounded mb-4"
              />
              
              <h3 className="text-lg font-bold text-matrix mb-2">Ethical Hacking Certification</h3>
              <p className="text-cyber mb-2">IIT Kharagpur</p>
              <p className="text-gray-400 text-sm">Completed</p>
              
              <div className="mt-4">
                <span className="text-matrix">$ </span><span className="text-white text-sm">verify --cert EH_IIT_KGP</span>
                <br />
                <span className="text-cyber text-sm">✓ Certificate verified</span>
              </div>
            </TerminalEffect>

            {/* Future Certifications */}
            <TerminalEffect className="text-center opacity-75" data-testid="cert-ceh">
              <img 
                src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" 
                alt="Professional cybersecurity certification badge" 
                className="w-full h-32 object-cover rounded mb-4"
              />
              
              <h3 className="text-lg font-bold text-gray-400 mb-2">CEH</h3>
              <p className="text-gray-500 mb-2">EC-Council</p>
              <p className="text-gray-400 text-sm">In Progress</p>
              
              <div className="mt-4">
                <span className="text-matrix">$ </span><span className="text-white text-sm">status --cert CEH</span>
                <br />
                <span className="text-yellow-500 text-sm">⏳ Preparing...</span>
              </div>
            </TerminalEffect>

            <TerminalEffect className="text-center opacity-75" data-testid="cert-oscp">
              <img 
                src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" 
                alt="Advanced cybersecurity training certificate" 
                className="w-full h-32 object-cover rounded mb-4"
              />
              
              <h3 className="text-lg font-bold text-gray-400 mb-2">OSCP</h3>
              <p className="text-gray-500 mb-2">Offensive Security</p>
              <p className="text-gray-400 text-sm">Planned</p>
              
              <div className="mt-4">
                <span className="text-matrix">$ </span><span className="text-white text-sm">roadmap --cert OSCP</span>
                <br />
                <span className="text-yellow-500 text-sm">📋 In roadmap</span>
              </div>
            </TerminalEffect>
          </div>

          {/* Achievements Section */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8" data-testid="achievements-title">
              <span className="text-matrix">// </span>Achievements<span className="text-cyber">.log</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">

              <TerminalEffect className="text-center" data-testid="achievement-competition">
                <Handshake className="text-matrix text-3xl mb-4 mx-auto" />
                <h4 className="text-lg font-bold text-white mb-2">Strategic Partnership</h4>
                <p className="text-gray-400 text-sm">NuageCX Consulting PVT LTD</p>
                <div className="mt-4 text-sm">
                  <span className="text-matrix">leadership_level:</span> <span className="text-cyber">expert</span>
                </div>
              </TerminalEffect>

              <TerminalEffect className="text-center" data-testid="achievement-leadership">
                <Mic className="text-matrix text-3xl mb-4 mx-auto" />
                <h4 className="text-lg font-bold text-white mb-2">Leadership</h4>
                <p className="text-gray-400 text-sm">Vice Chairman of ESA</p>
                <div className="mt-4 text-sm">
                  <span className="text-matrix">leadership_level:</span> <span className="text-cyber">expert</span>
                </div>
              </TerminalEffect>

              <TerminalEffect className="text-center" data-testid="achievement-competition">
                <Trophy className="text-matrix text-3xl mb-4 mx-auto" />
                <h4 className="text-lg font-bold text-white mb-2">State-Level Competition</h4>
                <p className="text-gray-400 text-sm">Consolation Prize - Scholarship Portal</p>
                <div className="mt-4 text-sm">
                  <span className="text-matrix">achievement_unlocked:</span> <span className="text-cyber">true</span>
                </div>
              </TerminalEffect>

              <TerminalEffect className="text-center" data-testid="achievement-coding">
                <Code className="text-matrix text-3xl mb-4 mx-auto" />
                <h4 className="text-lg font-bold text-white mb-2">Coding Problems</h4>
                <p className="text-gray-400 text-sm">100+ Problems Solved on LeetCode & HackerRank</p>
                <div className="mt-4 text-sm">
                  <span className="text-matrix">problems_solved:</span> <span className="text-cyber">100+</span>
                </div>
              </TerminalEffect>

            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-dark" data-testid="contact-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="contact-title">
              <span className="text-matrix">// </span>Contact<span className="text-cyber">.init()</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-matrix to-cyber mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <TerminalEffect>
              <div className="text-left mb-6">
                <span className="text-matrix">$ </span><span className="text-white">cat contact_info.txt</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6" data-testid="contact-info">
                  <div className="flex items-center gap-4">
                    <Mail className="text-matrix text-xl" />
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <a href="mailto:connect.virendragawande@gmail.com" className="text-cyber hover:text-matrix transition-colors" data-testid="contact-email">
                        connect.virendragawande@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Phone className="text-matrix text-xl" />
                    <div>
                      <p className="text-white font-semibold">Phone</p>
                      <a href="tel:+917498620773" className="text-cyber hover:text-matrix transition-colors" data-testid="contact-phone">
                        +91-7498620773
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Linkedin className="text-matrix text-xl" />
                    <div>
                      <p className="text-white font-semibold">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/virendra-gawande-819127253/" className="text-cyber hover:text-matrix transition-colors" data-testid="contact-linkedin">
                        linkedin.com/in/virendra-gawande
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Github className="text-matrix text-xl" />
                    <div>
                      <p className="text-white font-semibold">GitHub</p>
                      <a href="https://github.com/virendra0803" className="text-cyber hover:text-matrix transition-colors" data-testid="contact-github">
                        github.com/virendra-gawande
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4" data-testid="contact-message">
                  <div className="text-left">
                    <span className="text-matrix">$ </span><span className="text-white">echo "Ready to secure your business?"</span>
                    <br />
                    <span className="text-cyber">Ready to secure your business?</span>
                  </div>
                  
                  <div className="text-left">
                    <span className="text-matrix">$ </span><span className="text-white">./connect --mode collaboration</span>
                    <br />
                    <span className="text-cyber">Connection established. Awaiting collaboration...</span>
                  </div>
                  
                  <div className="bg-charcoal p-4 rounded border border-matrix/30">
                    <p className="text-gray-300 text-sm mb-4">Let's discuss how I can help strengthen your organization's cybersecurity posture. Whether you need penetration testing, security assessments, or compliance guidance, I'm here to help.</p>
                    
                    <div className="text-left text-sm">
                      <span className="text-matrix">Available for:</span>
                      <br />
                      <span className="text-white">• Penetration Testing</span>
                      <br />
                      <span className="text-white">• Security Consultations</span>
                      <br />
                      <span className="text-white">• Vulnerability Assessments</span>
                      <br />
                      <span className="text-white">• Security Training</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <div className="text-left">
                  <span className="text-matrix">$ </span><span className="text-white">exit</span>
                  <br />
                  <span className="text-cyber">Thanks for visiting! Stay secure. 🔒</span><span className="animate-pulse">_</span>
                </div>
              </div>
            </TerminalEffect>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-darker py-8 border-t border-matrix/30" data-testid="footer">
        <div className="container mx-auto px-6 text-center">
          <div className="text-gray-400 text-sm">
            <span className="text-matrix">© 2025 Virendra Gawande.</span> All rights reserved.
            <br />
            {/* <span className="text-white">Designed with</span> <span className="text-danger">❤️</span> <span className="text-white">and</span> <span className="text-matrix">cybersecurity</span> <span className="text-white">in mind.</span> */}
          </div>
          
          <div className="mt-4 text-xs text-gray-500">
            <span className="text-matrix">$ </span><span className="text-white">uptime</span>
            <br />
            <span className="text-cyber">System secure and operational since 2023</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
