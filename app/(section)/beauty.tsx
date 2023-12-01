import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const BeautySection = () => {
	const [index, setIndex] = useState(0);
	function handleSubmitForm() {
		const email = "putuaryabhanu03@gmail.com";
		const message = `Dear, Itzaaa\n\nBerawal dari rasa mengagumi, suka, hingga jatuh cinta\nJatuh aku ke dalam cinta sedalam-dalamnya\nHingga aku tidak mampu terjatuh lagi\nWill you be girlfriend?\n\n<<answer here>> \n\n Who fell in love with you, Putu Ayra`;
		const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
			"Will you be my girlfriend?"
		)}&body=${encodeURIComponent(message as string)}`;
		window.location.href = mailtoLink;
	}
	useEffect(() => {
		if (index === 6) {
			handleSubmitForm();
		}
		if (index > 6) {
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
						className="text-center text-4xl md:text-5xl text-white"
					>
						Getaran rasaku selalu bergejolak
					</motion.h1>
				)}
				{index === 1 && (
					<motion.h1
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center text-4xl md:text-5xl text-white"
					>
						Hanya kamu yang mampu membuatku seperti itu
					</motion.h1>
				)}
				{index === 2 && (
					<motion.h1
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center  text-4xl md:text-5xl text-white"
					>
						Kamu yang selalu ada memenuhi relung hati
					</motion.h1>
				)}
				{index === 3 && (
					<motion.h1
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center  text-4xl md:text-5xl text-white"
					>
						Tak ada momen terlupakan denganmu
					</motion.h1>
				)}
				{index === 4 && (
					<motion.h1
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center  text-4xl md:text-5xl text-white"
					>
						Rasa nyaman yang tumbuh perlahan
					</motion.h1>
				)}
				{index === 5 && (
					<motion.h1
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center  text-4xl md:text-5xl text-white"
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
					src={process.env.NEXT_PUBLIC_TREE_IMAGE as string}
					style={{ objectFit: "contain" }}
				/>
			</button>
		</section>
	);
};

export default BeautySection;
