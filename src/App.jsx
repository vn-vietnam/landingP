import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { AnimatePresence } from "framer-motion";
import Wrapper from "./pages/Wrapper";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
function App() {
	const location = useLocation();
	return (
		<>
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route element={<Wrapper />}>
						<Route index path="/" element={<Home />} />
						<Route path="contact" element={<Contact />} />
						<Route path="projects" element={<Projects />} />
						<Route path="*" element={<Error />} />
					</Route>
				</Routes>
			</AnimatePresence>
		</>
	);
}

export default App;
