import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    team,
    carebnb,
    contact,
    css,
    nike,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    galleryra,
    react,
    redux,
    sass,
    myface,
    youTube,
    tailwindcss,
    threads,
    creatify,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: galleryra,
        theme: 'btn-back-red',
        name: 'Gallerya',
        description: 'An event organization web app like Eventbrite or Meetup with authentication, event management, search, filtering, categories, checkout, and payments using Next JS 14, Tailwind CSS, Shadcn, React Hook Form, Zod, Uploadthing, React-Datepicker, Mongoose, Clerk, and Stripe.',
        link: 'https://gallerya-64b696w7t-dannycsstudent.vercel.app/',
    },
    {
        iconUrl: myface,
        theme: 'btn-back-pink',
        name: 'MyFace',
        description: 'A complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment using React JS, Appwrite, Tailwindcss, React Query, and Shadcn.',
        link: 'https://myface-c66k82rb6-dannycsstudent.vercel.app/',
    },
    {
        iconUrl: nike,
        theme: 'btn-back-green',
        name: 'Product Landing Page',
        description: 'A dynamic product landing page. Crafted using ReactJS and Tailwind CSS, it boasts a sleek navigation bar, captivating hero section, popular products display, enticing special offers, genuine testimonials, a newsletter subscription feature, and a social media-linked footer. Developed with Vite or Next.js for optimal performance and user engagement.',
        link: 'https://dannycsstudent.github.io/nike/',
    },
    {
        iconUrl: team,
        theme: 'btn-back-blue',
        name: 'Team Designer',
        description: 'A minimalistic Figma clone to show how to add real-world features like live collaboration with cursor chat, comments, reactions, and drawing designs (shapes, image uploads) on the canvas using fabric.js',
        link: 'https://team-designer-hjbrr2wyr-dannycsstudent.vercel.app/',
    },
   
    {
        iconUrl: carebnb,
        theme: 'btn-back-black',
        name: 'Carebnb',
        description: 'A full stack Airbnb Clone with Next.js, App Router: React, tailwind, Prisma, MongoDB, NextAuth 2023.',
        link: 'https://carebnb-dannycsstudent.vercel.app/',
    },
    {
        iconUrl: youTube,
        theme: 'btn-back-yellow',
        name: 'YouTube Clone',
        description: 'A YouTube clone built with RapidAPI, React.js, and Material UI! This dynamic platform boasts an array of features including customizable categories, immersive video sections, and personalized channel pages. Users can seamlessly navigate through a diverse range of content, tailored to their interests. With sleek design elements and intuitive functionality, this clone offers a familiar yet refreshing experience for both creators and viewers alike. ',
        link: 'https://dannycsstudent.github.io/youtube-clone/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-pink',
        name: 'Threads Clone',
        description: 'A full stack Threads clone using Next.js 14+ with a redesigned look transformed from a Figma design, user interaction to community management, technical implementation, and various features, including nested deep comments, notifications, real-time-search, and more.',
        link: 'https://threads-clone-lg9rz89x2-dannycsstudent.vercel.app/',
    },
    {
        iconUrl: creatify,
        theme: 'btn-back-blue',
        name: 'Creatify',
        description: 'An AI image SaaS platform that excels in image processing capabilities, integrates a secure payment infrastructure, offers advanced image search functionalities, and supports multiple AI features, including image restoration, recoloring, object removal, generative filling, and background removal. ',
        link: 'https://create-me-alpha.vercel.app/',
    }
];