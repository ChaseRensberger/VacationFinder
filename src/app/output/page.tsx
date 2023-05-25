"use client";
import { useForm } from "@/components/context/FormProvider";
import { motion } from "framer-motion";
import {
	defaultInitial,
	defaultAnimate,
	defaultTransition,
} from "@/lib/config";

const getFormOutput = async (formInput: string) => {
	const formOutput = await fetch("../api/vacation", {
		method: "POST",
		body: formInput,
	}).then((res) => {
		if (!res.ok) {
			throw new Error("Failed to fetch data");
		} else {
			return res.json();
		}
	});

	return formOutput;
};
// TODO: Fix it so resubmitting form without proper content redirects you
const Output = async () => {
	const { formData } = useForm();
	const vacationResponse = await getFormOutput(JSON.stringify(formData));
	// const router = useRouter();

	return (
		<main className="flex min-h-screen flex-col items-center p-24 gap-16">
			<motion.h1
				className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500"
				initial={defaultInitial}
				animate={defaultAnimate}
				transition={defaultTransition}
			>
				Your destination:
			</motion.h1>
			<div>{JSON.stringify(vacationResponse)}</div>
			{/* <button onClick={() => console.log(vacationResponse)}>CLICK ME</button> */}

			<button
				className="rounded-xl p-2 outline-stone-100 bg-black outline hover:bg-stone-100 outline-6 outline-offset-2 mt-2"
				onClick={() => {
					// router.push("/");
				}}
			>
				<span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
					Return home
				</span>
			</button>
		</main>
	);
};

export default Output;
