import { EducationItem, ExperienceItem, PublicationItem, ReferenceItem } from './types';

export const PROFILE = {
  name: "Achinthi Premasiri",
  title: "Agricultural Scientist",
  email: "achinthipremasiri@gmail.com",
  phone: "+94713421862",
  linkedin: "https://www.linkedin.com/in/achinthi-premasiri-3a47141b9/",
  specialty: "Plant Tissue Culture 🔬",
  summary: "Dedicated academic writer with 2+ years of solid research experience in the Science field. Skilled in academic writing, literature reviews, data analysis and producing clear, accurate and well-structured scientific writing for educational and professional audiences. Committed to delivering original, high-quality content with strong critical insight."
};

export const EDUCATION: EducationItem[] = [
  {
    id: "1",
    degree: "Master of Science in Agriculture",
    institution: "University of Ruhuna",
    year: "2025 - Present"
  },
  {
    id: "2",
    degree: "Bachelor of Science in Agriculture (Hon's)",
    institution: "University of Jaffna",
    year: "2020 - 2024",
    details: "Grade A in Undergraduate Research Project"
  }
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "w1",
    role: "Research Assistant",
    company: "University of Ruhuna",
    year: "2024 - Present",
    description: [
      "Assisting in conducting laboratory and field research in agriculture, biotechnology and plant sciences.",
      "Performing experiments in plant tissue culture, molecular biology, nursery management, pest and disease monitoring and soil ecology.",
      "Collecting, analyzing and interpreting data for reports, publications and presentations.",
      "Conducting literature reviews, preparing technical documents, supporting manuscript drafting."
    ]
  },
  {
    id: "w2",
    role: "Intern",
    company: "EuroAsia Agro (Pvt) Ltd, Gampola",
    year: "2023",
    description: [
      "Experienced in comprehensive training in nursery management and sustainable agriculture.",
      "Equipped with greenhouse farming techniques."
    ]
  },
  {
    id: "w3",
    role: "In-Plant Trainee",
    company: "SunAgro LifeScience Limited, Colombo",
    year: "2021",
    description: [
      "Created plans to propose solutions to problems related to efficiency, costs and profits.",
      "Provided support to existing staff on Research and Development section duties.",
      "Worked alongside the preparation of organic fertilizer using Neem and Pseudomonas fluorescens."
    ]
  }
];

export const RESEARCH_EXPERIENCE: ExperienceItem[] = [
  {
    id: "r1",
    role: "Undergraduate Research",
    company: "University of Jaffna",
    year: "2024",
    description: [
      "Developed an in vitro production protocol for Murraya koenigii (curry leaf). Grade: A.",
      "Established efficient in vitro propagation methods for Zingiber officinale (ginger) and Curcuma longa (turmeric).",
      "Conducted tissue culture trials on medicinal plants including Evolvulus alsinoides, Flueggea leucopyrus and Salacia reticulata.",
      "Implemented AI-driven Oryza sativa (paddy) yield forecasting using open satellite data."
    ]
  }
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    id: "p1",
    title: "Medicinal Plant Cultivation and Post-Harvest Management",
    citation: "Propagation and Sustainable Utilization of Medicinal Plants (Eds.), CRC Press, Taylor & Francis Group, USA.",
    status: "In Press"
  },
  {
    id: "p2",
    title: "Plant Tissue Culture for Mass Production of Medicinal Plants",
    citation: "Propagation and Sustainable Utilization of Medicinal Plants (Eds.), CRC Press, Taylor & Francis Group, USA.",
    status: "In Press"
  },
  {
    id: "p3",
    title: "SSR Marker Assisted Selection and Monitoring of High Metabolite Cell Lines",
    citation: "Springer Science+Business Media, LLC, New York, USA.",
    status: "In Preparation"
  },
  {
    id: "p5",
    title: "ISSR Marker Based Authentication of In Vitro-Derived Medicinal Plant Lines for Enhanced Phytochemical Production",
    citation: "Springer Science+Business Media, LLC, New York, USA.",
    status: "In Preparation"
  },
  {
    id: "p6",
    title: "Efficient In Vitro Propagation Approach for Mass Multiplication of Curcuma longa L (Turmeric)",
    citation: "The 3rd International Online Conference on Agriculture",
    status: "Published",
    link: "https://sciforum.net/manuscripts/24658/slides.pdf"
  },
  {
    id: "p7",
    title: "Optimized in vitro seed culture for disease free propagation of curry leaf",
    citation: "International Symposium on Agriculture and Environment, University of Ruhuna.",
    status: "Published",
    link: "http://ir.lib.ruh.ac.lk/xmlui/handle/iruor/20411?show=full"
  },
  {
    id: "p8",
    title: "Development of an in vitro protocol for efficient shoot proliferation in Murraya koenigii",
    citation: "International Conference on Agriculture and Plantation Management (InCAPM2025), Wayamba University.",
    status: "Published",
    link: "https://incapm.mkd.wyb.ac.lk/wp-content/uploads/2025/05/Technical-Sessions_InCAPM-2025-1.pdf"
  }
];

export const SKILLS = [
  "Tissue Culture",
  "Phytochemical Extraction",
  "Data Analysis & Interpretation",
  "Experimental Design",
  "Communication & Presentation",
];

export const LANGUAGES = [
  { name: "English", level: "Full Professional Proficiency" },
  { name: "Sinhala", level: "Native" },
  { name: "Tamil", level: "Intermediate" }
];

export const REFERENCES: ReferenceItem[] = [
  {
    id: "ref1",
    name: "Dr. (Mrs.) Suvanthini Therensan",
    title: "Senior Lecturer",
    department: "Department of Agricultural Biology, Faculty of Agriculture",
    university: "University of Jaffna",
    email: "suvanthinit@univ.jfn.ac.lk",
    phone: "+94770725056"
  },
  {
    id: "ref2",
    name: "Prof. (Mrs.) Kumari Fonseka",
    title: "Professor",
    department: "Department of Crop Science, Faculty of Agriculture",
    university: "University of Ruhuna",
    email: "dlckumari@crop.ruh.ac.lk",
    phone: "+94767327109"
  }
];
