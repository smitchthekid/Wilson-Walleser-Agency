import { FormEvent } from 'react';
import { brand, contact } from '../content';

// No backend: the form opens the visitor's email app with the message pre-filled.
export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? '').trim();

    const subject = `New project inquiry from ${get('name')}${get('company') ? ` (${get('company')})` : ''}`;
    const body = [
      `Name: ${get('name')}`,
      `Email: ${get('email')}`,
      `Company: ${get('company') || '-'}`,
      `Monthly budget: ${get('budget')}`,
      '',
      get('message'),
    ].join('\n');

    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section section-accent">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>{contact.heading}</h2>
          <p className="contact-body">{contact.body}</p>
          <p className="contact-direct">
            Prefer email? <a href={`mailto:${brand.email}`}>{brand.email}</a>
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-row">
            <label>
              Name
              <input name="name" required autoComplete="name" />
            </label>
            <label>
              Email
              <input name="email" type="email" required autoComplete="email" />
            </label>
          </div>
          <div className="field-row">
            <label>
              Company
              <input name="company" autoComplete="organization" />
            </label>
            <label>
              Monthly budget
              <select name="budget" defaultValue={contact.budgets[0]}>
                {contact.budgets.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </label>
          </div>
          <label>
            What are you hoping to achieve?
            <textarea name="message" rows={5} required />
          </label>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
