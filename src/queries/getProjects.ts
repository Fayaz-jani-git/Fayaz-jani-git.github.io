// queries/getProjects.ts
import { Project } from '../types';

export async function getProjects(): Promise<Project[]> {
  return [
    {
      title: 'Penetration Testing (Senior Project 2)',
      description: 'Set up and executed comprehensive penetration testing to identify security vulnerabilities. Conducted vulnerability assessments, performed network reconnaissance, and documented findings with remediation recommendations.',
      techUsed: 'Kali Linux, Metasploit, Nmap, Burp Suite, Wireshark',
      image: { url: 'https://picsum.photos/seed/pentest/400/300' },
      link: '#'
    },
    {
      title: 'Network Analysis using Wireshark (Senior Project 1)',
      description: 'Conducted in-depth network traffic analysis using Wireshark to identify security threats, analyze packet captures, and detect anomalous network behavior. Created detailed reports on network protocols and potential vulnerabilities.',
      techUsed: 'Wireshark, TCP/IP Analysis, Network Forensics, Protocol Analysis',
      image: { url: 'https://picsum.photos/seed/wireshark/400/300' },
      link: '#'
    },
    {
      title: 'Personal Database System',
      description: 'Built a personal database using SQL on a remote server. Designed relational database schema, implemented CRUD operations, and ensured data integrity through proper normalization and constraints.',
      techUsed: 'SQL, MySQL, Database Design, Remote Server Administration',
      image: { url: 'https://picsum.photos/seed/database/400/300' },
      link: '#'
    },
    {
      title: 'Database Course Front-End Project',
      description: 'Developed the front-end interface as a final project for a Database course in Spring 2024. Created user-friendly interfaces for database interaction and data visualization.',
      techUsed: 'HTML, CSS, JavaScript, Database Integration',
      image: { url: 'https://picsum.photos/seed/frontend/400/300' },
      link: '#'
    },
    {
      title: 'Rock Paper Scissors Tournament',
      description: 'Created a Python-based Rock Paper Scissors tournament application with game logic, score tracking, and tournament bracket functionality.',
      techUsed: 'Python, Game Logic, Tournament Algorithms',
      image: { url: 'https://picsum.photos/seed/rps/400/300' },
      link: '#'
    },
    {
      title: 'Humata.AI Platform Development',
      description: 'Contributed to the development and success of Humata.ais cutting-edge AI platform during internship. Worked on user support systems, security issue resolution, and platform vulnerability mitigation.',
      techUsed: 'Slack, Stripe, Intercom, Security Tools',
      image: { url: 'https://picsum.photos/seed/humata/400/300' },
      link: 'https://humata.ai'
    },
    {
      title: 'Automated Job Application System',
      description: 'Created a fully automated system that applies for jobs using Claude Code integrated with Multi Context Protocol tools like BrowserMCP. Streamlines the job application process through intelligent automation.',
      techUsed: 'Claude Code, MCP Tools, BrowserMCP, Automation, AI',
      image: { url: 'https://picsum.photos/seed/jobapp/400/300' },
      link: '#'
    }
  ];
}
