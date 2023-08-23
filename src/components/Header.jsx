// import React from 'react'
import { motion } from "framer-motion";
const blackBox = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			delay: 1,
			duration: 1,
			ease: "easeOut",
			when: "beforeChildren",
			staggerChildren: 0.1,
		},
	},
	exit: {
		opacity: 0,
	},
};
const itemVariants = {
	initial: {
		y: "-35px",
		opacity: 0,
	},
	animate: {
		y: "0px",
		opacity: 1,
	},
	exit: {
		y: "-35px",
		opacity: 0,
		transition: {
			duration: 1,
		},
	},
};
import { Link, useLocation } from "react-router-dom";

function Header() {
	let location = useLocation();
	let textColor = "text-darkPeach";
	console.log(location.pathname.includes("project"));
	if (location.pathname.includes("project")) {
		textColor = "text-eggShell";
	} else if (location.pathname.includes("contact")) {
		textColor = "text-purpleBrown";
	} else {
		textColor = "text-darkPeach";
	}
	return (
		<motion.div
			initial="initial"
			animate="animate"
			exit="exit"
			variants={blackBox}
			className={`w-full h-[6vh] font-Satisfy text-xl  flex justify-center sm:gap-12 gap-2 items-center ${textColor}`}
		>
			{/* <ul className=" "> */}
			<motion.div
				variants={itemVariants}
				className="h-full flex justify-center items-center p-3 border-b-2 rounded-b-full pt-2 hover:border-t-2 rounded-t-full duration-100"
			>
				<Link to="/">Home</Link>
			</motion.div>
			<motion.div
				variants={itemVariants}
				className="h-full flex justify-center items-center p-3 border-b-2 rounded-b-full pt-2 hover:border-t-2 rounded-t-full duration-100"
			>
				<Link to="/projects">Projects</Link>
			</motion.div>
			<motion.div
				variants={itemVariants}
				className="h-full flex justify-center items-center p-3 border-b-2 rounded-b-full pt-2 hover:border-t-2 rounded-t-full duration-100"
			>
				<Link to="/contact">Contact</Link>
			</motion.div>
			{/* </ul> */}

			{/* <Outlet /> */}
		</motion.div>
	);
}

export default Header;
