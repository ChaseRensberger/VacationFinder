"use client";
import { motion } from "framer-motion";
import {
	defaultAnimate,
	defaultInitial,
	defaultTransition,
} from "@/lib/Animation";
export default async function LoadingResponse() {
	return (
		<main className="flex min-h-screen flex-col items-center p-24 gap-28">
			<motion.h1
				className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500"
				initial={defaultInitial}
				animate={defaultAnimate}
				transition={defaultTransition}
			>
				Finding you your perfect vacation
			</motion.h1>
			<motion.div
				className="bg-white w-32 h-32"
				animate={{
					scale: [1, 2, 2, 1, 1],
					rotate: [90, 0, 180, 180, 90],
					borderRadius: ["0%", "0%", "50%", "50%", "0%"],
				}}
				transition={{
					duration: 2,
					ease: "easeInOut",
					times: [0, 0.2, 0.5, 0.8, 1],
					repeat: Infinity,
					repeatDelay: 0.1,
				}}
			/>
		</main>
	);
}
