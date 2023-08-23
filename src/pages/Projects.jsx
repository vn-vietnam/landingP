// import React from 'react'

import Header from "../components/Header";
import Project from "./Project";
const projects = [
	{
		id: 1,
		link: "https://plus.unsplash.com/premium_photo-1661878589476-bcad7fe1b8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFwYW4lMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
		github:
			"https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFwYW4lMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
	},
	{
		id: 2,
		link: "https://images.unsplash.com/photo-1519882189396-71f93cb4714b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFwYW4lMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
		github:
			"https://images.unsplash.com/photo-1522518961115-07c922089dd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFwYW4lMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
	},
	{
		id: 3,
		link: "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amFwYW4lMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
		github:
			"https://plus.unsplash.com/premium_photo-1690749740487-01bbb8e51e71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8amFwYW4lMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
	},
];
function Projects() {
	return (
		<div className="bg-purpleBrown  ">
			<Header />
			<main className="">
				<div className="dotsp dots1 z-10  "></div>
				<div className="dotsp dots2 z-10 "></div>
				<div className="fixed font-NotoSansJP text-darkPeach font-semibold right-[-100px] bottom-[20%] rotate-[90deg]  ">
					こんにちは、私のページへようこそ
				</div>
				<div className="w-full h-full z-20">
					<div className="transition transition-bio"></div>
					<div className="transition transition-projects"></div>
					<div className="transition transition-find-me"></div>
					<h1 className="font-Sigmar text-animation bg-eggShell">Project</h1>
					<div className="flex  flex-col justify-center items-center mt-20">
						{projects.map((data, index) => (
							<>
								<Project key={index} data={data} />
							</>
						))}
					</div>
				</div>
			</main>
		</div>
	);
}

export default Projects;
