import type { Certification } from "../models/certification.model";
import type { Education } from "../models/education.model";
import type { Experience } from "../models/experience.model";
import type { Project } from "../models/project.model";
import type { SkillCategory } from "../models/skill.model";

export const experienceData: Experience = {
  jobs: [
    {
      title: "Founder & Machine Learning Engineer",
      company: "Land Title Acquisition App",
      period: "Jan 2025 - Present",
      description:
        "A self-initiated project focused on leveraging blockchain and AI to solve land title acquisition issues in West Africa.",
      achievements: [
        "Architecting a hybrid backend using Spring Boot for business logic and FastAPI for ML model inference and document processing.",
        "Leading the development of a blockchain-enabled web platform to digitize and secure land title ownership records in Côte d’Ivoire.",
        "Developing ML pipelines for document classification, fraud detection, and OCR/NLP-based extraction from scanned legal documents.",
        "Designing the front-end with React, Tailwind CSS, and Flowbite to support multilingual access and mobile responsiveness.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "FastAPI",
        "React",
        "Tailwind CSS",
        "Flowbite",
        "Blockchain",
        "Machine Learning",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "HireArt",
      period: "Feb 2024 - Apr 2024",
      location: "On site",
      description:
        "Worked as a senior software engineer on a short-term contract, focused on maintaining high-quality code standards and developing RESTful APIs.",
      achievements: [
        "Maintained high code quality standards, achieving approximately 90% code coverage through detailed unit and integration tests executed under stringent deadlines.",
        "Crafted a comprehensive array of RESTful APIs to support a wide range of CRUD operations.",
        "Incorporated robust security measures, including authentication and role-based access control.",
        "Developed with Java Spring Boot and MySQL, collaborating closely with a cross-functional team to ensure seamless integration and efficient workflow.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "MySQL",
        "REST API",
        "Unit Testing",
        "Integration Testing",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "UVCI",
      period: "Oct 2019 - Oct 2023",
      location: "Côte d'Ivoire",
      description:
        "Led the development of financial and library applications, implementing microservices architecture and cloud solutions to improve system performance and scalability.",
      achievements: [
        "Designed and implemented RESTful APIs and microservices for a financial application using Spring Boot, Hibernate, and Redis, reducing API latency from 1 second to 100ms.",
        "Automated AWS infrastructure using Terraform and Jenkins, cutting deployment time from 2 hours to 5 minutes.",
        "Configured Spring Security and Keycloak for authentication, increasing user engagement by 30%.",
        "Used Elasticsearch to enhance search capabilities, improving query performance by 75%.",
        "Rebuilt a library system using InvenioRDM and implemented an API with FastAPI to upload over 10,000 publications.",
        "Analyzed large datasets from CSV files, applying data validation and cleansing before ML model training.",
        "Triaged support requests from engineers, investigated logs, debugged issues, and escalated complex cases.",
      ],
      technologies: [
        "Spring Boot",
        "Hibernate",
        "Redis",
        "AWS",
        "Terraform",
        "Jenkins",
        "Elasticsearch",
        "FastAPI",
        "ML",
        "Keycloak",
      ],
    },
    {
      title: "Software Engineer",
      company: "IMAKO",
      period: "Mar 2017 - Oct 2019",
      location: "Côte d'Ivoire",
      description:
        "Developed and enhanced e-commerce applications, implementing scalable solutions and improving system performance.",
      achievements: [
        "Enhanced an e-commerce application by adding new features and fixing backend issues in Java and Spring Boot, increasing customer satisfaction by 30%.",
        "Utilized Kafka to improve system scalability by 30%, reducing downtime from 7 to 5 hours/month.",
        "Applied Test-Driven Development (TDD) to ensure high-quality, bug-free software releases.",
        "Implemented Redis caching, reducing data retrieval time from 500ms to 100ms.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Kafka",
        "Redis",
        "TDD",
        "E-commerce",
      ],
    },
  ],
};

export const projectsData: Project[] = [
  {
    id: "landmark-recognition",
    title: "Landmark Recognition with CNN and Transfer Learning",
    timeline: "Jan 2025 - Jan 2025",
    shortDescription:
      "A computer vision project using deep learning to recognize global landmarks from images.",
    problem:
      "Accurately identifying and classifying landmarks from images is challenging due to variations in lighting, angle, and occlusions.",
    approach:
      "Built a CNN model from scratch and later improved it using ResNet-18 with transfer learning techniques to achieve higher accuracy.",
    technologies: [
      "PyTorch",
      "CNN",
      "Transfer Learning",
      "ResNet-18",
      "Hugging Face Spaces",
    ],
    results: [
      "Built a CNN model from scratch using PyTorch, achieving 58% accuracy in recognizing 50 global landmarks",
      "Improved accuracy to 75% using ResNet-18 and Transfer Learning",
      "Developed a web app for model inference, hosted on Hugging Face Spaces",
    ],
    demoLink:
      "https://huggingface.co/spaces/AdamaSorho/landmarks-classification-app",
    repoLink:
      "https://huggingface.co/spaces/AdamaSorho/landmarks-classification-app/tree/main",
    imageUrl:
      "https://placehold.co/600x400/3b82f6/ffffff?text=Landmark+Recognition",
  },
  {
    id: "breast-cancer-classification",
    title: "Breast Cancer Classification using Kaggle Dataset",
    timeline: "Jan 2025 - Jan 2025",
    shortDescription:
      "An ML project focused on accurate classification of breast cancer cases with an emphasis on model interpretability.",
    problem:
      "Creating reliable and interpretable classification models for sensitive healthcare applications like cancer detection.",
    approach:
      "Used Scikit-learn for data preprocessing and developed various classification models with a focus on interpretability.",
    technologies: [
      "Scikit-learn",
      "Python",
      "Classification Algorithms",
      "Healthcare ML",
      "Data Preprocessing",
    ],
    results: [
      "Utilized Scikit-learn to preprocess datasets and develop a classification model",
      "Focused on interpretability and improving model performance for healthcare applications",
    ],
    demoLink:
      "https://www.kaggle.com/code/adamasorho/breast-cancer-notebook-95-accuracy",
    repoLink: "",
    imageUrl:
      "https://placehold.co/600x400/3b82f6/ffffff?text=Cancer+Classification",
  },
];

export const skillsData: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    description: "Languages and frameworks I use daily",
    skills: [
      { name: "Java", level: 95 },
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "SQL (PostgreSQL, MySQL)", level: 90 },
      { name: "NoSQL (MongoDB)", level: 80 },
    ],
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    description: "Tools and techniques for AI development",
    skills: [
      { name: "Scikit-learn", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "Transfer Learning", level: 75 },
      { name: "AI Debugging", level: 85 },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description: "Infrastructure and deployment expertise",
    skills: [
      { name: "AWS (S3, EC2, Lambda, EKS)", level: 90 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 80 },
      { name: "Terraform", level: 85 },
      { name: "Jenkins", level: 80 },
    ],
  },
  {
    id: "software-development",
    title: "Software Development",
    description: "Frameworks and methodologies",
    skills: [
      { name: "Spring Boot", level: 95 },
      { name: "FastAPI", level: 90 },
      { name: "Microservices", level: 85 },
      { name: "REST APIs", level: 95 },
      { name: "Kafka", level: 80 },
    ],
  },
  {
    id: "ai-data",
    title: "AI & Data Processing",
    description: "Data engineering and model development",
    skills: [
      { name: "Model Training & Testing", level: 85 },
      { name: "Feature Engineering", level: 80 },
      { name: "Data Cleaning", level: 90 },
    ],
  },
  {
    id: "debugging-support",
    title: "Debugging & Support",
    description: "Troubleshooting and technical assistance",
    skills: [
      { name: "Log Analysis", level: 90 },
      { name: "API Debugging", level: 85 },
      { name: "Issue Escalation", level: 80 },
    ],
  },
  {
    id: "collaboration",
    title: "Collaboration Tools",
    description: "Team productivity and project management",
    skills: [
      { name: "Jira", level: 90 },
      { name: "Confluence", level: 85 },
      { name: "Git", level: 95 },
      { name: "Agile/Scrum", level: 90 },
    ],
  },
  {
    id: "soft-skills",
    title: "Soft Skills",
    description: "Professional capabilities beyond technical expertise",
    skills: [
      { name: "Problem Solving", level: 95 },
      { name: "Technical Leadership", level: 85 },
      { name: "Communication", level: 90 },
      { name: "Team Collaboration", level: 95 },
      { name: "Time Management", level: 90 },
    ],
  },
];

