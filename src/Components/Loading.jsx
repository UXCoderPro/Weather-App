import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="w-full flex items-center justify-center h-[60vh] gap-2">
      {[0, 1, 2].map((dot) => (
        <motion.span
          key={dot}
          className="w-4 h-4 bg-highLighter-gradient rounded-full"
          animate={{
            y: ["0%", "-50%", "0%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.6,
            delay: dot * 0.2,
          }}
        />
      ))}
    </div>
  );
};

export default Loading;
