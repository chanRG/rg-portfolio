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
      "MSc degree project candidate and Erasmus exchange student in the Communication Systems Department, working on mathematical models of near-field 6G communications, with a focus on redefining the boundary conditions between the near field and far field.",
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
      "Antenna design and channel characterization for Wireless Network-on-Chip using full-wave simulators.",
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
      "Automotive hardware design, analysis, and testing for embedded systems and components.",
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
      "Developed computer vision software for textile defect detection.",
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
      "Master’s focused on wireless communications and AI for multimedia processing.",
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
      "Major in telecommunications systems, with a focus on signal processing, electromagnetism, and radiocommunications. Thesis: Planar antenna design and channel modeling for chip-scale communications.",
    url: "https://telecos.upc.edu/en/study-programs/degrees/bachelors-degree-in-telecommunications-technologies-and-services-engineering?set_language=en",
    tags: ["Signal Processing", "Electromagnetics", "Radiocommunications", "Antenna Design"],
    type: "education",
    university: "Polytechnic University of Catalonia (UPC)",
    location: "Barcelona, Spain",
    degree: "BSc in Telecommunications Technologies and Services Engineering",
  },
];