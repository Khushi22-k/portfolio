import { Experience, Project, SkillCategory, Certification } from './types';

// Static asset imports representing generated assets
import khushiPhoto from './assets/images/khushi_sharma_1782645741212.jpg';
import mutualFundPhoto from './assets/images/mutual_fund_dashboard_1782644288595.jpg';
import superSalesPhoto from './assets/images/super_sales_dashboard_1782644307497.jpg';
import trendingJobsPhoto from './assets/images/trending_jobs_dashboard_1782644325286.jpg';

export const personalInfo = {
  name: "Khushi Sharma",
  title: "Data Analyst & AI/ML Specialist",
  email: "khushi.sharma9119@gmail.com",
  phone: "+91-8791768506",
  location: "Meerut, UP, India",
  linkedin: "https://linkedin.com/in/khushi-sharma-2b4897289",
  github: "https://github.com/Khushi22-k",
  photo: khushiPhoto,
  summary: "Aspiring Data Analyst with hands-on experience designing 3+ interactive Power BI dashboards that convert raw, multi-source datasets into actionable business insights. Proficient in SQL, Python, and DAX across the full analytics lifecycle — data cleaning, ETL, modeling, and visualization. Recently built a RAG-powered stock advisory platform at Infosys Springboard, pairing data analysis with applied machine learning and LLMs."
};

export const experiences: Experience[] = [
  {
    role: "AI Intern",
    company: "Infosys Springboard",
    period: "2-Month Internship",
    type: "Professional Experience",
    bullets: [
      "Built an AI-powered Stock Screener & Advisory Platform helping first-time investors evaluate stocks with confidence.",
      "Cleaned and preprocessed raw stock market datasets — resolving missing values, outliers, and inconsistent formats to improve data reliability.",
      "Designed timeline-based visualizations of stock price and market trends for non-expert users.",
      "Developed a RAG application enabling users to query stock market data and key indicators in natural language."
    ]
  }
];

export const education = {
  degree: "B.Tech - Computer Science & Engineering (AI/ML)",
  institution: "Bharat Institute of Technology",
  period: "2024 – 2027",
  details: "Focusing on machine learning engineering, statistical data processing, deep learning architectures, and prompt engineering."
};

