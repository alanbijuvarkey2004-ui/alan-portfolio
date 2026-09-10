export const personalInfo = {
  name: "Alan Biju Varkey",
  title: "AI & Software Engineer | QA Automation Specialist",
  tagline: "Bridging cutting-edge Deep Learning research with robust, scalable, production-ready software systems.",
  bio: "Passionate Computer Science & Engineering (Artificial Intelligence) undergraduate at Karunya Institute of Technology and Sciences. Experienced in architecting deep learning computer vision models, medical signal analysis, automated testing with Selenium, and full-stack software development. Published IEEE & Journal author with an analytical mindset honed through hands-on industry internships.",
  email: "alanbijuvarkey2004@gmail.com",
  phone: "+91 8330872915",
  location: "India",
  status: "Open to Software Development, AI/ML & QA Roles",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  targetRoles: [
    "Software Development Engineer",
    "AI / Machine Learning Engineer",
    "QA / Test Automation Engineer",
    "Data Scientist"
  ],
  education: {
    degree: "B.Tech in Computer Science and Engineering (Artificial Intelligence)",
    institution: "Karunya Institute of Technology and Sciences",
    period: "2022 – 2026",
    status: "Final Year / Graduating 2026",
    details: "Core specialization in Artificial Intelligence, Neural Networks, Advanced Data Structures, Automated Software Testing, and High-Performance Computing."
  }
};

export const stats = [
  { label: "Fall Detection Accuracy", value: "98.5%", icon: "Zap" },
  { label: "CAD Records Screened", value: "40K+", icon: "Database" },
  { label: "Published Research Papers", value: "2", icon: "Award" },
  { label: "Industry Internships", value: "2", icon: "Briefcase" }
];

export const skillCategories = [
  {
    id: "programming",
    title: "Programming Languages",
    icon: "Code",
    description: "Core algorithms, data structures, and backend logic",
    skills: [
      { name: "Python", level: 95, highlight: "Deep Learning, PyTorch, Flask, OpenCV" },
      { name: "Java", level: 85, highlight: "OOP, Selenium Automation, Data Structures" },
      { name: "C", level: 80, highlight: "Systems programming, low-level memory logic" },
      { name: "SQL", level: 85, highlight: "Relational modeling, SQLite, schema design" }
    ]
  },
  {
    id: "aiml",
    title: "Artificial Intelligence & ML",
    icon: "Brain",
    description: "Deep learning architectures, computer vision & temporal models",
    skills: [
      { name: "PyTorch & Deep Learning", level: 92, highlight: "CNN, BiLSTM, Custom Loss, Transformers" },
      { name: "YOLOv8 & Computer Vision", level: 94, highlight: "Real-time object detection, OpenCV pipelines" },
      { name: "Scikit-Learn & ML", level: 90, highlight: "Feature engineering, ensemble models, regression" },
      { name: "Medical Signal Processing", level: 88, highlight: "12-Lead ECG & EEG CHB-MIT classification" },
      { name: "Pandas & Data Science", level: 90, highlight: "Exploratory analysis, cleansing, vectorization" }
    ]
  },
  {
    id: "qa",
    title: "Testing & Quality Assurance",
    icon: "CheckCircle2",
    description: "End-to-end test automation and defect lifecycles",
    skills: [
      { name: "Selenium WebDriver", level: 92, highlight: "Automated regression suites, headless execution" },
      { name: "Test Case Design", level: 90, highlight: "Boundary value analysis, equivalence partitioning" },
      { name: "STLC & SDLC Processes", level: 92, highlight: "Agile sprints, defect triage, QA signoffs" },
      { name: "Regression & Sanity Testing", level: 88, highlight: "Smoke tests, CI verification, bug reproduction" }
    ]
  },
  {
    id: "web-tools",
    title: "Web & Developer Tools",
    icon: "Layers",
    description: "Full-stack development, network simulation & RPA",
    skills: [
      { name: "Angular & Web Tech", level: 82, highlight: "HTML5, CSS3, Modern TypeScript component UI" },
      { name: "Flask & REST APIs", level: 88, highlight: "Microservice backends, model serving endpoints" },
      { name: "VS Code & Git", level: 92, highlight: "Version control, multi-branching, debugging" },
      { name: "Cisco Packet Tracer", level: 88, highlight: "VLANs, routing protocols, subnet topology" },
      { name: "UiPath Studio", level: 80, highlight: "Robotic Process Automation workflows" }
    ]
  }
];

