"use client";

interface Props {
	choiceValue: string;
	isSelected: boolean;
	onClick: () => void;
}

const Choice = (params: Props) => {
	return params.isSelected ? (
		<li
			className="text-md bg-gray-500 p-1 px-2 rounded-sm"
			key={params.choiceValue}
		>
			{params.choiceValue}
		</li>
	) : (
		<li
			className="text-md bg-gray-800 hover:bg-gray-500 p-1 px-2 rounded-sm"
			onClick={params.onClick}
			key={params.choiceValue}
		>
			{params.choiceValue}
		</li>
	);
};
export default Choice;
