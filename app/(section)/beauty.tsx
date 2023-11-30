import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const BeautySection = () => {
	const [index, setIndex] = useState(0);
	useEffect(() => {
		if (index === 5) {
			const answer = prompt("Will you be my girlfriend?");
			console.log(answer);
		}
		if (index > 5) {
			setIndex(0);
		}
	}, [index]);

	return (
		<section
			id="tree"
			className="h-screen evening-night relative"
		>
			<div className="mx-auto relative top-14 flex flex-col items-center gap-y-6">
				<p className="bg-green-700 text-white px-3 py-2 rounded-lg">
					Click the tree
				</p>
				{index === 0 && (
					<motion.h1
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center text-5xl text-white"
					>
						Getaran rasa itu selalu bergejolak
					</motion.h1>
				)}
				{index === 1 && (
					<motion.h1
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center text-5xl text-white"
					>
						Kamu yang selalu ada memenuhi relung hati
					</motion.h1>
				)}
				{index === 2 && (
					<motion.h1
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center text-5xl text-white"
					>
						Tak ada momen terlupakan denganmu
					</motion.h1>
				)}
				{index === 3 && (
					<motion.h1
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center text-5xl text-white"
					>
						Rasa nyaman yang tumbuh perlahan
					</motion.h1>
				)}
				{index === 4 && (
					<motion.h1
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center text-5xl text-white"
					>
						Jatuh suka yang menjadi jatuh cinta ❤️
					</motion.h1>
				)}
			</div>

			<button
				onClick={() => {
					setIndex((i) => i + 1);
				}}
				className="absolute h-[25rem] w-[25rem] md:h-[30rem] md:w-[30rem] bottom-0 left-[50%] -translate-x-[50%]"
			>
				<Image
					priority
					sizes="(min-width: 808px) 50vw, 100vw"
					fill
					alt="tree"
					src={"/image/tree.png"}
					style={{ objectFit: "contain" }}
				/>
			</button>
		</section>
	);
};

export default BeautySection;
