"use client";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { motion } from "framer-motion";
import {
	defaultAnimate,
	defaultInitial,
	defaultTransition,
} from "@/lib/Animation";
interface Props {
	formQuestion: string;
	prompt: string;
	choices: string[];
	selectedValue: string;
	setSelectedValue: any;
}

const Question = (params: Props) => {
	const handleValueChange = (value: string) => {
		params.setSelectedValue(value);
	};
	return (
		<motion.li
			className="w-full"
			key={params.formQuestion}
			initial={defaultInitial}
			animate={defaultAnimate}
			transition={defaultTransition}
		>
			<div className="flex flex-col gap-6">
				<h2>{params.prompt}</h2>
				<RadioGroup.Root
					className="flex flex-row gap-6"
					aria-label={params.prompt}
					value={params.selectedValue}
					onValueChange={handleValueChange}
				>
					{params.choices.map((choice) => {
						return (
							<RadioGroup.Item
								className={`text-md bg-zinc-600 hover:bg-slate-500 p-1 px-2 rounded-md ${
									choice == params.selectedValue
										? "bg-violet-500 hover:bg-violet-500"
										: ""
								}`}
								value={choice}
								id={choice}
								key={choice}
							>
								<label htmlFor={choice}>{choice}</label>
								{/* <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" /> */}
							</RadioGroup.Item>
						);
					})}
				</RadioGroup.Root>
			</div>
		</motion.li>
	);
};

export default Question;
