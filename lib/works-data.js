export const worksData = [
  {
    id: 'vectra',
    title: 'Vectra',
    year: '2026',
    description: 'High-Performance C++ Vector Index',
    details: 'Vectra is a header-only, bare-metal vector search engine built from scratch to demonstrate hardware-sympathetic software design. It implements both brute-force exact search utilizing AVX2 intrinsics and an approximate HNSW (Hierarchical Navigable Small World) graph index. This project explores the crossover point where algorithmic complexity (O(log N)) overcomes hardware cache locality benefits (O(N) linear scan).',
    stack: ['C++', 'AVX2', 'SIMD', 'OpenMP'],
    repo: 'https://github.com/Shorya-agarwal/Vectra',
    thumbnail: '/images/works/rovc4.jpeg'
  },
  {
    id: 'nanodb',
    title: 'NanoDB',
    year: '2025',
    description: 'Distributed Key-Value Store',
    details: 'NanoDB is a multi-threaded, persistent, embedded key-value storage engine engineered from scratch in C++17. It is designed to demonstrate core principles of distributed file systems and high-concurrency systems programming. Features include Write-Ahead Logging (WAL) for durability, Sharded Locking for concurrency, and a Log-Structured deletion mechanism.',
    stack: ['C++17', 'Multithreading', 'WAL', 'Sharding'],
    repo: 'https://github.com/Shorya-agarwal/NanoDB-Distributed-Log-KV',
    thumbnail: '/images/inotes.png'
  },
  {
    id: 'railpulse',
    title: 'RailPulse',
    year: '2026',
    description: 'Real-Time Logistics Ingestion Engine',
    details: 'Engineered low-latency data ingestion pipeline in C++ processing 10k events/sec from simulated railway sensors. Implemented geospatial anomaly detection and deployed Dockerized MinIO instance for storage.',
    stack: ['C++', 'SIMD', 'OpenMP', 'MinIO'],
    repo: 'https://github.com/Shorya-agarwal/RailPulse',
    thumbnail: '/images/works/rovc4.jpeg'
  },
  {
    id: 'alphatrade',
    title: 'AlphaTrade',
    year: '2025',
    description: 'Real-Time Trading Dashboard',
    details: 'Built a real-time stock trading dashboard handling 50+ WebSocket events/sec. Optimized rendering performance using React.memo and virtualization to maintain 60 FPS under load.',
    stack: ['React.js', 'TypeScript', 'Redux', 'WebSocket'],
    repo: 'https://github.com/Shorya-agarwal/AlphaTrade',
    thumbnail: '/images/ttg.png'
  },
  {
    id: 'equiptrack',
    title: 'EquipTrack',
    year: '2026',
    description: 'Enterprise Asset Management System',
    details: 'A robust system for tracking enterprise assets, ensuring efficient resource allocation and maintenance scheduling.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL'],
    repo: 'https://github.com/Shorya-agarwal/EquipTrack',
    thumbnail: '/images/face.jpg'
  },
  {
    id: 'talent-match',
    title: 'Talent-match',
    year: '2026',
    description: 'AI Resume Screener',
    details: 'An AI-powered tool to screen resumes and match candidates to job descriptions using natural language processing techniques.',
    stack: ['JavaScript', 'NLP', 'OpenAI API'],
    repo: 'https://github.com/Shorya-agarwal/Talent-match',
    thumbnail: '/images/inotes.png'
  },
  {
    id: 'merchflow',
    title: 'MerchFlow',
    year: '2025',
    description: 'Product Lifecycle Dashboard',
    details: 'A comprehensive dashboard for managing product lifecycles from concept to launch, streamlining workflows for merchandising teams.',
    stack: ['JavaScript', 'React', 'Node.js'],
    repo: 'https://github.com/Shorya-agarwal/MerchFlow',
    thumbnail: '/images/ttg.png'
  },
  {
    id: 'vibecheck',
    title: 'VibeCheck',
    year: '2025',
    description: 'Browser-based AI DAW',
    details: 'A browser-based Digital Audio Workstation (DAW) component that uses Deep Learning to analyze musical mood and separate audio stems in real-time.',
    stack: ['JavaScript', 'Deep Learning', 'Web Audio API'],
    repo: 'https://github.com/Shorya-agarwal/VibeCheck',
    thumbnail: '/images/face.jpg'
  },
  {
    id: 'opsguard',
    title: 'OpsGuard',
    year: '2025',
    description: 'Fintech Alerting & Reliability Platform',
    details: 'Developing an automated framework using LLMs to detect Zero-Day vulnerabilities in Programmable Logic Controllers (PLCs). (Note: This matches the professional experience description but listed as a repo too).',
    stack: ['JavaScript', 'LLM', 'Cybersecurity'],
    repo: 'https://github.com/Shorya-agarwal/OpsGuard',
    thumbnail: '/images/works/rovc4.jpeg'
  },
  {
    id: 'opsconnect',
    title: 'OpsConnect',
    year: '2025',
    description: 'Enterprise Data Integration Middleware',
    details: 'Middleware solution for integrating disparate enterprise data sources, facilitating seamless data flow and transformation.',
    stack: ['Python', 'ETL', 'Middleware'],
    repo: 'https://github.com/Shorya-agarwal/OpsConnect',
    thumbnail: '/images/inotes.png'
  }
]
