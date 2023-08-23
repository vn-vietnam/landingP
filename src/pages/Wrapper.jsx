import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
const blackBox = {
	initial: {
		height: "100vh",
		bottom: 0,
	},
	animate: {
		height: 0,
		transition: {
			duration: 1.5,
			ease: "easeInOut",
		},
	},
	exit: {
		height: "100vh",
		opacity: 1,
		transition: {
			delay: 0.2,
			duration: 1,
			ease: "easeInOut",
		},
	},
};
function Wrapper() {
	return (
		<>
			<motion.div
				className={`absolute top-0 left-0 w-full flex items-center justify-center z-50 bg-pinkJapan`}
				initial="initial"
				animate="animate"
				exit="exit"
				variants={blackBox}
			></motion.div>
			<Outlet />
		</>
	);
}

export default Wrapper;
