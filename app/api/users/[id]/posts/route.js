import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async(req, { params }) => {
    const { userId, prompt, tag } = await req.json();

    try {
        await connectToDB();
        const prompts = await Prompt.find({
            creator: params.id
        }).populate('creator');
        return new Response(JSON.stringify(prompts), {status: 201});
    } catch (error) {
        return new Response('Failed to create a new Prompt', {status: 500});
    }
}