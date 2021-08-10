import styles from './styles.module.css';
import Subdivisao from "../Subdvisao";

const Linha = (props) => {    

    return (
        <div className={styles.linha}>
            <Subdivisao preta={props.preta}/>
            <Subdivisao preta={!props.preta}/>
            <Subdivisao preta={props.preta}/>
            <Subdivisao preta={!props.preta}/>
            <Subdivisao preta={props.preta}/>
            <Subdivisao preta={!props.preta}/>
            <Subdivisao preta={props.preta}/>
            <Subdivisao preta={!props.preta}/>
        </div>
    );
};

export default Linha;