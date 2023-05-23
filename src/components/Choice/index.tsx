"use client";

interface Props {
	choiceValue: string;
}

const Choice = (params: Props) => {
	return <div>{params.choiceValue}</div>;
};

export default Choice;
