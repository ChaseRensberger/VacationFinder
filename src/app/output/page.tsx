"use client";
import { useForm } from "@/components/context/FormProvider";

const getFormOutput = async () => {
	const res = await fetch("/api/vacation", {
		method: "GET",
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json;
};

const Output = async () => {
	const { formData } = useForm();
	const vacationResponse = await getFormOutput();

	return (
		<main className="flex min-h-screen flex-col items-center p-24 gap-16">
			<button onClick={() => console.log(vacationResponse)}>CLICK ME</button>
		</main>
	);
};

export default Output;
