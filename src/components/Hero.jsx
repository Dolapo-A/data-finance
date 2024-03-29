import React from "react";
import Typed, { ReactTyped } from "react-typed";

const Hero = () => {
	return (
		<div className="text-white">
			<div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
				<p className="text-[#00df9a] font-bold p-2">
					GROWING WITH DATA ANALYTICS
				</p>
				<h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
					Grow with data
				</h1>
				<div className="flex justify-center items-center">
					<p className="md:text-5xl sm:text-4xl text-xl font-bold md:pr-4 pr-2 py-4">
						Fast, flexible, financing for
					</p>
					<ReactTyped
						className="md:text-5xl sm:text-4xl text-xl font-bold p-2 bg-[#00df9a] rounded-lg"
						strings={["BTB", "BTC", "SASS"]}
						typeSpeed={120}
						backSpeed={140}
						backDelay={160}
						loop
					/>
				</div>
				<p className="md:text-2xl text-xl font-bold text-gray-500">
					Monitor your data analytics to improve revenue for BTB, BTC, & SASS
					platfroms.
				</p>
				<button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-white ease-in-out duration-300">
					Get Started
				</button>
			</div>
		</div>
	);
};

export default Hero;
