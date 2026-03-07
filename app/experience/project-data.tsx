export interface Project {
  title: string;
  year: string;
  description: string;
  url: string;
  image?: string;
  tags?: string[];
  type: 'work' | 'personal' | 'education';
  company?: string;
  location?: string;
  degree?: string;
  university?: string;
  thesisUrl?: string;
  workUrl?: string;
  project?: string; // For personal projects
}

export const projects: Project[] = [
  {
    title: "Research Intern",
    year: "Aug 2024 - May 2025",
    description:
      "Developed novel mathematical models for electromagnetic wave propagation in 6G near-field scenarios. Redefined boundary conditions and validated theoretical limits using numerical analysis. Implemented extensive MATLAB simulations bridging physical channel models and estimation algorithms.",
    url: "https://www.kth.se/cs/cos/division-of-communication-systems-1.834507",
    thesisUrl: "https://urn.kb.se/resolve?urn=urn:nbn:se:kth:diva-364289",
    tags: ["6G", "Wireless Communications", "Research", "Mathematical Modeling"],
    type: "work",
    company: "KTH Royal Institute of Technology",
    location: "Stockholm, Sweden",
  },
  {
    title: "Research Intern",
    year: "Sep 2023 - Jun 2024",
    description:
      "Simulated EM wave interaction within complex 3D structures for sub-THz Wireless Network-on-Chip. Performed computational EM simulations (CST Studio Suite) to optimize radiation efficiency and coupling. Investigated Time Reversal techniques for multipath propagation analysis.",
    url: "https://n3cat.upc.edu",
    workUrl: "https://cloud.rogsbox.com/index.php/s/S52Pjar5azx9LyQ",
    tags: ["Antenna Design", "Wireless Networks", "Electromagnetics", "Simulation"],
    type: "work",
    company: "NaNoNetworking Center in Catalonia (N3Cat)",
    location: "Barcelona, Spain",
  },
  {
    title: "Hardware Engineer Intern",
    year: "Apr 2022 - Jul 2022",
    description:
      "Conducted laboratory validation of automotive ECUs using VNAs and Oscilloscopes. Performed signal integrity measurements and documented compliance with technical standards.",
    url: "https://www.idneo.com",
    tags: ["Hardware Design", "Automotive", "Testing", "Electronics"],
    type: "work",
    company: "Idneo",
    location: "Mollet del Vallès, Spain",
  },
  {
    title: "Technical Apprentice",
    year: "Jul 2021 - Sep 2021",
    description:
      "Developed computer vision software for automated defect detection. Authored technical manuals streamlining maintenance procedures.",
    url: "https://www.engi-on.com",
    tags: ["Computer Vision", "Python", "Image Processing", "Automation"],
    type: "work",
    company: "Engi-on Automatica",
    location: "Mollet del Vallès, Spain",
  },
  {
    title: "Namaqua Community Network",
    year: "Mar 2025 - present",
    description:
      "International cooperation project in collaboration with Shoot4Change, Foundawtion, and AUCOOP. The project's objective is to establish a Community Network replicating the Hahatay model to provide connectivity and local services to the Namaqua Kalahari Children's Home in rural Namibia.",
    url: "https://foundawtion.org/en/archivos/6043",
    tags: ["Community Networks", "Telecommunications", "International Cooperation", "Connectivity"],
    type: "personal",
    project: "Shoot4Change, Foundawtion, AUCOOP",
    location: "Gochas, Namibia",
  },
  {
    title: "4Forms - Service Forms Automation",
    year: "Sept 2025 - present",
    description:
      "End‑to‑end platform that replaces paper service forms with a 1‑minute workflow. Technicians log time, expenses, and materials on‑site, customers e‑sign, and branded PDFs are emailed automatically. Deployed at Engi‑ON to cut admin work, speed up billing, and improve client experience.",
    url: "",
    tags: ["Django", "REST API", "JWT", "ReportLab", "Mailjet", "PostgreSQL", "Docker", "Nginx"],
    type: "personal",
    project: "Engi-ON",
    location: "Barcelona, Spain",
  },
  {
    title: "Hahatay Community Network",
    year: "Mar 2022 - present",
    description:
      "Volunteering project with Hahatay's NGO and AUCOOP to deploy a Community Network using OpenWRT 5G routers and open-source software (OpenWisp, Zabbix, NextCloud) to connect rural communities in Gandiol, Senegal.",
    url: "http://hahatay.network",
    tags: ["Networking", "OpenWRT", "Open Source", "5G", "Social Impact"],
    type: "personal",
    project: "Hahatay NGO, AUCOOP",
    location: "Gandiol, Senegal",
  },
  {
    title: "Challenge Based Innovation",
    year: "Jan 2022 - Apr 2022",
    description:
      "Programme run by CERN, collaborating with MBA and design students from ESADE and IED to develop a socially-driven innovation project on air quality and sustainable mobility.",
    url: "https://www.cbi-course.com",
    tags: ["Innovation", "CERN", "Sustainability", "Interdisciplinary Project"],
    type: "personal",
    project: "CERN, ESADE, IED",
    location: "Barcelona, Spain",
  },
  {
    title: "MSc in Advanced Telecommunications Technologies",
    year: "Sep 2023 - Jun 2025",
    description:
      "Focus on Wireless Communications, Computational EM, and AI for Signal Processing. Coursework: Optical Remote Sensing (LIDAR), Advanced Communications, Machine Learning, Computer Vision with Deep Learning, 5G Mobile Communications. Designed ML classifiers for Dynamic Spectrum Access.",
    url: "https://matt.masters.upc.edu",
    tags: ["Wireless Communications", "AI", "Multimedia Processing"],
    type: "education",
    university: "Polytechnic University of Catalonia (UPC)",
    location: "Barcelona, Spain",
    degree: "MSc in Advanced Telecommunications Technologies",
  },
  {
    title: "BSc in Telecommunications Technologies and Services Engineering",
    year: "Sep 2018 - Jan 2023",
    description:
      "Major in telecommunications systems with focus on signal processing, electromagnetism, and radiocommunications. Coursework: Microwaves (Honors), Space Telecommunications, Radiation & Propagation, Antennas, Optical Communications. Thesis: Planar antenna design and channel modeling for chip-scale communications.",
    url: "https://telecos.upc.edu/en/study-programs/degrees/bachelors-degree-in-telecommunications-technologies-and-services-engineering?set_language=en",
    tags: ["Signal Processing", "Electromagnetics", "Radiocommunications", "Antenna Design"],
    type: "education",
    university: "Polytechnic University of Catalonia (UPC)",
    location: "Barcelona, Spain",
    degree: "BSc in Telecommunications Technologies and Services Engineering",
  },
];