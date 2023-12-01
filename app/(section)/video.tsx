import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const VideoSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.4 });
	return (
		<section
			ref={ref}
			id="videosection"
			className="h-screen flex py-9 px-6 bg-slate-100"
		>
			<div className="m-auto max-w-8xl w-full flex justify-between items-center gap-x-2">
				<div className="hidden lg:block">
					{isInView && (
						<motion.p
							initial={{ opacity: 0, y: -100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, ease: "backOut", delay: 1.1 }}
							className="text-center text-2xl flex-1"
						>
							Ingin Bawamu
						</motion.p>
					)}
				</div>
				<div className="w-fit mx-auto overflow-clip relative">
					<div className="flex gap-x-5 h-[28rem] flex-col gap-y-5 md:gap-y-0 md:flex-row">
						{isInView && (
							<motion.video
								initial={{ opacity: 0, y: -200, x: -300, rotate: -45 }}
								animate={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
								transition={{ duration: 1, ease: "backOut", delay: 0 }}
								className="rounded-lg bg-cover object-cover w-full md:h-auto h-1/2 flex-1"
								autoPlay
								loop
								controls
							>
								<source
									src={process.env.NEXT_PUBLIC_INTERAKSI_VIDEO as string}
								/>
							</motion.video>
						)}

						{isInView && (
							<motion.div
								initial={{ opacity: 0, y: 200, x: 300, rotate: 45 }}
								animate={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
								transition={{ duration: 1, ease: "backOut", delay: 0 }}
								className="relative  rounded-lg overflow-clip flex-1"
							>
								<Image
									priority
									fill
									src={process.env.NEXT_PUBLIC_CELAKET_IMAGE as string}
									sizes="100vw"
									alt="celaket"
									style={{ objectFit: "cover" }}
								/>
							</motion.div>
						)}
					</div>
					{isInView && (
						<motion.div
							initial={{ opacity: 0, y: 200 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, ease: "backOut", delay: 1.1 }}
							className="mt-2"
						>
							<div className="block lg:hidden my-4">
								{isInView && (
									<motion.p
										initial={{ opacity: 0, y: -100 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 1, ease: "backOut", delay: 1.1 }}
										className="text-center text-2xl flex-1"
									>
										Ingin Bawamu
									</motion.p>
								)}
								{isInView && (
									<motion.p
										initial={{ opacity: 0, y: 100 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 1, ease: "backOut", delay: 1.3 }}
										className="text-center text-2xl flex-1"
									>
										Ke tempat indah
									</motion.p>
								)}
							</div>
							<h2 className="text-xl md:text-2xl md:text-start text-center">
								You&apos;re not a drop in the ocean
							</h2>
							<h2 className="text-4xl md:text-5xl mt-4 md:text-start text-center">
								You are the ocean in a drop
							</h2>
							<button className="bg-green-700 md:mx-0 mx-auto block mt-5 text-white px-2 py-1.5 rounded-md">
								<a href="#sepatu">Click me</a>
							</button>
						</motion.div>
					)}
				</div>
				<div className="hidden lg:block">
					{isInView && (
						<motion.p
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, ease: "backOut", delay: 1.3 }}
							className="text-center text-2xl flex-1"
						>
							Ke tempat indah
						</motion.p>
					)}
				</div>
			</div>
		</section>
	);
};

export default VideoSection;
