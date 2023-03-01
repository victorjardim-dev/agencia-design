import imagemLogo from '../../assets/logo.png';

import iconeFace from '../../assets/facebook.png';
import iconeTwitter from '../../assets/twitter.png';
import iconelinkedin from '../../assets/linkedin.png';
import iconeDrible from '../../assets/dribble.png';
import iconeBehance from '../../assets/behance.png';
import iconeGooglePlus from '../../assets/google-plus.png';

import './style.css';

const Rodape = (props) => {
    function setYear() {
        const data = new Date();
        const anoAtual = data.getFullYear();
        return anoAtual;
    }

    return (
        <footer className={ (props.darkMode) ? 'rodape dark-mode' : 'rodape' }>
            <img src={imagemLogo} alt="Logo" />
            <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
            ferramentas e tecnologias personalizadas.</p>
            <div className='icones-social'>
                <a href='#' rel='noreferrer'><img src={iconeFace} alt="Ícone" /></a>
                <a href='#' rel='noreferrer'><img src={iconeTwitter} alt="Ícone" /></a>
                <a href='#' rel='noreferrer'><img src={iconelinkedin} alt="Ícone" /></a>
                <a href='#' rel='noreferrer'><img src={iconeDrible} alt="Ícone" /></a>
                <a href='#' rel='noreferrer'><img src={iconeBehance} alt="Ícone" /></a>
                <a href='#' rel='noreferrer'><img src={iconeGooglePlus} alt="Ícone" /></a>
            </div>
            <p className={ (props.darkMode) ? 'copyright dark-mode' : 'copyright' }>Copyright {setYear()} &copy; <span><a href='https://victorjardim.dev/#projetos' target='_blank' rel='noreferrer'>Victor Jardim</a></span></p>
        </footer>
    )
}

export default Rodape;