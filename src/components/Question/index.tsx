"use client";
import * as Form from "@radix-ui/react-form";
import Choice from "../Choice";
import { useState } from "react";

interface Props {
	formName: string;
	prompt: string;
	choices: string[];
}

const Question = (params: Props) => {
	const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
	const handleChoiceClick = (choice: string) => {
		setSelectedChoice(choice);
	};
	return (
		<li>
			<Form.Field name={params.formName}>
				<Form.Label>{params.prompt}</Form.Label>
				<Form.Control asChild className="flex flex-row gap-2.5">
					<ul>
						{params.choices.map((choice: string) => (
							<Choice
								choiceValue={choice}
								onClick={() => {
									handleChoiceClick(choice);
								}}
								isSelected={choice == selectedChoice}
							/>
						))}
					</ul>
				</Form.Control>
			</Form.Field>
		</li>
	);
};

export default Question;
