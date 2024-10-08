import Social from "../components/Social";
import Photo from "../components/Photo";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className='h-full text-white'>
      <div className='mx-auto h-full'>
        <div className='flex flex-col xl:flex-row justify-between items-center mt-10 xl:pt-8 xl:pb-24'>
          <div className='text-center xl:text-left order-2 xl:order-none '>
            <span>Software Developer</span>
            <h1 className='h1 mb-6'>
              Hello I'm <br />
              <span className='text-blue-500'>Fengsheng Chen</span>
            </h1>
            <p className='max-w-[500px] mb-9'>
              I'm a software developer based in New York. I specialize in
              building and designing exceptional digital experiences.
            </p>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button
                variant='outline'
                size='lg'
                className='uppercase flext items-center gap-2 bg-transparent'
              >
                <a href="Fengsheng_Chen_resume_0.pdf" download className="flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className='text-xl' />
                </a>
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Social
                  containerStyles='flex gap-6'
                  iconStyles='w-9 h-9 border border-blue-500 rounded-full flex justify-center items-center text-blue-500 text-base hover:bg-blue-500 hover:text-primary hover:transitionall duration-500'
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
