export const profile = {
  name: 'Vijay Arvind Ramamoorthy',
  location: 'Santa Cruz, California',
  email: 'vijayarvind27@gmail.com',
  phone: '+1 (831) 529-6654',
  links: {
    linkedin: 'https://www.linkedin.com/in/vijay-arvind-b04b561b8',
    github: 'https://github.com/Vijayarvind10',
    etherwatch: 'https://vijayarvind10.github.io/etherwatch/'
  },
  summary:
    'Versatile SWE with backend, systems, and ML experience. I build reliable infrastructure, optimize performance, and ship production features with clean, measurable impact.',
  experience: [
    {
      company: 'Amazon Web Services (AWS) – RDS PostgreSQL',
      role: 'Software Development Engineer Intern',
      location: 'East Palo Alto, CA',
      dates: 'Jun 2025 – Sep 2025',
      bullets: [
        'Built a Java SQL fuzzer generating 50k+ queries/run across parser/executor paths; uncovered 20+ pre-release defects.',
        'Engineered a distributed test runner that auto-provisions EC2s, installs pre-release PostgreSQL RPMs, shards workloads, and aggregates results—cut setup time ~90% (≈50 min → <5 min) and enabled daily validation.',
        'Shipped a reusable testing framework (library + CLI) adopted by Aurora and MySQL teams; added per-build safety gates and blocked 30+ regressions across v13–v17.'
      ],
      stack: ['Java', 'PostgreSQL', 'AWS EC2', 'RPM', 'CI/CD']
    },
    {
      company: 'Samsung R&D',
      role: 'Software/ML Engineering Intern',
      location: 'Bangalore, India',
      dates: 'Nov 2022 – Sep 2023',
      bullets: [
        'Delivered an on-device C++ phoneme framework (distilled classifier + rule-based fallback) with ~2 KB footprint; reduced inference latency by ~20% on 50M+ devices.',
        'Cut CI/CD deploy time ~40% with parallelized Jenkins and aggressive caching; saved ≈$1.8K/month compute.',
        'Built Python+SQL ETL to clean/standardize training inputs, cutting pipeline runtime ~30%.'
      ],
      stack: ['C++', 'Python', 'SQL', 'Jenkins', 'On-device ML']
    }
  ],
  projects: [
    {
      name: 'EtherWatch – Distributed Edge Telemetry',
      stack: ['Go', 'gRPC', 'Prometheus', 'eBPF', 'Kubernetes', 'UDP/HMAC'],
      bullets: [
        'Ingests 1M+ metrics/min from 500+ edge nodes with 99.99% delivery under packet loss.',
        'Sub-50 ms anomaly detection using in-memory windows; gRPC + Prometheus endpoints for alerting/auto-scaling.',
        'Deployed in air-gapped envs with operator pattern and self-healing rollouts; adopted internally.'
      ],
      links: { live: 'https://vijayarvind10.github.io/etherwatch/' }
    },
    {
      name: 'Real-time Weapon Detection',
      stack: ['Python', 'FastAPI', 'PyTorch', 'OpenCV', 'Kubernetes'],
      bullets: [
        'Sustained ~140 req/s at P95 ~82 ms with 99.3% success; blue/green rollouts reduced 5xx by ~40%.',
        'First-author paper at IEEE CSDE 2023.'
      ],
      links: { paper: 'https://ieeexplore.ieee.org/document/10487762' }
    },
    {
      name: 'Protein Folding Kinetics Pipeline',
      stack: ['Python', 'TensorFlow', 'NumPy', 'AWS', 'Docker'],
      bullets: [
        '+4.8% accuracy with 327× lower memory over 100k sequences; end-to-end time cut from 11 h to ~2.1 h (−28% cost).',
        'First-author paper at IEEE ICMLA 2023.'
      ],
      links: { paper: 'https://ieeexplore.ieee.org/document/10459799' }
    }
  ],
  awards: [
    { name: 'KLEOS – National Hackathon', result: 'Winners' },
    { name: 'HACKSUMMIT 3.0 – National Hackathon', result: '2nd Runner-up (Top 3/1,200+)' },
    { name: 'HACKWHEEL – National Hackathon', result: 'Winners' }
  ],
  education: [
    {
      school: 'University of California, Santa Cruz',
      degree: 'MS, Computer Science and Engineering',
      dates: 'Sep 2024 – Mar 2026 (Expected)',
      gpa: '4.0',
      coursework: [
        'Computer Architecture',
        'Machine Learning',
        'Deep Learning',
        'Programming Languages',
        'Analysis of Algorithms',
        'Principles of Database Systems',
        'Computer Networks'
      ]
    },
    {
      school: 'SRM Institute of Science and Technology',
      degree: 'BTech, Computer Science and Engineering',
      dates: 'Sep 2020 – Jun 2024',
      gpa: '3.9'
    }
  ],
  skills: {
    languages: ['Go', 'Java', 'C++', 'Python'],
    databases: ['PostgreSQL', 'MySQL'],
    cloud: ['AWS (EC2, S3, Lambda)', 'Docker', 'Kubernetes', 'Terraform'],
    devops: ['CI/CD (Jenkins, GitHub Actions)', 'RPM packaging'],
    systems: ['Concurrency', 'Transactions', 'Query Optimization', 'Locking'],
    ml: ['PyTorch', 'TensorFlow']
  }
} as const;
