import { motion } from "framer-motion";

export default function Hero({}) {
  return (
    <>
      <section
        className="hero"
        style={{
          height: "32rem",
          backgroundImage: `url(/images/hero/1.png)`,
        }}
        id="hero"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div></div>
        </motion.div>
      </section>
    </>
  );
}
