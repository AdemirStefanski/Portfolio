import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';


import ProfilePicColor from "@/assets/profile_pic_color.png";
import SponsonrRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import GitHubIcon from "@/assets/social.png";
import LinkedInIcon from "@/assets/linkedin.png"


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {

  


  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

 

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* imagem e main header */}
      <motion.div 
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6 "
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
         
        {/* main header */}
        <div className="z-10 mt-32 md:basis-3/5 md:pl-8 ">
          {/* headings */}
          <motion.div 
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
              hidden: { opacity: 0, x:-50},
              visible: {opacity: 1, x: 0},
            }}
          >
            <div className="relative ">
              <div  className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-brushstrokebg flex md:before:pl-40 ">
                
                <p className="text-2xl text-white drop-shadow-as self-end md:pl-40" >
                Hi there! I'm 
                </p>
                <p className="font-museomoderno ml-2 text-3xl drop-shadow-as text-yellow-300  ">
                Ademir Stefanski
                </p>
              </div>            
            </div>

            <p className="mt-8 text-xl md:text-start drop-shadow-as text-zinc-100 font-semibold md:pl-40 ">
            Front-end Developer based in São Paulo, Brazil.
            </p>

          </motion.div>
            {/* actions */}
            <motion.div className="mt-8 flex items-center gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5}}
              transition={{delay: 0.2, duration: 0.5}}
              variants={{
              hidden: { opacity: 0, x:-50},
              visible: {opacity: 1, x: 0},
            }}
            >
              {/* LinkedIn */}
              <div>
                <img alt="" src={LinkedInIcon} className="w-6 "/>
              </div>

              {/* GitHub */}
              <div>
                <img alt="" src={GitHubIcon} className="w-6 "/>
              </div>
          </motion.div>


        </div>

        {/* imagem */}

        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end md:h-2/4 md:pr-32"
        >
          <img alt="home-pageGraphic" src={ProfilePicColor} />
        </div>
        </motion.div>      

        

      {/* tecnologias */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="" src={SponsonrRedBull} />
              <img alt="" src={SponsorForbes} />
              <img alt="" src={SponsorFortune} />
            </div>
          </div>

        </div>
      )}
    </section>
  )
}

export default Home;