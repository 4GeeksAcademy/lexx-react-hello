import React from 'react';

const Home = ({ tiempo }) => {
  // Convertimos el número a un string de 6 dígitos con ceros a la izquierda
  const digitsString = String(tiempo).padStart(6, '0');
  const digits = digitsString.split('');

  return (
    <div 
      className="bg-black text-white d-flex justify-content-center align-items-center p-4 gap-2 w-100" 
      style={{ minHeight: '150px' }}
    >
      {/* Icono del Reloj */}
      <div 
        className="rounded d-flex justify-content-center align-items-center" 
        style={{ width: '70px', height: '110px', backgroundColor: '#1c1c1c' }}
      >
        <i className="fa-regular fa-clock" style={{ fontSize: '2.5rem' }}></i>
      </div>
      
      {/* Cajas de los 6 dígitos */}
      {digits.map((digit, index) => (
        <div 
          key={index} 
          className="rounded d-flex justify-content-center align-items-center" 
          style={{ 
            width: '70px', 
            height: '110px', 
            fontSize: '3.8rem', 
            fontFamily: 'Georgia, serif',
            backgroundColor: '#1c1c1c'
          }}
        >
          {digit}
        </div>
      ))}
    </div>
  );
};

export default Home;