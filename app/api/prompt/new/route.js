import Propmt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async ( req, res ) => {
    const { userId, prompt, tag  } = await req.json();
    console.log(userId, prompt, tag);

    try{
        await connectToDB();
        const newPrompt = new Propmt({
            creater: userId,
            prompt,
            tag
        });
        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), { status: 201 });
    } catch(err) {
        console.log(err);
        return new Response("Failed to create new prompt.", { status:500 } );
    }
};

export const GET = () => {
    return new Response("GET not allowed.");
};