export const educationData: Education[] = [
  {
    institution: "University of the Cumberlands",
    degree: "Master of Science",
    major: "Artificial Intelligence",
  },
  {
    institution: "Université Virtuelle de Côte d'Ivoire",
    degree: "Bachelor of Science",
    major: "Computer Science",
  },
];

export const aboutData = {
  name: "Adama Sorho",
  title: "Senior Software Engineer",
  summary:
    "Results-driven Software Engineer with 7+ years of experience in designing and implementing scalable solutions. Strong expertise in Java, Python, Spring Boot, FastAPI, and cloud technologies. Solid understanding of machine learning principles, AI implementation, and debugging techniques. Passionate about AI support and troubleshooting complex ML model deployments.",
  professionalBackground: [
    "I began my software engineering journey in 2017 at IMAKO, where I focused on Java and Spring Boot applications, honing my skills in backend development and architectural design.",
    "At UVCI, I expanded my expertise to include cloud technologies, microservices, and machine learning applications, taking on increasingly complex projects and mentoring junior developers.",
    "My recent roles have allowed me to specialize in AI model integration and deployment, combining my software engineering background with my growing passion for machine learning.",
  ],
  education: [
    {
      degree: "Master of Science in Artificial Intelligence",
      institution: "University of the Cumberlands",
      period: "2024 - Present",
      description:
        "Specialized in machine learning techniques, neural networks, and AI system development in healthcare. Applied theoretical knowledge to practical projects including CNN-based landmark recognition and medical image classification.",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Université Virtuelle de Côte d'Ivoire",
      period: "2015 - 2018",
      description:
        "Focused on software engineering principles, data structures, algorithms, and foundational programming concepts. Graduated with honors for outstanding academic performance.",
    },
  ],
  workPhilosophy: [
    {
      title: "Technical Excellence",
      description:
        "I believe in writing clean, maintainable code that stands the test of time. I focus on high test coverage, proper documentation, and architectural design that allows for scalability and future extensions.",
    },
    {
      title: "Continuous Learning",
      description:
        "The technology landscape evolves rapidly, and I maintain a growth mindset to stay at the forefront. I dedicate time to learning new technologies, techniques, and best practices.",
    },
    {
      title: "Collaboration & Communication",
      description:
        "I thrive in collaborative environments where ideas are shared openly and diverse perspectives are valued. Clear, transparent communication is essential to successful software projects.",
    },
    {
      title: "User-Centered Approach",
      description:
        "At the heart of every project, I prioritize the end user's needs and experiences. Technical solutions should solve real problems and enhance the user's interaction with the system.",
    },
  ],
};

