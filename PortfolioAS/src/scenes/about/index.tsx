import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const About = ({setSelectedPage}: Props) => {
  return (
    <section
      id="about"
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
      >

      </motion.div>

    </section>
  )
}

export default About;