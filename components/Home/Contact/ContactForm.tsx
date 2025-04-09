import { contactData } from "@/Data/data";
import React, { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [emailError, setEmailError] = useState(false);

  // Email validation regex
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;

    // Validate e-mail before sending
    if (!email || !isValidEmail(email)) {
      setEmailError(true);
      toast.error("Please enter a valid e-mail address.");
      return;
    }

    setEmailError(false);

    // Build form data for FormSubmit
    const formData = new FormData(form);

    try {
      await fetch(`https://formsubmit.co/${contactData.email}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      toast.success("Thanks for reaching out! I’ll get back to you ASAP.");
      form.reset();
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
      {/* === Header === */}
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        You’ve got ideas. I’ve got code. Let’s move.
      </h1>
      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        No fluff — just solid execution, fast thinking, and results that speak.
        Freelance? Long-term? Let’s cut the small talk and deliver something
        great.
      </p>

      {/* === Contact Form === */}
      <form
        className="mt-8 block w-full overflow-hidden"
        onSubmit={handleSubmit}
      >
        {/* Anti-spam */}
        <input type="text" name="_honey" style={{ display: "none" }} />
        <input type="hidden" name="_captcha" value="false" />

        {/* === Name inputs === */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            name="firstName"
            required
            placeholder="First name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            name="lastName"
            required
            placeholder="Last name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>

        {/* === Email & Phone === */}
        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4 w-full">
          <div className="flex-1 w-full">
            <input
              type="email"
              name="email"
              required
              placeholder="E-mail address"
              className={`w-full bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] ${
                emailError ? "border-red-500" : "border-gray-200"
              } border-opacity-15 outline-none`}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1 ml-1">
                e-mail required
              </p>
            )}
          </div>
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>

        {/* === Profile type === */}
        <div className="mt-5">
          <select
            name="profile"
            defaultValue=""
            required
            className="w-full bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          >
            <option value="" disabled>
              How would you describe yourself?
            </option>
            <option value="TechRecruiter">Tech Recruiter</option>
            <option value="FounderEntrepreneur">
              Startup Founder / Entrepreneur
            </option>
            <option value="ProductManager">Project or Product Manager</option>
            <option value="HiringLead">Hiring Manager / Tech Lead</option>
            <option value="Agency">Digital Agency</option>
            <option value="Designer">
              Designer looking for dev collaboration
            </option>
            <option value="TeamSupport">
              Team needing QA / frontend / backend help
            </option>
          </select>
        </div>

        {/* === Message === */}
        <textarea
          name="message"
          rows={10}
          required
          placeholder="Message me!"
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
        ></textarea>

        {/* === Submit Button === */}
        <div className="mt-3">
          <button
            type="submit"
            className="px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
