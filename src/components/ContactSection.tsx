
import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-allison-dark"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-allison-dark"
                />
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
                  className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-allison-dark"
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
                  className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-allison-dark"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 bg-allison-dark text-allison-light hover:bg-opacity-90 transition-all duration-300 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitSuccess && (
                <div className="text-green-600 text-center py-2">
                  Thank you for your message! We'll be in touch soon.
                </div>
              )}
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-playfair">Get in Touch</h3>
              <p className="text-gray-700 leading-relaxed">
                Have a project in mind or want to learn more about our services? 
                Reach out to us using the contact form or through any of the channels below.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="mr-4 text-allison-dark" />
                  <span>123 Creative Avenue, New York, NY 10001</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-4 text-allison-dark" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-4 text-allison-dark" />
                  <span>contact@allisonmedia.com</span>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="h-64 bg-gray-200 w-full overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280917326!2d-74.11976341554046!3d40.70517865495546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1615902880508!5m2!1sen!2sca"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy"
                title="Allison Media location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
