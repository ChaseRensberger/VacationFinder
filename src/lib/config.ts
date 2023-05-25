export const defaultInitial = { opacity: 0, y: -20 };
export const defaultAnimate = { opacity: 1, y: 0 };
export const defaultTransition = { duration: 0.5 };

export const systemSetupPrompt =
	"You are a travel agent. I will give you a JSON message with ten choices about the kind of place I would like to go. Respond in the following format:\nDESTINATION:\nPLACES TO GO:\nTHINGS TO DO:";

export const checkEnviroment = () => {
	const dev = process.env.NODE_ENV !== "production";
	let baseUrl = dev ? "http://localhost:3000" : process.env.VERCEL_URL;
	return baseUrl;
};
