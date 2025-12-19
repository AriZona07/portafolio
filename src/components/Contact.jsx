import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <p>¡Hablemos! Si mi perfil te parece interesante o tienes alguna pregunta, no dudes en contactarme a través de los siguientes medios:</p>
      <div className="contact-links">
        <a href="mailto:ariana.torres.of@gmail.com" className="contact-item">
          <i className="fa-solid fa-envelope"></i> Email
        </a>
        <a href="https://www.linkedin.com/in/arianna-fernanda-loyo-torres" target="_blank" className="contact-item">
          <i className="fa-brands fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/AriZona07" target="_blank" className="contact-item">
          <i className="fa-brands fa-github"></i> GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;