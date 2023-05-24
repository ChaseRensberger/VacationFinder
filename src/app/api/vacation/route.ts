import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generatePrompt = () => {
	return "I like to travel to warm places.";
};

export async function GET() {
	if (!configuration) {
		return new NextResponse("INVALID API KEY", {
			status: 500,
		});
	}

	try {
		const completion = await openai.createChatCompletion({
			model: "gpt-3.5-turbo",
			messages: [
				{
					role: "system",
					content:
						"You are an award winning travel agent designed to help people find the perfect place to travel. Please make your response straight to the point and in the following format: DESTINATION: PLACES TO GO: THINGS TO DO: Please be begin your response with DESTINATION: and do not put anything else before that. Also this is for an app and the user should not know you are chatgpt so no saying youre an AI language model or anything like that.",
				},
				{ role: "assistant", content: generatePrompt() },
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
