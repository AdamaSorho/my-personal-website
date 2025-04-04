export const experienceData = {
  jobs: [
    {
      title: "Senior Software Engineer",
      company: "HireArt",
      period: "Feb 2024 - Apr 2024",
      location: "Remote",
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

export const projectsData = [
  {
    id: 1,
    title: "Landmark Recognition with CNN and Transfer Learning",
    duration: "Jan 2025 - Present",
    description:
      "Built a CNN model using PyTorch to recognize global landmarks, then improved accuracy using transfer learning.",
    technologies: [
      "PyTorch",
      "CNN",
      "Transfer Learning",
      "ResNet-18",
      "Web Development",
    ],
    achievements: [
      "Achieved 58% accuracy with custom CNN model",
      "Improved accuracy to 75% using ResNet-18 and Transfer Learning",
      "Developed web app for model inference hosted on Hugging Face Spaces",
    ],
    imageUrl: "/assets/images/landmark-project.jpg", // You'll need a relevant image
    projectUrl: "#", // Replace with actual URL when available
  },
  {
    id: 2,
    title: "Breast Cancer Classification using Kaggle Dataset",
    duration: "Jan 2025 - Present",
    description:
      "Developed a classification model to assist with breast cancer diagnosis using machine learning techniques.",
    technologies: [
      "Scikit-learn",
      "Classification",
      "Healthcare ML",
      "Data Processing",
    ],
    achievements: [
      "Preprocessed complex medical datasets",
      "Developed interpretable classification model",
      "Optimized model performance for healthcare applications",
    ],
    imageUrl: "/assets/images/healthcare-project.jpg", // You'll need a relevant image
    projectUrl: "#", // Replace with actual URL when available
  },
];

export const skillsData = {
  programming: [
    "Java",
    "Python",
    "JavaScript",
    "SQL (PostgreSQL, MySQL)",
    "NoSQL (MongoDB)",
  ],
  machineLearning: [
    "Scikit-learn",
    "PyTorch",
    "Transfer Learning",
    "AI Debugging",
  ],
  cloudDevOps: [
    "AWS (S3, EC2, Lambda, EKS)",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Jenkins",
  ],
  softwareDevelopment: [
    "Spring Boot",
    "FastAPI",
    "Microservices",
    "REST APIs",
    "Kafka",
  ],
  aiDataProcessing: [
    "Model Training & Testing",
    "Feature Engineering",
    "Data Cleaning",
  ],
  debugging: ["Log Analysis", "API Debugging", "Issue Escalation"],
  collaborationTools: ["Jira", "Confluence", "Git", "Agile/Scrum"],
};

export const educationData = [
  {
    institution: "University of the Cumberlands",
    degree: "Master of Science in Artificial Intelligence",
  },
  {
    institution: "Université Virtuelle de Côte d'Ivoire",
    degree: "Bachelor of Science in Computer Science",
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
      period: "2022 - 2024",
      description:
        "Specialized in machine learning techniques, neural networks, and AI system development. Applied theoretical knowledge to practical projects including CNN-based landmark recognition and medical image classification.",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Université Virtuelle de Côte d'Ivoire",
      period: "2013 - 2017",
      description:
        "Focused on software engineering principles, data structures, algorithms, and foundational programming concepts. Graduated with honors for outstanding academic performance.",
    },
  ],
  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: 2022,
    },
    {
      name: "Professional Scrum Master I (PSM I)",
      issuer: "Scrum.org",
      year: 2021,
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
