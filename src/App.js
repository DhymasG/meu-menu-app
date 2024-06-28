import React from 'react';
import Menu from './components/Menu';
import data from './menuData.json';

// Componente App: ponto de entrada principal do aplicativo
function App() {
  return (
    <div className="App">
      <Menu data={data} />
    </div>
  );
}

export default App;
