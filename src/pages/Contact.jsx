// import React from 'react'

import { Link } from "react-router-dom";
import Header from "../components/Header";
import TextMotion from "../components/TextMotion";
import { ExternalLink, Github, Linkedin } from "lucide-react";

function Contact() {
	return (
		<div className="bg-darkPeach">
			<Header />
			<main className="h-[calc(100vh-6vh)] ">
				<div className="dotsc dots1 z-10 "></div>
				<div className="dotsc dots2 z-10 "></div>
				<div className="absolute font-NotoSansJP text-eggShell font-semibold right-[-100px] bottom-[20%] rotate-[90deg] z-20 ">
					こんにちは、私のページへようこそ
				</div>
				<div className="w-full h-full z-50">
					<div className="transition transition-bio"></div>
					<div className="transition transition-projects"></div>
					<div className="transition transition-find-me"></div>
					<h1 className="font-Sigmar text-animation bg-purpleBrown z-50">
						Contact
					</h1>
					<TextMotion />
				</div>
				<div className="absolute bottom-3 lg:left-[50%] lg:flex gap-5  flex flex-row m-5 lg:m-0">
					<Link to="https://github.com/vn-vietnam">
						<Github
							// color="black"
							size={40}
							className="rounded-full border-2 p-[5px] border-black hover:cursor-pointer hover:text-eggShell animate-bounce"
						/>
					</Link>
					<Link to="https://www.linkedin.com/in/ki%C3%AAn-nguy%E1%BB%85n-trung-1b95a1269/">
						<Linkedin
							// color="black"
							size={40}
							className="rounded-full border-2 p-[5px] border-black hover:cursor-pointer hover:text-eggShell animate-bounce"
						/>
					</Link>
					<Link to="https://pleiku.site">
						<ExternalLink
							// color="black"
							size={40}
							className="rounded-full border-2 p-[5px] border-black hover:cursor-pointer hover:text-eggShell animate-bounce"
						/>
					</Link>
				</div>
			</main>
		</div>
	);
}

export default Contact;
