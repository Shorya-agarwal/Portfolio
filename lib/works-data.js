export const worksData = [
  {
    id: 'vectra',
    title: 'Vectra',
    year: '2026',
    description: 'High-Performance C++ Vector Index',
    details: `Vectra is a bare-metal vector search engine engineered from scratch in C++ to demonstrate hardware-sympathetic software design principles. This project explores the fascinating crossover point where algorithmic complexity (O(log N)) meets hardware cache locality benefits (O(N) linear scan).
    
    **What It Does:**
    Vectra implements two approaches to vector similarity search: a brute-force exact search using hand-written AVX2 SIMD intrinsics, and an approximate HNSW (Hierarchical Navigable Small World) graph index. Think of it as building a GPS for high-dimensional data - finding the nearest neighbors among thousands of vectors in milliseconds.
    
    **Technical Deep Dive:**
    • **SIMD Acceleration:** Custom AVX2 intrinsics (_mm256_fmadd_ps) process 8 floating-point dimensions per CPU cycle, achieving ~6x speedup over scalar execution
    • **Memory Optimization:** Flat, contiguous memory buffers maximize L1/L2 cache hit rates during linear scans
    • **HNSW Implementation:** Multi-layered skip-list structure built from first principles for sub-linear search complexity on massive datasets
    • **Parallelism:** OpenMP integration for throughput-oriented batch processing
    
    **Performance Benchmarks (10,000 vectors @ 1024 dimensions):**
    - Scalar Baseline: 2108ms
    - SIMD (AVX2): 380ms (5.5x faster) ⚡
    - SIMD + OpenMP: 547ms (thread overhead visible at small N)
    - HNSW Graph: 669ms (cache misses from pointer chasing)
    
    **Key Engineering Insight:**
    For datasets under 100k vectors, cache locality dominates. The AVX2 linear scan outperforms HNSW because it fully saturates memory bandwidth without the random access penalties of graph traversal. This demonstrates that algorithmic complexity isn't everything - hardware characteristics matter immensely.
    
    **Real-World Applications:**
    • Recommendation systems (finding similar products/users)
    • Image/document search (semantic similarity)
    • ML model serving (nearest neighbor classification)
    • Vector databases (Pinecone, Weaviate alternatives)`,
        stack: ['C++20', 'AVX2 SIMD', 'OpenMP', 'HNSW Algorithm'],
        repo: 'https://github.com/Shorya-agarwal/Vectra',
        thumbnail: '/images/works/rovc4.jpeg',
        highlights: [
          '6x performance gain using hand-optimized SIMD intrinsics',
          'Custom HNSW graph implementation from scratch',
          'Explores hardware vs. algorithmic tradeoffs',
          'Header-only library for zero-dependency integration'
        ]
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
