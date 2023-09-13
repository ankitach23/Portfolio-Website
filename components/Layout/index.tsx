// components/Layout/index.js

import { motion } from "framer-motion";

const Layout = ({ children }:{children:any}) => (
  <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 600,
      damping: 150,
    }}
  >
    {children}
  </motion.div>
);
export default Layout;
