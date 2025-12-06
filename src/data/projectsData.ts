export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  videoPreview?: string;
  category: 'ai' | 'fullstack' | 'web' | 'experiment' | 'cybersecurity';
  techStack: string[];
  year: number;
  trending?: boolean;
  topTen?: number;
  githubUrl: string;
  liveUrl?: string;
  features?: string[];
  challenges?: string[];
  learnings?: string[];
}

export const projects: Project[] = [
  {
    id: 'penetration-testing',
    title: 'Penetration Testing (Senior Project 2)',
    shortDescription: 'Comprehensive penetration testing to identify security vulnerabilities.',
    fullDescription: 'Set up and executed comprehensive penetration testing to identify security vulnerabilities. Conducted vulnerability assessments, performed network reconnaissance, and documented findings with remediation recommendations.',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=500&fit=crop&q=80',
    category: 'cybersecurity',
    techStack: ['Kali Linux', 'Metasploit', 'Nmap', 'Burp Suite', 'Wireshark'],
    year: 2025,
    trending: true,
    topTen: 1,
    githubUrl: '#',
    features: [
      'Vulnerability assessment',
      'Network reconnaissance',
      'Security audit documentation',
      'Remediation recommendations',
      'Penetration testing methodologies'
    ],
    challenges: [
      'Identifying complex vulnerabilities',
      'Documenting findings comprehensively',
      'Safe testing practices'
    ],
    learnings: [
      'Advanced penetration testing techniques',
      'Security assessment methodologies',
      'Professional documentation standards'
    ]
  },
  {
    id: 'network-analysis-wireshark',
    title: 'Network Analysis using Wireshark (Senior Project 1)',
    shortDescription: 'In-depth network traffic analysis to identify security threats.',
    fullDescription: 'Conducted in-depth network traffic analysis using Wireshark to identify security threats, analyze packet captures, and detect anomalous network behavior. Created detailed reports on network protocols and potential vulnerabilities.',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&q=80',
    category: 'cybersecurity',
    techStack: ['Wireshark', 'TCP/IP Analysis', 'Network Forensics', 'Protocol Analysis'],
    year: 2024,
    trending: true,
    topTen: 2,
    githubUrl: '#',
    features: [
      'Packet capture analysis',
      'Protocol inspection',
      'Anomaly detection',
      'Security threat identification',
      'Network forensics reporting'
    ],
    challenges: [
      'Analyzing large packet captures',
      'Identifying malicious traffic patterns',
      'Protocol-level analysis'
    ],
    learnings: [
      'Network forensics techniques',
      'Deep packet inspection',
      'Security incident analysis'
    ]
  },
  {
    id: 'personal-database',
    title: 'Personal Database System',
    shortDescription: 'SQL database built on a remote server with full CRUD operations.',
    fullDescription: 'Built a personal database using SQL on a remote server. Designed relational database schema, implemented CRUD operations, and ensured data integrity through proper normalization and constraints.',
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=500&fit=crop&q=80',
    category: 'fullstack',
    techStack: ['SQL', 'MySQL', 'Database Design', 'Remote Server Administration'],
    year: 2024,
    trending: false,
    githubUrl: '#',
    features: [
      'Relational database design',
      'CRUD operations',
      'Data normalization',
      'Constraint management',
      'Remote server setup'
    ]
  },
  {
    id: 'database-frontend',
    title: 'Database Course Front-End Project',
    shortDescription: 'Front-end interface for database interaction and data visualization.',
    fullDescription: 'Developed the front-end interface as a final project for a Database course in Spring 2024. Created user-friendly interfaces for database interaction and data visualization.',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop&q=80',
    category: 'web',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Database Integration'],
    year: 2024,
    trending: false,
    githubUrl: '#',
    features: [
      'User interface design',
      'Database connectivity',
      'Data visualization',
      'Form validation',
      'Responsive layout'
    ]
  },
  {
    id: 'rock-paper-scissors',
    title: 'Rock Paper Scissors Tournament',
    shortDescription: 'Python-based tournament application with game logic and scoring.',
    fullDescription: 'Created a Python-based Rock Paper Scissors tournament application with game logic, score tracking, and tournament bracket functionality.',
    thumbnail: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=500&fit=crop&q=80',
    category: 'experiment',
    techStack: ['Python', 'Game Logic', 'Tournament Algorithms'],
    year: 2023,
    trending: false,
    githubUrl: '#',
    features: [
      'Tournament bracket system',
      'Score tracking',
      'Game logic implementation',
      'Multi-player support',
      'Results display'
    ]
  },
  {
    id: 'humata-ai-platform',
    title: 'Humata.AI Platform Development',
    shortDescription: 'Contributed to AI platform development during internship.',
    fullDescription: 'Contributed to the development and success of Humata.ai cutting-edge AI platform during internship. Worked on user support systems, security issue resolution, and platform vulnerability mitigation.',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&q=80',
    category: 'ai',
    techStack: ['Slack', 'Stripe', 'Intercom', 'Security Tools'],
    year: 2023,
    trending: true,
    topTen: 3,
    githubUrl: '#',
    liveUrl: 'https://humata.ai',
    features: [
      'User support systems',
      'Security issue resolution',
      'Platform maintenance',
      'Vulnerability mitigation',
      'Process optimization'
    ]
  },
  {
    id: 'automated-job-application',
    title: 'Automated Job Application System',
    shortDescription: 'AI-powered job application automation using Claude Code and MCP.',
    fullDescription: 'Created a fully automated system that applies for jobs using Claude Code integrated with Multi Context Protocol tools like BrowserMCP. Streamlines the job application process through intelligent automation.',
    thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop&q=80',
    category: 'ai',
    techStack: ['Claude Code', 'MCP Tools', 'BrowserMCP', 'Automation', 'AI'],
    year: 2024,
    trending: true,
    topTen: 4,
    githubUrl: '#',
    features: [
      'Automated form filling',
      'Browser automation',
      'AI-powered decision making',
      'Job matching algorithms',
      'Application tracking'
    ],
    challenges: [
      'Handling diverse application formats',
      'Maintaining accuracy across platforms',
      'AI integration complexity'
    ],
    learnings: [
      'Advanced AI automation',
      'MCP protocol implementation',
      'Browser automation techniques'
    ]
  }
];

// Helper functions for filtering projects
export const getTrendingProjects = (): Project[] => projects.filter((p: Project) => p.trending);
export const getTopTenProjects = (): Project[] => projects.filter((p: Project) => p.topTen).sort((a: Project, b: Project) => (a.topTen || 0) - (b.topTen || 0));
export const getProjectsByCategory = (category: Project['category']): Project[] => projects.filter((p: Project) => p.category === category);
export const getProjectById = (id: string): Project | undefined => projects.find((p: Project) => p.id === id);
export const getRecentProjects = (): Project[] => [...projects].sort((a: Project, b: Project) => b.year - a.year).slice(0, 6);
