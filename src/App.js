import Topo from './componentes/Topo';
import SecaoBanner from './componentes/SecaoBanner';
import SecaoExperiencias from './componentes/SecaoExperiencias';
import Rodape from './componentes/Rodape';
import './App.css';
import { useState } from 'react';


function App() {

  const[darkMode, setDarkMode] = useState(false);

  const alternarDarkMode = () => {
      setDarkMode(!darkMode);
  }


  return (
    <>
      <Topo alternarDarkMode={alternarDarkMode} darkMode={darkMode} />
      <SecaoBanner darkMode={darkMode} />
      <SecaoExperiencias darkMode={darkMode} />
      <Rodape darkMode={darkMode} />
    </>
  );
}

export default App;
