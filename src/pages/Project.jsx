import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const cardVariants = {
	offscreen: {
		y: 300,
	},
	onscreen: {
		y: 50,
		rotate: -10,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 0.8,
		},
	},
};
function Project({ data }) {
	console.log(data);
	return (
		<motion.div
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.8 }}
			className="sm:w-[50%] w-[80%] h-screen relative flex flex-row items-start rounded-xl "
		>
			<img
				src={data?.link}
				alt="img"
				className="w-[50%] h-[50%] object-cover rounded-l-xl opacity-50 hover:opacity-100"
			/>
			<img
				src={data?.github}
				alt="img"
				className="w-[50%] h-[50%] object-cover rounded-r-xl opacity-70  hover:opacity-100"
			/>

			<motion.div
				variants={cardVariants}
				className="absolute text-[12px] md:text-[20px] top-0 left-0 m-5 w-[40%] font-NotoSansJP font-bold text-darkPeach"
			>
				<div>卩尺ㄖﾌ乇匚ㄒ {data?.id}</div>
				<div>ㄥㄖ尺乇爪 ﾌㄥㄖ尺乇爪 ㄥㄖ丂ᗪ 丂ᗪ千丂ﾌᗪҜ</div>
				<div>の尺乇ﾶ ﾌﾚの尺乇ﾶ ﾚの丂り 丂りｷ丂ﾌりズ</div>
			</motion.div>
		</motion.div>
	);
}

export default Project;
