export interface PersonalInfo {
  firstname: string;
  lastname: string;
  username: string;
  titles: string[];
  nickname: string;
  phone: string;
  email: string;
  summary: string;
  social: {
    linkedin: string;
    github: string;
    stackoverflow: string;
    devto: string;
  };
}

export const personalInfo: PersonalInfo = {
  firstname: 'Saravanan',
  lastname: 'Kalimuthu',
  username: 'sarvarunajvm',
  titles: ['Software Engineer', 'Java Developer', 'Code Enthusiast!'],
  nickname: 'Martian',
  phone: '+91 979-087-0737',
  email: 'sathishdaywalker@outlook.com',
  summary:
    'Results-oriented software engineer with over 8 years in Java development, focusing on scalable enterprise applications. Experienced in delivering efficient solutions in fast-paced settings and contributing to open-source projects. Aiming to apply full-stack expertise to foster innovation in a dynamic development team.',
  social: {
    linkedin: 'https://www.linkedin.com/in/saravanan-kalimuthu-01a0a9113',
    github: 'https://github.com/sarvarunajvm',
    stackoverflow: 'https://stackoverflow.com/users/12595188/saravanan-kalimuthu?tab=profile',
    devto: 'https://dev.to/sarvarunajvm',
  },
};
