"use client";
import * as Collapsible from "@radix-ui/react-collapsible";
import { RowSpacingIcon, Cross2Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import * as Form from "@radix-ui/react-form";

interface Props {
	formName: string;
	prompt: string;
	choices: string[];
}

const Question = (params: Props) => {
	const [open, setOpen] = useState(false);
	return (
		<li>
			<Form.Field name={params.formName}>
				<Form.Label>{params.prompt}</Form.Label>
				<Form.Control asChild></Form.Control>
			</Form.Field>
		</li>
	);
};

export default Question;
