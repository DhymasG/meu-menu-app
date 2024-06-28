import React, { useState } from 'react';

// Componente MenuItem: responsável por renderizar cada item do menu e seus submenus
const MenuItem = ({ item }) => {
    // Estado isOpen: controla se o submenu está visível ou não
    const [isOpen, setIsOpen] = useState(false);

    return (
        // Li com classe "relative" para posicionamento do submenu
        <li
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div className="cursor-pointer p-2 hover:bg-blue-500 text-white rounded-lg">
                {item.nome}
                {item.subcategorias && item.subcategorias.length > 0 && (
                    <ul className={`absolute left-full top-0 ml-0 bg-blue-600 border border-blue-600 rounded-lg ${isOpen ? 'block' : 'hidden'} z-10`}>
                        {item.subcategorias.map((subItem, index) => (
                            <MenuItem key={index} item={subItem} />
                        ))}
                    </ul>
                )}
            </div>
        </li>
    );
};

export default MenuItem;
