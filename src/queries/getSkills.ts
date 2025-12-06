// queries/getSkills.ts
import { Skill } from '../types';

export async function getSkills(): Promise<Skill[]> {
  return [
    { name: 'Python', category: 'Languages', description: 'Security scripting and automation', icon: 'FaPython' },
    { name: 'Bash', category: 'Languages', description: 'Linux shell scripting', icon: 'SiGnubash' },
    { name: 'HTML', category: 'Languages', description: 'Web markup', icon: 'FaHtml5' },
    { name: 'SQL', category: 'Languages', description: 'Database queries', icon: 'SiMysql' },
    { name: 'Wireshark', category: 'Security', description: 'Network traffic analysis', icon: 'SiWireshark' },
    { name: 'Magnet Axiom', category: 'Security', description: 'Digital forensics', icon: 'FaSearch' },
    { name: 'SIEM', category: 'Security', description: 'Security information management', icon: 'FaShieldAlt' },
    { name: 'Penetration Testing', category: 'Security', description: 'Vulnerability assessment', icon: 'FaUserSecret' },
    { name: 'Intrusion Detection', category: 'Security', description: 'Network monitoring', icon: 'FaEye' },
    { name: 'NIST Frameworks', category: 'Security', description: 'Security compliance', icon: 'FaClipboardCheck' },
    { name: 'TCP/IP', category: 'Networking', description: 'Network protocols', icon: 'FaNetworkWired' },
    { name: 'Firewalls', category: 'Networking', description: 'Network security', icon: 'FaFireAlt' },
    { name: 'VPN', category: 'Networking', description: 'Secure connections', icon: 'FaLock' },
    { name: 'VMware', category: 'Tools', description: 'Virtualization', icon: 'SiVmware' },
    { name: 'Docker', category: 'Tools', description: 'Containerization', icon: 'FaDocker' },
    { name: 'Linux', category: 'Operating Systems', description: 'Kali, Ubuntu', icon: 'FaLinux' }
  ];
}
