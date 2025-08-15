export interface Skill {
  id: string;
  name: string;
  icon?: string;
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  experience?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Back-end',
    skills: [
      { id: 'java', name: 'Java', icon: 'Coffee', proficiency: 'expert', experience: '8+ years' },
      {
        id: 'spring-boot',
        name: 'Spring Boot',
        icon: 'Leaf',
        proficiency: 'expert',
        experience: '6+ years',
      },
      {
        id: 'spring-security',
        name: 'Spring Security',
        icon: 'Shield',
        proficiency: 'advanced',
        experience: '5+ years',
      },
      {
        id: 'spring-rest',
        name: 'Spring REST',
        icon: 'Api',
        proficiency: 'expert',
        experience: '6+ years',
      },
      {
        id: 'jax-rs',
        name: 'JAX-RS',
        icon: 'Code',
        proficiency: 'advanced',
        experience: '4+ years',
      },
      {
        id: 'soap',
        name: 'SOAP',
        icon: 'FileCode',
        proficiency: 'intermediate',
        experience: '3+ years',
      },
      {
        id: 'websockets',
        name: 'WebSockets',
        icon: 'Cable',
        proficiency: 'advanced',
        experience: '3+ years',
      },
      {
        id: 'hibernate',
        name: 'Hibernate/JPA',
        icon: 'Database',
        proficiency: 'expert',
        experience: '6+ years',
      },
      {
        id: 'maven',
        name: 'Maven',
        icon: 'Package',
        proficiency: 'expert',
        experience: '7+ years',
      },
      {
        id: 'gradle',
        name: 'Gradle',
        icon: 'Package2',
        proficiency: 'advanced',
        experience: '4+ years',
      },
      {
        id: 'junit',
        name: 'JUnit',
        icon: 'TestTube',
        proficiency: 'expert',
        experience: '7+ years',
      },
      {
        id: 'mockito',
        name: 'Mockito',
        icon: 'TestTube2',
        proficiency: 'advanced',
        experience: '5+ years',
      },
    ],
  },
  {
    id: 'frontend',
    title: 'Front-end',
    skills: [
      {
        id: 'nodejs',
        name: 'Node.js',
        icon: 'Hexagon',
        proficiency: 'advanced',
        experience: '5+ years',
      },
      {
        id: 'vuejs',
        name: 'Vue.js',
        icon: 'Triangle',
        proficiency: 'expert',
        experience: '4+ years',
      },
      {
        id: 'reactjs',
        name: 'React.js',
        icon: 'Atom',
        proficiency: 'advanced',
        experience: '3+ years',
      },
      {
        id: 'html-css',
        name: 'HTML5/CSS3',
        icon: 'Code2',
        proficiency: 'expert',
        experience: '8+ years',
      },
      { id: 'vuex', name: 'Vuex', icon: 'Store', proficiency: 'advanced', experience: '3+ years' },
      {
        id: 'redux',
        name: 'Redux',
        icon: 'Layers',
        proficiency: 'intermediate',
        experience: '2+ years',
      },
      { id: 'npm', name: 'NPM', icon: 'Package', proficiency: 'expert', experience: '6+ years' },
      {
        id: 'jest',
        name: 'Jest',
        icon: 'TestTube',
        proficiency: 'advanced',
        experience: '4+ years',
      },
      {
        id: 'cypress',
        name: 'Cypress',
        icon: 'TestTube2',
        proficiency: 'intermediate',
        experience: '2+ years',
      },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: [
      {
        id: 'oracle',
        name: 'Oracle',
        icon: 'Database',
        proficiency: 'advanced',
        experience: '5+ years',
      },
      {
        id: 'postgres',
        name: 'PostgreSQL',
        icon: 'Database',
        proficiency: 'expert',
        experience: '6+ years',
      },
      { id: 'h2', name: 'H2', icon: 'HardDrive', proficiency: 'advanced', experience: '4+ years' },
      {
        id: 'redis',
        name: 'Redis',
        icon: 'Zap',
        proficiency: 'intermediate',
        experience: '3+ years',
      },
      {
        id: 'bigquery',
        name: 'BigQuery',
        icon: 'Cloud',
        proficiency: 'intermediate',
        experience: '2+ years',
      },
      {
        id: 'bigtable',
        name: 'BigTable',
        icon: 'Table',
        proficiency: 'beginner',
        experience: '1+ year',
      },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Deployment',
    skills: [
      {
        id: 'jenkins',
        name: 'Jenkins',
        icon: 'Workflow',
        proficiency: 'advanced',
        experience: '4+ years',
      },
      {
        id: 'github-actions',
        name: 'GitHub Actions',
        icon: 'Github',
        proficiency: 'expert',
        experience: '3+ years',
      },
      {
        id: 'docker',
        name: 'Docker',
        icon: 'Container',
        proficiency: 'advanced',
        experience: '4+ years',
      },
      {
        id: 'gcp',
        name: 'Google Cloud',
        icon: 'Cloud',
        proficiency: 'advanced',
        experience: '3+ years',
      },
      {
        id: 'aws',
        name: 'AWS',
        icon: 'CloudCog',
        proficiency: 'intermediate',
        experience: '2+ years',
      },
      {
        id: 'otel',
        name: 'OpenTelemetry',
        icon: 'Activity',
        proficiency: 'intermediate',
        experience: '2+ years',
      },
      {
        id: 'micrometer',
        name: 'Micrometer',
        icon: 'BarChart3',
        proficiency: 'advanced',
        experience: '3+ years',
      },
      {
        id: 'splunk',
        name: 'Splunk',
        icon: 'LineChart',
        proficiency: 'intermediate',
        experience: '2+ years',
      },
      {
        id: 'datadog',
        name: 'Datadog',
        icon: 'TrendingUp',
        proficiency: 'intermediate',
        experience: '2+ years',
      },
    ],
  },
  {
    id: 'tools-collaboration',
    title: 'Tools & Collaboration',
    skills: [
      { id: 'git', name: 'Git', icon: 'GitBranch', proficiency: 'expert', experience: '8+ years' },
      { id: 'jira', name: 'JIRA', icon: 'Kanban', proficiency: 'expert', experience: '6+ years' },
      {
        id: 'confluence',
        name: 'Confluence',
        icon: 'BookOpen',
        proficiency: 'advanced',
        experience: '5+ years',
      },
      {
        id: 'oas',
        name: 'OAS 2.0',
        icon: 'FileText',
        proficiency: 'advanced',
        experience: '4+ years',
      },
      {
        id: 'kafka',
        name: 'AMQ/Kafka',
        icon: 'MessageSquare',
        proficiency: 'intermediate',
        experience: '3+ years',
      },
      { id: 'oauth', name: 'OAuth2', icon: 'Key', proficiency: 'advanced', experience: '4+ years' },
      { id: 'jwt', name: 'JWT', icon: 'Lock', proficiency: 'expert', experience: '5+ years' },
      {
        id: 'sonarqube',
        name: 'SonarQube',
        icon: 'ScanLine',
        proficiency: 'advanced',
        experience: '3+ years',
      },
    ],
  },
];
