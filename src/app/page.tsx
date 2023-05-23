"use client";
import Question from "@/components/Question";
import * as Form from "@radix-ui/react-form";
export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-24 gap-12">
			<h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
				Find your perfect vacation
			</h1>
			<Form.Root className="w-full flex flex-col gap-6 items-center">
				<ol className="list-decimal flex flex-col gap-4">
					<Question
						formName="activity"
						prompt="Which activity would you most like to do?"
						choices={[
							"Visit museums",
							"Explore templates",
							"Trek in the mountains",
							"Sunbathe on a beach",
						]}
					/>
				</ol>
				<Form.Submit asChild>
					<button>Find vacation</button>
				</Form.Submit>
			</Form.Root>
		</main>
	);
}