export const projects: Project[] = [
  {
    id: "mutual-fund-dashboard",
    title: "Mutual Fund CAPS Analysis Dashboard",
    subtitle: "End-to-End Performance Analytics Tracker",
    category: "Finance",
    tags: ["Power BI", "DAX", "Excel"],
    image: mutualFundPhoto,
    role: "Lead Analyst & BI Developer",
    metrics: [
      { label: "Data Refresh Efficiency", value: "+30%" },
      { label: "Data Assets Modeled", value: "Multi-Source" },
      { label: "Asset Classes Analyzed", value: "3 Major Categories" }
    ],
    description: "Designed and implemented an end-to-end Power BI dashboard analyzing mutual fund performance across categories, asset classes, and risk profiles. The platform enables non-expert users and financial decision-makers to inspect key performance ratios and comparison metrics seamlessly.",
    bullets: [
      "Designed end-to-end Power BI dashboard analyzing mutual fund performance across categories and asset classes.",
      "Built DAX measures for CAGR (Compound Annual Growth Rate), rolling returns, and risk-adjusted performance (Sharpe, Treynor).",
      "Automated complex multi-source data refresh processes, successfully cutting operational maintenance effort by 30%.",
      "Enabled Large Cap, Mid Cap & Small Cap fund comparisons via dynamic slicers and custom drill-through pages."
    ],
    codeUrl: "https://github.com/Khushi22-k/mutual-fund-analysis-dashboard",
    liveUrl: "https://github.com/Khushi22-k/mutual-fund-analysis-dashboard"
  },
  {
    id: "super-sales-dashboard",
    title: "Super Sales Dashboard",
    subtitle: "Enterprise Revenue & Operations Diagnostics",
    category: "Retail / E-commerce",
    tags: ["Power BI", "Power Query", "SQL"],
    image: superSalesPhoto,
    role: "Data Modeler & Analyst",
    metrics: [
      { label: "Profit Gap Identified", value: "23% in Furniture" },
      { label: "Tables Modelled", value: "4+ Star Schema" },
      { label: "Granular Slicing", value: "Region & Segment" }
    ],
    description: "Developed an interactive enterprise sales diagnostics dashboard tracking revenue, profit margins, and key performance indicators across multiple distribution channels. The project involved modeling relational databases and designing high-fidelity data visualizations to surface operational blockages.",
    bullets: [
      "Developed interactive dashboard tracking revenue, profit margins, and product performance across regions and segments.",
      "Applied star-schema data modeling techniques across 4+ linked tables to streamline database querying.",
      "Identified a critical 23% profit gap in the Furniture segment through deep slice-and-dice data mining.",
      "Leveraged Power Query for sophisticated ETL operations including column merges, custom date tables, and data type corrections."
    ]
  },
  {
    id: "trending-jobs-dashboard",
    title: "Trending Jobs Dashboard",
    subtitle: "Labor Market Analysis & Pipeline Automation",
    category: "Careers / Human Capital",
    tags: ["Power BI", "Python", "Web Scraping"],
    image: trendingJobsPhoto,
    role: "Python & BI Engineer",
    metrics: [
      { label: "Tech Roles Monitored", value: "10+ Profiles" },
      { label: "Pipeline Automation", value: "Python Scraper" },
      { label: "Analytics Dimension", value: "Sentiment Scoring" }
    ],
    description: "Built a live-data tracking dashboard monitoring tech labor trends by connecting automated Python web-scrapers with Power BI. It ingests thousands of job descriptions to understand which skills and tools are currently seeing premium demands.",
    bullets: [
      "Built live-data Power BI dashboard tracking job market trends across 10+ tech roles using scraped/API data.",
      "Integrated Python scripts for automated data preprocessing and sentiment scoring of job descriptions.",
      "Developed custom charts showing top tech stack demand correlations, helping candidates identify premium-paying skills.",
      "Optimized ETL pipelines in Python using Pandas and NumPy to transform raw unstructured job descriptions into structured relational tables."
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    name: "BI & Visualization",
    skills: ["Power BI", "DAX", "Power Query", "Data Modeling", "Excel", "Pivot Tables"],
    level: 98
  },
  {
    name: "Data & Databases",
    skills: ["SQL", "MySQL", "Data Cleaning", "ETL Processes"],
    level: 92
  },
  {
    name: "Programming",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    level: 90
  },
  {
    name: "AI / ML",
    skills: ["Machine Learning", "RAG", "LLMs", "Prompt Engineering"],
    level: 85
  },
  {
    name: "Soft Skills",
    skills: ["Analytical Thinking", "Problem Solving", "Effective Communication"],
    level: 95
  }
];

// Heatmap matrix configuration (as specified in the Analytic Precision design system)
export const skillHeatmap = {
  categories: ["Python", "SQL", "ETL", "Stats", "Cloud / AI"],
  dimensions: ["BI/Vis", "Data/DB", "Python", "AI/ML", "Soft Skills"],
  // Proficiency values from 1 (Novice) to 4 (Expert)
  matrix: [
    [1, 2, 3, 4], // Python row
    [1, 2, 3, 4], // SQL row
    [1, 2, 3, 0], // ETL row (4th slot is empty/lower)
    [1, 2, 3, 4], // Stats row
    [1, 2, 0, 0]  // Cloud/AI row (3rd/4th slot empty/lower)
  ]
};

export const certifications: Certification[] = [
  {
    name: "Data Visualization Certification",
    issuer: "Deloitte",
    date: "2025"
  },
  {
    name: "Python Programming Certification",
    issuer: "GUVI",
    date: "2024"
  },
  {
    name: "SQL Certification",
    issuer: "W3Schools",
    date: "2024"
  }
];

export const languages = ["English", "Hindi — Fluent"];
