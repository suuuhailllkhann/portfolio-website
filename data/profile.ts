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
    company: "NYRX at Ralph LLC", location: "New York, NY", roles: [
      { title: "Data Scientist", dates: "Mar 2026 — Present", current: true, contributions: ["Developed a medication demand forecasting solution from pharmacy billing and ordering history, using time-based features and predictive models to estimate future demand and surface potential inventory mismatches.", "Established the ML workflow from data preparation through model evaluation and deployment, incorporating experiment tracking, model versioning, containerized inference, and performance monitoring for repeatable model releases.", "Designed PostgreSQL data models and validation workflows for healthcare and pharmacy data, improving the reliability of data used across analytics, operational reporting, and machine-learning workflows.", "Built and maintained REST APIs and backend services with Node.js, Express.js, PostgreSQL, Redis, and AWS, providing the production infrastructure needed to connect application workflows with analytical and ML components.", "Led backend and data implementation within a five-person engineering team, working directly with company leadership and coordinating with frontend, DevOps, and QA through development, testing, and deployment."] },
      { title: "Junior Data Analyst", dates: "Oct 2025 — Mar 2026", current: false, contributions: ["Analyzed pharmacy billing, inventory, and operational data using SQL, Excel, and Power BI, cleaning and reconciling records to identify quantity discrepancies, usage patterns, and inventory trends.", "Built reporting workflows and dashboards to compare medication billing and ordering activity, giving management clearer visibility into shortages, excess quantities, and purchasing needs."] },
    ],
  },
  { company: "Hands Industries FZC", location: "Sharjah, UAE (Remote)", roles: [{ title: "Data Analyst I", dates: "Aug 2020 — Oct 2023", current: false, contributions: ["Analyzed customer, sales, and operational datasets using SQL, Excel, Tableau, and Power BI, cleaning and organizing approximately 5,000–10,000 records to identify customer trends, recurring issues, and business performance patterns.", "Built dashboards and structured reporting workflows from manually maintained business records, helping management track customer and operational trends and use data more effectively for decision-making."] }] },
] as const;

export const leadership = { role: "President", organization: "ACE Lords — Department of Computer Science & Engineering", institution: "L.I.E.T", dates: "2021 — 2023", description: "Led a 15-member technical organization serving a 300–400 student CSE department; organized 10 technical workshops, a datathon, and a three-day technical event featuring 8 competitions and 800+ participants. Received a Letter of Appreciation for two years of leadership." } as const;

export const education = [
  { degree: "Master of Science in Information Technology", school: "St. Francis College", location: "Brooklyn, NY", gpa: "GPA 3.85 / 4.00", date: "Aug 2025" },
  { degree: "Bachelor of Engineering in Computer Science & Engineering", school: "Osmania University", location: "Hyderabad, India", gpa: "GPA 3.67 / 4.00", date: "Jul 2023" },
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
  slug: "readmission-prediction", title: "30-Day Hospital Readmission Risk Prediction", status: "Completed retrospective study",
  description: "End-to-end machine learning pipeline for identifying hospital encounters involving patients with diabetes at elevated risk of readmission within 30 days.",
  tags: ["Python", "pandas", "scikit-learn", "XGBoost", "CatBoost", "SHAP"],
  methods: ["Clinical feature analysis", "Patient-level splitting", "Cross-validation", "Hyperparameter tuning", "Logistic Regression", "Random Forest", "XGBoost", "CatBoost", "SHAP explainability", "Error analysis"],
};
