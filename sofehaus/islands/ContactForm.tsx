import { useState } from "preact/hooks";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | "loading" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleChange = (
    e: Event & { 
      currentTarget: HTMLInputElement | HTMLTextAreaElement;
    }
  ) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending your message..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setStatus({
          type: "success",
          message: data.message,
        });
      } else {
        setStatus({
          type: "error",
          message: data.message || "There was an error sending your message. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "There was an error sending your message. Please try again.",
      });
    }
  };

  return (
    <form class="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label class="block text-sm font-medium mb-2" for="name">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          class="w-full px-4 py-2 rounded-lg bg-sofehaus-gray-800 dark:bg-sofehaus-gray-900 border border-sofehaus-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-sofehaus-primary"
          placeholder="Your name"
        />
      </div>
      <div>
        <label class="block text-sm font-medium mb-2" for="email">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          class="w-full px-4 py-2 rounded-lg bg-sofehaus-gray-800 dark:bg-sofehaus-gray-900 border border-sofehaus-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-sofehaus-primary"
          placeholder="your.email@example.com"
        />
      </div>
      <div>
        <label class="block text-sm font-medium mb-2" for="subject">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          class="w-full px-4 py-2 rounded-lg bg-sofehaus-gray-800 dark:bg-sofehaus-gray-900 border border-sofehaus-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-sofehaus-primary"
          placeholder="How can we help?"
        />
      </div>
      <div>
        <label class="block text-sm font-medium mb-2" for="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          class="w-full px-4 py-2 rounded-lg bg-sofehaus-gray-800 dark:bg-sofehaus-gray-900 border border-sofehaus-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-sofehaus-primary"
          placeholder="Tell us about your project..."
        ></textarea>
      </div>
      
      {status.type && (
        <div 
          class={`p-4 rounded-lg ${
            status.type === "success" 
              ? "bg-green-500 bg-opacity-20 text-green-100" 
              : status.type === "error" 
                ? "bg-red-500 bg-opacity-20 text-red-100" 
                : "bg-blue-500 bg-opacity-20 text-blue-100"
          }`}
        >
          {status.message}
        </div>
      )}
      
      <button
        type="submit"
        disabled={status.type === "loading"}
        class={`w-full py-3 px-6 rounded-lg font-bold text-white transition duration-300 ${
          status.type === "loading"
            ? "bg-sofehaus-gray-600 cursor-not-allowed"
            : "bg-sofehaus-accent hover:bg-opacity-90"
        }`}
      >
        {status.type === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
} 