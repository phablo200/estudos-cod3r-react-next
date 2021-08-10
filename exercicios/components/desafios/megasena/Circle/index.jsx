import styles from './styles.module.css';

const Circle = (props) => (
    <span className={styles.circle}>
        {props.number}
    </span>
);

export default Circle;