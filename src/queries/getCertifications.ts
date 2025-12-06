// queries/getCertifications.ts
import { Certification } from '../types';

export async function getCertifications(): Promise<Certification[]> {
  return [
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      issuedDate: '2024',
      link: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications.html',
      iconName: 'SiCisco'
    },
    {
      title: 'NIST Cybersecurity Framework',
      issuer: 'NIST',
      issuedDate: '2024',
      link: 'https://www.nist.gov/cyberframework',
      iconName: 'FaShieldAlt'
    },
    {
      title: 'Network Security Fundamentals',
      issuer: 'CompTIA',
      issuedDate: '2024',
      link: 'https://www.comptia.org/',
      iconName: 'FaNetworkWired'
    },
    {
      title: 'Python for Security',
      issuer: 'Python Institute',
      issuedDate: '2023',
      link: 'https://pythoninstitute.org/',
      iconName: 'FaPython'
    },
    {
      title: 'Linux Security Essentials',
      issuer: 'Linux Foundation',
      issuedDate: '2023',
      link: 'https://www.linuxfoundation.org/',
      iconName: 'FaLinux'
    }
  ];
}
