"use client";
import { useForm } from "@/components/context/FormProvider";
const Output = async () => {
	const { formData } = useForm();
	return (
		<main className="flex min-h-screen flex-col items-center p-24 gap-16">
			<button onClick={() => console.log(formData)}>CLICK ME</button>
		</main>
	);
};

export default Output;
