import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";
import { systemSetupPrompt } from "@/lib/config";

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generatePrompt = (reqBody: JSON) => {
	return JSON.stringify(reqBody);
};

export async function POST(req: Request) {
	if (!configuration) {
		return new NextResponse("INVALID API KEY", {
			status: 500,
		});
	}

	const reqBody = await req.json();

	try {
		const completion = await openai.createChatCompletion({
			model: "gpt-3.5-turbo",
			messages: [
				{
					role: "system",
					content: systemSetupPrompt,
				},
				{ role: "assistant", content: generatePrompt(reqBody) },
			],
			temperature: 0.6,
		});
		return NextResponse.json(completion.data.choices[0].message?.content);
	} catch (error: any) {
		return new NextResponse(error.message, {
			status: 500,
		});
	}
}
