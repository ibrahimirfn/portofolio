import { Github, Linkedin, Mail, ExternalLink, TowerControl as GameController2, Code2, BookOpen, Trophy, Briefcase, Star, Brain, Target } from 'lucide-react';

function CatWalker() {
  // SVG cat, simple walking style
  return (
    <div className="cat-walker" aria-label="walking cat">
      <svg width="56" height="32" viewBox="0 0 56 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <ellipse cx="16" cy="26" rx="8" ry="3" fill="#333" opacity="0.15" />
          <ellipse cx="40" cy="26" rx="8" ry="3" fill="#333" opacity="0.15" />
          <path d="M8 24 Q 7 16, 16 16 Q 25 16, 24 24" stroke="#222" strokeWidth="2" fill="#F9D29D" />
          <ellipse cx="32" cy="20" rx="16" ry="10" fill="#F9D29D" stroke="#222" strokeWidth="2" />
          <ellipse cx="48" cy="20" rx="5" ry="5" fill="#F9D29D" stroke="#222" strokeWidth="2" />
          <ellipse cx="18" cy="15" rx="5" ry="5" fill="#F9D29D" stroke="#222" strokeWidth="2" />
          <ellipse cx="16" cy="13" rx="2.5" ry="2.5" fill="#222" />
          <ellipse cx="48" cy="18" rx="1.5" ry="1.5" fill="#222" />
          <path d="M18 25 Q 17 28, 19 28 Q 21 28, 20 25" stroke="#222" strokeWidth="2" fill="none" />
          <path d="M46 27 Q 47 30, 49 28 Q 51 26, 48 25" stroke="#222" strokeWidth="2" fill="none" />
          <path d="M13 11 Q 12 7, 16 7 Q 20 7, 19 11" stroke="#222" strokeWidth="2" fill="#F9D29D" />
        </g>
      </svg>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-4">
      {/* Hero Section */}
      <header className="max-w-4xl mx-auto py-16 px-4">
        <div className="pixel-border p-8 bg-black border-4 border-green-400">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
            IBRAHIM IRFANUL HAQ
          </h1>
          <h2 className="text-xl md:text-2xl mb-6">
            Software Engineer
          </h2>
          <p className="text-green-300 mb-6 leading-relaxed">
            Level 99 Full Stack Developer specializing in React, Django, and Cloud Technologies. 
            Currently on a quest to build scalable web applications and conquer complex coding challenges.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/ibrahimirfn" target="_blank" rel="noopener noreferrer" 
               className="hover:text-white transition-colors flex items-center gap-2 border-2 border-green-400 p-2 rounded">
              <Github size={24} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/ibrahimirfanulhaq/" target="_blank" rel="noopener noreferrer" 
               className="hover:text-white transition-colors flex items-center gap-2 border-2 border-green-400 p-2 rounded">
              <Linkedin size={24} /> LinkedIn
            </a>
            <a href="mailto:ibrahimirfan.main@gmail.com" 
               className="hover:text-white transition-colors flex items-center gap-2 border-2 border-green-400 p-2 rounded">
              <Mail size={24} /> Email
            </a>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section className="max-w-4xl mx-auto py-8 px-4">
        <div className="pixel-border p-8 bg-black border-4 border-green-400 mb-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <GameController2 className="animate-bounce" />
            WORK QUESTS
          </h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-green-400 pl-4 hover:bg-green-400/5 transition-colors p-4">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="text-green-500" />
                <h3 className="text-xl font-bold">Assistant Officer</h3>
              </div>
              <p className="text-green-500 mb-3">Hibrida Jaya Utama • Jan 2025 - Feb 2025</p>
              <ul className="list-none space-y-3 text-green-300">
                <li className="flex items-start gap-2">
                  <Star size={16} className="mt-1 flex-shrink-0" />
                  Developed and maintained large-scale web applications using React and Django, improving performance by 40%
                </li>
                <li className="flex items-start gap-2">
                  <Star size={16} className="mt-1 flex-shrink-0" />
                  Led a team of 4 developers in implementing new features for enterprise clients
                </li>
                <li className="flex items-start gap-2">
                  <Star size={16} className="mt-1 flex-shrink-0" />
                  Optimized database queries resulting in 50% faster load times
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-green-400 pl-4 hover:bg-green-400/5 transition-colors p-4">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="text-green-500" />
                <h3 className="text-xl font-bold">Sales Associate Intern</h3>
              </div>
              <p className="text-green-500 mb-3">Syngenta Indonesia • Jul 2024</p>
              <ul className="list-none space-y-3 text-green-300">
                <li className="flex items-start gap-2">
                  <Star size={16} className="mt-1 flex-shrink-0" />
                  Contributed to full-stack development projects using React and Django
                </li>
                <li className="flex items-start gap-2">
                  <Star size={16} className="mt-1 flex-shrink-0" />
                  Implemented responsive UI components and RESTful APIs
                </li>
                <li className="flex items-start gap-2">
                  <Star size={16} className="mt-1 flex-shrink-0" />
                  Collaborated with senior developers on client projects and code reviews
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="pixel-border p-8 bg-black border-4 border-green-400 mb-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Code2 className="animate-spin-slow" />
            SKILL TREE
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="skill-card p-6 border-2 border-green-400 hover:bg-green-400/10 transition-all transform hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="text-green-500" />
                <h3 className="font-bold text-lg">Frontend</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Target size={12} /> React/Next.js
                </li>
                <li className="flex items-center gap-2">
                  <Target size={12} /> TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <Target size={12} /> Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <Target size={12} /> Redux
                </li>
              </ul>
            </div>
            
            <div className="skill-card p-6 border-2 border-green-400 hover:bg-green-400/10 transition-all transform hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="text-green-500" />
                <h3 className="font-bold text-lg">Backend</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Target size={12} /> Django/DRF
                </li>
                <li className="flex items-center gap-2">
                  <Target size={12} /> Python
                </li>
                <li className="flex items-center gap-2">
                  <Target size={12} /> Node.js
                </li>
                <li className="flex items-center gap-2">
                  <Target size={12} /> PostgreSQL
                </li>
              </ul>
            </div>
            
            <div className="skill-card p-6 border-2 border-green-400 hover:bg-green-400/10 transition-all transform hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="text-green-500" />
                <h3 className="font-bold text-lg">DevOps</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Target size={12} /> AWS
                </li>
                <li className="flex items-center gap-2">
                  <Target size={12} /> Docker
                </li>
                <li className="flex items-center gap-2">
                  <Target size={12} /> Git
                </li>
                <li className="flex items-center gap-2">
                  <Target size={12} /> CI/CD
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="pixel-border p-8 bg-black border-4 border-green-400 mb-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="animate-bounce" />
            EDUCATION
          </h2>
          
          <div className="border-l-4 border-green-400 pl-4 hover:bg-green-400/5 transition-colors p-4">
            <h3 className="text-xl font-bold">Jenderal Soedirman University</h3>
            <p className="text-green-500 mb-3">Electrical Engineering • 2023 - now</p>
            <ul className="list-none space-y-3 text-green-300">
              <li className="flex items-center gap-2">
                <Star size={16} /> Programming Assistant • 2025 - now
              </li>
              <li className="flex items-center gap-2">
                <Star size={16} /> CGPA: 3.79/4.0
              </li>
              <li className="flex items-center gap-2">
                <Star size={16} /> Active in Organization, Committee, and Volunteer.
              </li>
            </ul>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="pixel-border p-8 bg-black border-4 border-green-400">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Trophy className="animate-bounce" />
            ACHIEVEMENTS
          </h2>
          
          <div className="space-y-8">
            <div className="group hover:bg-green-400/5 transition-colors p-4 rounded">
              <h3 className="text-xl font-bold flex items-center gap-2 mb-3">
              Guest Speaker “Cropwise Digital Platform”
                <ExternalLink size={16} className="inline-block group-hover:text-white transition-colors" />
              </h3>
              <p className="text-green-300 leading-relaxed">
                Guest Speaker for Syngenta Indonesia on event "Grobogan Agro Expo"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto py-8 px-4 text-center text-green-400">
        <p className="text-sm">© 2025 Ibrahim Irfan • Built with React & Tailwind CSS</p>
      </footer>
      <CatWalker />
    </div>
  );
}

export default App;