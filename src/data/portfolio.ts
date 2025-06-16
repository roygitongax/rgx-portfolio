
import { Project, LabChallenge, Experience, Education, Certification, ContactInfo } from '@/types';

export const contactInfo: ContactInfo = {
  email: 'roygitonga27@gmail.com',
  phone: '+254 769 873257',
  linkedin: 'linkedin.com/in/roy-gitonga',
  github: 'github.com/roygitongax',
  location: 'Nairobi, Kenya'
};

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Technical Architect Intern',
    company: 'NTT Data',
    duration: 'Oct 2024 – Jan 2025',
    location: 'Nairobi, Kenya',
    description: [
      'Developed custom business applications using Microsoft Power Platform for enterprise clients including AAR Insurance and Kenchic',
      'Designed and implemented automated workflows using Power Automate, reducing manual processing time by 40%',
      'Collaborated with cross-functional teams to gather requirements and deliver scalable solutions',
      'Created comprehensive technical documentation and user training materials'
    ],
    technologies: ['Microsoft Power Platform', 'Power Fx', 'Power Automate', 'SharePoint']
  },
  {
    id: '2',
    role: 'Cybersecurity Auditor',
    company: 'National Youth Service (NYS)',
    duration: 'Aug 2024 – Oct 2024',
    location: 'Nairobi, Kenya',
    description: [
      'Conducted comprehensive cybersecurity audits across multiple NYS facilities',
      'Enhanced endpoint and network security protocols, improving overall security posture',
      'Performed vulnerability assessments and penetration testing on critical infrastructure',
      'Developed security awareness training programs for staff members'
    ],
    technologies: ['Network Security Tools', 'Vulnerability Scanners', 'Windows Security', 'Linux']
  },
  {
    id: '3',
    role: 'Asset Management Lead',
    company: 'JM Associates',
    duration: 'Nov 2020 – Oct 2022',
    location: 'Nairobi, Kenya',
    description: [
      'Led nationwide asset tagging operations across Quickmart retail locations',
      'Improved asset traceability and inventory management systems',
      'Implemented barcode scanning solutions for real-time asset tracking',
      'Trained regional teams on asset management best practices'
    ],
    technologies: ['Asset Management Systems', 'Barcode Scanning', 'Database Management']
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'BSc Information Technology',
    institution: 'KCA University',
    duration: '2021 – 2024',
    grade: 'Upper Second Class Honors',
    description: 'Specialized in cybersecurity, network administration, and software development with focus on enterprise security solutions.'
  }
];

export const certifications: Certification[] = [
  {
    id: '1',
    name: 'Microsoft Security Fundamentals (SC-900)',
    issuer: 'Microsoft',
    date: '2024',
    credentialId: 'Available upon request'
  },
  {
    id: '2',
    name: 'Security Operations Analyst (SC-200)',
    issuer: 'Microsoft',
    date: 'In Progress',
    credentialId: 'Currently pursuing certification'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Enterprise Security Dashboard',
    description: 'Built a comprehensive security monitoring dashboard using Power BI and Microsoft Security Graph API to provide real-time threat intelligence and security metrics visualization.',
    technologies: ['Power BI', 'Microsoft Graph API', 'Azure', 'KQL', 'PowerShell'],
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Automated Vulnerability Scanner',
    description: 'Developed a Python-based vulnerability scanning tool that automates network discovery, port scanning, and vulnerability assessment with detailed reporting capabilities.',
    technologies: ['Python', 'Nmap', 'SQLite', 'JSON', 'Network Protocols'],
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Incident Response Automation',
    description: 'Created an automated incident response system using Power Automate and Azure Logic Apps to streamline security incident handling and notification workflows.',
    technologies: ['Power Automate', 'Azure Logic Apps', 'Microsoft Sentinel', 'Teams API', 'JSON'],
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80'
  }
];

export const labChallenges: LabChallenge[] = [
  {
    id: '1',
    title: 'Web Application Penetration Testing',
    category: 'Vulnerability Assessment',
    difficulty: 'Intermediate',
    description: 'Comprehensive security assessment of a vulnerable web application identifying and exploiting OWASP Top 10 vulnerabilities.',
    problemStatement: 'Assess the security posture of a web application and identify potential attack vectors that could compromise user data or system integrity.',
    approach: 'Conducted systematic testing using both automated tools and manual techniques, focusing on input validation, authentication bypass, and session management flaws.',
    toolsUsed: ['Burp Suite', 'OWASP ZAP', 'SQLmap', 'Nmap', 'Metasploit'],
    keyLearnings: [
      'Importance of proper input validation and sanitization',
      'Understanding of session management vulnerabilities',
      'Practical application of OWASP testing methodology',
      'Documentation and reporting of security findings'
    ],
    completionDate: '2024-12'
  },
  {
    id: '2',
    title: 'Network Intrusion Detection',
    category: 'Network Security',
    difficulty: 'Advanced',
    description: 'Implemented and configured network intrusion detection system to monitor and alert on suspicious network activities.',
    problemStatement: 'Design and deploy a network monitoring solution capable of detecting various attack patterns and generating actionable alerts.',
    approach: 'Configured Suricata IDS with custom rules, integrated with ELK stack for log analysis, and created automated alerting workflows.',
    toolsUsed: ['Suricata', 'ELK Stack', 'Wireshark', 'Python', 'Bash Scripting'],
    keyLearnings: [
      'Network protocol analysis and packet inspection',
      'Rule writing for intrusion detection systems',
      'Log correlation and analysis techniques',
      'Automation of security monitoring workflows'
    ],
    completionDate: '2024-11'
  },
  {
    id: '3',
    title: 'Cryptographic Challenge CTF',
    category: 'CTF',
    difficulty: 'Intermediate',
    description: 'Solved multiple cryptographic challenges involving classical and modern encryption techniques in a competitive CTF environment.',
    problemStatement: 'Decrypt various encrypted messages and files using cryptanalysis techniques and identifying weak encryption implementations.',
    approach: 'Applied frequency analysis, pattern recognition, and automated tools to break various encryption schemes including Caesar ciphers, substitution ciphers, and weak RSA implementations.',
    toolsUsed: ['Python', 'CyberChef', 'John the Ripper', 'OpenSSL', 'Custom Scripts'],
    keyLearnings: [
      'Fundamentals of cryptographic algorithms',
      'Weakness identification in encryption implementations',
      'Automated cryptanalysis techniques',
      'Importance of proper key management'
    ],
    completionDate: '2024-10'
  }
];

export const skills = {
  technical: [
    'Microsoft Power Platform',
    'Power Fx',
    'Python',
    'TypeScript/JavaScript',
    'Windows Administration',
    'Linux System Administration',
    'Network Security',
    'Vulnerability Assessment',
    'Incident Response',
    'Security Information and Event Management (SIEM)'
  ],
  tools: [
    'Microsoft Sentinel',
    'Burp Suite',
    'Nmap',
    'Wireshark',
    'Metasploit',
    'OWASP ZAP',
    'Power BI',
    'Azure',
    'Git/GitHub',
    'Figma'
  ],
  soft: [
    'Problem Solving',
    'Critical Thinking',
    'Team Collaboration',
    'Technical Documentation',
    'Project Management',
    'Risk Assessment',
    'Client Communication',
    'Continuous Learning'
  ]
};
