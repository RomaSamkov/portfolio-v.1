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
  meta,
  starbucks,
  tesla,
  shopify,
  filmoteka,
  phonebook,
  threejs,
  petsproject,
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Fullstack Developer",
    icon: backend,
  },
  {
    title: "Node.js Developer",
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
    name: "Node JS",
    icon: nodejs,
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
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
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
    title: "Fullstack Developer",
    company_name: "Freelance",
    icon: "",
    iconBg: "#383E56",
    date: "Dec 2022 - present",
    points: [
      "Developing and maintaining web applications",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developing Pet-projects for portfolio and work experience",
      "Studing new technologies",
    ],
  },
  {
    title: "Full Stack Developer(student)",
    company_name: "IT School GoIT",
    icon: "",
    iconBg: "#E6DEDD",
    date: "October 2021 - November 2022",
    points: [
      "Studying JS, React, Node.js",
      "Developing and maintaining web applications",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in team-projects and work with other developers.",
    ],
  },
  {
    title: "Medical psychologist",
    company_name: "Private practice",
    icon: "",
    iconBg: "#383E56",
    date: "2013 - 2021",
    points: [
      "Individual psychological consultations",
      "Psychological counseling of patients, provides assistance to patients and their relatives in solving personal, professional and domestic psychological problems",
      "Conducting psychodiagnostic research",
    ],
  },
  {
    title: "Medical psychologist",
    company_name: "Zhytomyr Regional Psychiatric Clinic №1",
    icon: "",
    iconBg: "#E6DEDD",
    date: "2002 - 2009",
    points: [
      "Psychoprophylaxis and psychocorrection",
      "Psychological counseling of patients, provides assistance to patients and their relatives in solving personal, professional and domestic psychological problems",
      "Conducting psychodiagnostic research",
    ],
  },
];

const testimonials = [
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Pets House",
    description:
      "Team project. Full-stack application for people with pets. Used: React, Redux, RTK Query, react-router-dom, React i18n, Node.JS,Express, MongoDB, Mongoose, Formik, Yup, SASS, Material-UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
    ],
    image: petsproject,
    source_code_link: "https://pets-house-client.vercel.app/",
  },
  {
    name: "Filmoteka",
    description:
      "Team project about searching for movies, and adding favorite movies to a personal library. Used: pure JS, npm packages and SCSS. Team-project.                                                                 Role: Team Lead.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: filmoteka,
    source_code_link: "https://romasamkov.github.io/project-filmoteka/#",
  },
  {
    name: "Phonebook",
    description:
      "Application with sounds for saving phone numbers. Used: React, Create React App, Redux, Redux Toolkit, redux-persist, react-router-dom, Formik, Yup, Styled Components, Material-UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: phonebook,
    source_code_link:
      "https://romasamkov.github.io/goit-react-hw-08-phonebook/",
  },
];

export { services, technologies, experiences, testimonials, projects };
