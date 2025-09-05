import { motion } from "framer-motion";
import { LuTriangleAlert } from "react-icons/lu";

const Error = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col justify-center items-center text-center h-[60vh] gap-4"
    >
      {/* Icon with shake effect */}
      <motion.div
        animate={{ x: [0, -6, 6, -6, 6, 0] }}
        transition={{ duration: 0.6 }}
      >
        <LuTriangleAlert size={64} className="text-red-500" />
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-lg font-semibold text-white font-publicSans"
      >
        Oops! Error Occurred
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-textShade font-publicSans font-medium text-base text-center"
      >
        Something Went Wrong
      </motion.p>
    </motion.div>
  );
};

export default Error;
