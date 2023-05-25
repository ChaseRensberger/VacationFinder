import "./globals.css";
import { Inter } from "next/font/google";
import FormProvider from "@/components/context/FormProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Takeoff",
	description: "Find your dream destination",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<FormProvider>
			<html lang="en">
				<body className={inter.className}>{children}</body>
			</html>
		</FormProvider>
	);
}
