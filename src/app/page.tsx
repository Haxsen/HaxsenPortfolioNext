export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
          {/* <div className="mb-8">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-primary-700 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary-600 dark:text-primary-400">Haxsen</span>
              </div>
            </div>
          </div> */}
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
            Hassān Ali
          </h1>
          <h2 className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Software Engineer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          Computer & Software Engineer with over 5 years of experience in developing web services, scalable infrastructure 
and cross-platform apps, who has worked in B2B/B2C/Web3 organizations actively transitioning to Blockchain Engineering.
          </p>
          <div className="flex justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="#contact"
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-primary-500/25"
            >
              Contact Me
          </a>
          <a
              href="#experience"
              className="px-6 py-3 border-2 border-primary-200 dark:border-primary-800 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all transform hover:scale-105"
            >
              View Experience
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            About Me
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            ● Computer & Software Engineer with over 5 years of experience in developing web services, scalable infrastructure 
and cross-platform apps, who has worked in B2B/B2C/Web3 organizations actively transitioning to Blockchain. 
● An individual who owns the company, values and assists the team providing a wonderful environment. 
● Well experienced at code best practices, software architecture, operations and production.
            </p>
          </div>
        </div>
      </section> */}

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Technical Skills
          </h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Programming</h3>
              <p className="text-gray-600 dark:text-gray-300">C#, Python, Java, JavaScript/TypeScript, Rust, Solidity, PHP</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Databases</h3>
              <p className="text-gray-600 dark:text-gray-300">PostgreSQL, MongoDB, SQLite, Redis</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies</h3>
              <p className="text-gray-600 dark:text-gray-300">Agile, Git, Vim/Nano, Jetbrains, Postman/HTTPie, REST APIs, React, Node.js, ASP.NET, Jira, Unity</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Blockchain</h3>
              <p className="text-gray-600 dark:text-gray-300">Web3 wallet, Tenderly, Execution/Consensus clients, Geth, Nethermind, Lighthouse, Bridge relayer</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">DevOps</h3>
              <p className="text-gray-600 dark:text-gray-300">Rancher, Kubernetes, Docker, AWS, Terraform, Nginx, GitHub Actions, GitLab/Jenkins CI/CD, Azure</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Best Practices</h3>
              <p className="text-gray-600 dark:text-gray-300">SOLID principles, Event-driven, Observer, Builder & State Machine pattern(s) experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Experience
          </h2>
          <div className="space-y-8">
            {[
              {
                title: 'Freelance Engineer - Backend/DevOps',
                company: 'PUFFER FINANCE',
                period: 'Mar 2024 - Present',
                description: '● Developed backend automation for ETH withdrawals solving urgent liquidity problems\n● Optimized AWS infrastructure saving $5000+ monthly\n● Managing 7+ deployments across staging/production including ECS, EC2 and Lambda\n● Implemented Infrastructure-as-Code using Terraform with ECS containers and Load balancers\n● Deployed UniFi Testnet using Taiko L2 & docker compose on EC2 instances',
                tech: 'Python, TypeScript, Rust, Solidity, Node.js, PostgreSQL, AWS, Terraform, Web3'
              },
              {
                title: 'Software Engineer - Backend/Game',
                company: 'CURFLUFFLE',
                period: 'Jan 2023 - Mar 2024',
                description: '● Developed and released World War 0x for PC, WebGL, iOS and Android platforms\n● Led team of artists, designers and developers\n● Improved performance by 135% through runtime optimization\n● Enhanced security with PHP backend and authenticated MySQL database',
                tech: 'Solana, PHP, C#, Unity3D, Web3, NFTs'
              },
              {
                title: 'Computer Engineer - Simulators',
                company: 'GOVT OF PAKISTAN',
                period: 'Oct 2020 - Jan 2023',
                description: '● Designed 2 weapon simulators with custom hardware using Arduino and sensors\n● Achieved 95%+ user satisfaction saving over $1M in costs\n● Integrated SQLite database for user statistics and leaderboards',
                tech: 'C++, Arduino, C#, Unity3D, .NET'
              },
              {
                title: 'Software Engineer - Games',
                company: 'COLTO SRL',
                period: 'Oct 2021 - Jan 2023',
                description: '● Developed games including Scooby Doo Funfair Scare for Cartoon Network UK\n● Reduced loading times by 5x using Addressables with 93% client satisfaction',
                tech: 'C#, Unity3D, Git'
              },
              {
                title: 'Software Engineering Intern',
                company: 'Google Summer of Code - XWIKI',
                period: 'May 2020 - Sep 2020', 
                description: '● Built GitHub Importer extension for importing GitHub pages/wikis\n● Implemented multi-syntax conversion support with 87% test coverage',
                tech: 'Java, Git, Jenkins, jQuery'
              }
            ].map((exp, index) => (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.period}</p>
                <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">{exp.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">Technologies: {exp.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Puffer UniFi Deployment',
                description: 'An L2 blockchain / based rollup solution for scaling Ethereum. Built with focus on security and performance.',
                tech: ['AWS EC2', 'AWS ACM', 'Nginx', 'Docker', 'Taiko L2']
              },
              {
                title: 'Puffer Withdrawal Service',
                description: 'Automated service for calling smart contracts (Puffer Modules ABIs) on schedules, ensuring timely and secure transactions.',
                tech: ['TypeScript', 'Express', 'Swagger', 'Web3.js', 'AWS ECR + ECS', 'AWS Secrets Manager', 'AWS Load Balancer', 'AWS CloudWatch']
              },
              {
                title: 'World War 0x',
                description: 'Cross-platform online multiplayer shooter game integrating Solana blockchain features with NFTs.',
                tech: ['Solana Blockchain', 'Helius RPC', 'NFTs', 'PHP', 'C#', 'Unity Engine', 'Git', 'SourceTree', 'Photon Networking', 'SQL myAdmin', 
                  'Blockchain', 'Smart Contracts', 'Web3 wallets', 'DAO', 'NFTs Collections', 'IPFS', 'Metaplex Core.']
              },
              {
                title: 'GitHub Importer',
                description: 'A web extension developed during Google Summer of Code with XWiki to import GitHub pages and wikis with multi-syntax support.',
                tech: ['Java', 'Git', 'Jira', 'Jenkins CI/CD', 'jQuery', 'Apache Velocity']
              },
              {
                title: 'Scooby Doo Funfair Scare',
                description: 'Online cross-platform WebGL adventure game developed for Cartoon Network UK.',
                tech: ['C#', 'Unity3d', 'JSLib', 'Git', 'SourceTree', 'Addressables']
              },
              {
                title: '[Sample] Simple Eth Bank',
                description: 'Blockchain project demonstrating secure transaction handling with dual backend architecture.',
                tech: ['Python', 'Rust', 'Solidity']
              },
              {
                title: '[Sample] Trivia Game',
                description: 'A simple trivia game showcasing full-stack development capabilities.',
                tech: ['FrontEnd using React', 'Backend using .NET', 'Fullstack usingUnity + C#']
              }
            ].map((project, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Contact Me
          </h2>
          <div className="flex justify-center gap-8">
            <a
              href="mailto:haxsenmail@gmail.com"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors transform hover:scale-110"
            >
              <span className="sr-only">Email</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
        </a>
        <a
              href="https://www.linkedin.com/in/haxsen/"
          target="_blank"
          rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors transform hover:scale-110"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3v9zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
              </svg>
        </a>
        <a
              href="https://github.com/haxsen"
          target="_blank"
          rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors transform hover:scale-110"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.91-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
    </div>
      </section>
    </main>
  )
}
