"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formMsg, setFormMsg] = useState<string>("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      try {
        setFormMsg("");
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );
        form.current.reset();
        setFormMsg("Success!");
      } catch (error) {
        setFormMsg("Something went wrong. Please try again.");
        console.log(error);
      }
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full max-w-3xl shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto"
    >
      <label
        htmlFor="name"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Name*
      </label>
      <input
        type="text"
        id="name"
        name="name"
        required
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />

      <label
        htmlFor="email"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Email*
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />

      <label
        htmlFor="message"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Message*
      </label>
      <textarea
        id="message"
        name="message"
        required
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-gray-400 hover:bg-pink-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
        >
          Send
        </button>
        <p className="mx-4 font-semibold">{formMsg}</p>
      </div>
    </form>
  );
};

export default ContactForm;
