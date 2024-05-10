import "./contact.css";

import contacts from './data'

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p> Send me a message with any of the links below </p> 
     <div className="container contact_container">
{
  contacts.map(contact => <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer"> {contact.icon} </a>)
}
     </div>
    </section>
  );
}

export default Contact;
