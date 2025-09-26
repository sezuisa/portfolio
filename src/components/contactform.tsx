"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const formEndpoint = "https://formspree.io/f/xgvylqwq"; // Replace with your Formspree URL

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (res.ok) {
        setForm({ name: "", email: "", message: "" });
        setStatus("success");
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl bg-transparent rounded-2xl space-y-6"
    >
      <h2 className="text-2xl font-semibold">Let&apos;s get in touch!</h2>

      <div>
        <label htmlFor="name" className="block mb-1 text-sm font-medium">
          Name
        </label>
        <input
          required
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-cream rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-1 text-sm font-medium">
          Email
        </label>
        <input
          required
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-cream rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-1 text-sm font-medium">
          Message
        </label>
        <textarea
          required
          name="message"
          id="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-cream rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="cursor-pointer w-full py-2 rounded-full bg-linear-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 active:from-red-600 active:to-amber-600 transition-colors"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-300 text-sm text-center">
          Your message has been sent successfully!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm text-center">
          Oops! Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
