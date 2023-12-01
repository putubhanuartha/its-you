import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";

const VideoSepatuSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false, amount: 0.7 });
	return (
		<section
			ref={ref}
			id="sepatu"
			className="flex h-screen py-10  px-10"
		>
			<div className="m-auto">
				<video
					autoPlay
					loop
					muted
					controls
					className="h-[60vh] rounded-lg object-cover bg-cover"
				>
					<source src={process.env.NEXT_PUBLIC_SEPATU_VIDEO as string} />
				</video>
				<div className="mt-4">
					{isInView && (
						<>
							<motion.h2
								initial={{ opacity: 0, x: -200 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, ease: "backOut", delay: 0.4 }}
								className="text-4xl md:text-5xl"
							>
								Akankah kita bersama?
							</motion.h2>
							<motion.h2
								initial={{ opacity: 0, x: 200 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, ease: "backOut", delay: 1.1 }}
								className="text-xl md:text-2xl"
							>
								Seperti sepasang sepatu?
							</motion.h2>
							<motion.button
								initial={{ opacity: 0, y: 200 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, ease: "backOut", delay: 1.7 }}
								className="bg-green-700 mt-2 text-white px-2 py-1.5 rounded-md"
							>
								<a href="#tree">Click me</a>
							</motion.button>
						</>
					)}
				</div>
			</div>
		</section>
	);
};

export default VideoSepatuSection;
