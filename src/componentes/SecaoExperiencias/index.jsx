import Card from '../Card';
import './style.css';

const SecaoExperiencias = (props) => {
    return (
        <section className={ (props.darkMode) ? 'secao-experiencias dark-mode' : 'secao-experiencias' }>
            <div className='subtitulo-descricao'>
                <h2 className={ (props.darkMode) ? 'dark-mode' : '' }>Experiências De Trabalho</h2>
                <p className={ (props.darkMode) ? 'dark-mode' : '' }>
                Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de Sites e Marketing Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.
                </p>
            </div>
            
            <div className='cards'>
                
                <Card 
                    data="JUNHO 2012 - 2016"
                    titulo="Web Designer"
                    empresa="Pied Piper StartUp."
                    paragrafo="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                    darkMode={props.darkMode}
                />

                <Card 
                    data="AGOSTO 2016 - 2019"
                    titulo="Product Designer"
                    empresa="E Corp."
                    paragrafo="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
                    darkMode={props.darkMode}
                />

                <Card 
                    data="FEVEREIRO 2019 - 2021"
                    titulo="Digital Consulting"
                    empresa="Arasaka Inc."
                    paragrafo="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
                    darkMode={props.darkMode}
                />

            </div>
        </section>
    )
}

export default SecaoExperiencias;