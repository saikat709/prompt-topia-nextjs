'use client';

import Form from "@components/Form";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const CreatePrompt = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const [ isSubmitting, setSubmitting ] = useState(false);
    const [ post, setPost ] = useState({
        prompt: '',
        tag: '',
    });

    const createPrompt = async (e)  => {
        e.preventDefault();
        setSubmitting(true);
        console.log(session?.user.id);
        try{
            const response = await fetch('/api/prompt/new',
                {
                    method: "POST",
                    body: JSON.stringify({
                        prompt: post.prompt,
                        userId: session?.user.id,
                        tag: post.tag,
                    })
                });
            if ( response.ok ){
                router.push('/');
            }
            setSubmitting(false);
        }catch(err){
            console.log(err);
            setSubmitting(false);
        }
    };

    return (
        <Form
            type="Create"
            post={post}
            setPost={setPost}
            submitting={isSubmitting}
            handleSubmit={createPrompt}
         />
    );
}

export default CreatePrompt;