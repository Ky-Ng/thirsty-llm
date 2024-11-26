import { motion } from 'framer-motion';
import Link from 'next/link';

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
        <p className="flex flex-row justify-center gap-4 items-center">
          Visualize the estimated environmental impact of your AI + LLM usage in real-time
        </p>
        <p className="flex flex-row justify-center gap-4 items-center">
          Ask "What's my environmental impact"
          to see the natural resource consumption of your current conversation
        </p>
        <p className="flex flex-row justify-center gap-4 items-center">
          Checkout the <Link
            className="font-medium underline underline-offset-4"
            href="https://sdk.vercel.ai/docs"
            target="_blank"
          >writeup</Link>
          for more background and info.
        </p>
      </div>
    </motion.div>
  );
};
