import { useState } from 'react';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent('Portfolio Inquiry');
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" required />
      </div>
      <div className="contact-field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
      </div>
      <div className="contact-field contact-field-full">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project"
          rows="5"
          required
        />
      </div>
      <button className="button button-primary" type="submit" style={{ gridColumn: 'span 2', justifySelf: 'end' }}>
        Send message
      </button>
    </form>
  );
}

export default ContactForm;
