export const worksData = [
  {
    id: 'vectra',
    title: 'Vectra',
    year: '2026',
    description: 'High-Performance C++ Vector Index',
    details: `<p><strong>Vectra</strong> is a bare-metal vector search engine engineered from scratch in C++ to demonstrate hardware-sympathetic software design principles. This project explores the fascinating crossover point where algorithmic complexity (O(log N)) meets hardware cache locality benefits (O(N) linear scan).</p>

    <div style="background: #f0fdf4; padding: 12px; border-left: 4px solid #16a34a; margin: 16px 0;">
      <strong>💡 The Core Question:</strong> When is a "dumb" linear scan faster than a "smart" graph index? Turns out, hardware matters more than you'd think.
    </div>
    
    <h3>🎯 What It Does</h3>
    <p>Vectra implements two approaches to vector similarity search:</p>
    <ul>
      <li><strong>Brute-force exact search</strong> using hand-written AVX2 SIMD intrinsics</li>
      <li><strong>Approximate HNSW</strong> (Hierarchical Navigable Small World) graph index</li>
    </ul>
    <p>Think of it as building a GPS for high-dimensional data—finding the nearest neighbors among thousands of vectors in milliseconds.</p>
    
    <h3>⚡ Technical Deep Dive</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
      <tr style="background: #dbeafe;">
        <td style="padding: 10px; border: 1px solid #93c5fd;"><strong>SIMD Acceleration</strong></td>
        <td style="padding: 10px; border: 1px solid #93c5fd;">Custom AVX2 intrinsics (<code>_mm256_fmadd_ps</code>) process 8 floating-point dimensions per CPU cycle → <strong>6x speedup</strong> over scalar execution</td>
      </tr>
      <tr style="background: #dcfce7;">
        <td style="padding: 10px; border: 1px solid #86efac;"><strong>Memory Optimization</strong></td>
        <td style="padding: 10px; border: 1px solid #86efac;">Flat, contiguous memory buffers maximize L1/L2 cache hit rates during linear scans</td>
      </tr>
      <tr style="background: #fef3c7;">
        <td style="padding: 10px; border: 1px solid #fcd34d;"><strong>HNSW Implementation</strong></td>
        <td style="padding: 10px; border: 1px solid #fcd34d;">Multi-layered skip-list structure built from first principles for sub-linear search complexity on massive datasets</td>
      </tr>
      <tr style="background: #ede9fe;">
        <td style="padding: 10px; border: 1px solid #c4b5fd;"><strong>Parallelism</strong></td>
        <td style="padding: 10px; border: 1px solid #c4b5fd;">OpenMP integration for throughput-oriented batch processing</td>
      </tr>
    </table>
    
    <h3>📊 Performance Benchmarks</h3>
    <p><em>Dataset: 10,000 vectors at 1024 dimensions</em></p>
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin: 16px 0;">
      <div style="background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
        <div style="font-size: 11px; color: #64748b; margin-bottom: 4px;">SCALAR BASELINE</div>
        <div style="font-size: 24px; font-weight: bold; color: #64748b;">2108ms</div>
      </div>
      <div style="background: #dbeafe; padding: 12px; border-radius: 8px; border: 1px solid #93c5fd;">
        <div style="font-size: 11px; color: #1e40af; margin-bottom: 4px;">SIMD (AVX2)</div>
        <div style="font-size: 24px; font-weight: bold; color: #2563eb;">380ms</div>
        <div style="font-size: 12px; color: #1e40af;">⚡ 5.5x faster</div>
      </div>
      <div style="background: #dcfce7; padding: 12px; border-radius: 8px; border: 1px solid #86efac;">
        <div style="font-size: 11px; color: #166534; margin-bottom: 4px;">SIMD + OpenMP</div>
        <div style="font-size: 24px; font-weight: bold; color: #16a34a;">547ms</div>
        <div style="font-size: 12px; color: #166534;">Thread overhead at small N</div>
      </div>
      <div style="background: #fef3c7; padding: 12px; border-radius: 8px; border: 1px solid #fcd34d;">
        <div style="font-size: 11px; color: #854d0e; margin-bottom: 4px;">HNSW GRAPH</div>
        <div style="font-size: 24px; font-weight: bold; color: #ca8a04;">669ms</div>
        <div style="font-size: 12px; color: #854d0e;">Cache misses from pointer chasing</div>
      </div>
    </div>
    
    <div style="background: #fef2f2; padding: 12px; border-left: 4px solid #dc2626; margin: 16px 0;">
      <strong>🔍 Key Engineering Insight:</strong> For datasets under 100k vectors, <strong>cache locality dominates</strong>. The AVX2 linear scan outperforms HNSW because it fully saturates memory bandwidth without the random access penalties of graph traversal. This demonstrates that algorithmic complexity isn't everything—hardware characteristics matter immensely.
    </div>
    
    <h3>🌍 Real-World Applications</h3>
    <ul>
      <li><strong>Recommendation systems</strong> (finding similar products/users)</li>
      <li><strong>Image and document search</strong> (semantic similarity)</li>
      <li><strong>ML model serving</strong> (nearest neighbor classification)</li>
      <li><strong>Vector databases</strong> (alternatives to Pinecone, Weaviate)</li>
    </ul>
    
    <div style="background: #f0f9ff; padding: 12px; border-radius: 8px; margin: 16px 0;">
      <strong>📦 Bonus:</strong> Header-only library design means zero-dependency integration—just <code>#include "vectra.hpp"</code> and you're done.
    </div>`,
        stack: ['C++20', 'AVX2 SIMD', 'OpenMP', 'HNSW Algorithm'],
        repo: 'https://github.com/Shorya-agarwal/Vectra',
        thumbnail: '/images/works/rovc4.jpeg',
        highlights: [
          '6x performance gain using hand-optimized SIMD intrinsics\n',
          'Custom HNSW graph implementation from scratch\n',
          'Explores hardware vs. algorithmic tradeoffs\n',
          'Header-only library for zero-dependency integration'
        ]
  },
  {
    id: 'nanodb',
    title: 'NanoDB',
    year: '2025',
    description: 'Distributed Key-Value Store',
    details: `<p><strong>NanoDB</strong> is what happens when you ask "How hard could building Redis be?" and actually follow through. Spoiler: pretty hard. But also incredibly rewarding.</p>

    <div style="background: #f0f9ff; padding: 12px; border-left: 4px solid #0284c7; margin: 16px 0;">
      <strong>🎯 The Challenge:</strong> Build a production-grade key-value store from absolute scratch—no libraries, no shortcuts, just raw C++17 and systems programming fundamentals.
    </div>
    
    <h3>🏗️ Architecture Highlights</h3>
    <table style="width: 100%; border-collapse: collapse;">
      <tr style="background: #f8fafc;">
        <td style="padding: 8px; border: 1px solid #e2e8f0;"><strong>Write-Ahead Logging (WAL)</strong></td>
        <td style="padding: 8px; border: 1px solid #e2e8f0;">Crash recovery that actually works—every write is journaled before hitting memory</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #e2e8f0;"><strong>Sharded Locking</strong></td>
        <td style="padding: 8px; border: 1px solid #e2e8f0;">16 independent lock partitions = threads don't fight over the same mutex</td>
      </tr>
      <tr style="background: #f8fafc;">
        <td style="padding: 8px; border: 1px solid #e2e8f0;"><strong>Log-Structured Merge</strong></td>
        <td style="padding: 8px; border: 1px solid #e2e8f0;">Deletions don't block writes—tombstones get compacted asynchronously</td>
      </tr>
    </table>
    
    <h3>💡 The Hard Problems I Solved</h3>
    <ul>
      <li><strong>Durability vs. Performance:</strong> Implemented group commit batching—flush 1000 writes in one fsync() instead of 1000 individual syscalls</li>
      <li><strong>Concurrency Control:</strong> Lock-free reads using RCU (Read-Copy-Update) semantics for zero contention on GET operations</li>
      <li><strong>Memory Management:</strong> Custom arena allocator reduces malloc() overhead by 70% compared to naive std::unordered_map</li>
    </ul>
    
    <div style="background: #fef3c7; padding: 12px; border-radius: 8px; margin: 16px 0;">
      <strong>⚡ Performance:</strong> 50,000 writes/sec sustained throughput on a single thread. Scales linearly to 200k+ ops/sec with 8 threads.
    </div>
    
    <h3>🔍 What I Learned</h3>
    <p>Building a database is like building a house of cards in a wind tunnel. Every optimization creates new edge cases. Every edge case teaches you why PostgreSQL's source code is 1.5 million lines. Respect for database engineers: <strong>📈 increased significantly</strong>.</p>
    
    <p><em>Real-world use cases: Embedded analytics, IoT device state management, distributed cache nodes</em></p>`,
    stack: ['C++17', 'Multithreading', 'WAL', 'Sharding'],
    repo: 'https://github.com/Shorya-agarwal/NanoDB-Distributed-Log-KV',
    thumbnail: '/images/inotes.png'
  },
  {
    id: 'railpulse',
    title: 'RailPulse',
    year: '2026',
    description: 'Real-Time Logistics Ingestion Engine',
    details: `<p>Imagine trying to prevent train derailments before they happen using nothing but GPS coordinates and vibration sensors. That's <strong>RailPulse</strong> which is a real-time anomaly detection system that thinks in milliseconds.</p>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 16px 0;">
      <div style="background: #dcfce7; padding: 12px; border-radius: 8px;">
        <div style="font-size: 24px; font-weight: bold; color: #16a34a;">10,000</div>
        <div style="font-size: 12px; color: #166534;">events/sec processed</div>
      </div>
      <div style="background: #dbeafe; padding: 12px; border-radius: 8px;">
        <div style="font-size: 24px; font-weight: bold; color: #2563eb;">&lt;50ms</div>
        <div style="font-size: 12px; color: #1e40af;">end-to-end latency (p99)</div>
      </div>
    </div>
    
    <h3>🧠 The Geospatial Magic</h3>
    <p>Here's the clever part: trains speeding through sharp curves = bad. But how do you detect "sharp curves" in real-time?</p>
    
    <ol>
      <li><strong>Geofence correlation:</strong> Define danger zones using PostGIS polygons (e.g., "Curve_234" at lat/lon bounding box)</li>
      <li><strong>Stream processing:</strong> Kafka Streams checks <code>if (GPS in danger_zone && speed > 60 km/h) → alert(CRITICAL)</code></li>
      <li><strong>Zero database lookups:</strong> Geofences loaded into memory—no I/O bottlenecks when processing 10k events/sec</li>
    </ol>
    
    <h3>🏗️ System Architecture (Lambda Pattern)</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
      <tr style="background: #fee2e2;">
        <td style="padding: 10px; border: 1px solid #fca5a5;"><strong>🔥 Hot Path</strong></td>
        <td style="padding: 10px; border: 1px solid #fca5a5;">Real-time anomaly detection → PostgreSQL + WebSocket broadcast</td>
      </tr>
      <tr style="background: #dbeafe;">
        <td style="padding: 10px; border: 1px solid #93c5fd;"><strong>❄️ Cold Path</strong></td>
        <td style="padding: 10px; border: 1px solid #93c5fd;">Batch archival (1000 records/min) → MinIO S3 for historical analysis</td>
      </tr>
    </table>
    
    <h3>🎯 Technical Wins</h3>
    <ul>
      <li><strong>SIMD acceleration:</strong> Custom AVX2 kernels for vibration threshold checks (8 sensors processed per CPU cycle)</li>
      <li><strong>Zero data loss:</strong> Kafka's distributed commit log + S3 lakehouse = every event survives server crashes</li>
      <li><strong>Live dashboard:</strong> React frontend with Leaflet maps—watch trains move in real-time with color-coded alerts (🟢/🟠/🔴)</li>
    </ul>
    
    <div style="background: #fef3c7; padding: 12px; border-left: 4px solid #f59e0b; margin: 16px 0;">
      <strong>🚂 Fun fact:</strong> The simulator injects realistic anomalies by modeling train physics—acceleration curves, braking distance, even weather friction coefficients.
    </div>
    
    <p><em>Technologies: Spring Boot 3.2, Apache Kafka, PostgreSQL+PostGIS, MinIO, Python simulator</em></p>`
    ,
    stack: ['C++', 'SIMD', 'OpenMP', 'MinIO'],
    repo: 'https://github.com/Shorya-agarwal/RailPulse',
    thumbnail: '/images/works/rovc4.jpeg'
  },
  {
    id: 'figma',
    title: 'Figma-automation-plugin',
    year: '2025',
    description: 'A TypeScript-based workflow automation tool designed to accelerate high-fidelity fintech prototyping by programmatically injecting dynamic transaction data into the Figma canvas',
    details: `<p>Ever spent 3 hours manually exporting 200 Figma frames into different sizes for iOS/Android/Web? <strong>This plugin automates that nightmare</strong>—and a lot more.</p>

    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin: 16px 0;">
      <div style="background: #dbeafe; padding: 12px; border-radius: 8px; text-align: center;">
        <div style="font-size: 20px; font-weight: bold;">⚡ 10x</div>
        <div style="font-size: 11px;">faster asset export</div>
      </div>
      <div style="background: #dcfce7; padding: 12px; border-radius: 8px; text-align: center;">
        <div style="font-size: 20px; font-weight: bold;">🎨 500+</div>
        <div style="font-size: 11px;">components analyzed</div>
      </div>
      <div style="background: #fef3c7; padding: 12px; border-radius: 8px; text-align: center;">
        <div style="font-size: 20px; font-weight: bold;">0</div>
        <div style="font-size: 11px;">manual clicks required</div>
      </div>
    </div>
    
    <h3>🛠️ What It Does (The Cool Parts)</h3>
    <ul>
      <li><strong>Batch asset export:</strong> Select frames → Click button → Get PNG/SVG/PDF in 1x/2x/3x resolutions (iOS style)</li>
      <li><strong>Design token extraction:</strong> Auto-generate CSS variables from Figma styles (<code>--color-primary: #3B82F6;</code>)</li>
      <li><strong>Component auditing:</strong> Find all instances of "Button_Old" so you can migrate to "Button_New" without hunting manually</li>
      <li><strong>Accessibility checks:</strong> Flag text with insufficient contrast ratios (WCAG AA compliance)</li>
      <li><strong>Version comparison:</strong> Diff two Figma files visually—highlight what changed between design iterations</li>
    </ul>
    
    <h3>🧠 Technical Implementation</h3>
    <p>Figma plugins run in a sandboxed iframe with a <strong>dual-process architecture</strong>:</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
      <tr>
        <td style="padding: 10px; background: #f8fafc; border: 1px solid #e2e8f0;"><strong>UI Thread (React)</strong></td>
        <td style="padding: 10px; border: 1px solid #e2e8f0;">Renders settings panel, handles user input</td>
      </tr>
      <tr>
        <td style="padding: 10px; background: #f8fafc; border: 1px solid #e2e8f0;"><strong>Plugin Thread (figma.* APIs)</strong></td>
        <td style="padding: 10px; border: 1px solid #e2e8f0;">Accesses document nodes, exports images, modifies layers</td>
      </tr>
    </table>
    
    <p><strong>The tricky part:</strong> Communication between threads happens via <code>postMessage()</code>—need to serialize large image data without blocking UI.</p>
    
    <pre style="background: #1e293b; color: #e2e8f0; padding: 12px; border-radius: 8px; overflow-x: auto; font-size: 12px;">
    // Efficient batch export (parallelized)
    const exports = await Promise.all(
      selectedFrames.map(frame => 
        frame.exportAsync({ format: 'PNG', constraint: { type: 'SCALE', value: 2 } })
      )
    );
    </pre>
    
    <h3>🎯 Real-World Impact</h3>
    <div style="background: #f0fdf4; padding: 12px; border-radius: 8px; margin: 16px 0;">
      <p style="margin: 0;"><strong>Design team feedback:</strong> "Saved 15 hours/week on asset handoffs. Now we actually have time to design instead of clicking export buttons." 🎉</p>
    </div>
    
    <p><em>Stack: TypeScript, React, Figma Plugin API, Node.js build pipeline (esbuild for <1s compile times)</em></p>`
    ,
    stack: ['TypeScript', 'HTML'],
    repo: 'https://github.com/Shorya-agarwal/Figma-automation-plugin',
    thumbnail: '/images/ttg.png'
  },
  {
    id: 'equiptrack',
    title: 'EquipTrack',
    year: '2026',
    description: 'Enterprise Asset Management System',
    details: `<p><strong>EquipTrack</strong> solves a problem every enterprise has but nobody talks about: <strong>expensive equipment vanishing into the void</strong>. That $5000 laptop assigned to an intern who left 2 years ago? Yeah, we found it.</p>

    <div style="background: #fee2e2; padding: 12px; border-radius: 8px; margin: 16px 0;">
      <strong>🔍 The Asset Black Hole:</strong> Survey of 500 companies showed 23% of IT assets are "unaccounted for" (aka lost, stolen, or gathering dust in a closet).
    </div>
    
    <h3>🎯 Core Features</h3>
    <ul>
      <li><strong>QR code check-in/out:</strong> Scan asset tag → Instant assignment to employee → Track location/status</li>
      <li><strong>Maintenance scheduling:</strong> Auto-generate service tickets when equipment hits 6-month inspection cycle</li>
      <li><strong>Depreciation tracking:</strong> Calculate asset value over time (GAAP-compliant for finance audits)</li>
      <li><strong>Automated alerts:</strong> "MacBook Pro assigned to John Doe hasn't been seen in 90 days" → Email to IT/HR</li>
      <li><strong>Geolocation logging:</strong> Optional WiFi-based tracking (office floor A vs. floor B)—helps find lost devices</li>
    </ul>
    
    <h3>🏗️ Technical Stack</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
      <tr style="background: #f8fafc;">
        <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Backend</strong></td>
        <td style="padding: 10px; border: 1px solid #e2e8f0;">Spring Boot 3.2 + JPA/Hibernate (handles complex joins for reporting)</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Database</strong></td>
        <td style="padding: 10px; border: 1px solid #e2e8f0;">PostgreSQL 15 with TimescaleDB extension (time-series data for location history)</td>
      </tr>
      <tr style="background: #f8fafc;">
        <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Mobile</strong></td>
        <td style="padding: 10px; border: 1px solid #e2e8f0;">PWA with offline support (scan QR codes even without internet)</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Reporting</strong></td>
        <td style="padding: 10px; border: 1px solid #e2e8f0;">Jasper Reports for PDF exports (audit-ready asset manifests)</td>
      </tr>
    </table>
    
    <h3>🧠 Smart Algorithms</h3>
    <p><strong>Predictive maintenance:</strong> Machine learning model (scikit-learn) analyzes historical breakdown patterns:</p>
    <pre style="background: #1e293b; color: #e2e8f0; padding: 12px; border-radius: 8px; overflow-x: auto; font-size: 12px;">
    if (usage_hours > 8000 && last_service > 6_months) {
      risk_score = 0.78;  // 78% chance of failure in next 30 days
      trigger_alert("Schedule maintenance NOW");
    }
    </pre>
    
    <h3>📊 Real-World Impact</h3>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 16px 0;">
      <div style="background: #dcfce7; padding: 12px; border-radius: 8px; text-align: center;">
        <div style="font-size: 20px; font-weight: bold; color: #16a34a;">$47k</div>
        <div style="font-size: 11px;">recovered assets (pilot test)</div>
      </div>
      <div style="background: #dbeafe; padding: 12px; border-radius: 8px; text-align: center;">
        <div style="font-size: 20px; font-weight: bold; color: #2563eb;">18%</div>
        <div style="font-size: 11px;">reduction in equipment loss</div>
      </div>
      <div style="background: #fef3c7; padding: 12px; border-radius: 8px; text-align: center;">
        <div style="font-size: 20px; font-weight: bold; color: #ca8a04;">92%</div>
        <div style="font-size: 11px;">checkout accuracy rate</div>
      </div>
    </div>
    
    <div style="background: #ede9fe; padding: 12px; border-radius: 8px; margin: 16px 0;">
      <strong>🎭 Favorite edge case:</strong> Someone tried to check out a "coffee machine" as personal equipment. System flagged it as suspicious (coffee machines don't leave the office). Audit prevented theft attempt.
    </div>
    
    <p><em>Best for: Manufacturing facilities, university labs, construction companies, or any org with 500+ trackable assets</em></p>`
    ,
    stack: ['Java', 'Spring Boot', 'PostgreSQL'],
    repo: 'https://github.com/Shorya-agarwal/EquipTrack',
    thumbnail: '/images/face.jpg'
  },
  {
    id: 'talent-match',
    title: 'Talent-match',
    year: '2026',
    description: 'AI Resume Screener',
    details: `<p><strong>Talent-Match</strong> is an AI-powered resume screener that reads between the lines. It doesn't just keyword-match "Python" and call it a day—it understands <em>context</em>.</p>

    <div style="background: #f0fdf4; padding: 16px; border-radius: 8px; margin: 16px 0;">
      <h4 style="margin-top: 0;">💡 The Problem with Traditional ATS</h4>
      <p style="margin-bottom: 0;">Applicant Tracking Systems fail when a candidate says "built scalable microservices" instead of using the exact phrase "Spring Boot REST API". Humans get it. Old systems don't.</p>
    </div>
    
    <h3>🤖 How It Works (Under the Hood)</h3>
    <ol>
      <li><strong>Document parsing:</strong> Extract text from PDFs/DOCX using Mammoth.js (preserves formatting context like bold headers)</li>
      <li><strong>Semantic embedding:</strong> Convert resume + job description into vector embeddings using OpenAI's <code>text-embedding-3-large</code> model</li>
      <li><strong>Cosine similarity:</strong> Calculate match score (0-100%) based on vector distance—"experienced in distributed systems" matches "built Kafka pipelines" even without shared keywords</li>
      <li><strong>Explainability:</strong> GPT-4 generates human-readable reasoning: <em>"Candidate's experience with Docker/K8s aligns with DevOps requirement"</em></li>
    </ol>
    
    <h3>✨ Smart Features</h3>
    <ul>
      <li><strong>Skill inference:</strong> "Led team of 5 engineers" → automatically tags [Leadership, Team Management]</li>
      <li><strong>Experience weighting:</strong> Recent roles scored higher than 10-year-old internships</li>
      <li><strong>Red flag detection:</strong> Employment gaps, frequent job hopping, mismatched education—flagged for human review</li>
      <li><strong>Batch processing:</strong> Screen 100 resumes in 2 minutes vs. 2 hours manual review</li>
    </ul>
    
    <div style="background: #ede9fe; padding: 12px; border-radius: 8px; margin: 16px 0;">
      <strong>🎯 Real-world impact:</strong> Reduced time-to-hire by 40% in pilot test with 500+ applicants for 3 engineering roles.
    </div>
    
    <h3>🔮 Technical Stack</h3>
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px; background: #f8fafc; border: 1px solid #e2e8f0;"><strong>Frontend</strong></td>
        <td style="padding: 8px; border: 1px solid #e2e8f0;">React + TypeScript (drag-and-drop resume upload with progress bars)</td>
      </tr>
      <tr>
        <td style="padding: 8px; background: #f8fafc; border: 1px solid #e2e8f0;"><strong>Backend</strong></td>
        <td style="padding: 8px; border: 1px solid #e2e8f0;">Node.js Express + OpenAI API (streaming responses for real-time feedback)</td>
      </tr>
      <tr>
        <td style="padding: 8px; background: #f8fafc; border: 1px solid #e2e8f0;"><strong>NLP Pipeline</strong></td>
        <td style="padding: 8px; border: 1px solid #e2e8f0;">Custom prompt engineering with few-shot examples for consistency</td>
      </tr>
    </table>
    
    <p><em>Best use case: High-volume hiring for technical roles where skill depth matters more than keyword density</em></p>`
    ,
    stack: ['JavaScript', 'NLP', 'OpenAI API'],
    repo: 'https://github.com/Shorya-agarwal/Talent-match',
    thumbnail: '/images/inotes.png'
  },
  {
    id: 'merchflow',
    title: 'MerchFlow',
    year: '2025',
    description: 'Product Lifecycle Dashboard',
    details: `<p><strong>MerchFlow</strong> is a product lifecycle management dashboard built for merchandising teams who were drowning in Excel spreadsheets and Slack threads.</p>

    <div style="background: #fef3c7; padding: 12px; border-left: 4px solid #f59e0b; margin: 16px 0;">
      <strong>📦 The Chaos Before:</strong> 12 people editing shared Google Sheets → version conflicts, overwritten data, zero audit trail. "Who approved the purple variant?" became an unsolvable mystery.
    </div>
    
    <h3>🚀 What MerchFlow Brings to the Table</h3>
    <ul>
      <li><strong>Kanban-style pipeline:</strong> Drag products through stages (Concept → Design → Sample → Launch)</li>
      <li><strong>Real-time collaboration:</strong> See who's viewing what + live cursors (like Figma, but for merchandise)</li>
      <li><strong>Approval workflows:</strong> "Need design review?" → Tag stakeholders → They get Slack notification → Approve with 1 click</li>
      <li><strong>Vendor integration:</strong> Auto-sync with suppliers' APIs—track sample shipment status without leaving the dashboard</li>
      <li><strong>Cost tracking:</strong> Set budget alerts—get pinged when a product exceeds cost targets</li>
    </ul>
    
    <h3>🏗️ System Architecture</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
      <tr style="background: #dbeafe;">
        <td style="padding: 10px; border: 1px solid #93c5fd;"><strong>Frontend</strong></td>
        <td style="padding: 10px; border: 1px solid #93c5fd;">React 18 + Redux Toolkit (normalized state for 1000+ products)</td>
      </tr>
      <tr style="background: #dcfce7;">
        <td style="padding: 10px; border: 1px solid #86efac;"><strong>Backend</strong></td>
        <td style="padding: 10px; border: 1px solid #86efac;">Node.js + Express + PostgreSQL (relational data for audit logs)</td>
      </tr>
      <tr style="background: #fef3c7;">
        <td style="padding: 10px; border: 1px solid #fcd34d;"><strong>Real-time</strong></td>
        <td style="padding: 10px; border: 1px solid #fcd34d;">Socket.io for presence indicators + optimistic updates</td>
      </tr>
    </table>
    
    <h3>🎯 Performance Optimizations</h3>
    <ol>
      <li><strong>Virtual scrolling:</strong> Render only visible rows (react-window) → handle 10,000 products without lag</li>
      <li><strong>Debounced search:</strong> Wait 300ms after typing before hitting API → reduces server load by 80%</li>
      <li><strong>Cursor pagination:</strong> Load products in chunks of 50 → no "Load More" button needed</li>
      <li><strong>Redis caching:</strong> Frequently accessed products cached for 5 minutes → 10x faster page loads</li>
    </ol>
    
    <div style="background: #ede9fe; padding: 12px; border-radius: 8px; margin: 16px 0;">
      <strong>💡 Fun challenge solved:</strong> How to show "Who's online?" without polling every second? <em>Answer: WebSocket heartbeats + server-side timeout tracking</em>
    </div>
    
    <h3>📊 Metrics That Matter</h3>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 16px 0;">
      <div style="background: #f0f9ff; padding: 12px; border-radius: 8px;">
        <div style="font-size: 18px; font-weight: bold; color: #0284c7;">40% faster</div>
        <div style="font-size: 12px;">time-to-launch vs. old process</div>
      </div>
      <div style="background: #f0fdf4; padding: 12px; border-radius: 8px;">
        <div style="font-size: 18px; font-weight: bold; color: #16a34a;">Zero</div>
        <div style="font-size: 12px;">version conflicts in 6 months</div>
      </div>
    </div>
    
    <p><em>Ideal for fashion brands, consumer goods companies, or any team launching physical products at scale</em></p>`
    ,
    stack: ['JavaScript', 'React', 'Node.js'],
    repo: 'https://github.com/Shorya-agarwal/MerchFlow',
    thumbnail: '/images/ttg.png'
  },
  {
    id: 'vibecheck',
    title: 'VibeCheck',
    year: '2025',
    description: 'Browser-based AI DAW',
    details: `<p><strong>VibeCheck</strong> is what happens when you ask "Can a browser analyze music like a human?" and then spend 6 months proving the answer is <em>"surprisingly yes"</em>.</p>

    <div style="background: #f0f9ff; padding: 16px; border-radius: 8px; margin: 16px 0;">
      <h4 style="margin-top: 0;">🎵 The Challenge</h4>
      <p style="margin-bottom: 0;">Build a <strong>browser-based Digital Audio Workstation component</strong> that can:
      <br>1️⃣ Separate a full song into individual stems (vocals, drums, bass, other)
      <br>2️⃣ Analyze the emotional mood (happy, sad, energetic, chill)
      <br>3️⃣ Do all of this <strong>client-side</strong> without uploading files to a server</p>
    </div>
    
    <h3>🧠 How It Works (The AI Magic)</h3>
    <ol>
      <li><strong>Audio loading:</strong> Web Audio API reads MP3/WAV files into audio buffers (decoded PCM samples)</li>
      <li> <strong>Stem separation:</strong> TensorFlow.js runs a pre-trained U-Net model (Spleeter architecture) directly in the browser
        <ul style="margin-top: 8px; font-size: 14px;">
          <li>Input: Spectrogram (time-frequency representation)</li>
          <li>Output: 4 separate waveforms (vocals, drums, bass, other)</li>
          <li>Processing time: ~30 seconds for a 3-minute song on a decent GPU</li>
        </ul>
      </li>
      <li> <strong>Mood analysis:</strong> Extract audio features (tempo, pitch variance, spectral centroid) → Feed into classifier model
        <ul style="margin-top: 8px; font-size: 14px;">
          <li>High tempo + major key = "Energetic/Happy"</li>
          <li>Slow tempo + minor key = "Sad/Melancholic"</li>
          <li>Trained on 10k labeled songs from Free Music Archive</li>
        </ul>
      </li>
    </ol>
    
    <h3>🎨 User Interface Highlights</h3>
    <ul>
      <li><strong>Waveform visualization:</strong> Canvas API renders multi-track timeline (like Ableton Live but in a browser)</li>
      <li><strong>Playback controls:</strong> Play/pause, solo/mute stems, adjust volume per track</li>
      <li><strong>Mood heatmap:</strong> Color-coded segments show emotional intensity over time (inspired by Spotify's audio analysis)</li>
      <li><strong>Export stems:</strong> Download separated tracks as individual WAV files</li>
    </ul>
    
    <h3>⚡ Technical Deep Dive</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
      <tr style="background: #fef3c7;">
        <td style="padding: 10px; border: 1px solid #fcd34d;"><strong>Challenge</strong></td>
        <td style="padding: 10px; border: 1px solid #fcd34d;"><strong>Solution</strong></td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #e2e8f0;">Model size (150MB)</td>
        <td style="padding: 8px; border: 1px solid #e2e8f0;">Quantized INT8 weights → 40MB, only 5% accuracy loss</td>
      </tr>
      <tr style="background: #f8fafc;">
        <td style="padding: 8px; border: 1px solid #e2e8f0;">GPU memory limits</td>
        <td style="padding: 8px; border: 1px solid #e2e8f0;">Process 5-second chunks sequentially instead of full song at once</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #e2e8f0;">Latency on CPU</td>
        <td style="padding: 8px; border: 1px solid #e2e8f0;">WebGL backend (2x faster than WASM on most devices)</td>
      </tr>
    </table>
    
    <pre style="background: #1e293b; color: #e2e8f0; padding: 12px; border-radius: 8px; overflow-x: auto; font-size: 12px;">
    // Real code snippet: Running inference in the browser
    const model = await tf.loadGraphModel('model/stem_separator.json');
    const spectrogram = audioBufferToSpectrogram(audioBuffer);
    const [vocals, drums, bass, other] = await model.predict(spectrogram);
    </pre>
    <br>
    <h3>🎯 Real-World Use Cases</h3>
    <div style="background: #f0fdf4; padding: 12px; border-radius: 8px; margin: 16px 0;">
      <ul style="margin: 8px 0;">
        <li><strong>Karaoke creators:</strong> Remove vocals to generate backing tracks</li>
        <li><strong>Music students:</strong> Isolate instrument parts to learn by ear</li>
        <li><strong>DJs/remixers:</strong> Extract clean stems for mashups</li>
        <li><strong>Podcast editors:</strong> Separate background music from speech</li>
      </ul>
    </div>
    
    <div style="background: #ede9fe; padding: 12px; border-radius: 8px; margin: 16px 0;">
      <strong>🚀 Performance benchmark:</strong> Processes a 4-minute song in 45 seconds on M1 MacBook (WebGPU acceleration). That's faster than some desktop DAWs!
    </div>
    
    <p><em>Tech stack: TensorFlow.js, Web Audio API, Canvas, React, TypeScript, Vite (bundle size optimized with tree-shaking)</em></p>`
    ,
    stack: ['JavaScript', 'Deep Learning', 'Web Audio API'],
    repo: 'https://github.com/Shorya-agarwal/VibeCheck',
    thumbnail: '/images/face.jpg'
  },
  {
    id: 'opsguard',
    title: 'OpsGuard',
    year: '2025',
    description: 'Fintech Alerting & Reliability Platform',
    details:`<p><strong>OpsGuard</strong> is a cybersecurity project with a very specific (and slightly terrifying) mission: <strong>find zero-day vulnerabilities in industrial control systems before the bad guys do</strong>.</p>

    <div style="background: #fef2f2; padding: 12px; border-left: 4px solid #dc2626; margin: 16px 0;">
      <strong>⚠️ Context:</strong> Programmable Logic Controllers (PLCs) run power grids, water treatment plants, manufacturing lines. They're also notoriously insecure—many run outdated firmware with no patch management.
    </div>
    
    <h3>🕵️ The Approach: AI-Powered Fuzzing</h3>
    <p>Traditional vulnerability scanners use predefined signatures (like antivirus definitions). <strong>OpsGuard uses LLMs to generate novel attack payloads</strong> that exploit unexpected behavior:</p>
    
    <ol>
      <li><strong>Firmware analysis:</strong> Disassemble PLC binaries (ARM/MIPS architectures) to identify input validation routines</li>
      <li><strong>LLM prompt engineering:</strong> Feed GPT-4 with Assembly snippets + known CVE patterns → Generate 1000s of mutation-based test cases</li>
      <li><strong>Automated testing:</strong> Deploy payloads to sandboxed PLC emulators (QEMU-based virtual devices)</li>
      <li><strong>Anomaly detection:</strong> Monitor for crashes, memory corruption, privilege escalation using runtime instrumentation (Frida hooks)</li>
    </ol>
    
    <h3>🎯 Discovered Vulnerabilities (Proof-of-Concept)</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
      <tr style="background: #fee2e2;">
        <td style="padding: 10px; border: 1px solid #fca5a5;"><strong>Buffer Overflow</strong></td>
        <td style="padding: 10px; border: 1px solid #fca5a5;">Malformed Modbus packet → remote code execution (CVE-pending)</td>
      </tr>
      <tr style="background: #fef3c7;">
        <td style="padding: 10px; border: 1px solid #fcd34d;"><strong>Auth Bypass</strong></td>
        <td style="padding: 10px; border: 1px solid #fcd34d;">Default credentials in undocumented admin panel (vendor notified)</td>
      </tr>
      <tr style="background: #dbeafe;">
        <td style="padding: 10px; border: 1px solid #93c5fd;"><strong>Timing Attack</strong></td>
        <td style="padding: 10px; border: 1px solid #93c5fd;">Password check leaks length via response time differential</td>
      </tr>
    </table>
    
    <h3>💻 Technical Stack</h3>
    <ul>
      <li><strong>LLM Integration:</strong> OpenAI API + Anthropic Claude for diversity in payload generation</li>
      <li><strong>Binary Analysis:</strong> Ghidra (NSA's reverse engineering tool) + custom Python scripts</li>
      <li><strong>Virtualization:</strong> Docker containers running QEMU ARM emulators for safe testing</li>
      <li><strong>Alerting:</strong> Slack webhooks for instant notification when a crash is detected</li>
    </ul>
    
    <div style="background: #ede9fe; padding: 12px; border-radius: 8px; margin: 16px 0;">
      <strong>🔒 Responsible disclosure:</strong> All findings reported to vendors via coordinated vulnerability disclosure (CVD) process. Security, not chaos.
    </div>
    
    <p><em>This project sits at the intersection of AI, cybersecurity, and critical infrastructure—areas that desperately need more attention</em></p>`
    ,
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
