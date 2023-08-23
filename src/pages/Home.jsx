// import React from 'react'
import Header from "../components/Header";
import "../App.css";

import { Link } from "react-router-dom";
import umbrella from "../assets/umbrella1.png";
import { ExternalLink, Github, Linkedin } from "lucide-react";
function Home() {
	return (
		<div className="bg-eggShell">
			<Header />
			<main className="text-red-300 h-[calc(100vh-6vh)] ">
				<div className="dots dots1 z-10"></div>
				<div className="dots dots2 z-10"></div>
				<div className="absolute font-NotoSansJP text-darkPeach font-semibold right-[-100px] bottom-[20%] rotate-[90deg]  ">
					こんにちは、私のページへようこそ
				</div>
				<div className="w-full h-full z-20">
					<div className="transition transition-bio"></div>
					<div className="transition transition-projects"></div>
					<div className="transition transition-find-me"></div>
					<h1 className="font-Sigmar text-animation bg-darkPeach">Home</h1>
					<div className="md:w-[40%] w-[100%] md:ml-[40%] flex justify-center items-center text-black  gap-3 flex-col md:flex-row">
						<div className="font-Alegreya text-3xl font-bold">
							Web Developer
						</div>
						<div className="w-[80%] border-2 md:w-0 md:border-hidden  border-b-purpleBrown"></div>
						<div className="font-Alegreya text-2xl md:w-[80%] w-[80%] flex justify-start items-start flex-col gap-2 md:border-l-2 pl-3">
							<p>
								Hi! My name is{" "}
								<span className="underline underline-offset-4 text-darkPeach">
									<Link to="https://pleiku.site">Nguyen Trung Kien</Link>
								</span>{" "}
								from Pleiku city
							</p>
							<p>Now, I live in Ho Chi Minh city, Viet Nam</p>
							<p>
								I&apos;m 22 years old and I am a{" "}
								<span className="underline underline-offset-4 text-darkPeach">
									Web Developer
								</span>{" "}
							</p>
							<p>
								My expertise is developing next-level websites and web
								applications including full frontend design.
							</p>
						</div>
					</div>
				</div>

				<div className="h-[20%] w-[20%] z-0 absolute left-[10%] bottom-[30%] hidden md:block">
					<img src={umbrella} className="object-fill umbrella" alt="umbrella" />
				</div>
				<div className="absolute bottom-3 lg:left-[50%] lg:flex gap-5  flex flex-row m-5 lg:m-0">
					<Link to="https://github.com/vn-vietnam">
						<Github
							// color="black"
							size={40}
							className="rounded-full border-2 p-[5px] border-black hover:cursor-pointer hover:text-darkPeach "
						/>
					</Link>
					<Link to="https://www.linkedin.com/in/ki%C3%AAn-nguy%E1%BB%85n-trung-1b95a1269/">
						<Linkedin
							// color="black"
							size={40}
							className="rounded-full border-2 p-[5px] border-black hover:cursor-pointer hover:text-darkPeach"
						/>
					</Link>
					<Link to="https://pleiku.site">
						<ExternalLink
							// color="black"
							size={40}
							className="rounded-full border-2 p-[5px] border-black hover:cursor-pointer hover:text-darkPeach"
						/>
					</Link>
				</div>
			</main>
		</div>
	);
}

export default Home;
