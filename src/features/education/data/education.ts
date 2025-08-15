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
    degree: 'MCA',
    college: 'University of Madras',
    period: '2016 - 2019',
    points: [
      {
        id: 'mca-1',
        value: 'Obtained 6.48 CGPA',
      },
      {
        id: 'mca-2',
        value:
          'Developed a cloud-based service for secure data storage using double encryption with a safe key',
      },
    ],
  },
  {
    id: 'bca',
    degree: 'BCA',
    college: 'Gurunanak College',
    period: '2011 - 2014',
    points: [
      {
        id: 'bca-1',
        value: 'Obtained 6.24 CGPA',
      },
      {
        id: 'bca-2',
        value: 'Member of the National Honor Society',
      },
      {
        id: 'bca-3',
        value: 'Designed a webpage for internal exams',
      },
    ],
  },
];
