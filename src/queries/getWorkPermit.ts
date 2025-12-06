// queries/getWorkPermit.ts
import { WorkPermit } from '../types';

export async function getWorkPermit(): Promise<WorkPermit> {
  return {
    visaStatus: 'Work Authorization Available',
    summary: 'Available for full-time opportunities. Based in Austin, Texas.',
    additionalInfo: 'Open to cybersecurity roles including SOC Analyst, Security Engineer, Penetration Tester, and Incident Response positions.'
  };
}
