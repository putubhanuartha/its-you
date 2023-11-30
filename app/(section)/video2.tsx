import React from "react";

const VideoSepatuSection = () => {
	return (
		<section
			id="sepatu"
			className="flex h-screen py-10 mt-20 px-10"
		>
			<div className="m-auto">
				<video
					autoPlay
					loop
					muted
					controls
					className="h-[70vh] rounded-lg object-cover bg-cover"
				>
					<source src="/video/sepatu.mp4" />
				</video>
				<div>
					<h2 className="text-6xl">Akankah kita bersama?</h2>
					<h2 className="text-3xl">Seperti sepasang sepatu?</h2>
					<button className="bg-green-700 mt-2 text-white px-2 py-1.5 rounded-md">
						<a href="#tree">Click me</a>
					</button>
				</div>
			</div>
		</section>
	);
};

export default VideoSepatuSection;
