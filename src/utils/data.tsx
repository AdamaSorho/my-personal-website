import type { Certification } from "../models/certification.model";
import type { Education } from "../models/education.model";
import type { Experience } from "../models/experience.model";
import type { Project } from "../models/project.model";
import type { SkillCategory } from "../models/skill.model";

export const experienceData: Experience = {
  jobs: [
    {
      title: "Software Engineer",
      company: "UVCI",
      period: "Oct 2019 - Dec 2024",
      location: "Abidjan, Côte d’Ivoire",
      description:
        "Built scalable backend systems, cloud-native applications, and production digital platforms for university and national education stakeholders.",
      achievements: [
        "Led development of high-performance backend systems with Java, Spring Boot, Kafka, Redis, and AWS, reducing end-to-end latency by ~90% from 1s to 100ms through profiling, caching, and query optimization.",
        "Architected and scaled microservices supporting thousands of concurrent users, improving reliability, observability, and fault tolerance.",
        "Designed and maintained CI/CD pipelines with Jenkins, GitHub, Terraform, and AWS, increasing deployment frequency and reducing production issues.",
        "Built a national academic digital library platform with Python, InvenioRDM, and FastAPI serving six universities and 10,000+ publications, improving research accessibility.",
        "Partnered with cross-functional stakeholders to define system requirements and deliver production-ready solutions, improving delivery efficiency by 20%.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Kafka",
        "Redis",
        "AWS",
        "Python",
        "FastAPI",
        "InvenioRDM",
        "Jenkins",
        "GitHub",
        "Terraform",
      ],
    },
  ],
};

export const projectsData: Project[] = [
  {
    id: "computer-vision-pytorch-optimization",
    title: "Computer Vision and PyTorch Optimization",
    timeline: "Jan 2025 - Jan 2025",
    shortDescription:
      "A production-oriented computer vision project focused on image classification accuracy, efficient inference, and interpretable model outputs.",
    problem:
      "Image classification systems must handle constrained compute, class imbalance, visual similarity, and user trust requirements while still delivering accurate predictions.",
    approach:
      "Fine-tuned ResNet-18 with PyTorch and Hugging Face workflows, using data augmentation, learning-rate scheduling, efficient inference pipelines, and confidence-aware top-k predictions.",
    technologies: [
      "Python",
      "PyTorch",
      "Hugging Face",
      "Computer Vision",
      "ResNet-18",
      "Data Augmentation",
      "Inference Optimization",
    ],
    results: [
      "Improved image classification Top-1 accuracy from 58% to 75% using ResNet-18 fine-tuning, data augmentation, and learning-rate scheduling.",
      "Designed efficient training and inference pipelines for constrained compute environments, optimizing for latency and memory usage.",
      "Addressed class imbalance and visual similarity with targeted data strategies and augmentation techniques.",
      "Implemented confidence-aware inference with top-k predictions and calibrated scores to improve interpretability and user trust.",
    ],
    demoLink:
      "https://huggingface.co/spaces/AdamaSorho/landmarks-classification-app",
    repoLink:
      "https://huggingface.co/spaces/AdamaSorho/landmarks-classification-app/tree/main",
    imageUrl: "https://placehold.co/600x400/3b82f6/ffffff?text=Computer+Vision",
  },
  {
    id: "applied-ai-systems",
    title: "Applied AI Systems",
    timeline: "2024",
    shortDescription:
      "An applied AI integration that brought document classification into a blockchain-based land-title governance workflow.",
    problem:
      "Land-title workflows need reliable document handling, transparent records, and robust governance processes to reduce friction and improve trust.",
    approach:
      "Integrated AI-driven document classification with a blockchain-backed platform, aligning model outputs with document workflows and governance review steps.",
    technologies: ["Python", "AI", "Document Classification", "Blockchain"],
    results: [
      "Integrated AI-driven document classification into a blockchain-based land-title platform.",
      "Enhanced transparency and robustness in governance workflows by combining automated classification with verifiable records.",
    ],
    imageUrl:
      "https://placehold.co/600x400/3b82f6/ffffff?text=Applied+AI+Systems",
  },
];