export const toolsData = [
  "Spring Boot",
  "FastAPI",
  "AWS",
  "Docker",
  "Kubernetes",
  "PyTorch",
  "TensorFlow",
  "Scikit-learn",
  "Redis",
  "Kafka",
  "Elasticsearch",
  "Terraform",
  "Jenkins",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "Keycloak",
  "Git",
  "Jira",
  "Confluence",
  "Hibernate",
];

export const certificationsData: Certification[] = [
  {
    name: "AWS Machine Learning Fundamentals",
    issuer: "Udacity",
    year: 2024,
    credentialUrl:
      "https://www.udacity.com/certificate/e/c105f82a-f6c0-11ee-afee-2b1ffe2a2586",
    skills: [
      "PyTorch",
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "Convolutional Neural Networks (CNN)",
      "Transfer Learning",
      "SageMaker",
    ],
  },
  {
    name: "AWS & AI Programming with Python",
    issuer: "Udacity",
    year: 2023,
    credentialUrl:
      "https://www.udacity.com/certificate/e/15dc3992-0ae8-11ee-8fe9-fb523df6ed53",
    skills: [
      "PyTorch",
      "Machine Learning",
      "Numpy",
      "Python",
      "Matplotlib",
      "pandas",
    ],
  },
  {
    name: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
    issuer: "Coursera",
    year: 2021,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/2SZHVLUMVJB7",
    skills: [
      "Algorithms",
      "Mathematical Optimization",
      "Machine Learning",
      "Artificial Neural Networks",
      "Deep Learning",
      "Tensorflow",
      "Mathematical Theory & Analysis",
      "Applied Machine Learning",
      "Machine Learning Algorithms",
    ],
  },
  {
    name: "Neural Networks and Deep Learning",
    issuer: "Coursera",
    year: 2020,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/NYLYS4RHECDM",
    skills: [
      "Artificial Neural Network",
      "Computer Programming",
      "Mathematics",
      "Calculus",
      "Machine Learning",
      "Network Architecture",
      "Artificial Neural Networks",
      "Deep Learning",
      "Neural Network Architecture",
      "Network Model",
      "Regression",
    ],
  },
];
