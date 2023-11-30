"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const HeroSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false, amount: 0.7 });

	return (
		<section
			ref={ref}
			className="relative"
		>
			<div className="relative min-h-screen">
				<Image
					fill
					src={"/hero.jpg"}
					sizes="(min-width: 808px) 50vw, 100vw"
					style={{ objectFit: "cover" }}
					alt="hero image"
					priority
				/>
			</div>
			<div className="absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] flex flex-col items-center gap-y-14">
				{isInView && (
					<motion.h1
						initial={{ opacity: 0, translateY: 300 }}
						animate={{ opacity: 1, translateY: 0 }}
						transition={{ duration: 0.4, ease: "backOut" }}
						className="text-white text-6xl md:text-7xl text-center"
					>
						<span>Izza</span> <span>Shabrina</span> <span>Amalia</span>
					</motion.h1>
				)}
				{isInView && (
					<div className="text-white flex flex-col items-center gap-y-5">
						<motion.p
							initial={{ opacity: 0, translateY: 100 }}
							animate={{ opacity: 1, translateY: 0 }}
							transition={{ duration: 0.3, ease: "backOut", delay: 0.4 }}
							className="text-center text-3xl md:text-4xl"
						>
							10
						</motion.p>
						<motion.p
							initial={{ opacity: 0, translateY: 100 }}
							animate={{ opacity: 1, translateY: 0 }}
							transition={{ duration: 0.3, ease: "backOut", delay: 0.8 }}
							className="text-center text-5xl md:text-6xl"
						>
							{" "}
							September
						</motion.p>
						<motion.p
							initial={{ opacity: 0, translateY: 100 }}
							animate={{ opacity: 1, translateY: 0 }}
							transition={{ duration: 0.3, ease: "backOut", delay: 1.2 }}
							className="text-center text-3xl md:text-4xl"
						>
							2002
						</motion.p>
					</div>
				)}
				{isInView && (
					<motion.button
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3, ease: "backOut", delay: 1.6 }}
						className={`text-white  hover:shadow-[0px_0px_6px_3px_rgba(233,226,226,0.2)] bg-green-700 hover:bg-green-800 transition-all duration-150 px-3 py-1.5 rounded-lg`}
					>
						<a href="#photosection">Click me</a>
					</motion.button>
				)}
			</div>
		</section>
	);
};

export default HeroSection;