export const projects = [
  {
    id: "fall-detection",
    title: "Fall Detection System Using YOLOv8",
    subtitle: "Real-Time AI Vision Pipeline for Healthcare & Workplace Safety",
    description: "Engineered an edge-ready computer vision fall detection system using YOLOv8 pose estimation fused with an LSTM temporal classifier to distinguish hazardous falls from ordinary rapid movements.",
    detailedDescription: "Designed to protect elderly patients and industrial workers by delivering sub-second real-time alert notifications. The system ingests standard camera feeds, extracts 17 body keypoints using YOLOv8, and feeds sequential spatial vectors into a bidirectional LSTM to verify loss of balance before triggering automated emergency alerts via the Telegram Bot API.",
    techStack: ["Python", "OpenCV", "YOLOv8", "LSTM", "Telegram API", "PyTorch"],
    metrics: [
      { label: "Accuracy", value: "98.5%" },
      { label: "Precision", value: "95.3%" },
      { label: "Recall", value: "96.8%" },
      { label: "Latency", value: "< 45ms" }
    ],
    badge: "Computer Vision & Edge AI",
    gradient: "from-cyan-500/20 to-blue-600/20",
    borderAccent: "hover:border-cyan-400",
    highlights: [
      "Custom dataset augmentation simulating varied room lighting and camera angles",
      "Temporal LSTM window filters out false triggers such as sitting down or tying shoes",
      "Instant Telegram webhook integration dispatching live snapshot and GPS coordinates",
      "Optimized for 30+ FPS edge inference on moderate hardware configurations"
    ]
  },
  {
    id: "cardio-ai",
    title: "CardioAI - AI-Based ECG Classification",
    subtitle: "Clinical Decision Support System for 12-Lead ECG Signals",
    description: "Developed a hybrid deep learning clinical decision support system combining Convolutional Neural Networks with Bidirectional LSTMs for multi-class cardiac arrhythmia diagnosis.",
    detailedDescription: "CardioAI bridges cardiology diagnostic workflows with deep learning. Raw 12-lead ECG signals undergo automated baseline wander removal and bandpass filtering, after which a dual-stream CNN-BiLSTM extracts morphological wave features and rhythm anomalies. The solution features a full-stack Flask web dashboard with live waveform visualizer, patient history tracking, and downloadable PDF clinical reports.",
    techStack: ["Python", "PyTorch", "CNN", "BiLSTM", "Flask", "SQLite", "Chart.js"],
    metrics: [
      { label: "Accuracy", value: "95.88%" },
      { label: "AUC-ROC", value: "0.99" },
      { label: "Leads Analyzed", value: "12-Lead" },
      { label: "Diagnosis Speed", value: "1.2s" }
    ],
    badge: "Medical AI & Full Stack",
    gradient: "from-purple-500/20 to-pink-600/20",
    borderAccent: "hover:border-purple-400",
    highlights: [
      "End-to-end automated signal pre-processing (Pan-Tompkins QRS wave detection)",
      "Hybrid CNN spatial feature extractor paired with BiLSTM temporal memory",
      "Interactive doctor's web portal with live ECG plotting and diagnostic confidence gauges",
      "Secure local SQLite patient database storing clinical logs and diagnostic history"
    ]
  },
  {
    id: "stroke-prediction",
    title: "Stroke Prediction & Risk Stratification",
    subtitle: "Predictive Machine Learning Engine for Early Clinical Intervention",
    description: "Built an intelligent clinical stroke prediction model leveraging medical feature engineering, hyperparameter-tuned classification, and explainable feature importances.",
    detailedDescription: "Tackled severe medical dataset skewness and class imbalance through SMOTE oversampling, demographic stratified splits, and median imputation for physiological indicators (BMI, average glucose levels, hypertension). Achieved >85% prediction accuracy with high sensitivity to minimize false negatives in critical early risk screening.",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    metrics: [
      { label: "Accuracy", value: "85%+" },
      { label: "Sensitivity", value: "89.2%" },
      { label: "Algorithm", value: "Logistic Regression / ML" },
      { label: "Risk Factors", value: "11 Clinical Features" }
    ],
    badge: "Healthcare Data Science",
    gradient: "from-emerald-500/20 to-teal-600/20",
    borderAccent: "hover:border-emerald-400",
    highlights: [
      "Rigorous data pipeline handling collinearity and missing medical attributes",
      "Applied SMOTE (Synthetic Minority Over-sampling) for balanced risk scoring",
      "Interpretable odds-ratio coefficients for clinical transparency",
      "Interactive prediction sandbox enabling doctors to simulate risk variance"
    ]
  }
];

