import { useRouter } from 'next/router';
import {motion, AnimatePresence} from "framer-motion"

const Animation = ({ children }) => {

const { asPath } = useRouter();

  return (
		<>
		<AnimatePresence
	      initial={false}
	      mode='wait'
	    >
	      <motion.div

	        key={asPath}
	       
            whileTap={{
                scale:0.9
            }}
	      >
	        {children}
	      </motion.div>
	    </AnimatePresence>
		</>
	);
};

export default Animation;