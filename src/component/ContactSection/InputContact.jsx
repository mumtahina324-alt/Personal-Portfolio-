import { useState } from "react";

export default function InputContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div className="bg-emerald-400/10 backdrop-blur rounded-2xl p-6 border border-emerald-400/30">
      <h3 className="text-xl font-semibold text-emerald-400 mb-6">
        Send a Message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-md text-slate-300 mb-3 ml-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="input"
            />
          </div>

          <div>
            <label className="block text-md text-slate-300 mb-3 ml-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="input"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-md text-slate-300 mb-3 ml-1">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What's this about?"
            className="input"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-md text-slate-300 mb-3 ml-1">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your message here..."
            className="input resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-sm font-medium text-[18px] text-white bg-linear-to-r from-indigo-500 to-emerald-400 hover:opacity-90 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
