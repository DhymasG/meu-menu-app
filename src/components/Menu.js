import React from 'react';
import MenuItem from './MenuItem';

// Componente Menu: renderiza o menu principal com itens horizontais
const Menu = ({ data }) => {
  return (
    <nav className="bg-blue-400 p-4 font-bold">
      <ul className="flex space-x-4">
        {data.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
