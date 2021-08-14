import styles from '../styles/Estatistica.module.css';

interface EstatisticaProps {
    valor: any
    texto: string
    corFundo?: string
    corFonte?: string
};

const Estatistica = props => {
    return (
        <div className={styles.estatistica}>
            <div className={styles.valor} style={{backgroundColor: props.corFunco ?? '#FDD60F', color: props.corFonte ?? '#333' }}>
                {props.valor}
            </div>
            <div className={styles.texto}>
                {props.texto}
            </div>
        </div>
    );
};

export default Estatistica;