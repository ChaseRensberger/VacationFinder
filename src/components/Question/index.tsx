"use client";
import * as RadioGroup from "@radix-ui/react-radio-group";

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
		<li className="w-full" key={params.formQuestion}>
			<div className="w-full flex flex-col gap-6">
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
								className="text-md bg-gray-800 hover:bg-gray-500 p-1 px-2 rounded-sm"
								value={choice}
								id={choice}
								key={choice}
							>
								<label htmlFor={choice}>{choice}</label>
								<RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
							</RadioGroup.Item>
						);
					})}
				</RadioGroup.Root>
			</div>
		</li>
	);
};

export default Question;
