"use client";
import Question from "@/components/Question";
import { useState } from "react";
import { QuestionData } from "@/data/QuestionData";

export default function Home() {
	const [selectedValues, setSelectedValues] = useState<any>({});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(selectedValues);
	};

	const handleOptionChange = (questionId: number, optionValue: string) => {
		setSelectedValues((prevValues: any) => ({
			...prevValues,
			[questionId]: optionValue,
		}));
	};

	return (
		<main className="flex min-h-screen flex-col items-center p-24 gap-12">
			<h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
				Find your perfect vacation
			</h1>
			<form
				className="w-full flex flex-col gap-6 items-center"
				onSubmit={handleSubmit}
			>
				<ol className="list-decimal flex flex-col gap-4">
					{QuestionData.map((question, index) => (
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
					))}
				</ol>
				<button type="submit">Find vacation</button>
			</form>
		</main>
	);
}
