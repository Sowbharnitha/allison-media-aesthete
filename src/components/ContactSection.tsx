import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Check } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     // Save to Firebase Firestore
  //     await addDoc(collection(db, 'contacts'), {
  //       ...formData,
  //       timestamp: new Date(),
  //       status: 'new'
  //     });

  //     await fetch("http://localhost:5000/api/notify-contact", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({
  //         source: "Azhizen Media Website",
  //         ...formData
  //       })
  //     });


  //     setSubmitSuccess(true);
  //     setFormData({ name: '', email: '', subject: '', message: '' });

  //     // Reset success message after 5 seconds
  //     setTimeout(() => {
  //       setSubmitSuccess(false);
  //     }, 5000);
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //     alert('There was an error submitting your message. Please try again.');
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };




  // import { addDoc, collection, serverTimestamp } from "firebase/firestore";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1️⃣ Save to Firebase Firestore
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        // timestamp: serverTimestamp(),
        // status: "new",
        // source: "Azhizen Media Website"
      });

      // 2️⃣ Send Slack notification via backend
      const response = await fetch("http://localhost:5000/api/notify-slack", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName: formData.name,  // since your backend expects firstName
          lastName: "",
          email: formData.email,
          phoneNumber: "",
          message: formData.message
        })
      });


      if (!response.ok) {
        throw new Error("Slack notification failed");
      }

      // 3️⃣ Success UI
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Contact Us</h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-playfair relative after:content-[''] after:block after:w-16 after:h-0.5 after:bg-allison-dark after:mt-4">
                Let's Connect
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Ready to elevate your brand's visual presence? Reach out to us to discuss your project needs.
                Our team is excited to bring your creative vision to life.
              </p>

              <div className="space-y-6 mt-8">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg transition-transform hover:translate-x-2 duration-300">
                  <div className="bg-allison-dark p-3 rounded-full text-white mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-allison-dark">Location</h4>
                    <p className="text-gray-600">Azhizen Solutions (OPC) Pvt Ltd,319,Mercury block,KSRCE Neo,Tiruchengode-637215</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-50 rounded-lg transition-transform hover:translate-x-2 duration-300">
                  <div className="bg-allison-dark p-3 rounded-full text-white mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-allison-dark">Phone</h4>
                    <p className="text-gray-600">9750603988</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-50 rounded-lg transition-transform hover:translate-x-2 duration-300">
                  <div className="bg-allison-dark p-3 rounded-full text-white mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-allison-dark">Email</h4>
                    <p className="text-gray-600">contact@azhizenmedia.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-64 bg-gray-200 w-full overflow-hidden rounded-lg shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.7234567890123!2d77.8123456789!3d11.3456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDIwJzQ0LjQiTiA3N8KwNDgnNTIuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Azhizen Media location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 animate-fade-in-up">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-playfair mb-6 text-allison-dark">Send Us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-allison-dark focus:border-transparent transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-allison-dark focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-allison-dark focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-allison-dark focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 bg-allison-dark text-allison-light rounded-md hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>

                {submitSuccess && (
                  <div className="bg-green-50 text-green-700 text-center py-3 px-4 rounded-md flex items-center justify-center">
                    <Check className="w-5 h-5 mr-2" />
                    <span>Thank you for your message! We'll be in touch soon.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
