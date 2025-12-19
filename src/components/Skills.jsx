import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <h2>Mis Habilidades</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Habilidades Técnicas</h3>
          <ul>
            <li>HTML, CSS, TypeScript</li>
            <li>Next.js</li>
            <li>PHP (Mantenimiento de sistemas legacy)</li>
            <li>Kotlin (Desarrollo nativo para Android)</li>
            <li>Kotlin Compose Multiplatform</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Habilidades Blandas</h3>
          <ul>
            <li>Liderazgo y coordinación de equipos</li>
            <li>Trabajo colaborativo y comunicación</li>
            <li>Resolución analítica de problemas</li>
            <li>Adaptabilidad y aprendizaje continuo</li>
            <li>Organización y gestión de proyectos</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;