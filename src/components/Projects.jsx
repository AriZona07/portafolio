import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Proyectos Destacados</h2>
      <div className="projects-container">
        <div className="project-card">
          <div>
            <h3>Tamashi: App Móvil de Productividad</h3>
            <p className="project-tech">Tecnologías: Kotlin, Jetpack Compose, Google Firebase</p>
            <p>Como creadora de este proyecto, mis responsabilidades incluyeron la formación y coordinación del equipo. Es una app nativa para Android con gamificación, creada con Jetpack Compose. Utilicé Google Firebase como BaaS (Backend as a Service) para gestionar la base de datos y la autenticación de usuarios. <em>(Proyecto de código abierto, actualmente en desarrollo activo)</em>.</p>
          </div>
          <a href="https://github.com/AriZona07/tamashi" target="_blank">Ver en GitHub</a>
        </div>
        <div className="project-card">
          <div>
            <h3>Desarrollo Front-end para Aplicación Financiera</h3>
            <p className="project-tech">Tecnologías: Next.js, TypeScript, Tailwind CSS, HTML</p>
            <p>Como parte de un equipo de tres, fui responsable del 100% del desarrollo front-end para una aplicación web destinada a una financiera local. Utilicé Next.js con TypeScript para construir una interfaz moderna y responsiva, colaborando con el desarrollador back-end para la integración. <em>(Proyecto profesional privado, código no disponible)</em>.</p>
          </div>
        </div>
        <div className="project-card">
          <div>
            <h3>Modernización de Sistema Backend (PHP)</h3>
            <p className="project-tech">Tecnologías: PHP 8, MySQL, Docker</p>
            <p>Responsable de la actualización crítica de un sistema legacy de PHP 5 a PHP 8. Este proyecto implicó refactorizar código obsoleto, adaptar funcionalidades y mejorar significativamente la seguridad y el rendimiento del backend. <em>(Proyecto profesional privado, código no disponible)</em>.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;