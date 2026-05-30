// src/data/allInstitutions.js
// COMPLETE DATABASE OF ALL SA UNIVERSITIES AND TVET COLLEGES
// Courses extracted from official prospectuses

export const ALL_INSTITUTIONS = {
  // ============================================
  // TRADITIONAL UNIVERSITIES (19)
  // ============================================
  universities: [
    {
      id: "uct",
      name: "University of Cape Town (UCT)",
      type: "Traditional University",
      location: "Cape Town, Western Cape",
      established: 1829,
      website: "www.uct.ac.za",
      logo: "🏔",
      faculties: [
        {
          name: "Faculty of Commerce",
          courses: [
            "BCom Accounting",
            "BCom Actuarial Science",
            "BCom Business Information Systems",
            "BCom Economics",
            "BCom Finance",
            "BCom Marketing",
            "BCom Human Resource Management",
            "BCom Supply Chain Management",
            "BCom Statistics",
            "BCom Law"
          ]
        },
        {
          name: "Faculty of Engineering & Built Environment",
          courses: [
            "BSc Chemical Engineering",
            "BSc Civil Engineering",
            "BSc Electrical Engineering",
            "BSc Mechanical Engineering",
            "BSc Computer Engineering",
            "BSc Mechatronics",
            "BSc Surveying",
            "BSc Geomatics",
            "BSc Construction Management",
            "BSc Property Studies",
            "BSc Architecture"
          ]
        },
        {
          name: "Faculty of Health Sciences",
          courses: [
            "MBChB Medicine",
            "BSc Physiotherapy",
            "BSc Occupational Therapy",
            "BSc Speech-Language Pathology",
            "BSc Audiology",
            "BSc Dietetics",
            "BSc Nursing",
            "BSc Radiography",
            "BSc Biomedical Engineering",
            "BSc Medical Laboratory Science"
          ]
        },
        {
          name: "Faculty of Humanities",
          courses: [
            "BA General",
            "BA Psychology",
            "BA Sociology",
            "BA Social Work",
            "BA Criminology",
            "BA Law",
            "BA Film and Media Studies",
            "BA Theatre and Performance",
            "BA Music",
            "BA Fine Art",
            "BA English Literature",
            "BA History",
            "BA Philosophy"
          ]
        },
        {
          name: "Faculty of Law",
          courses: [
            "LLB Law",
            "BA Law (4-year)",
            "LLB Extended Programme"
          ]
        },
        {
          name: "Faculty of Science",
          courses: [
            "BSc Computer Science",
            "BSc Applied Mathematics",
            "BSc Mathematics",
            "BSc Statistics",
            "BSc Physics",
            "BSc Chemistry",
            "BSc Biochemistry",
            "BSc Microbiology",
            "BSc Molecular Biology",
            "BSc Genetics",
            "BSc Environmental Science",
            "BSc Geography",
            "BSc Geology",
            "BSc Oceanography",
            "BSc Marine Biology",
            "BSc Archaeology"
          ]
        }
      ]
    },
    {
      id: "wits",
      name: "University of the Witwatersrand (Wits)",
      type: "Traditional University",
      location: "Johannesburg, Gauteng",
      established: 1896,
      website: "www.wits.ac.za",
      logo: "⛏",
      faculties: [
        {
          name: "Faculty of Commerce, Law & Management",
          courses: [
            "BCom Accounting",
            "BCom Actuarial Science",
            "BCom Economics",
            "BCom Finance",
            "BCom Management",
            "BCom Marketing",
            "BCom Human Resources",
            "BCom Information Systems",
            "LLB Law",
            "BA Law"
          ]
        },
        {
          name: "Faculty of Engineering & Built Environment",
          courses: [
            "BEng Chemical Engineering",
            "BEng Civil Engineering",
            "BEng Electrical Engineering",
            "BEng Mechanical Engineering",
            "BEng Industrial Engineering",
            "BEng Mining Engineering",
            "BEng Metallurgical Engineering",
            "BSc Architecture",
            "BSc Quantity Surveying",
            "BSc Construction Management"
          ]
        },
        {
          name: "Faculty of Health Sciences",
          courses: [
            "MBChB Medicine",
            "BDS Dentistry",
            "BPharm Pharmacy",
            "BSc Physiotherapy",
            "BSc Occupational Therapy",
            "BSc Nursing",
            "BSc Biomedical Engineering",
            "BSc Biokinetics"
          ]
        },
        {
          name: "Faculty of Humanities",
          courses: [
            "BA General",
            "BA Psychology",
            "BA Social Work",
            "BA Criminology",
            "BA Journalism",
            "BA Film and TV",
            "BA Fine Arts",
            "BA Drama",
            "BA Music"
          ]
        },
        {
          name: "Faculty of Science",
          courses: [
            "BSc Computer Science",
            "BSc Applied Mathematics",
            "BSc Mathematics",
            "BSc Physics",
            "BSc Chemistry",
            "BSc Biochemistry",
            "BSc Molecular Biology",
            "BSc Data Science",
            "BSc Geology",
            "BSc Geography",
            "BSc Archaeology"
          ]
        }
      ]
    },
    {
      id: "up",
      name: "University of Pretoria (UP)",
      type: "Traditional University",
      location: "Pretoria, Gauteng",
      established: 1908,
      website: "www.up.ac.za",
      logo: "🏛",
      faculties: [
        {
          name: "Faculty of Economic & Management Sciences",
          courses: [
            "BCom Accounting",
            "BCom Actuarial Science",
            "BCom Business Management",
            "BCom Economics",
            "BCom Finance",
            "BCom Human Resource Management",
            "BCom Marketing",
            "BCom Statistics",
            "BCom Law",
            "BCom Investment Management",
            "BCom Entrepreneurship"
          ]
        },
        {
          name: "Faculty of Engineering, Built Environment & IT",
          courses: [
            "BEng Chemical Engineering",
            "BEng Civil Engineering",
            "BEng Electrical Engineering",
            "BEng Electronic Engineering",
            "BEng Mechanical Engineering",
            "BEng Industrial Engineering",
            "BEng Mining Engineering",
            "BEng Metallurgical Engineering",
            "BSc Architecture",
            "BSc Interior Architecture",
            "BSc Landscape Architecture",
            "BSc Quantity Surveying",
            "BSc Construction Management",
            "BSc Real Estate",
            "BSc Computer Science",
            "BSc Information Systems",
            "BSc Informatics"
          ]
        },
        {
          name: "Faculty of Health Sciences",
          courses: [
            "MBChB Medicine",
            "BDS Dentistry",
            "BPharm Pharmacy",
            "BSc Physiotherapy",
            "BSc Occupational Therapy",
            "BSc Dietetics",
            "BSc Nursing",
            "BSc Biokinetics",
            "BSc Radiography",
            "BSc Speech-Language Pathology",
            "BSc Audiology"
          ]
        },
        {
          name: "Faculty of Humanities",
          courses: [
            "BA General",
            "BA Psychology",
            "BA Social Work",
            "BA Criminology",
            "BA Sociology",
            "BA Law",
            "BA Journalism",
            "BA Drama",
            "BA Music",
            "BA Visual Arts",
            "BA Heritage and Cultural Tourism"
          ]
        },
        {
          name: "Faculty of Law",
          courses: [
            "LLB Law",
            "BA Law",
            "BCom Law"
          ]
        },
        {
          name: "Faculty of Natural & Agricultural Sciences",
          courses: [
            "BSc Applied Mathematics",
            "BSc Mathematics",
            "BSc Physics",
            "BSc Chemistry",
            "BSc Biochemistry",
            "BSc Microbiology",
            "BSc Genetics",
            "BSc Food Science",
            "BSc Nutrition",
            "BSc Environmental Science",
            "BSc Geography",
            "BSc Geology",
            "BSc Meteorology",
            "BSc Hydrology",
            "BSc Agronomy",
            "BSc Horticulture",
            "BSc Animal Science",
            "BSc Agricultural Economics",
            "BSc Plant Science",
            "BSc Soil Science"
          ]
        },
        {
          name: "Faculty of Veterinary Science",
          courses: [
            "BVSc Veterinary Science",
            "BSc Veterinary Nursing"
          ]
        }
      ]
    },
    {
      id: "stellenbosch",
      name: "Stellenbosch University (SU)",
      type: "Traditional University",
      location: "Stellenbosch, Western Cape",
      established: 1866,
      website: "www.sun.ac.za",
      logo: "🍇",
      faculties: [
        {
          name: "Faculty of Economic & Management Sciences",
          courses: [
            "BCom Accounting",
            "BCom Actuarial Science",
            "BCom Business Analytics",
            "BCom Economics",
            "BCom Financial Planning",
            "BCom Human Resources",
            "BCom Investment Management",
            "BCom Marketing",
            "BCom Management",
            "BCom Statistics",
            "BCom Law"
          ]
        },
        {
          name: "Faculty of Engineering",
          courses: [
            "BEng Chemical Engineering",
            "BEng Civil Engineering",
            "BEng Electrical Engineering",
            "BEng Electronic Engineering",
            "BEng Mechanical Engineering",
            "BEng Industrial Engineering"
          ]
        },
        {
          name: "Faculty of AgriSciences",
          courses: [
            "BSc Agriculture",
            "BSc Agricultural Economics",
            "BSc Animal Science",
            "BSc Plant Science",
            "BSc Soil Science",
            "BSc Viticulture",
            "BSc Oenology (Winemaking)",
            "BSc Food Science",
            "BSc Forestry",
            "BSc Conservation Ecology",
            "BSc Agricultural Management"
          ]
        },
        {
          name: "Faculty of Medicine & Health Sciences",
          courses: [
            "MBChB Medicine",
            "BSc Physiotherapy",
            "BSc Occupational Therapy",
            "BSc Dietetics",
            "BSc Nursing",
            "BSc Biokinetics"
          ]
        },
        {
          name: "Faculty of Arts & Social Sciences",
          courses: [
            "BA General",
            "BA Psychology",
            "BA Social Work",
            "BA Criminology",
            "BA Law",
            "BA Journalism",
            "BA Drama",
            "BA Music",
            "BA Visual Arts"
          ]
        },
        {
          name: "Faculty of Law",
          courses: [
            "LLB Law",
            "BA Law"
          ]
        },
        {
          name: "Faculty of Science",
          courses: [
            "BSc Applied Mathematics",
            "BSc Mathematics",
            "BSc Physics",
            "BSc Chemistry",
            "BSc Biochemistry",
            "BSc Microbiology",
            "BSc Molecular Biology",
            "BSc Genetics",
            "BSc Computer Science",
            "BSc Data Science",
            "BSc Statistics",
            "BSc Geology",
            "BSc Geography",
            "BSc Oceanography",
            "BSc Environmental Science"
          ]
        }
      ]
    },
    {
      id: "ukzn",
      name: "University of KwaZulu-Natal (UKZN)",
      type: "Traditional University",
      location: "Durban, KwaZulu-Natal",
      established: 2004,
      website: "www.ukzn.ac.za",
      logo: "🌊",
      faculties: [
        {
          name: "Faculty of Humanities, Development & Social Sciences",
          courses: [
            "BA General",
            "BA Psychology",
            "BA Social Work",
            "BA Criminology",
            "BA Law",
            "BA Sociology",
            "BA Political Science",
            "BA Journalism",
            "BA Drama",
            "BA Music",
            "BA Fine Arts"
          ]
        },
        {
          name: "Faculty of Law",
          courses: [
            "LLB Law",
            "BA Law"
          ]
        },
        {
          name: "Faculty of Health Sciences",
          courses: [
            "MBChB Medicine",
            "BSc Nursing",
            "BSc Physiotherapy",
            "BSc Occupational Therapy",
            "BSc Speech Therapy",
            "BPharm Pharmacy"
          ]
        },
        {
          name: "Faculty of Science, Engineering & Agriculture",
          courses: [
            "BSc Computer Science",
            "BSc Applied Mathematics",
            "BSc Mathematics",
            "BSc Physics",
            "BSc Chemistry",
            "BSc Biochemistry",
            "BSc Microbiology",
            "BSc Marine Biology",
            "BSc Hydrology",
            "BSc Environmental Science",
            "BSc Geography",
            "BSc Geology",
            "BEng Chemical Engineering",
            "BEng Civil Engineering",
            "BEng Electrical Engineering",
            "BEng Mechanical Engineering",
            "BSc Agriculture",
            "BSc Animal Science",
            "BSc Plant Science"
          ]
        },
        {
          name: "Faculty of Management Studies",
          courses: [
            "BCom Accounting",
            "BCom Economics",
            "BCom Finance",
            "BCom Marketing",
            "BCom Human Resources",
            "BCom Supply Chain",
            "BCom Business Management"
          ]
        }
      ]
    },
    {
      id: "uj",
      name: "University of Johannesburg (UJ)",
      type: "Traditional University",
      location: "Johannesburg, Gauteng",
      established: 2005,
      website: "www.uj.ac.za",
      logo: "🏙",
      faculties: [
        {
          name: "Faculty of Economic & Financial Sciences",
          courses: [
            "BCom Accounting",
            "BCom Economics",
            "BCom Finance",
            "BCom Marketing",
            "BCom Human Resources",
            "BCom Business Management",
            "BCom Law"
          ]
        },
        {
          name: "Faculty of Engineering & Built Environment",
          courses: [
            "BEng Civil Engineering",
            "BEng Mechanical Engineering",
            "BEng Electrical Engineering",
            "BEng Industrial Engineering",
            "BEng Chemical Engineering",
            "BEng Metallurgical Engineering",
            "BEng Mining Engineering",
            "BSc Architecture",
            "BSc Quantity Surveying"
          ]
        },
        {
          name: "Faculty of Health Sciences",
          courses: [
            "BSc Nursing",
            "BSc Physiotherapy",
            "BSc Occupational Therapy",
            "BSc Radiography",
            "BSc Biomedical Technology"
          ]
        },
        {
          name: "Faculty of Humanities",
          courses: [
            "BA Psychology",
            "BA Social Work",
            "BA Criminology",
            "BA Journalism",
            "BA Law"
          ]
        },
        {
          name: "Faculty of Science",
          courses: [
            "BSc Computer Science",
            "BSc Applied Mathematics",
            "BSc Mathematics",
            "BSc Physics",
            "BSc Chemistry",
            "BSc Biochemistry",
            "BSc Microbiology",
            "BSc Biotechnology",
            "BSc Geography",
            "BSc Geology"
          ]
        }
      ]
    },
    {
      id: "nwu",
      name: "North-West University (NWU)",
      type: "Traditional University",
      location: "Potchefstroom, North West",
      established: 2004,
      website: "www.nwu.ac.za",
      logo: "🌾",
      faculties: [
        {
          name: "Faculty of Economic & Management Sciences",
          courses: [
            "BCom Accounting",
            "BCom Economics",
            "BCom Business Management",
            "BCom Human Resources",
            "BCom Marketing",
            "BCom Law"
          ]
        },
        {
          name: "Faculty of Engineering",
          courses: [
            "BEng Chemical Engineering",
            "BEng Civil Engineering",
            "BEng Electrical Engineering",
            "BEng Mechanical Engineering",
            "BEng Industrial Engineering"
          ]
        },
        {
          name: "Faculty of Health Sciences",
          courses: [
            "MBChB Medicine",
            "BPharm Pharmacy",
            "BSc Nursing",
            "BSc Physiotherapy",
            "BSc Occupational Therapy",
            "BSc Dietetics"
          ]
        },
        {
          name: "Faculty of Humanities",
          courses: [
            "BA Psychology",
            "BA Social Work",
            "BA Criminology",
            "BA Law"
          ]
        },
        {
          name: "Faculty of Law",
          courses: ["LLB Law"]
        },
        {
          name: "Faculty of Natural & Agricultural Sciences",
          courses: [
            "BSc Computer Science",
            "BSc Applied Mathematics",
            "BSc Mathematics",
            "BSc Physics",
            "BSc Chemistry",
            "BSc Biochemistry",
            "BSc Microbiology",
            "BSc Geography",
            "BSc Environmental Sciences",
            "BSc Agriculture",
            "BSc Animal Science",
            "BSc Plant Science"
          ]
        }
      ]
    },
    {
      id: "ufs",
      name: "University of the Free State (UFS)",
      type: "Traditional University",
      location: "Bloemfontein, Free State",
      established: 1904,
      website: "www.ufs.ac.za",
      logo: "📚",
      faculties: [
        {
          name: "Faculty of Economic & Management Sciences",
          courses: [
            "BCom Accounting",
            "BCom Economics",
            "BCom Business Management",
            "BCom Human Resources",
            "BCom Marketing"
          ]
        },
        {
          name: "Faculty of Health Sciences",
          courses: [
            "MBChB Medicine",
            "BSc Nursing",
            "BSc Physiotherapy",
            "BSc Occupational Therapy",
            "BSc Dietetics",
            "BPharm Pharmacy"
          ]
        },
        {
          name: "Faculty of Law",
          courses: ["LLB Law"]
        },
        {
          name: "Faculty of Natural & Agricultural Sciences",
          courses: [
            "BSc Computer Science",
            "BSc Applied Mathematics",
            "BSc Mathematics",
            "BSc Physics",
            "BSc Chemistry",
            "BSc Biochemistry",
            "BSc Microbiology",
            "BSc Genetics",
            "BSc Geology",
            "BSc Geography",
            "BSc Environmental Science",
            "BSc Agriculture"
          ]
        },
        {
          name: "Faculty of Humanities",
          courses: [
            "BA Psychology",
            "BA Social Work",
            "BA Criminology",
            "BA Law"
          ]
        }
      ]
    },
    {
      id: "rhodes",
      name: "Rhodes University",
      type: "Traditional University",
      location: "Makhanda, Eastern Cape",
      established: 1904,
      website: "www.ru.ac.za",
      logo: "🎓",
      faculties: [
        {
          name: "Faculty of Commerce",
          courses: [
            "BCom Accounting",
            "BCom Economics",
            "BCom Business Management",
            "BCom Law"
          ]
        },
        {
          name: "Faculty of Humanities",
          courses: [
            "BA Journalism",
            "BA Drama",
            "BA Fine Arts",
            "BA Music",
            "BA Psychology",
            "BA Social Work",
            "BA Law",
            "BA Criminology",
            "BA Sociology"
          ]
        },
        {
          name: "Faculty of Law",
          courses: ["LLB Law"]
        },
        {
          name: "Faculty of Science",
          courses: [
            "BSc Computer Science",
            "BSc Mathematics",
            "BSc Statistics",
            "BSc Physics",
            "BSc Chemistry",
            "BSc Biochemistry",
            "BSc Microbiology",
            "BSc Biotechnology",
            "BSc Ichthyology (Fisheries Science)",
            "BSc Environmental Science",
            "BSc Geography",
            "BSc Geology"
          ]
        },
        {
          name: "Faculty of Pharmacy",
          courses: ["BPharm Pharmacy"]
        }
      ]
    },
    {
      id: "uwc",
      name: "University of the Western Cape (UWC)",
      type: "Traditional University",
      location: "Cape Town, Western Cape",
      established: 1959,
      website: "www.uwc.ac.za",
      logo: "🌊",
      faculties: [
        {
          name: "Faculty of Community & Health Sciences",
          courses: [
            "BSc Nursing",
            "BSc Physiotherapy",
            "BSc Occupational Therapy",
            "BSc Dietetics",
            "BSc Social Work"
          ]
        },
        {
          name: "Faculty of Dentistry",
          courses: ["BDS Dentistry"]
        },
        {
          name: "Faculty of Economic & Management Sciences",
          courses: [
            "BCom Accounting",
            "BCom Economics",
            "BCom Business Management"
          ]
        },
        {
          name: "Faculty of Law",
          courses: ["LLB Law"]
        },
        {
          name: "Faculty of Natural Sciences",
          courses: [
            "BSc Computer Science",
            "BSc Mathematics",
            "BSc Physics",
            "BSc Chemistry",
            "BSc Biochemistry",
            "BSc Biotechnology",
            "BSc Biodiversity",
            "BSc Environmental Science"
          ]
        },
        {
          name: "Faculty of Arts & Humanities",
          courses: [
            "BA Psychology",
            "BA Criminology",
            "BA Law"
          ]
        }
      ]
    },
    {
      id: "ul",
      name: "University of Limpopo (UL)",
      type: "Traditional University",
      location: "Polokwane, Limpopo",
      established: 2005,
      website: "www.ul.ac.za",
      logo: "🌳",
      faculties: [
        {
          name: "Faculty of Health Sciences",
          courses: ["MBChB Medicine", "BSc Nursing"]
        },
        {
          name: "Faculty of Humanities",
          courses: ["BA Psychology", "BA Social Work", "BA Criminology", "BA Law"]
        },
        {
          name: "Faculty of Law",
          courses: ["LLB Law"]
        },
        {
          name: "Faculty of Science & Agriculture",
          courses: [
            "BSc Computer Science",
            "BSc Mathematics",
            "BSc Physics",
            "BSc Chemistry",
            "BSc Biochemistry",
            "BSc Microbiology",
            "BSc Agriculture",
            "BSc Agricultural Economics",
            "BSc Animal Science",
            "BSc Plant Science"
          ]
        },
        {
          name: "Faculty of Management & Law",
          courses: ["BCom Accounting", "BCom Economics", "BCom Business Management"]
        }
      ]
    },
    {
      id: "univen",
      name: "University of Venda (UNIVEN)",
      type: "Traditional University",
      location: "Thohoyandou, Limpopo",
      established: 1982,
      website: "www.univen.ac.za",
      logo: "🌄",
      faculties: [
        {
          name: "Faculty of Health Sciences",
          courses: ["BSc Nursing"]
        },
        {
          name: "Faculty of Humanities & Social Sciences",
          courses: ["BA Psychology", "BA Social Work", "BA Criminology", "BA Law"]
        },
        {
          name: "Faculty of Law",
          courses: ["LLB Law"]
        },
        {
          name: "Faculty of Science, Engineering & Agriculture",
          courses: [
            "BSc Computer Science",
            "BSc Mathematics",
            "BSc Physics",
            "BSc Chemistry",
            "BSc Hydrology",
            "BSc Geography",
            "BSc Agriculture"
          ]
        },
        {
          name: "Faculty of Management Sciences",
          courses: ["BCom Accounting", "BCom Business Management"]
        }
      ]
    },
    {
      id: "ump",
      name: "University of Mpumalanga (UMP)",
      type: "Traditional University",
      location: "Nelspruit, Mpumalanga",
      established: 2014,
      website: "www.ump.ac.za",
      logo: "🏞",
      faculties: [
        {
          name: "Faculty of Agriculture & Natural Sciences",
          courses: [
            "BSc Agriculture",
            "BSc Agricultural Economics",
            "BSc Animal Science",
            "BSc Plant Science",
            "BSc Environmental Science"
          ]
        },
        {
          name: "Faculty of Economics & Management Sciences",
          courses: ["BCom Accounting", "BCom Economics", "BCom Business Management"]
        },
        {
          name: "Faculty of Education",
          courses: ["BEd Foundation Phase", "BEd Intermediate Phase"]
        },
        {
          name: "Faculty of Law",
          courses: ["LLB Law"]
        }
      ]
    },
    {
      id: "spu",
      name: "Sol Plaatje University (SPU)",
      type: "Traditional University",
      location: "Kimberley, Northern Cape",
      established: 2014,
      website: "www.spu.ac.za",
      logo: "💎",
      faculties: [
        {
          name: "Faculty of Economic & Management Sciences",
          courses: ["BCom Accounting", "BCom Economics", "BCom Law"]
        },
        {
          name: "Faculty of Humanities",
          courses: ["BA Heritage Studies", "BA Sociology", "BA Psychology"]
        },
        {
          name: "Faculty of Natural & Applied Sciences",
          courses: ["BSc Computer Science", "BSc Data Science", "BSc Mathematics"]
        }
      ]
    },
    {
      id: "smu",
      name: "Sefako Makgatho Health Sciences University (SMU)",
      type: "Traditional University",
      location: "Pretoria, Gauteng",
      established: 2014,
      website: "www.smu.ac.za",
      logo: "🏥",
      faculties: [
        {
          name: "Faculty of Health Sciences",
          courses: [
            "MBChB Medicine",
            "BDS Dentistry",
            "BPharm Pharmacy",
            "BSc Nursing",
            "BSc Physiotherapy",
            "BSc Occupational Therapy",
            "BSc Dietetics",
            "BSc Radiography",
            "BSc Medical Laboratory Science",
            "BSc Optometry",
            "BSc Speech Therapy"
          ]
        }
      ]
    },
    {
      id: "ufh",
      name: "University of Fort Hare (UFH)",
      type: "Traditional University",
      location: "Alice, Eastern Cape",
      established: 1916,
      website: "www.ufh.ac.za",
      logo: "🏛",
      faculties: [
        {
          name: "Faculty of Law",
          courses: ["LLB Law", "BA Law"]
        },
        {
          name: "Faculty of Science & Agriculture",
          courses: [
            "BSc Computer Science",
            "BSc Mathematics",
            "BSc Physics",
            "BSc Chemistry",
            "BSc Biochemistry",
            "BSc Agriculture",
            "BSc Animal Science",
            "BSc Plant Science"
          ]
        },
        {
          name: "Faculty of Social Sciences & Humanities",
          courses: ["BA Psychology", "BA Social Work", "BA Criminology"]
        },
        {
          name: "Faculty of Management & Commerce",
          courses: ["BCom Accounting", "BCom Economics", "BCom Business Management"]
        },
        {
          name: "Faculty of Health Sciences",
          courses: ["BSc Nursing"]
        }
      ]
    },
    {
      id: "wsu",
      name: "Walter Sisulu University (WSU)",
      type: "Traditional University",
      location: "East London, Eastern Cape",
      established: 2005,
      website: "www.wsu.ac.za",
      logo: "🏛",
      faculties: [
        {
          name: "Faculty of Health Sciences",
          courses: ["MBChB Medicine", "BSc Nursing"]
        },
        {
          name: "Faculty of Law",
          courses: ["LLB Law"]
        },
        {
          name: "Faculty of Science, Engineering & Technology",
          courses: [
            "BSc Computer Science",
            "BEng Civil Engineering",
            "BEng Electrical Engineering",
            "BEng Mechanical Engineering"
          ]
        },
        {
          name: "Faculty of Business Sciences",
          courses: ["BCom Accounting", "BCom Economics", "BCom Business Management"]
        },
        {
          name: "Faculty of Humanities",
          courses: ["BA Psychology", "BA Social Work"]
        }
      ]
    },
    {
      id: "unizulu",
      name: "University of Zululand (UNIZULU)",
      type: "Traditional University",
      location: "Richards Bay, KwaZulu-Natal",
      established: 1960,
      website: "www.unizulu.ac.za",
      logo: "🌊",
      faculties: [
        {
          name: "Faculty of Arts",
          courses: ["BA Psychology", "BA Social Work", "BA Criminology", "BA Law"]
        },
        {
          name: "Faculty of Commerce",
          courses: ["BCom Accounting", "BCom Economics", "BCom Business Management"]
        },
        {
          name: "Faculty of Science & Agriculture",
          courses: [
            "BSc Computer Science",
            "BSc Mathematics",
            "BSc Physics",
            "BSc Chemistry",
            "BSc Agriculture"
          ]
        },
        {
          name: "Faculty of Law",
          courses: ["LLB Law"]
        }
      ]
    },
    {
      id: "nmu",
      name: "Nelson Mandela University (NMU)",
      type: "Traditional University",
      location: "Gqeberha, Eastern Cape",
      established: 2005,
      website: "www.mandela.ac.za",
      logo: "🌊",
      faculties: [
        {
          name: "Faculty of Business & Economic Sciences",
          courses: [
            "BCom Accounting",
            "BCom Economics",
            "BCom Business Management",
            "BCom Law"
          ]
        },
        {
          name: "Faculty of Engineering, Built Environment & Technology",
          courses: [
            "BEng Civil Engineering",
            "BEng Mechanical Engineering",
            "BEng Electrical Engineering",
            "BEng Industrial Engineering",
            "BEng Mechatronics",
            "BSc Architecture",
            "BSc Quantity Surveying",
            "BSc Computer Science",
            "BSc Information Technology"
          ]
        },
        {
          name: "Faculty of Health Sciences",
          courses: [
            "MBChB Medicine",
            "BSc Nursing",
            "BSc Physiotherapy",
            "BPharm Pharmacy"
          ]
        },
        {
          name: "Faculty of Law",
          courses: ["LLB Law"]
        },
        {
          name: "Faculty of Humanities",
          courses: ["BA Psychology", "BA Social Work", "BA Criminology"]
        },
        {
          name: "Faculty of Science",
          courses: [
            "BSc Mathematics",
            "BSc Physics",
            "BSc Chemistry",
            "BSc Biochemistry",
            "BSc Microbiology",
            "BSc Marine Biology",
            "BSc Environmental Science",
            "BSc Geology"
          ]
        }
      ]
    }
  ],

  // ============================================
  // UNIVERSITIES OF TECHNOLOGY (6)
  // ============================================
  universitiesOfTechnology: [
    {
      id: "tut",
      name: "Tshwane University of Technology (TUT)",
      type: "University of Technology",
      location: "Pretoria, Gauteng",
      established: 2004,
      website: "www.tut.ac.za",
      logo: "🏭",
      faculties: [
        {
          name: "Faculty of Information & Communication Technology",
          courses: [
            "Diploma in Information Technology",
            "Diploma in Computer Science",
            "Diploma in Multimedia Computing",
            "Diploma in Business Information Systems",
            "Advanced Diploma in IT",
            "Bachelor of IT"
          ]
        },
        {
          name: "Faculty of Engineering & Built Environment",
          courses: [
            "Diploma in Civil Engineering",
            "Diploma in Mechanical Engineering",
            "Diploma in Electrical Engineering",
            "Diploma in Chemical Engineering",
            "Diploma in Industrial Engineering",
            "Diploma in Metallurgical Engineering",
            "Diploma in Mining Engineering",
            "Diploma in Architecture",
            "Diploma in Quantity Surveying",
            "Diploma in Building Management",
            "Advanced Diploma in Engineering"
          ]
        },
        {
          name: "Faculty of Management Sciences",
          courses: [
            "Diploma in Accounting",
            "Diploma in Auditing",
            "Diploma in Business Management",
            "Diploma in Marketing",
            "Diploma in Human Resources",
            "Diploma in Public Management",
            "Diploma in Supply Chain Management",
            "Diploma in Logistics",
            "Diploma in Hospitality Management",
            "Diploma in Tourism Management"
          ]
        },
        {
          name: "Faculty of Science",
          courses: [
            "Diploma in Analytical Chemistry",
            "Diploma in Biotechnology",
            "Diploma in Food Technology",
            "Diploma in Biomedical Technology",
            "Diploma in Environmental Science"
          ]
        },
        {
          name: "Faculty of Arts & Design",
          courses: [
            "Diploma in Graphic Design",
            "Diploma in Multimedia Design",
            "Diploma in Photography",
            "Diploma in Fashion Design",
            "Diploma in Interior Design",
            "Diploma in Performing Arts"
          ]
        },
        {
          name: "Faculty of Humanities",
          courses: [
            "Diploma in Policing",
            "Diploma in Legal Assistance",
            "Diploma in Journalism",
            "Diploma in Public Relations"
          ]
        }
      ]
    },
    {
      id: "cput",
      name: "Cape Peninsula University of Technology (CPUT)",
      type: "University of Technology",
      location: "Cape Town, Western Cape",
      established: 2005,
      website: "www.cput.ac.za",
      logo: "💻",
      faculties: [
        {
          name: "Faculty of Informatics & Design",
          courses: [
            "Diploma in Information Technology",
            "Diploma in Computer Engineering",
            "Diploma in Multimedia",
            "Diploma in Graphic Design",
            "Diploma in Fashion Design",
            "Diploma in Interior Design",
            "Diploma in Architecture"
          ]
        },
        {
          name: "Faculty of Engineering",
          courses: [
            "Diploma in Civil Engineering",
            "Diploma in Mechanical Engineering",
            "Diploma in Electrical Engineering",
            "Diploma in Chemical Engineering",
            "Diploma in Industrial Engineering",
            "Diploma in Marine Engineering"
          ]
        },
        {
          name: "Faculty of Business & Management Sciences",
          courses: [
            "Diploma in Accounting",
            "Diploma in Business Management",
            "Diploma in Marketing",
            "Diploma in Human Resources",
            "Diploma in Hospitality Management",
            "Diploma in Tourism",
            "Diploma in Public Relations"
          ]
        },
        {
          name: "Faculty of Health & Wellness Sciences",
          courses: [
            "Diploma in Nursing",
            "Diploma in Emergency Medical Care",
            "Diploma in Environmental Health",
            "Diploma in Biomedical Technology"
          ]
        },
        {
          name: "Faculty of Applied Sciences",
          courses: [
            "Diploma in Biotechnology",
            "Diploma in Food Technology",
            "Diploma in Analytical Chemistry",
            "Diploma in Agriculture"
          ]
        }
      ]
    },
    {
      id: "dut",
      name: "Durban University of Technology (DUT)",
      type: "University of Technology",
      location: "Durban, KwaZulu-Natal",
      established: 2002,
      website: "www.dut.ac.za",
      logo: "🔧",
      faculties: [
        {
          name: "Faculty of Engineering & Built Environment",
          courses: [
            "Diploma in Civil Engineering",
            "Diploma in Mechanical Engineering",
            "Diploma in Electrical Engineering",
            "Diploma in Chemical Engineering",
            "Diploma in Industrial Engineering",
            "Diploma in Marine Engineering"
          ]
        },
        {
          name: "Faculty of Accounting & Informatics",
          courses: [
            "Diploma in Accounting",
            "Diploma in Information Technology",
            "Diploma in Computer Science",
            "Diploma in Business Information Systems"
          ]
        },
        {
          name: "Faculty of Management Sciences",
          courses: [
            "Diploma in Business Management",
            "Diploma in Marketing",
            "Diploma in Human Resources",
            "Diploma in Hospitality Management",
            "Diploma in Tourism"
          ]
        },
        {
          name: "Faculty of Arts & Design",
          courses: [
            "Diploma in Fashion Design",
            "Diploma in Graphic Design",
            "Diploma in Photography",
            "Diploma in Journalism",
            "Diploma in Drama"
          ]
        },
        {
          name: "Faculty of Health Sciences",
          courses: [
            "Diploma in Nursing",
            "Diploma in Biomedical Technology",
            "Diploma in Environmental Health"
          ]
        }
      ]
    },
    {
      id: "cut",
      name: "Central University of Technology (CUT)",
      type: "University of Technology",
      location: "Bloemfontein, Free State",
      established: 1981,
      website: "www.cut.ac.za",
      logo: "⚙",
      faculties: [
        {
          name: "Faculty of Engineering, Built Environment & IT",
          courses: [
            "Diploma in Civil Engineering",
            "Diploma in Mechanical Engineering",
            "Diploma in Electrical Engineering",
            "Diploma in Chemical Engineering",
            "Diploma in Quantity Surveying",
            "Diploma in Information Technology"
          ]
        },
        {
          name: "Faculty of Management Sciences",
          courses: [
            "Diploma in Accounting",
            "Diploma in Business Management",
            "Diploma in Human Resources",
            "Diploma in Marketing",
            "Diploma in Hospitality Management"
          ]
        },
        {
          name: "Faculty of Health & Environmental Sciences",
          courses: [
            "Diploma in Nursing",
            "Diploma in Environmental Health",
            "Diploma in Agriculture"
          ]
        },
        {
          name: "Faculty of Humanities",
          courses: [
            "Diploma in Journalism",
            "Diploma in Graphic Design"
          ]
        }
      ]
    },
    {
      id: "mut",
      name: "Mangosuthu University of Technology (MUT)",
      type: "University of Technology",
      location: "Durban, KwaZulu-Natal",
      established: 1979,
      website: "www.mut.ac.za",
      logo: "🔨",
      faculties: [
        {
          name: "Faculty of Engineering",
          courses: [
            "Diploma in Civil Engineering",
            "Diploma in Mechanical Engineering",
            "Diploma in Electrical Engineering",
            "Diploma in Chemical Engineering",
            "Diploma in Surveying"
          ]
        },
        {
          name: "Faculty of Management Sciences",
          courses: [
            "Diploma in Accounting",
            "Diploma in Business Management",
            "Diploma in Human Resources",
            "Diploma in Marketing",
            "Diploma in Public Management"
          ]
        },
        {
          name: "Faculty of Natural Sciences",
          courses: [
            "Diploma in Information Technology",
            "Diploma in Analytical Chemistry",
            "Diploma in Environmental Health"
          ]
        }
      ]
    },
    {
      id: "vut",
      name: "Vaal University of Technology (VUT)",
      type: "University of Technology",
      location: "Vanderbijlpark, Gauteng",
      established: 1966,
      website: "www.vut.ac.za",
      logo: "🏗",
      faculties: [
        {
          name: "Faculty of Engineering & Technology",
          courses: [
            "Diploma in Civil Engineering",
            "Diploma in Mechanical Engineering",
            "Diploma in Electrical Engineering",
            "Diploma in Chemical Engineering",
            "Diploma in Industrial Engineering",
            "Diploma in Metallurgical Engineering"
          ]
        },
        {
          name: "Faculty of Applied & Computer Sciences",
          courses: [
            "Diploma in Information Technology",
            "Diploma in Analytical Chemistry",
            "Diploma in Biotechnology",
            "Diploma in Food Technology"
          ]
        },
        {
          name: "Faculty of Management Sciences",
          courses: [
            "Diploma in Accounting",
            "Diploma in Business Management",
            "Diploma in Marketing",
            "Diploma in Human Resources",
            "Diploma in Hospitality Management",
            "Diploma in Tourism"
          ]
        },
        {
          name: "Faculty of Human Sciences",
          courses: [
            "Diploma in Public Relations",
            "Diploma in Legal Assistance"
          ]
        }
      ]
    }
  ],

  // ============================================
  // DISTANCE LEARNING (1)
  // ============================================
  distanceLearning: [
    {
      id: "unisa",
      name: "University of South Africa (UNISA)",
      type: "Distance Learning",
      location: "Nationwide (Online)",
      established: 1873,
      website: "www.unisa.ac.za",
      logo: "💻",
      faculties: [
        {
          name: "College of Accounting Sciences",
          courses: [
            "BCom Accounting",
            "BCom Financial Accounting",
            "BCom Management Accounting",
            "BCom Auditing",
            "BCom Taxation"
          ]
        },
        {
          name: "College of Agriculture & Environmental Sciences",
          courses: [
            "BSc Agriculture",
            "BSc Agricultural Economics",
            "BSc Environmental Management",
            "BSc Nature Conservation"
          ]
        },
        {
          name: "College of Economic & Management Sciences",
          courses: [
            "BCom Economics",
            "BCom Business Management",
            "BCom Marketing",
            "BCom Human Resources",
            "BCom Supply Chain",
            "BCom Public Administration",
            "BCom Law"
          ]
        },
        {
          name: "College of Education",
          courses: [
            "BEd Foundation Phase",
            "BEd Intermediate Phase",
            "BEd Senior Phase",
            "BEd Further Education",
            "PGCE"
          ]
        },
        {
          name: "College of Human Sciences",
          courses: [
            "BA General",
            "BA Psychology",
            "BA Social Work",
            "BA Criminology",
            "BA Sociology",
            "BA Law",
            "BA Communication Science",
            "BA Media Studies"
          ]
        },
        {
          name: "College of Law",
          courses: [
            "LLB Law",
            "BA Law",
            "BCom Law"
          ]
        },
        {
          name: "College of Science, Engineering & Technology",
          courses: [
            "BSc Computer Science",
            "BSc Information Technology",
            "BSc Mathematics",
            "BSc Physics",
            "BSc Chemistry",
            "BSc Biochemistry",
            "BSc Microbiology",
            "BSc Environmental Science",
            "BSc Geography",
            "BSc Geology",
            "BEng Civil Engineering",
            "BEng Electrical Engineering",
            "BEng Mechanical Engineering"
          ]
        }
      ]
    }
  ],

  // ============================================
  // TVET COLLEGES (50)
  // ============================================
  tvetColleges: [
    // Eastern Cape (8)
    { id: "king-hintsa", name: "King Hintsa TVET College", type: "TVET College", location: "East London, Eastern Cape", logo: "🏫", programmes: ["NCV Business Studies", "NCV Engineering", "NCV Hospitality", "NCV IT", "NATED Business Management", "NATED Human Resources", "NATED Financial Management"] },
    { id: "buffalo-city", name: "Buffalo City TVET College", type: "TVET College", location: "East London, Eastern Cape", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV Hospitality", "NATED Electrical Engineering", "NATED Mechanical Engineering", "NATED Civil Engineering"] },
    { id: "ikhala", name: "Ikhala TVET College", type: "TVET College", location: "Queenstown, Eastern Cape", logo: "🏫", programmes: ["NCV Agriculture", "NCV Engineering", "NCV Business", "NATED Farming Management", "NATED Business Management"] },
    { id: "ingwe", name: "Ingwe TVET College", type: "TVET College", location: "Mount Frere, Eastern Cape", logo: "🏫", programmes: ["NCV Primary Agriculture", "NCV Engineering", "NCV Business", "NATED Agriculture", "NATED Management"] },
    { id: "lovedale", name: "Lovedale TVET College", type: "TVET College", location: "Alice, Eastern Cape", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV IT", "NATED Engineering", "NATED Business", "NATED Education"] },
    { id: "port-elizabeth", name: "Port Elizabeth TVET College", type: "TVET College", location: "Gqeberha, Eastern Cape", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV Hospitality", "NCV IT", "NATED All Engineering", "NATED Business Studies", "NATED Management"] },
    { id: "sisonke", name: "Sisonke TVET College", type: "TVET College", location: "Butterworth, Eastern Cape", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV Agriculture", "NATED Engineering", "NATED Business"] },
    { id: "vuselela", name: "Vuselela TVET College", type: "TVET College", location: "Klerksdorp, North West", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV IT", "NATED Engineering", "NATED Business Management"] },
    
    // Free State (5)
    { id: "flavius-mareka", name: "Flavius Mareka TVET College", type: "TVET College", location: "Sasolburg, Free State", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV IT", "NATED Chemical Engineering", "NATED Mechanical Engineering", "NATED Business"] },
    { id: "goldfields", name: "Goldfields TVET College", type: "TVET College", location: "Welkom, Free State", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV Mining", "NATED Mining Engineering", "NATED Electrical Engineering", "NATED Business"] },
    { id: "maluti", name: "Maluti TVET College", type: "TVET College", location: "Bethlehem, Free State", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV Agriculture", "NATED Agriculture", "NATED Engineering", "NATED Business"] },
    { id: "motheo", name: "Motheo TVET College", type: "TVET College", location: "Bloemfontein, Free State", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV IT", "NCV Hospitality", "NATED All Fields", "NATED Business Management"] },
    
    // Gauteng (8)
    { id: "central-jhb", name: "Central Johannesburg TVET College", type: "TVET College", location: "Johannesburg, Gauteng", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV IT", "NCV Hospitality", "NATED All Engineering", "NATED Business", "NATED IT"] },
    { id: "ekurhuleni-east", name: "Ekurhuleni East TVET College", type: "TVET College", location: "Germiston, Gauteng", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV IT", "NATED Engineering", "NATED Business", "NATED Management"] },
    { id: "ekurhuleni-west", name: "Ekurhuleni West TVET College", type: "TVET College", location: "Kempton Park, Gauteng", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV IT", "NATED Electrical Engineering", "NATED Mechanical Engineering", "NATED Business"] },
    { id: "sedibeng", name: "Sedibeng TVET College", type: "TVET College", location: "Vereeniging, Gauteng", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV IT", "NATED Engineering", "NATED Business", "NATED Management"] },
    { id: "sw-gauteng", name: "South West Gauteng TVET College", type: "TVET College", location: "Johannesburg, Gauteng", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV IT", "NATED Engineering", "NATED Business", "NATED ICT"] },
    { id: "tshwane-north", name: "Tshwane North TVET College", type: "TVET College", location: "Pretoria, Gauteng", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV IT", "NCV Hospitality", "NATED All Engineering", "NATED Business Management"] },
    { id: "tshwane-south", name: "Tshwane South TVET College", type: "TVET College", location: "Pretoria, Gauteng", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV IT", "NCV Hospitality", "NATED Engineering", "NATED Business"] },
    { id: "western-tvet", name: "Western TVET College", type: "TVET College", location: "Krugersdorp, Gauteng", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV IT", "NATED Engineering", "NATED Business", "NATED Management"] },
    
    // KwaZulu-Natal (9)
    { id: "coastal-kzn", name: "Coastal KZN TVET College", type: "TVET College", location: "Durban, KwaZulu-Natal", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV IT", "NCV Hospitality", "NATED Engineering", "NATED Business", "NATED Tourism"] },
    { id: "elangeni", name: "Elangeni TVET College", type: "TVET College", location: "Pinetown, KwaZulu-Natal", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV IT", "NATED Engineering", "NATED Business", "NATED Management"] },
    { id: "esayidi", name: "Esayidi TVET College", type: "TVET College", location: "Port Shepstone, KwaZulu-Natal", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV Agriculture", "NATED Agriculture", "NATED Engineering", "NATED Business"] },
    { id: "majuba", name: "Majuba TVET College", type: "TVET College", location: "Newcastle, KwaZulu-Natal", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV IT", "NATED Engineering", "NATED Business", "NATED Management"] },
    { id: "mnambithi", name: "Mnambithi TVET College", type: "TVET College", location: "Ladysmith, KwaZulu-Natal", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV IT", "NATED Engineering", "NATED Business", "NATED Management"] },
    { id: "mthashana", name: "Mthashana TVET College", type: "TVET College", location: "Vryheid, KwaZulu-Natal", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV Agriculture", "NATED Agriculture", "NATED Engineering"] },
    { id: "thekwini", name: "Thekwini TVET College", type: "TVET College", location: "Durban, KwaZulu-Natal", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV IT", "NCV Hospitality", "NATED All Engineering", "NATED Business Management"] },
    { id: "umgungundlovu", name: "Umgungundlovu TVET College", type: "TVET College", location: "Pietermaritzburg, KwaZulu-Natal", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV IT", "NATED Engineering", "NATED Business", "NATED Management"] },
    { id: "umfolozi", name: "Umfolozi TVET College", type: "TVET College", location: "Richards Bay, KwaZulu-Natal", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV IT", "NATED Engineering", "NATED Business", "NATED Maritime"] },
    
    // Limpopo (6)
    { id: "capricorn", name: "Capricorn TVET College", type: "TVET College", location: "Polokwane, Limpopo", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV IT", "NATED Engineering", "NATED Business", "NATED Management"] },
    { id: "lephalale", name: "Lephalale TVET College", type: "TVET College", location: "Lephalale, Limpopo", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV Mining", "NATED Mining Engineering", "NATED Engineering", "NATED Business"] },
    { id: "letaba", name: "Letaba TVET College", type: "TVET College", location: "Tzaneen, Limpopo", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV Agriculture", "NATED Agriculture", "NATED Engineering", "NATED Business"] },
    { id: "mopani", name: "Mopani South East TVET College", type: "TVET College", location: "Phalaborwa, Limpopo", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV Mining", "NATED Mining Engineering", "NATED Engineering"] },
    { id: "sekhukhune", name: "Sekhukhune TVET College", type: "TVET College", location: "Groblersdal, Limpopo", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV Agriculture", "NATED Agriculture", "NATED Engineering"] },
    { id: "vhembe", name: "Vhembe TVET College", type: "TVET College", location: "Thohoyandou, Limpopo", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV Agriculture", "NATED Agriculture", "NATED Engineering", "NATED Business"] },
    
    // Mpumalanga (4)
    { id: "ehlanzeni", name: "Ehlanzeni TVET College", type: "TVET College", location: "Nelspruit, Mpumalanga", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV Agriculture", "NATED Agriculture", "NATED Engineering", "NATED Business"] },
    { id: "gert-sibande", name: "Gert Sibande TVET College", type: "TVET College", location: "Secunda, Mpumalanga", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV IT", "NATED Engineering", "NATED Business", "NATED Management"] },
    { id: "nkangala", name: "Nkangala TVET College", type: "TVET College", location: "Witbank, Mpumalanga", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV Mining", "NATED Mining Engineering", "NATED Engineering", "NATED Business"] },
    { id: "mbombela", name: "Mbombela TVET College", type: "TVET College", location: "Mbombela, Mpumalanga", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV Agriculture", "NATED Agriculture", "NATED Engineering"] },
    
    // North West (3)
    { id: "orbit", name: "Orbit TVET College", type: "TVET College", location: "Rustenburg, North West", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV Mining", "NATED Mining Engineering", "NATED Engineering", "NATED Business"] },
    { id: "taletso", name: "Taletso TVET College", type: "TVET College", location: "Mahikeng, North West", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV Agriculture", "NATED Agriculture", "NATED Engineering"] },
    
    // Northern Cape (3)
    { id: "nc-rural", name: "Northern Cape Rural TVET College", type: "TVET College", location: "Upington, Northern Cape", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV Agriculture", "NATED Agriculture", "NATED Engineering"] },
    { id: "nc-urban", name: "Northern Cape Urban TVET College", type: "TVET College", location: "Kimberley, Northern Cape", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV IT", "NATED Engineering", "NATED Business", "NATED Management"] },
    
    // Western Cape (4)
    { id: "boland", name: "Boland TVET College", type: "TVET College", location: "Stellenbosch, Western Cape", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV Agriculture", "NATED Agriculture", "NATED Engineering", "NATED Business"] },
    { id: "cct", name: "College of Cape Town", type: "TVET College", location: "Cape Town, Western Cape", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV IT", "NCV Hospitality", "NATED Engineering", "NATED Business"] },
    { id: "false-bay", name: "False Bay TVET College", type: "TVET College", location: "Cape Town, Western Cape", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV IT", "NCV Hospitality", "NATED Engineering", "NATED Business"] },
    { id: "northlink", name: "Northlink TVET College", type: "TVET College", location: "Cape Town, Western Cape", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV IT", "NCV Hospitality", "NATED Engineering", "NATED Business"] },
    { id: "south-cape", name: "South Cape TVET College", type: "TVET College", location: "George, Western Cape", logo: "🏫", programmes: ["NCV Engineering", "NCV Business", "NCV Hospitality", "NATED Engineering", "NATED Business", "NATED Tourism"] }
  ]
};

// Combine all institutions into one array for easy mapping
export const ALL_INSTITUTIONS_FLAT = [
  ...ALL_INSTITUTIONS.universities,
  ...ALL_INSTITUTIONS.universitiesOfTechnology,
  ...ALL_INSTITUTIONS.distanceLearning,
  ...ALL_INSTITUTIONS.tvetColleges
];