import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLinkHovered(true);
    }, 200);
  }, [linkHovered]);

  return (
    <header className="header mx-auto h-[50vh]">
      <motion.nav 
        className={"w-full flex items-center justify-around fixed"}
        initial={{ opacity: 0, y: -100}}
        animate={{ opacity: 1,  y: 0 }} 
        transition={{delay: 0.5, duration: 1}}
        whileInView={{ opacity: 1 }}
      >
        <h1>Fengsheng Chen</h1>
        <ul className="flex items-center gap-12">
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </motion.nav>
      <div className="flex flex-col justify-center items-center h-full gap-8">
        <motion.h1
          className="text-6xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Hi, I'm
        </motion.h1>
        <div className="flex gap-8">
          <a
            href='https://www.linkedin.com/in/fengsheng-chen/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1}}
              transition={linkHovered ? { delay: 0, duration: 0.2 } : { delay: 1.5, duration: 1 }}
              whileHover={{
                scale: 1.2,
                transition: { delay: 0, duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              Linkedin
            </motion.button>
          </a>
          <a
            href='https://github.com/bikiris'
            target='_blank'
            rel='noopener noreferrer'
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1}}
              transition={linkHovered ? { delay: 0, duration: 0.2 } : { delay: 1.5, duration: 1 }}
              whileHover={{
                scale: 1.2,
                transition: { delay: 0, duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              Github
            </motion.button>
          </a>
        </div>
      </div>
      <div className="h-[1000px]"></div>
    </header>
  );
};

export default Header;
