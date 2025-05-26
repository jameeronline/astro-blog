import { useState } from "react";
// import { useToast } from "@/hooks/use-toast";
// import { Send, CheckCircle } from "lucide-react";

const ContactForm = () => {
  // const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Success notification
    // toast({
    //   title: "Message sent!",
    //   description:
    //     "Thank you for reaching out. I'll respond as soon as possible.",
    // });

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name <span className="text-mint">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-mint/50"
            placeholder="Your name"
            disabled={isSubmitting || isSubmitted}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email <span className="text-mint">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-mint/50"
            placeholder="your.email@example.com"
            disabled={isSubmitting || isSubmitted}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject <span className="text-mint">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-mint/50"
          placeholder="What's this about?"
          disabled={isSubmitting || isSubmitted}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message <span className="text-mint">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-mint/50 resize-none"
          placeholder="Tell me about your project, question, or just say hello..."
          disabled={isSubmitting || isSubmitted}
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        className={`btn-primary w-full sm:w-auto flex items-center justify-center space-x-2 ${
          isSubmitted ? "bg-mint/80 text-navy" : ""
        }`}
      >
        {isSubmitting ? (
          <>
            <div className="h-5 w-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
            <span>Sending...</span>
          </>
        ) : isSubmitted ? (
          <>
            {/* <CheckCircle size={18} /> */}
            <span>Message Sent</span>
          </>
        ) : (
          <>
            {/* <Send size={18} /> */}
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
