import iconeLua from '../../assets/moon.png';
import iconeSol from '../../assets/sun.png';
import marcaLogo from '../../assets/logo.png';

import './style.css';

const Topo = (props) => {
    return (
        <header className={ (props.darkMode) ? 'dark-mode' : '' }>
            <img className='logo' src={marcaLogo} alt='Logo Marca'/>
            <button onClick={props.alternarDarkMode} className={ (props.darkMode) ? 'dark-mode' : '' }>
                <img src={ (props.darkMode) ? iconeSol : iconeLua } alt={ (props.darkMode) ? 'Icone Sol' : 'Icone Lua' } />
            </button>
        </header>
    )
}

export default Topo;