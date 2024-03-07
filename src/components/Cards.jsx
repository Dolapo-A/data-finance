import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
	return (
		<div className="w-full py-[10rem] px-4 bg-white">
			<div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
				<div className="w-full border flex flex-col p-4 my-4 rounded-lg hover:shadow-lg hover:scale-105 duration-300">
					<img
						src={Single}
						alt="/"
						className="w-20 mx-auto mt-[-3rem] bg-white"
					/>
					<h2 className="text-2xl font-bold text-center py-8">Single Users</h2>
					<p className="text-4xl font-bold text-center">$149</p>
					<ul className="text-center font-medium">
						<li className="py-2 border-b mx-8 mt-8">500GB Storage</li>
						<li className="py-2 border-b mx-8">1 Granted User</li>
						<li className="py-2 border-b mx-8">Send up to 2GB</li>
					</ul>
					<button className="text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 bg-[#00df9a]">
						Get Started
					</button>{" "}
				</div>
				<div className="w-full bg-green-200 border flex flex-col p-4 md:my-0 my-8 rounded-lg hover:shadow-lg hover:scale-105 duration-300">
					<img
						src={Double}
						alt="/"
						className="w-20 mx-auto mt-[-3rem] bg-transparent"
					/>
					<h2 className="text-2xl font-bold text-center py-8">Single Users</h2>
					<p className="text-4xl font-bold text-center">$149</p>
					<ul className="text-center font-medium">
						<li className="py-2 border-b mx-8 mt-8">500GB Storage</li>
						<li className="py-2 border-b mx-8">1 Granted User</li>
						<li className="py-2 border-b mx-8">Send up to 2GB</li>
					</ul>
					<button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-[#00df9a]">
						Get Started
					</button>{" "}
				</div>
				<div className="w-full border flex flex-col p-4 my-4 rounded-lg hover:shadow-lg hover:scale-105 duration-300">
					<img
						src={Triple}
						alt="/"
						className="w-20 mx-auto mt-[-3rem] bg-white"
					/>
					<h2 className="text-2xl font-bold text-center py-8">Single Users</h2>
					<p className="text-4xl font-bold text-center">$149</p>
					<ul className="text-center font-medium">
						<li className="py-2 border-b mx-8 mt-8">500GB Storage</li>
						<li className="py-2 border-b mx-8">1 Granted User</li>
						<li className="py-2 border-b mx-8">Send up to 2GB</li>
					</ul>
					<button className="text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 bg-[#00df9a]">
						Get Started
					</button>{" "}
				</div>
			</div>
		</div>
	);
};

export default Cards;
