import Question from "@/components/Question";
export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-24 gap-12">
			<h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
				Find your perfect vacation
			</h1>

			<ol className="list-decimal flex flex-col gap-4"></ol>
		</main>
	);
}
