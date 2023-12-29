import React from 'react';
import { skills } from '../constants';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Greetings, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Daniel</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Full Stack Developer specializing in crafting high-performance 
          websites and social media applications using the MERN stack and the 
          versatile Appwrite platform.


        </p>
        <p>
          🌟 With expertise in MongoDB, Express.js, React, and Node.js, I bring your 
          visions to life by creating seamless, responsive, and feature-rich web 
          applications. From dynamic user interfaces to a robust backend, your project 
          is in good hands.
        </p>
        <p>
          🔐 Seeking a secure and scalable solution? Look no further! I integrate 
          Appwrite, an open-source platform, seamlessly blending authentication, 
          databases, functions, and storage to ensure your project is not just 
          feature-packed but also highly secure.
        </p>
        <p>
          🛒 Say goodbye to the hassle of juggling Shopify and a CMS. I will 
          build you a webshop in Payload CMS – a fully open-source, TypeScript-driven 
          Content Management System. Through Payload + Stripe integration, I deliver a 
          captivating and functional front-end, complete with a user-friendly 
          shopping cart, seamless checkout processes, order management, and more.
        </p>
        <p>
          🌐 Let's Build Your Vision Together! Whether you're dreaming of a social 
          media powerhouse or a streamlined e-commerce empire, I'm ready to turn your 
          ideas into reality. Take the next step towards digital success – choose 
          innovation, choose reliability, choose me!
        </p>
        <p>
          💬🔧 #FullStackDeveloper #NextJS #TypeScript #Stripe #PayloadCMS 
          #WebDevelopment #Appwrite
        </p>
        
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default About