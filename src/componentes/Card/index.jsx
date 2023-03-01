import './style.css';

const Card = (props) => {
    return (
        <div className={ (props.darkMode) ? 'card-item dark-mode' : 'card-item' }>
            <p className={ (props.darkMode) ? 'dark-mode' : '' }>{props.data}</p>
            <h3 className={ (props.darkMode) ? 'dark-mode' : '' }>{props.titulo}</h3>
            <p className={ (props.darkMode) ? 'dark-mode' : '' }>{props.empresa}</p>
            <p className={ (props.darkMode) ? 'dark-mode' : '' }>{props.paragrafo}</p>
        </div>
    )
}

export default Card;