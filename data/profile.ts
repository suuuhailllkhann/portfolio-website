import { siteConfig } from "@/config/site";

export const profile = {
  name: "Suhail",
  roles: ["Data Scientist", "Applied ML Engineer"],
  nextRole: "Healthcare AI",
  summary: "I build data-driven and machine-learning systems using Python, SQL, AWS, and production-oriented engineering practices, with a growing specialization in healthcare AI.",
  location: "United States",
};

export const experience = [
  {
    role: "Health Data Analyst", company: "NYRX at Ralph LLC", dates: "October 2025 — Present", context: "Healthcare startup · Five-person engineering team", current: true,
    description: "Working across healthcare analytics, backend development, cloud infrastructure, and healthcare data systems in PHI-aware workflows using dummy or testing data.",
    contributions: ["Built and contributed to approximately 24–30 REST APIs supporting the healthcare platform.", "Designed and contributed to approximately 25–30 PostgreSQL database tables.", "Co-developed ETL, data cleaning, validation, and backup workflows using Python, SQL, PostgreSQL, and Git.", "Managed multiple AWS EC2 instances and supported S3, IAM, and RDS infrastructure."],
  },
  { role: "Data Analyst I", company: "Hands Industries FZC", dates: "August 2020 — October 2023", context: null, current: false, description: "Verified responsibilities and achievements will be added here once finalized.", contributions: [] },
  { role: "President", company: "ACE Lords Student Organization", dates: "August 2021 — August 2023", context: null, current: false, description: "Led workshops, technical events, mentoring initiatives, and student activities supporting more than 200 students.", contributions: [] },
] as const;

export const education = [
  { degree: "Master of Science in Information Technology", school: "St. Francis College", detail: "GPA: 3.85" },
  { degree: "Bachelor of Engineering", school: "Osmania University", detail: "Computer Science and Engineering" },
] as const;

export const skillGroups = [
  { title: "Programming", items: ["Python", "SQL", "R", "JavaScript"] },
  { title: "Machine Learning & Statistics", items: ["Pandas", "NumPy", "scikit-learn", "Feature Engineering", "Exploratory Data Analysis", "Regression", "Classification", "Hypothesis Testing", "A/B Testing"] },
  { title: "Visualization", items: ["Power BI", "Tableau", "Excel", "Matplotlib", "Seaborn"] },
  { title: "Cloud", items: ["AWS EC2", "AWS S3", "AWS IAM", "AWS RDS"] },
  { title: "Databases", items: ["PostgreSQL", "SQL"] },
  { title: "Development & Data Engineering", items: ["REST APIs", "Git", "ETL", "Data Validation", "Data Cleaning", "Jupyter Notebook", "Docker", "Ubuntu Linux"] },
] as const;

export const certification = { title: "Google Data Analytics Professional Certificate", url: siteConfig.links.credential };
export const articles = ["Preventing Data Leakage in Healthcare Machine Learning", "Why Patient-Level Data Splitting Matters", "Evaluating Imbalanced Healthcare Classification Models", "Building Reproducible Machine Learning Pipelines", "Using SHAP Responsibly in Healthcare AI"] as const;

export const project = {
  slug: "healthcare-readmission-prediction", title: "Healthcare Readmission Prediction System", status: "In Active Development",
  description: "A production-oriented machine learning project focused on predicting healthcare readmissions while demonstrating responsible model development, leakage prevention, reproducibility, explainability, and clinically informed evaluation.",
  tags: ["Healthcare AI", "Python", "scikit-learn", "XGBoost", "CatBoost", "SHAP"],
  methods: ["Clinical feature analysis", "Patient-level splitting", "Cross-validation", "Hyperparameter tuning", "Logistic Regression", "Random Forest", "XGBoost", "CatBoost", "SHAP explainability", "Error analysis"],
};
