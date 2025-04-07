import React, { useState } from "react";
import {
  Button,
  Label,
  TextInput,
  Textarea,
  Alert,
  HelperText,
} from "flowbite-react";
import { HiMail, HiPhone, HiLocationMarker, HiLink } from "react-icons/hi";
import HeaderHeroSection from "../components/HeaderHeroSection";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      setSubmitStatus("error");
      console.log(error);

      // Reset after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <HeaderHeroSection
        title="Contact Me"
        subtitle="Interested in working together? Have questions about my experience or
          projects? Feel free to reach out!"
      />

      <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-6 text-2xl font-bold">Send Me a Message</h2>

            {submitStatus === "success" && (
              <Alert color="success" className="mb-4">
                <span className="font-medium">Success!</span> Your message has
                been sent. I'll get back to you soon.
              </Alert>
            )}

            {submitStatus === "error" && (
              <Alert color="failure" className="mb-4">
                <span className="font-medium">Error!</span> There was a problem
                sending your message. Please try again.
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="name">Your Name</Label>
                  </div>
                  <TextInput
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    color={errors.name ? "failure" : undefined}
                  />
                  <HelperText>{errors.name}</HelperText>
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email"> Your Email </Label>
                  </div>
                  <TextInput
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    required
                    color={errors.email ? "failure" : undefined}
                  />
                  <HelperText>{errors.email}</HelperText>
                </div>
              </div>

              <div className="mb-4">
                <div className="mb-2 block">
                  <Label htmlFor="subject"> Subject </Label>
                </div>
                <TextInput
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  color={errors.subject ? "failure" : undefined}
                />
                <HelperText>{errors.subject}</HelperText>
              </div>

              <div className="mb-6">
                <div className="mb-2 block">
                  <Label htmlFor="message"> Your Message </Label>
                </div>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Let me know how I can help..."
                  required
                  rows={6}
                  className={errors.message ? "border-red-500" : ""}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                color="blue"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em]"></div>
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <HiMail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-600">
                    <a
                      href="mailto:adamasorho36@gmail.com"
                      className="hover:underline"
                    >
                      adamasorho36@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <HiPhone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+16412339473" className="hover:underline">
                      (641) 233-9473
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <HiLocationMarker className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-600">Austin, Texas, 78729, USA</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <HiLink className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">LinkedIn</h3>
                  <p className="text-gray-600">
                    <a
                      href="https://www.linkedin.com/in/adamasorho/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      linkedin.com/in/adamasorho
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-blue-50 p-6">
            <h3 className="mb-3 text-xl font-bold">Availability</h3>
            <p className="mb-4 text-gray-700">
              I typically respond to messages within 24 hours. For urgent
              inquiries, please feel free to call me directly.
            </p>
            <p className="text-gray-700">
              Currently available for new projects and opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
