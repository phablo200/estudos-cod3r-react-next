import styles from './styles.module.css';
import Circle from "../Circle";
import { gerarNumbers } from '../../../../functions/megasena';
import { useEffect, useState } from 'react';

const Container = () => {
    const [numbers, setNumbers] = useState([]);
    const [value, setValue] = useState('');

    const handleValue = (value) => setValue(value);
    const handleGenerate = () => {
        setNumbers(numbers => gerarNumbers(value));
    };

    useEffect(() => {
        setNumbers(gerarNumbers());
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.input}>
                <input type="number" min={6} max={60} value={value} onChange={(e) => handleValue(e.target.value)} />
                <button onClick={handleGenerate}>Gerar</button>
            </div>

            <div className={styles.numbers}>
                {numbers.map((n, i) => <Circle key={i} number={n} />)}
            </div>
        </div>
    );
};

export default Container;