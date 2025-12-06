// queries/getProfileBanner.ts
import { ProfileBanner } from '../types';

export async function getProfileBanner(): Promise<ProfileBanner> {
  return {
    backgroundImage: {
      url: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif'
    },
    headline: 'Cybersecurity Graduate & Network Defense Specialist',
    resumeLink: {
      url: '/Fayaz_Jani_Sheik_Resume.pdf'
    },
    linkedinLink: 'https://www.linkedin.com/in/fayazjanisheik',
    profileSummary: 'Bachelor of Science in Cybersecurity from Indiana Institute of Technology, graduating May 2025. Experienced in incident response, penetration testing, and secure coding. Support Engineer Intern at Humata.AI with expertise in Python, Linux security, and network defense.'
  };
}
