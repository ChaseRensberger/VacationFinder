"use client";
import Question from "@/components/Question";
import { useState } from "react";
import { QuestionData } from "@/data/QuestionData";
import { motion } from "framer-motion";
import {
	defaultAnimate,
	defaultInitial,
	defaultTransition,
} from "@/lib/Animation";
import { useForm } from "@/components/context/FormProvider";
import { useRouter } from "next/navigation";

export default function Home() {
	const [selectedValues, setSelectedValues] = useState<any>({});
	const [currentQuestion, setCurrentQuestion] = useState(0);

	const { setFormData } = useForm();
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(selectedValues);
		setFormData(selectedValues);
		router.push("/output");
	};

	const handleOptionChange = (questionId: number, optionValue: string) => {
		setSelectedValues((prevValues: any) => ({
			...prevValues,
			[questionId]: optionValue,
		}));
		if (questionId == currentQuestion) {
			setCurrentQuestion(currentQuestion + 1);
		}
	};

	return (
		<main className="flex min-h-screen flex-col items-center p-24 gap-16">
			<motion.h1
				className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500"
				initial={defaultInitial}
				animate={defaultAnimate}
				transition={defaultTransition}
			>
				Find your perfect vacation
			</motion.h1>
			<form
				className="w-full flex flex-col gap-6 items-center"
				onSubmit={handleSubmit}
			>
				<ol className="list-decimal flex flex-col gap-4 items-center">
					{QuestionData.map((question, index) => {
						if (index <= currentQuestion) {
							return (
								<Question
									key={index}
									formQuestion={`question${index + 1}`}
									prompt={question.question}
									choices={question.options}
									selectedValue={selectedValues[index]}
									setSelectedValue={(optionValue: any) =>
										handleOptionChange(index, optionValue)
									}
								/>
							);
						}
					})}
				</ol>
				{Object.keys(selectedValues).length === QuestionData.length ? (
					<button
						type="submit"
						className="rounded-xl p-2 outline-stone-100 bg-black outline hover:bg-stone-100 outline-6 outline-offset-2 mt-2"
					>
						<span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
							Find vacation
						</span>
					</button>
				) : (
					<></>
				)}
			</form>
		</main>
	);
}
