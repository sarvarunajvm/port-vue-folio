export interface PersonalInfo {
  firstname: string;
  lastname: string;
  username: string;
  titles: string[];
  nickname: string;
  phone: string;
  email: string;
  location: string;
  summary: string;
  philosophy: {
    quote: string;
    author: string;
  };
  availability: {
    status: 'available' | 'busy' | 'away';
    responseTime: string;
  };
  social: {
    linkedin: string;
    github: string;
    stackoverflow: string;
    devto: string;
  };
}

export interface ExpertiseArea {
  id: string;
  label: string;
  emoji: string;
  color: string;
}

export const personalInfo: PersonalInfo = {
  firstname: 'Saravanan',
  lastname: 'Kalimuthu',
  username: 'sarvarunajvm',
  titles: ['Software Engineer', 'Java Developer', 'Code Enthusiast!'],
  nickname: 'Martian',
  phone: '+91 979-087-0737',
  email: 'sathishdaywalker@outlook.com',
  location: 'Chennai, India',
  summary:
    'Results-oriented software engineer with over 8 years in Java development, focusing on scalable enterprise applications. Experienced in delivering efficient solutions in fast-paced settings and contributing to open-source projects. Aiming to apply full-stack expertise to foster innovation in a dynamic development team.',
  philosophy: {
    quote: 'Continuous learning is the minimum requirement for success in any field',
    author: 'Brian Tracy',
  },
  availability: {
    status: 'available',
    responseTime: 'Response within 24 hours',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/saravanan-kalimuthu-01a0a9113',
    github: 'https://github.com/sarvarunajvm',
    stackoverflow: 'https://stackoverflow.com/users/12595188/saravanan-kalimuthu?tab=profile',
    devto: 'https://dev.to/sarvarunajvm',
  },
};

export const areasOfExpertise: ExpertiseArea[] = [
  {
    id: 'enterprise',
    label: 'Enterprise Applications',
    emoji: '💼',
    color: 'text-[var(--icon-blue)]',
  },
  { id: 'cloud', label: 'Cloud Architecture', emoji: '🎯', color: 'text-[var(--icon-purple)]' },
  {
    id: 'opensource',
    label: 'Open Source Contribution',
    emoji: '💻',
    color: 'text-[var(--icon-green)]',
  },
  { id: 'problem', label: 'Problem Solving', emoji: '✨', color: 'text-[var(--icon-red)]' },
];
