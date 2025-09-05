import nopage from "../assets/Pages/nodata.svg";
import { motion } from "framer-motion";

const NoData = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full flex flex-col items-center gap-10"
    >
      <motion.img
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        src={nopage}
        alt="No Pages"
        className="w-full h-full object-cover"
      />
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-textShade text-2xl font-medium px-5"
      >
        We couldn&apos;t find any results matching your search.
      </motion.p>
    </motion.div>
  );
};

export default NoData;