export const publications = [
  {
    id: "pub-1",
    title: "Hybrid EEG Signal Enhancement and Temporal-Graph Transformer Framework for Multiclass Seizure",
    venue: "IEEE International Conference on Computing, Networks and Communications (IC2NC)",
    status: "Published",
    type: "IEEE Conference Paper",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    dataset: "CHB-MIT Scalp EEG Database",
    results: "96.2% Accuracy in multiclass epileptic seizure detection",
    description: "Proposed an advanced framework integrating topological spatial graph representations with temporal self-attention transformers to model cross-channel brain wave correlations, demonstrating state-of-the-art seizure onset identification.",
    tags: ["Temporal-Graph Transformers", "EEG Analysis", "Deep Learning", "Signal Processing"]
  },
  {
    id: "pub-2",
    title: "Federated Attention-Capsule CNN with Bio-Optimization for Coronary Artery Disease Screening",
    venue: "Journal of Trends in Computer Science and Smart Technology",
    status: "Published",
    type: "Peer-Reviewed Journal",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    doi: "10.36548/jtcsst.2026.2.001",
    dataset: "40,000+ Multicentric Clinical Patient Records",
    results: "97.4% Screening Accuracy with privacy-preserving federated aggregation",
    description: "Architected a decentralized, privacy-preserving screening network utilizing Attention-Capsule CNNs and bio-inspired optimization algorithms to diagnose Coronary Artery Disease across distributed clinical nodes without centralizing sensitive patient data.",
    tags: ["Federated Learning", "Capsule Networks", "Bio-Optimization", "Privacy-Preserving AI"]
  }
];

export const experience = [
  {
    id: "exp-vaisesika",
    role: "Automation Testing Intern",
    company: "Vaisesika Consulting Pvt. Ltd.",
    period: "May 2024 – Jul 2024",
    duration: "3 Months",
    location: "India (Hybrid)",
    type: "Internship",
    description: "Led the development and execution of automated regression test suites, validated mission-critical web applications, and collaborated directly with engineering teams to optimize software test lifecycles.",
    achievements: [
      "Engineered automated test scripts using Selenium WebDriver in Java, slashing manual regression testing time by 40%.",
      "Designed comprehensive test suites covering functional, boundary, negative, and regression scenarios across the STLC/SDLC.",
      "Identified, documented, and triaged critical software defects in defect tracking pipelines.",
      "Collaborated with developers during sprint reviews to verify bug fixes and prevent defect leakage."
    ],
    skills: ["Selenium WebDriver", "Java", "STLC", "SDLC", "Test Automation", "Regression Testing"]
  },
  {
    id: "exp-cisco",
    role: "Networking Intern",
    company: "Cisco AICTE Virtual Internship Program",
    period: "May 2024 – Jun 2024",
    duration: "2 Months",
    location: "Virtual",
    type: "Internship",
    description: "Conducted hands-on network architecture simulations, implemented enterprise subnetting strategies, and diagnosed routing & switching anomalies.",
    achievements: [
      "Modeled and simulated multi-tier enterprise network topologies using Cisco Packet Tracer.",
      "Configured static routing, dynamic RIP/OSPF protocols, VLANs, and inter-VLAN routing.",
      "Diagnosed latency bottlenecks, IP addressing conflicts, and packet drop anomalies in virtual enterprise fabrics.",
      "Completed rigorous technical assessments under Cisco Networking Academy standards."
    ],
    skills: ["Cisco Packet Tracer", "Network Topologies", "Routing & Switching", "Subnetting", "Troubleshooting"]
  }
];

export const certifications = [
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    icon: "Shield",
    badge: "Professional Specialization",
    color: "from-blue-500 to-cyan-500",
    description: "Comprehensive credential covering threat detection, Linux security commands, SIEM tools, network defense, and incident response."
  },
  {
    title: "Networking Essentials",
    issuer: "Cisco Networking Academy",
    icon: "Network",
    badge: "Cisco Academy",
    color: "from-cyan-500 to-teal-500",
    description: "Foundational architecture covering OSI layers, IP addressing, wireless security, and network protocol fundamentals."
  },
  {
    title: "Network Addressing and Basic Troubleshooting",
    issuer: "Cisco Networking Academy",
    icon: "Activity",
    badge: "Cisco Academy",
    color: "from-teal-500 to-emerald-500",
    description: "Hands-on competency in IPv4/IPv6 subnetting, ping/traceroute diagnostic methodologies, and router configuration."
  },
  {
    title: "Java Programming Fundamentals",
    issuer: "Infosys Springboard",
    icon: "Coffee",
    badge: "Infosys Certified",
    color: "from-orange-500 to-amber-500",
    description: "Core Java, Object-Oriented Design principles, exception handling, and Collections Framework for robust enterprise systems."
  },
  {
    title: "PCAP: Programming Essentials in Python",
    issuer: "Cisco Networking Academy",
    icon: "FileCode",
    badge: "Cisco Academy",
    color: "from-purple-500 to-indigo-500",
    description: "Certified proficiency in algorithmic problem solving, Python data structures, file I/O, and OOP design."
  }
];

export const volunteering = {
  role: "National Service Scheme (NSS) Volunteer",
  organization: "Karunya Institute of Technology and Sciences",
  period: "2022 – 2025",
  highlights: [
    "Spearheaded grassroots community outreach campaigns and rural digital literacy awareness drives.",
    "Led technical and logistics coordination for large-scale institutional social welfare events.",
    "Contributed photography, videography, and promotional video editing for state-level social initiatives."
  ]
};
