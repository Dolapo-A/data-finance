import React from "react";

const Newsletter = () => {
	return (
		<div className="w-full py-16 px-4 text-white">
			<div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
				<div className="lg:col-span-2 my-4">
					<h1 className="md:text-4xl sm:text-4xl text-xl font-bold">
						Want tips & tricks to optimize your flow?
					</h1>
					<p className="">Sign up to our news letter and stay updated</p>
				</div>
				<div className="my-4">
					<div className="flex flex-col sm:flex-row items-center justify-between w-full">
						<input
							className="p-3 flex w-full rounded-md text-black"
							type="email"
							placeholder="Enter email"
						/>
						<button className="bg-[#00df9a] w-[200px] rounded-md font-medium m-6 sm:ml-4 mx-auto py-3 text-black hover:bg-white ease-in-out duration-300">
							Notify Me
						</button>
					</div>
					<p>
						We care about the protection of your data. Read our{" "}
						<span className="text-[#00df9a] underline">Privacy Policy</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
