// queries/getTimeline.ts
import { TimelineItem } from '../types';

export async function getTimeline(): Promise<TimelineItem[]> {
  return [
    {
      name: 'Indiana Institute of Technology',
      timelineType: 'work',
      title: 'Embedded Tutor',
      techStack: 'Python, Security Operations, Problem-Solving',
      summaryPoints: [
        'Facilitated in-class labs for computer science courses, predominantly using Python to enhance students analytical and technical skills applicable in security operations',
        'Guided students in problem-solving and project development, fostering an environment of meticulous attention to detail and technical proficiency'
      ],
      dateRange: 'Sep 2024 - May 2025'
    },
    {
      name: 'Indiana Institute of Technology',
      timelineType: 'work',
      title: 'Teaching Assistant',
      techStack: 'Python, Linux Security, Cryptography, Network Defense',
      summaryPoints: [
        'Led labs on Python scripting and Linux security practices, improving student proficiency in secure coding and foundational incident handling concepts',
        'Enhanced students understanding of cryptography and network defense principles, contributing to higher exam scores and improved project quality'
      ],
      dateRange: 'Sep 2023 - May 2024'
    },
    {
      name: 'Indiana Institute of Technology',
      timelineType: 'work',
      title: 'Research Assistant',
      techStack: 'Curriculum Development, Research, Academic Planning',
      summaryPoints: [
        'Partnered with Professor Patricia Tanner to design and structure a comprehensive Masters degree program, aligning academic content with industry standards',
        'Conducted in-depth research on curriculum frameworks, course outcomes, and accreditation requirements to support strategic program development',
        'Synthesized data from peer institutions and professional organizations to propose relevant course topics and sequencing'
      ],
      dateRange: 'Sep 2023 - Dec 2023'
    },
    {
      name: 'Humata.AI, Austin, TX',
      timelineType: 'work',
      title: 'Support Engineer Intern',
      techStack: 'Slack, Stripe, Intercom, Security Analysis',
      summaryPoints: [
        'Resolved user security issues, ensuring data privacy compliance and enhancing user trust',
        'Collaborated with the security team to identify and mitigate platform vulnerabilities, improving system stability and security',
        'Streamlined support processes using Slack, Stripe, and Intercom, reducing response time and increasing efficiency'
      ],
      dateRange: 'Jun 2023 - Aug 2023'
    },
    {
      name: 'Indiana Institute of Technology',
      timelineType: 'education',
      title: 'Bachelor of Science in Cybersecurity',
      techStack: '',
      summaryPoints: [
        'GPA: 3.61',
        'Relevant Skills: Incident Response, Network Defense, Penetration Testing, Intrusion Detection, SIEM, Network Traffic Analysis',
        'Technical Proficiency: Wireshark, Magnet Axiom, TCP/IP, NIST Frameworks, VMware, Docker'
      ],
      dateRange: 'Graduation: May 2025'
    }
  ];
}
