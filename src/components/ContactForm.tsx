"use client";
import React from "react";
import { useForm, ValidationError } from '@formspree/react';

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID || '');

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto">
      <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <div className="flex items-center justify-between">
        <button type="submit" disabled={state.submitting} className="bg-gray-400 hover:bg-pink-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer">
          Submit
        </button>
        <p className="mx-4 font-semibold">{state.succeeded ? "Success!" : state.submitting ? "Submitting..." : ""}</p>
      </div>

    </form>
  );
};

export default ContactForm;
