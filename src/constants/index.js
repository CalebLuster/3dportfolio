import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    voces,
    threejs,
    ccc,
    logo,
    voces_logo,
    devtube,
    logoSL,
    chatGTP,
    dbdsma,
    burritologo,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Vue.js Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Voces Y Visiones",
      icon: voces,
      iconBg: "#383E56",
      date: "Nov 2022 - Present",
      points: [
        "Developing and maintaining web applications using Vue.js and other related technologies.",
        "Collaborating with company closely to create the best possible website",
        "Mantain a full stack web application to ensure users have the best experience",
        "Using best coding practices to write clean and concise code",
      ],
    },
    {
      title: "Website Developer",
      company_name: "Creative Cuisine Co",
      icon: ccc,
      iconBg: "#E6DEDD",
      date: "March 2022 - Present",
      points: [
        "Developing and maintaining web applications using WordPress and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Freelance Web Developer",
      company_name: "CLuster Productions",
      icon: logo,
      iconBg: "#383E56",
      date: "Oct 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js, Vue.js, Next.js and other related technologies.",
        "Collaborating with clients to ensure they get the website of their dreams.",
        "Implementing best coding practices to make clients products responsive and robust.",
        "Participating in weekly meetings with clients so we stay on the same page and move forward with our business relationship.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Caleb proved me wrong.",
      name: "Bobby Marines",
      designation: "CEO",
      company: "Voces Y Visiones",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Caleb does.",
      name: "John Hoffman",
      designation: "CEO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Caleb optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Randy Smith",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Big Head Burrito",
      description:
        "A website for a local restaurant that allows users to view the menu, order online, and view the restaurants location. Authenticated users can use the admin panel to add, edit, and delete menu items.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB & Prisma",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: burritologo,
      website_url: "https://bigheadburrito.vercel.app/",
      source_code_link: "https://github.com/CalebLuster/bigheadburrito",
    },
    {
      name: "Devtube",
      description:
      "A YouTube clone that allows users to search for videos, view videos, view channels, and see the likes and dislikes of each video. Users can also comment on videos and like or dislike them.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "RapidAPI",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: devtube,
      website_url: "https://devtubeclone.netlify.app/",
      source_code_link: "https://github.com/CalebLuster/gametube",
    },
    {
      name: "Spotify Lite",
      description:
        "A Spotify clone that allows users to search for songs, view songs, and search for artists. Users can also search for top of the charts and albums. Users can also play pause, and skip songs.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "RapidAPI",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: logoSL,
      website_url: "https://lyriks-lite.netlify.app/",
      source_code_link: "https://github.com/CalebLuster/spotify-clone",
    },
    {
      name: "DBD Social Media App",
      description:
        "A social media app that allows users to post, like, and comment on posts. Users can also follow other users and see their posts on their feed. Wtih specific categories and file uploading.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Sanity",
          color: "orange-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: dbdsma,
      website_url: "https://dbdsma.vercel.app/",
      source_code_link: "https://github.com/CalebLuster/dbdsm",
    },
    {
      name: "Voces Y Visiones",
      description:
      "Website for Voces Y Visiones, a non-profit organization that aims to empower and educate the Latinx community in the United States through a local artists work showcased on his website.",
      tags: [
        {
          name: "Vue.js",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: voces_logo,
      website_url: "https://vocesyvisiones.org",
      source_code_link: "https://vocesyvisiones.org",
    },
    {
      name: "ChatGTP AI Chat Bot",
      description:
        "ChatGTP is a chat bot that allows users to chat with an AI bot from OpenAI's GTP-3 API. Users can ask the bot questions and the bot will respond with an answer. Sometimes the bot lets their emotions guide their answers",
      tags: [
        {
          name: "JavaScript",
          color: "orange-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: chatGTP,
      website_url: "https://chat-gtp-rho.vercel.app/",
      source_code_link: "https://github.com/CalebLuster/chatGTP",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };