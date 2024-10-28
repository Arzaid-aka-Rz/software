

import { motion } from "framer-motion"
import TypingAnimation from "./TypingAnimation"
import { CoolMode } from "./ui/cool-mode"

export default function Body() {
  return (
    <div className="flex flex-col gap-5 w-full min-h-screen">
      <div className="bg-gray-100 w-full flex flex-col py-16 px-12 md:h-[645px]">
        <div className="flex justify-between items-center lg:flex-row flex-col md:w-[85%]  w-full mx-auto ">
          <motion.div 
            className="flex flex-col gap-8 mt-20 mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-7xl font-bold text-center tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Unlock the
              <br /> <span className="text-[#3FEDBC]">Power</span> of Knowledge
              <br /> <TypingAnimation />
            </motion.h1>

            <motion.div 
              className="items-center justify-center flex"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <CoolMode>
                <motion.button 
                  className="mt-8 mb-24 bg-black text-white py-4 px-6 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started &rarr;
                </motion.button>
              </CoolMode>
            </motion.div>
          </motion.div>

          <motion.img
            src="https://gitcs-brain.vercel.app/assets/undraw_data_trends_re_2cdy-DnVPABha.svg"
            alt="HR Background"
            className="w-2/5 mb-16"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </div>     
      </div>

      
      
      <div className="flex justify-center flex-col gap-8 items-center p-9">
        <h1 className="text-center text-4xl font-bold md:text-6xl mb-5">
          What Brain Brings To The Table
        </h1>
        </div>

      
    </div>
  )
}