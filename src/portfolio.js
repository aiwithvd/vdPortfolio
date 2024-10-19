/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "VD - AI Engineer",
  description:
    "With a strong foundation in Generative AI, Data Science, and Machine Learning, I specialize in developing intelligent solutions that drive innovation and efficiency. My expertise in MLOps allows me to streamline the deployment and management of machine learning models, ensuring scalable and reliable performance. I am passionate about leveraging data-driven insights to solve complex problems and continuously explore emerging technologies to stay at the forefront of the AI landscape. Whether working on cutting-edge projects or collaborating with cross-functional teams, I strive to create impactful applications that make a difference.",
  og: {
    title: "Vishvdeep Dasadiya Portfolio",
    type: "website",
    url: "http://aiwithvd.com/",
  },
};

//Home Page
const greeting = {
  title: "Vishvdeep Dasadiya",
  logo_name: "AI with VD",
  nickname: "aiwithvd",
  subTitle:
    "I specialize in Generative AI, Data Science, and Machine Learning to create innovative and efficient solutions. With expertise in MLOps, I streamline the deployment and management of scalable AI models.",
  resumeLink:
    "https://drive.google.com/file/d/1MIEXo710s1juMyEcGBPOANJpOb160oOz/view?usp=sharing",
  portfolio_repository: "https://github.com/aiwithvd/vdPortfolio",
  githubProfile: "https://github.com/aiwithvd",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/aiwithvd",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vishvdeep/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:vishvdeepdasadia@hotmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/vishvdeep18",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deep learning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
        "⚡ Expertise in Agentic AI and Generative AI utilizing LangGraph, LangChain, and LlamaIndex",
        "⚡ Proficient with AWS services including SageMaker, Bedrock, OpenAI, Anthropic, and Llama",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Atimiya College of Engineering and Diploma Studies",
      subtitle: "Diploma in Computer Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "Atimiya College",
      duration: "2013 - 2016",
      descriptions: [
        "⚡ Studied foundational engineering subjects including Data Structures, Algorithms, Database Management Systems, Operating Systems, Computer Architecture, and Artificial Intelligence.",
        "⚡ Completed various projects focused on software development and automation, enhancing practical skills in computer engineering.",
        "⚡ Awarded the Merit cum Means Scholarship for being in the top 10% of the class and received recognition from the college director for consistent academic excellence.",
      ],
      website_link: "http://atimiya.edu.in",
    },
    {
      title: "L. D. College of Engineering",
      subtitle: "Bachelor of Engineering in Computer Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "L. D. College of Engineering",
      duration: "2016 - 2019",
      descriptions: [
        "⚡ Specialized in Computer Engineering with comprehensive coursework in Software Development, Systems Design, Database Management, and Machine Learning.",
        "⚡ Participated in extracurricular activities including coding competitions, tech clubs, and hackathons, fostering teamwork and problem-solving skills.",
        "⚡ Successfully completed a capstone project on [Insert Project Topic], demonstrating the application of theoretical knowledge to real-world scenarios.",
      ],
      website_link: "https://ldce.ac.in",
    },
    {
      title: "Birla Institute of Technology and Science - Pilani",
      subtitle: "Master of Technology in Data Science and Engineer",
      logo_path: "iiitk_logo.png",
      alt_name: "BITS Pilani",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ Focused on advanced topics in Artificial Intelligence, including Explainable AI, Graph Machine Learning, and Computer Vision.",
        "⚡ Engaged in research assistantship, developing new algorithms in Graph Machine Learning and Network Science to contribute to academic publications.",
        "⚡ Collaborated with the multimedia department on documentary films and interviews, enhancing interdisciplinary skills and creative problem-solving.",
      ],
      website_link: "https://www.bits-pilani.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as an ML and DL Developer, Designer, and Software Architect. I have also worked with some well-established companies mostly as an AI Developer. I love organizing events and that is why I am also involved with many open-source communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "Accenture",
          company_url: "https://www.accenture.com/",
          logo_path: "legato_logo.png",
          duration: "July 2019 - May 2022",
          location: "Bangalore, Karnataka, India",
          description:
            "Developed and maintained scalable software solutions for clients across various industries. Collaborated with cross-functional teams to design, implement, and optimize machine learning models that enhanced business processes and decision-making. Led multiple projects focusing on AI-driven analytics and automation, resulting in a 20% increase in operational efficiency for key clients.",
          color: "#FF5722",
        },
        {
          title: "Data Science Engineer and Manager",
          company: "Fxis.AI",
          company_url: "https://www.fxis.ai/",
          logo_path: "legato_logo.png",
          duration: "June 2022 - August 2024",
          location: "Mumbai, Maharashtra, India",
          description:
            "Managed a team of data scientists and machine learning engineers to develop cutting-edge AI solutions. Spearheaded the development of predictive analytics models and natural language processing applications that drove significant improvements in client services. Implemented robust MLOps pipelines using AWS services, ensuring seamless deployment and scalability of AI models. Played a key role in strategic planning and client consultations, contributing to a 30% growth in company revenue.",
          color: "#3F51B5",
        },
        {
          title: "Senior Software Engineer",
          company: "7Span",
          company_url: "https://www.7span.com/",
          logo_path: "legato_logo.png",
          duration: "September 2024 - Present",
          location: "San Francisco, CA, USA",
          description:
            "Leading the development of advanced generative AI models and agentic AI systems to innovate and enhance product offerings. Collaborating with international teams to integrate AI solutions into scalable cloud infrastructures using AWS Bedrock and SageMaker. Driving research initiatives in LangGraph, LangChain, and LlamaIndex to push the boundaries of AI capabilities. Ensuring the reliability and performance of AI systems through effective MLOps practices and continuous monitoring.",
          color: "#4CAF50",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Machine Learning Intern",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "May 2022 - August 2022",
    //       location: "San Francisco, USA",
    //       description:
    //         "Built new features on the backend recommendation system, specifically ranking algorithms for Ads that reach hundreds of millions globally. Enhanced online and offline content ranking algorithms by performing hard sample data replays for training steps, improving model accuracy and relevance.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - September 2019",
    //       location: "Gurgaon, Haryana, India",
    //       description:
    //         "Developed a forecasting engine to predict daily freight rates using historical data. Embedded features in the model to explain seasonal changes in freight rates based on regions and locations. Utilized deep learning models in combination with statistical methods to create a robust solution. Deployed the model on AWS EC2 using Kafka stream jobs, ElasticSearch, and PostgreSQL, facilitating real-time data processing and analytics.",
    //       color: "#EE3C26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url: "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "November 2018 - December 2018",
    //       location: "Work From Home",
    //       description:
    //         "Created supervised learning models for performing time series analysis on stock price data for 32 companies. Developed and trained LSTM Neural Networks models using two years of historical data to forecast stock prices, aiding in investment decision-making processes.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana, India",
    //       description:
    //         "Facilitated the Explore Machine Learning (ML) program, a Google-sponsored initiative for university students. Trained fellow students on ML concepts across three levels (Beginner, Intermediate, Advanced) and led the development of open-source projects under the program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "August 2019 - May 2020",
    //       location: "Hyderabad, Telangana, India",
    //       description:
    //         "Led the awareness and utilization of Microsoft Azure tools among university students. Organized hands-on workshops and seminars to teach cloud computing concepts, enhancing students' skills in developing projects and startups using Azure services.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "October 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh, India",
    //       description:
    //         "Promoted open-source initiatives within the college and local community. Organized multiple hackathons addressing real-world problems from Kurnool city residents. Established and nurtured an open-source community for the college, actively contributing to and maintaining projects on GitHub under the `dsc_iiitdmk` repository.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "January 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh, India",
    //       description:
    //         "Active member of the Developer Students Club, directly associated with Google Developers. Contributed to interdisciplinary projects, organized workshops and activities on Android Application Development, Flutter, and React JS, fostering a collaborative and innovative learning environment.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "GitHub",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Actively contributing to numerous open-source projects across organizations like TensorFlow, Uber, Facebook, Google, Scikit-learn, Kiwix, SymPy, Python, NVLabs, Fossasia, Netrack, Keras, etc. Contributions include bug fixes, feature implementations, and comprehensive documentation improvements.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "IMG_8106.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