export const skillsData: SkillCategory[] = [
  {
    id: "ai-machine-learning",
    title: "AI / Machine Learning",
    description: "Applied ML and computer vision capabilities",
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "Hugging Face", level: 85 },
      { name: "Computer Vision", level: 90 },
      { name: "Model Fine-Tuning", level: 85 },
      { name: "Inference Optimization", level: 85 },
      { name: "Confidence Calibration", level: 80 },
    ],
  },
  {
    id: "programming-systems",
    title: "Programming & Systems",
    description: "Languages, systems engineering, and performance work",
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 95 },
      { name: "C++", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "Linux", level: 85 },
      { name: "Performance Optimization", level: 90 },
    ],
  },
  {
    id: "backend-distributed-systems",
    title: "Backend & Distributed Systems",
    description: "Scalable services, APIs, and reliability patterns",
    skills: [
      { name: "Spring Boot", level: 95 },
      { name: "FastAPI", level: 90 },
      { name: "Kafka", level: 85 },
      { name: "Redis", level: 90 },
      { name: "Distributed Systems", level: 90 },
      { name: "Scalability", level: 90 },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description: "Cloud-native infrastructure and delivery automation",
    skills: [
      { name: "AWS (EC2, EKS, S3, RDS, IAM, CloudFormation)", level: 90 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 80 },
      { name: "Jenkins", level: 85 },
      { name: "CI/CD", level: 90 },
      { name: "Git/GitHub", level: 95 },
    ],
  },
  {
    id: "quality-collaboration",
    title: "Quality & Collaboration",
    description: "Engineering practices that keep teams shipping safely",
    skills: [
      { name: "Unit & Integration Testing", level: 90 },
      { name: "JUnit", level: 85 },
      { name: "Mockito", level: 85 },
      { name: "Code Review", level: 90 },
      { name: "Design Patterns", level: 85 },
      { name: "Agile/SCRUM", level: 90 },
    ],
  },
];

export const educationData: Education[] = [
  {
    institution: "University of the Cumberlands",
    degree: "Master of Science",
    major: "Artificial Intelligence",
    period: "Expected August 2026",
    location: "Williamsburg, KY",
    description: "Focus: Computer Vision & Deep Learning",
  },
  {
    institution: "Université Virtuelle de Côte d’Ivoire",
    degree: "Bachelor of Science",
    major: "Computer Science",
    period: "2019",
    location: "Abidjan, Côte d’Ivoire",
  },
];

export const aboutData = {
  name: "Adama Sorho",
  title: "Software Engineer",
  summary:
    "Software Engineer with 5+ years of experience building scalable, high-performance distributed systems and cloud-native applications. I bring a strong background in backend engineering with Java, Spring Boot, Python, and FastAPI, plus hands-on applied AI experience in computer vision, model optimization, and production-oriented ML systems using PyTorch and Hugging Face.",
  professionalBackground: [
    "At UVCI, I led backend and cloud-native engineering for high-performance systems built with Java, Spring Boot, Kafka, Redis, and AWS, reducing latency and improving reliability for systems serving thousands of concurrent users.",
    "I also built a national academic digital library platform with Python, InvenioRDM, and FastAPI, supporting six universities and 10,000+ publications to improve research accessibility.",
    "Recently, I have focused on applied AI and machine learning, including computer vision, PyTorch model fine-tuning, inference optimization, and confidence-aware prediction systems.",
  ],
  education: [
    {
      degree: "M.S. in Artificial Intelligence",
      institution: "University of the Cumberlands",
      period: "Expected August 2026",
      description: "Focus: Computer Vision & Deep Learning.",
    },
    {
      degree: "B.S. in Computer Science",
      institution: "Université Virtuelle de Côte d’Ivoire",
      period: "2019",
      description:
        "Built a foundation in software engineering, algorithms, systems design, and computer science fundamentals.",
    },
  ],
  workPhilosophy: [
    {
      title: "Performance-Minded Engineering",
      description:
        "I profile systems, reduce latency, and design services that remain reliable as usage grows.",
    },
    {
      title: "Production-Ready AI",
      description:
        "I focus on practical ML systems that balance accuracy, compute efficiency, interpretability, and user trust.",
    },
    {
      title: "Cloud-Native Reliability",
      description:
        "I value automation, observability, CI/CD, and fault-tolerant architectures that make delivery safer.",
    },
    {
      title: "Cross-Functional Delivery",
      description:
        "I partner with stakeholders to translate requirements into maintainable, production-ready solutions.",
    },
  ],
};

export const toolsData = [
  "PyTorch",
  "Hugging Face",
  "Computer Vision",
  "Model Fine-Tuning",
  "Data Augmentation",
  "Inference Optimization",
  "Confidence Calibration",
  "Python",
  "C++",
  "Java",
  "Kotlin",
  "C#",
  "JavaScript",
  "CUDA",
  "Linux",
  "Spring Boot",
  "FastAPI",
  "Kafka",
  "Redis",
  "Next.js",
  "Git/GitHub",
  "Jenkins",
  "Docker",
  "Kubernetes",
  "AWS EC2",
  "AWS EKS",
  "AWS S3",
  "AWS RDS",
  "AWS IAM",
  "CloudFormation",
  "CI/CD",
  "JUnit",
  "Mockito",
  "Code Review",
  "Design Patterns",
  "Agile/SCRUM",
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
