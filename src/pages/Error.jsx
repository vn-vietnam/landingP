// import React from 'react'


import error from "../assets/error.svg";
import { Link } from "react-router-dom";
function Error() {
	return (
		<>
			<main className="h-[calc(100vh)] bg-eggShell flex flex-col justify-center items-center">
				<img src={error} alt="" className="m-auto " />

				<button className="border-2 rounded-xl border-purpleBrown w-fit p-2 m-auto hover:border-darkPeach font-Mulish hover:text-darkPeach">
					<Link to="/">Home </Link>
				</button>
			</main>
		</>
	);
}

export default Error;
