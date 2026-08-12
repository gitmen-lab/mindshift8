"use client";

export default function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const subject = encodeURIComponent(`Contact form: ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:support@mindshift8.online?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nameInput">Name</label>
        <input id="nameInput" name="name" type="text" required autoComplete="name" />
      </div>
      <div>
        <label htmlFor="emailInput">Email</label>
        <input id="emailInput" name="email" type="email" required autoComplete="email" />
      </div>
      <div>
        <label htmlFor="messageInput">Message</label>
        <textarea id="messageInput" name="message" required />
      </div>
      <button type="submit" className="btn">
        Send Message
      </button>
      <p className="form-note">
        Submitting opens a pre-filled email in your default mail app addressed to
        support@mindshift8.online.
      </p>
    </form>
  );
}
