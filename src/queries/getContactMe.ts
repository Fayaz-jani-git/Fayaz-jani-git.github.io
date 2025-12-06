// queries/getContactMe.ts
import { ContactMe } from '../types';

export async function getContactMe(): Promise<ContactMe> {
  return {
    profilePicture: {
      url: '/fayaz-profile.jpg'
    },
    name: 'Fayaz Jani Sheik',
    title: 'Cybersecurity Graduate | Support Engineer',
    summary: 'Cybersecurity Graduate with hands-on experience in incident response, network defense, and secure coding practices. Proven track record in guiding labs on Python scripting and Linux security while supporting incident investigations at Humata.AI. Demonstrates a strong technical foundation combined with effective communication and problem-solving skills.',
    companyUniversity: 'Indiana Institute of Technology',
    linkedinLink: 'https://www.linkedin.com/in/fayazjanisheik',
    email: 'fayazjani.sheik@gmail.com',
    phoneNumber: '+1-203-393-8912'
  };
}
