import React, { useState, useEffect } from 'react';
import './Settings.css';

const Settings = ({ onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setActiveTab(null);
    }
  };

  const handleTabSelect = (tab) => {
    if (tab === 'creditos') {
      const creditsWindow = window.open('', '_blank', 'width=400,height=300,scrollbars=yes,resizable=yes');
      creditsWindow.document.write(`
        <html>
          <head>
            <title>Créditos</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; }
              ul { list-style-type: none; padding: 0; }
              li { margin-bottom: 10px; }
              a { color: #007bff; text-decoration: none; }
              a:hover { text-decoration: underline; }
            </style>
          </head>
          <body>
            <h3>Créditos</h3>
            <ul>
              <li><a href="https://www.flaticon.es/iconos-gratis/programador" title="programador iconos" target="_blank" rel="noopener noreferrer">Programador iconos creados por Freepik - Flaticon</a></li>
            </ul>
          </body>
        </html>
      `);
      creditsWindow.document.close();
      setIsOpen(false);
    } else {
      setActiveTab(tab);
    }
  };

  const handleThemeSelect = (theme) => {
    onThemeChange(theme);
    setIsOpen(false);
    setActiveTab(null);
  };

  return (
    <div className="settings-container">
      <button className="settings-button" onClick={toggleMenu}>
        <i className="fas fa-cog"></i>
      </button>
      {isOpen && (
        <div className="settings-menu">
          {!activeTab ? (
            <>
              <button onClick={() => handleTabSelect('tema')}>Tema</button>
              <button onClick={() => handleTabSelect('creditos')}>Créditos</button>
            </>
          ) : activeTab === 'tema' ? (
            <>
              <button onClick={() => setActiveTab(null)}>← Atrás</button>
              <button onClick={() => handleThemeSelect('system')}>Sistema</button>
              <button onClick={() => handleThemeSelect('light')}>Claro</button>
              <button onClick={() => handleThemeSelect('dark')}>Oscuro</button>
            </>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Settings;