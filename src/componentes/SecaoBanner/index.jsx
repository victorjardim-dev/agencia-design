// import imagemBanner from '../../assets/banner.png';
import './style.css';

const SecaoBanner = (props) => {
    return (
        <section className={ (props.darkMode) ? 'secao-banner dark-mode' : 'secao-banner' }>
            <div className='secao-banner-texto'>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2>Agência de Branding</h2>
                <span>e design digital</span>
            </div>
        </section>
    )
    
}

export default SecaoBanner;