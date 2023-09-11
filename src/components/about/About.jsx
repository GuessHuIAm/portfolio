import React from 'react';
import ME from '../../assets/headshot.jpg';
import { MdOutlineApartment, MdWork, MdBrush } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import SwiperCore, { Pagination } from 'swiper';

import './about.css';

SwiperCore.use([Pagination]);

const Card = ({ title, subtitle, icon }) => {
  return (
    <article className="about__card">
      {icon}
      <h5>{title}</h5>
      <small>{subtitle}</small>
    </article>
  );
};

const cards = [
  { title: 'Based In', subtitle: 'Brooklyn, NY and Cambridge, MA.', icon: <MdOutlineApartment /> },
  { title: 'Experience', subtitle: 'Student, teaching fellow, game developer, and software engineer.', icon: <MdWork /> },
  { title: 'Hobbies', subtitle: 'Drawing, running, and cooking.', icon: <MdBrush /> }
];

const paragraphs = [
  "Welcome to my portfolio! I'm Michael, a student at Harvard University pursuing a concurrent Bachelor's and Master's in Computer Science, with a secondary focus in Economics. I'm passionate about cutting-edge machine learning applications, computer graphics, and problem-solving with programming.",
  "Using technology to connect people and foster inclusivity is at the core of my mission. As a first-generation low-income student, I am dedicated to making a difference, particularly in underserved communities.",
  "I believe that by leveraging my technical skills and creative thinking, I can approach problems from unique angles and develop innovative solutions; by practicing empathy and compassion, I can build meaningful relationships and make a positive impact on the world, starting by empowering those around me.",
  "When I'm not coding, I find inspiration through sketching, exploring the nearby city streets, and experimenting with new recipes. These diverse experiences fuel my creativity and inform my work.",
  "I'm excited to share my projects and skills with you through this portfolio. Let's connect and create something amazing together!"
];

const About = () => {
  const [refMe, inViewMe] = useInView({ triggerOnce: true });
  const [refButtons, inViewButtons] = useInView({ triggerOnce: true });

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <motion.div
          ref={refMe}
          initial={{ opacity: 0, scale: 0 }}
          animate={inViewMe ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 1 }}
          className="about__me"
        >
          <div className="about__me-image">
            <img src={ME} alt='About me.' />
          </div>
        </motion.div>

        <div className="about__content">
          <div className="about__cards">
            {cards.map(({ title, subtitle, icon }) => (
              <Card key={title} title={title} subtitle={subtitle} icon={icon} />
            ))}
          </div>

          <Swiper
            initialSlide={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSlideChange={() => {}}
            onSwiper={() => {}}
          >
            {paragraphs.map((paragraph, index) => (
              <SwiperSlide key={index}>
                <p>{paragraph}</p>
              </SwiperSlide>
            ))}
          </Swiper>

          <motion.div
            ref={refButtons}
            initial={{ opacity: 0, y: 50 }}
            animate={inViewButtons ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="btn-container"
          >
            <a href='#experience' className='btn btn-primary'>Work Experience</a>
            <a href='#projects' className='btn btn-primary'>Projects</a>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
