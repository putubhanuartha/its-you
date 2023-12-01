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
						My feelings are always fluctuating
					</motion.h1>
				)}
				{index === 1 && (
					<motion.h1
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center text-4xl md:text-5xl text-white"
					>
						Only you can make me like that
					</motion.h1>
				)}
				{index === 2 && (
					<motion.h1
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center  text-4xl md:text-5xl text-white"
					>
						Always a special moment with you
					</motion.h1>
				)}
				{index === 3 && (
					<motion.h1
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center  text-4xl md:text-5xl text-white"
					>
						You are always in my heart
					</motion.h1>
				)}
				{index === 4 && (
					<motion.h1
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center  text-4xl md:text-5xl text-white"
					>
						A sense of comfort that grows slowly
					</motion.h1>
				)}
				{index === 5 && (
					<motion.h1
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center  text-4xl md:text-5xl text-white"
					>
						I&apos;m falling in love with you ❤️
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
