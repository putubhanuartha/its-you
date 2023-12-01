"use client";
import { useEffect, useRef, useState } from "react";
import HeroSection from "./(section)/hero";
import PhotoSection from "./(section)/photo";
import VideoSection from "./(section)/video";
import BeautySection from "./(section)/beauty";
import VideoSepatuSection from "./(section)/video2";
import Footer from "./(section)/footer";
import { useRouter } from "next/router";

export default function Home() {
	return (
		<main className={` max-h-screen`}>
			<HeroSection />
			<PhotoSection />
			<VideoSection />
			<VideoSepatuSection />
			<BeautySection />
			<Footer />
		</main>
	);
}
