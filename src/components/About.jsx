import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';
import { profilePic } from '../assets';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full p-[1px] rounded-[20px] drop-shadow-lg'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-peacockGreen rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='icon'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-primary text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div className="flex flex-col md:flex-row flex-wrap gap-10 justify-between items-start">
        <div className='w-full md:w-3/5'>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview</h2>
          </motion.div>

          <motion.p variants={fadeIn('','', 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Hello there! I'm a game developer working hard at turning elusive dreams into vibrant realities. What fuels my passion? A quest to ignite curiosity and wonder through crafting distinctive and enjoyable game experiences. Along this journey, I've honed my technical prowess: consistently delivering clean, high-quality code in an Agile environment. Concurrently, I'm refining my collaborative ethos through projects and teamwork, which has led to leadership roles that allowed me to mentor wonderful creators in programming, art, and skill acquisition. On the academic front, I've earned a Master of Science in Computer Science, but strive to stay humble as a lifelong learner. If you're intrigued, dive deeper into the site to discover more!
          </motion.p>
        </div>
        <motion.img 
            variants={fadeIn('','', 0.2, 1)}
            src={profilePic} 
            alt="Profile" 
            className="rounded-lg shadow-lg w-3/4 md:w-1/3 my-auto mx-auto" 
        />
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(About, 'about');