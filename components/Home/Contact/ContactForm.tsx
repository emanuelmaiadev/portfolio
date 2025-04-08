import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        You’ve got ideas. I’ve got code. Let’s move.
      </h1>
      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        No fluff — just solid execution, fast thinking, and results that speak.
        Freelance? Long-term? Let’s cut the small talk and deliver something
        great.
      </p>
      <form className="mt-8 block w-full overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="First name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            placeholder="Last name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>
        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="email"
            placeholder="E-mail address"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>
        <div className="mt-5">
          <select
            defaultValue=""
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
        <textarea
          rows={10}
          placeholder="Message me!"
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
        ></textarea>
        <div className="mt-3">
          <button className="px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
