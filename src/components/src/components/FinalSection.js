import React from "react";
import { motion } from "framer-motion";
import "./FinalSection.css";

export default function FinalSection({ sentences }) {
  return (
    <div className="final-section">
      {sentences.map((sentence, idx) => (
        <motion.div
          className="big-sentence"
          key={sentence}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 + idx * 1.0, duration: 0.75 }}
        >
          {sentence}
        </motion.div>
      ))}
    </div>
  );
}
