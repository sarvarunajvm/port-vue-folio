export interface Skill {
  id: string;
  name: string;
  icon?: string;
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
      { id: 'java', name: 'Java', icon: 'Coffee' },
      { id: 'spring-boot', name: 'Spring Boot', icon: 'Leaf' },
      { id: 'spring-security', name: 'Spring Security', icon: 'Shield' },
      { id: 'spring-rest', name: 'Spring REST', icon: 'Api' },
      { id: 'jax-rs', name: 'JAX-RS', icon: 'Code' },
      { id: 'soap', name: 'SOAP', icon: 'FileCode' },
      { id: 'websockets', name: 'WebSockets', icon: 'Cable' },
      { id: 'hibernate', name: 'Hibernate/JPA', icon: 'Database' },
      { id: 'maven', name: 'Maven', icon: 'Package' },
      { id: 'gradle', name: 'Gradle', icon: 'Package2' },
      { id: 'junit', name: 'JUnit', icon: 'TestTube' },
      { id: 'mockito', name: 'Mockito', icon: 'TestTube2' },
    ],
  },
  {
    id: 'frontend',
    title: 'Front-end',
    skills: [
      { id: 'nodejs', name: 'Node.js', icon: 'Hexagon' },
      { id: 'vuejs', name: 'Vue.js', icon: 'Triangle' },
      { id: 'reactjs', name: 'React.js', icon: 'Atom' },
      { id: 'html-css', name: 'HTML5/CSS3', icon: 'Code2' },
      { id: 'vuex', name: 'Vuex', icon: 'Store' },
      { id: 'redux', name: 'Redux', icon: 'Layers' },
      { id: 'npm', name: 'NPM', icon: 'Package' },
      { id: 'jest', name: 'Jest', icon: 'TestTube' },
      { id: 'cypress', name: 'Cypress', icon: 'TestTube2' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: [
      { id: 'oracle', name: 'Oracle', icon: 'Database' },
      { id: 'postgres', name: 'PostgreSQL', icon: 'Database' },
      { id: 'h2', name: 'H2', icon: 'HardDrive' },
      { id: 'redis', name: 'Redis', icon: 'Zap' },
      { id: 'bigquery', name: 'BigQuery', icon: 'Cloud' },
      { id: 'bigtable', name: 'BigTable', icon: 'Table' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Deployment',
    skills: [
      { id: 'jenkins', name: 'Jenkins', icon: 'Workflow' },
      { id: 'github-actions', name: 'GitHub Actions', icon: 'Github' },
      { id: 'docker', name: 'Docker', icon: 'Container' },
      { id: 'gcp', name: 'Google Cloud', icon: 'Cloud' },
      { id: 'aws', name: 'AWS', icon: 'CloudCog' },
      { id: 'otel', name: 'OpenTelemetry', icon: 'Activity' },
      { id: 'micrometer', name: 'Micrometer', icon: 'BarChart3' },
      { id: 'splunk', name: 'Splunk', icon: 'LineChart' },
      { id: 'datadog', name: 'Datadog', icon: 'TrendingUp' },
    ],
  },
  {
    id: 'version-control',
    title: 'Version Control/Collaboration',
    skills: [
      { id: 'git', name: 'Git', icon: 'GitBranch' },
      { id: 'jira', name: 'JIRA', icon: 'Kanban' },
      { id: 'confluence', name: 'Confluence', icon: 'BookOpen' },
    ],
  },
  {
    id: 'other',
    title: 'Other Tools & Technologies',
    skills: [
      { id: 'oas', name: 'OAS 2.0', icon: 'FileText' },
      { id: 'kafka', name: 'AMQ/Kafka', icon: 'MessageSquare' },
      { id: 'oauth', name: 'OAuth2', icon: 'Key' },
      { id: 'jwt', name: 'JWT', icon: 'Lock' },
      { id: 'sonarqube', name: 'SonarQube', icon: 'ScanLine' },
    ],
  },
];
