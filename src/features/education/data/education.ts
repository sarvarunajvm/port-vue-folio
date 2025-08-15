export interface EducationPoint {
  id: string;
  value: string;
}

export interface Education {
  id: string;
  degree: string;
  college: string;
  period: string;
  points: EducationPoint[];
}

export const educationData: Education[] = [
  {
    id: 'mca',
    degree: 'Master Of Computer Applications',
    college: 'University of Madras',
    period: '2016 - 2019',
    points: [
      {
        id: 'mca-1',
        value: 'Graduated with 6.48 CGPA.',
      },
      {
        id: 'mca-2',
        value:
          'Designed and developed a cloud-based service that allows users to authenticate and make their data secure in the cloud using double encryption with the safe key.',
      },
    ],
  },
  {
    id: 'bca',
    degree: 'Bachelor Of Computer Applications',
    college: 'Gurunanak College',
    period: '2011 - 2014',
    points: [
      {
        id: 'bca-1',
        value: 'Graduated with 6.24 CGPA.',
      },
      {
        id: 'bca-2',
        value: 'Member of the National Honor Society.',
      },
      {
        id: 'bca-3',
        value: 'Designed and developed a webpage for internal exams.',
      },
    ],
  },
];
