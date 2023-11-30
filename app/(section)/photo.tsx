import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import Image from "next/image";
import { useInView, motion } from "framer-motion";
const PhotoSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false, amount: 0.7 });
	const [isHidden, setIsHidden] = useState(true);

	return (
		<section
			ref={ref}
			id="photosection"
			className="min-h-screen lawrencium flex py-10 px-5"
		>
			<div className="m-auto relative container  max-w-4xl min-h-screen">
				{isInView && (
					<motion.div
						initial={{ opacity: 0, y: -200, x: -100, rotate: -30 }}
						animate={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
						transition={{ duration: 0.8, ease: "backOut", delay: 0.8 }}
						className="h-[22rem] md:h-[25rem] lg:h-[30rem] w-[20rem] md:w-[22rem] lg:w-[23rem] rounded-lg overflow-clip grayscale-[60%] z-20  absolute left-0 lg:-left-20"
					>
						<Image
							priority
							sizes="(min-width: 808px) 50vw, 100vw"
							fill
							style={{ objectFit: "cover" }}
							src={"/image/pink2.jpg"}
							alt={"pink1"}
						/>
					</motion.div>
				)}

				<div className=" text-white  w-full z-30 flex flex-col gap-y-5 absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]">
					{isInView && (
						<motion.div
							className="flex flex-col gap-y-4"
							initial={{ opacity: 0, y: 200 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease: "backOut" }}
						>
							<h2 className="text-center text-5xl md:text-6xl lg:text-7xl">
								Lawrencium [Lr]
							</h2>
							<p className="text-center text-xl md:text-2xl lg:text-3xl">
								You have such a complex magnetic vibe
							</p>
							<p className="text-center text-lg md:text-xl">
								Like a magical pull with silver linings
							</p>
						</motion.div>
					)}

					{isInView && (
						<motion.button
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.6, ease: "backOut", delay: 1.7 }}
							className={`text-white w-fit mx-auto hover:shadow-[0px_0px_6px_3px_rgba(233,226,226,0.2)] bg-green-700 hover:bg-green-800 transition-all duration-150 px-3 py-1.5 rounded-lg`}
						>
							<a href="#videosection">Click me</a>
						</motion.button>
					)}
				</div>

				{isInView && (
					<motion.div
						initial={{ opacity: 0, y: 200, x: 100, rotate: 30 }}
						animate={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
						transition={{ duration: 0.8, ease: "backOut", delay: 0.8 }}
						className="h-[22rem] md:h-[25rem] lg:h-[30rem] w-[20rem] md:w-[22rem] lg:w-[23rem]  rounded-lg overflow-clip grayscale-[60%]  z-20 absolute right-0 lg:-right-20 bottom-0"
					>
						<Image
							priority
							sizes="(min-width: 808px) 50vw, 100vw"
							fill
							style={{ objectFit: "cover" }}
							src={"/image/pink1.jpg"}
							alt={"pink1"}
						/>
					</motion.div>
				)}
			</div>
		</section>
	);
};

export default PhotoSection;
