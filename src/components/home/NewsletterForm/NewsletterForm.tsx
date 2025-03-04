/* eslint-disable @typescript-eslint/no-unused-vars */

import type React from "react";
import { BiPaperPlane } from "react-icons/bi";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Here you would integrate with your email service
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
      setSuccess(true);
      setEmail("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      style={{ backgroundImage: "url(/images/bg-about.png)" }}
      className="relative bg-[#001524] px-4 py-16  sm:px-6 lg:px-8 bg-no-repeat bg-cover bg-right-top"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="relative">
          <BiPaperPlane className="absolute right-0 top-0 h-12 w-12 -translate-y-1/2 text-white opacity-30 md:h-16 md:w-16" />
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            Subscribe And Get 20% Off Your First Purchase.
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="relative mx-auto flex max-w-2xl items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className={`
                h-12 flex-1 rounded-full border-0 bg-white/95 px-6 text-base text-gray-900 placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-white",
                ${loading && "opacity-50"}`}
              disabled={loading || success}
              aria-label="Email address"
            />
            <button
              type="submit"
              className={`absolute right-1 h-10 rounded-full px-6 hover:text-primary text-sm font-medium transition-colors
             ${loading && "opacity-50"}
              `}
              disabled={loading || success}
            >
              {loading
                ? "Subscribing..."
                : success
                ? "Subscribed!"
                : "Subscribe"}
            </button>
          </div>
          {error && (
            <p className="mt-2 text-sm text-red-400" role="alert">
              {error}
            </p>
          )}
          {success && (
            <p className="mt-2 text-sm text-green-400" role="alert">
              Thanks for subscribing! Check your email for your discount code.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
