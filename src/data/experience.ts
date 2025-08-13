export interface Impact {
  metric: string;
  value: string;
  type: 'increase' | 'reduction' | 'neutral';
}

export interface Experience {
  id: string;
  designation: string;
  company: string;
  period: string;
  icon: string;
  achievements: string[];
  impact: Impact[];
}

export const experienceData: Experience[] = [
  {
    id: "paypal",
    designation: "Sr Software Engineer",
    company: "PayPal",
    period: "May 2021 - Present",
    icon: "CreditCard",
    achievements: [
      "Led development of payment processing systems",
      "Improved system performance by 40%",
      "Mentored junior developers",
      "Implemented security best practices"
    ],
    impact: [
      { metric: "Performance", value: "+40%", type: "increase" },
      { metric: "Bug Reduction", value: "-25%", type: "reduction" },
      { metric: "Team Size", value: "8", type: "neutral" }
    ]
  },
  {
    id: "assetpulse",
    designation: "Software Engineer",
    company: "AssetPulse, LLC",
    period: "October 2019 - May 2021",
    icon: "TrendingUp",
    achievements: [
      "Developed asset management platform",
      "Integrated third-party APIs",
      "Optimized database queries",
      "Created automated testing suite"
    ],
    impact: [
      { metric: "API Response", value: "+60%", type: "increase" },
      { metric: "Code Coverage", value: "85%", type: "neutral" },
      { metric: "Load Time", value: "-50%", type: "reduction" }
    ]
  },
  {
    id: "wellspring",
    designation: "Software Developer",
    company: "Wellspring Software Labs",
    period: "Feb 2018 - Sep 2019",
    icon: "Code2",
    achievements: [
      "Built web applications from scratch",
      "Collaborated with design team",
      "Implemented responsive designs",
      "Maintained legacy systems"
    ],
    impact: [
      { metric: "User Engagement", value: "+30%", type: "increase" },
      { metric: "Mobile Usage", value: "+75%", type: "increase" },
      { metric: "Support Tickets", value: "-35%", type: "reduction" }
    ]
  },
  {
    id: "corenett",
    designation: "Software Engineer",
    company: "CoreNett Limited",
    period: "Jun 2016 - Dec 2017",
    icon: "Network",
    achievements: [
      "Developed networking solutions",
      "Implemented security protocols",
      "Created monitoring tools",
      "Participated in agile development"
    ],
    impact: [
      { metric: "Network Uptime", value: "99.9%", type: "neutral" },
      { metric: "Security Incidents", value: "-80%", type: "reduction" },
      { metric: "Deployment Speed", value: "+45%", type: "increase" }
    ]
  }
];