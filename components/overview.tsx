import { motion } from 'framer-motion';

import { MessageIcon, VercelIcon } from './icons';

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        <p className="flex flex-row justify-center gap-4 items-center">
          <VercelIcon size={32} />
          <span>+</span>
          <MessageIcon size={32} />
        </p>
        <p className="flex flex-row justify-center gap-4 items-center">
          <strong>How Thirsty is Your LLM?</strong>
        </p>
        <p >
          Visualize the estimated environmental impact of your AI + LLM usage in <i>real-time</i>
        </p>
        <p >
          Ask {" "}<code className="rounded-md bg-muted px-1 py-0.5">What's my environmental impact?</code>{" "}
          to see the natural resource consumption of your current conversation
        </p>
      </div>
    </motion.div>
  );
};
