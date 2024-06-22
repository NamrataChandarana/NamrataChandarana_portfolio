"use client"
import { useForm, ValidationError } from "@formspree/react";
import Title from "./ui/Title";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM_ID || "");

  return (
    <>
        <div className='flex justify-center'>
            <Title title="Contact Me📬" className='mt-20 mb-14 -rotate-[10deg] text-center' />
        </div>
        <div className="max-w-xl mx-auto mb-16"> 
            <form onSubmit={handleSubmit} className="flex flex-col ">
                <div className="flex gap-5 mb-8">
                    <div className="w-[50%]"> 
                        <label htmlFor="name">Name</label><br/>
                        <input id="name" type="text" name="name" required className="w-full h-12 rounded-md focus:outline-none focus:border focus:border-indigo-400 text-md px-3 mt-3" placeholder="Name"  />
                        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red" />
                    </div>
                    <div className="w-[50%]">
                        <label htmlFor="email">Email</label><br/>
                        <input id="email" type="text" name="email" required className="w-full h-12 rounded-md text-md px-3 mt-3 focus:outline-none focus:border focus:border-indigo-400" placeholder="Email" />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red" />
                    </div>
                </div> 
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required className="h-32 rounded-md mt-3 focus:outline-none focus:border focus:border-indigo-400" />
                <ValidationError prefix="Message" field="message"  errors={state.errors} className="text-red " />
                <button type="submit" disabled={state.submitting} className="text-xl bg-indigo-500 h-12 mt-5 rounded-md ">
                  Submit
                </button>
                <ValidationError errors={state.errors} />
                <p className="text-center my-2 text-lg">{state.succeeded ? "Thanks for your submission!":null}</p>
            </form>  
        </div>
    </>
   
  );
}