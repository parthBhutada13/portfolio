export const designProjects = [
  {
    id: "isro-redesign",
    n: "01",
    t: "INNOXO 2026 – Overdrive UI",
    role: "UI/UX Design",
    year: "2026",
    category: "Award Winner - 2nd Place",
    desc: "Redesigned ISRO's official website for the Overdrive UI competition. Focus on intuitive navigation, clean visual hierarchy, and space-themed UI components to improve public engagement with India's space missions.",
    fullDesc: "Created a modern, accessible redesign of ISRO's web presence with emphasis on information architecture and visual storytelling. The design features interactive prototyping showcasing how to effectively communicate complex space science to diverse audiences.",
    tech: ["UI Design", "Prototyping", "Visual Hierarchy", "Accessibility"],
    tools: ["Figma"],
    url: "https://www.figma.com/proto/CG7Q7SX3R6mNrre5O9MtLH/finalist_parth_bhutada_ps3?node-id=1-2&t=2ru4TXi5KH3jyDBW-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1"
  },
  {
    id: "akshar-bharti",
    n: "02",
    t: "Akshar Bharti – EdTech Platform",
    role: "Product Design & Development",
    year: "2025",
    category: "Social Impact",
    desc: "Designed and developed a scalable English learning platform for NGO workers with 95 structured lessons, audio support, and interactive exercises.",
    fullDesc: "Created a complete EdTech solution for English language learning with structured curriculum design. Delivered 95 lessons with audio support, interactive exercises, and progress tracking. Focused on accessibility for non-technical users and mobile-first design for resource-constrained environments.",
    tech: ["EdTech Design", "Curriculum Structure", "Accessibility", "User Experience"],
    tools: ["Figma", "Product Development", "React"],
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7424009202458771456/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADj9yn0BsTn9e1KFnwfwvyHRXtqrvehAZO4"
  }
];

export const technicalProjects = [
  {
    id: "personal-finance",
    n: "01",
    t: "Personal Finance Tracking & Predictive Budgeting System",
    role: "Full Stack & ML",
    year: "2026",
    category: "Web Application",
    desc: "Personal finance platform enabling users to track activities, derive insights, and receive budget recommendations and forecasts.",
    fullDesc: "Developed a personal finance platform that enables users to systematically track financial activities, derive meaningful insights into spending patterns, and support informed decision-making through budget recommendations, expense forecasting, and structured analytical visualizations.",
    tech: ["React", "TypeScript", "MongoDB", "Predictive Budgeting"],
    tools: ["React", "TypeScript", "MongoDB", "Node.js"],
    concepts: ["State Management", "Data Visualization", "Forecasting"],
    url: "https://harbor-nu-wine.vercel.app/"
  },
  {
    id: "contextifyai",
    n: "02",
    t: "Context-Aware Translation Engine",
    role: "NLP & LLM",
    year: "2025",
    category: "Natural Language Processing",
    desc: "English-to-Hindi translation application combining LLM-based translation with contextual explanations handling idioms, tone, and cultural nuances.",
    fullDesc: "Built a sophisticated translation system that goes beyond word-for-word conversion. The system analyzes idiomatic expressions, maintains cultural context, and provides educational explanations. Deployed on Hugging Face Spaces for public access and continuous learning.",
    tech: ["Natural Language Processing", "LLM Fine-tuning", "Multilingual NLP", "Contextual Analysis"],
    tools: ["Python", "Gradio", "LLaMA", "Hugging Face", "Groq API"],
    concepts: ["Transformer Models", "Translation Architecture", "Context Windows", "Temperature Tuning"],
    url: "https://huggingface.co/spaces/parthbhutada/contextify.ai"
  },
  {
    id: "customer-segmentation",
    n: "03",
    t: "Mall Customer Segmentation",
    role: "Machine Learning & Data Science",
    year: "2025",
    category: "Unsupervised Learning",
    desc: "Implemented K-Means, DBSCAN, and Hierarchical clustering with PCA and t-SNE dimensionality reduction, evaluating models using Silhouette and Calinski-Harabasz scores.",
    fullDesc: "Comprehensive clustering analysis comparing multiple unsupervised learning algorithms. Pipeline includes data preprocessing, feature scaling, dimensionality reduction, clustering, and rigorous evaluation metrics. Identified distinct customer segments for targeted marketing strategies.",
    tech: ["Unsupervised Learning", "Dimensionality Reduction", "Clustering Algorithms", "Model Evaluation"],
    tools: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    concepts: ["K-Means", "DBSCAN", "Hierarchical Clustering", "PCA", "t-SNE", "Silhouette Score"],
    url: "https://github.com/parthBhutada13/UnsupervisedLearning.git"
  },
];

export const projects = [...technicalProjects, ...designProjects];
