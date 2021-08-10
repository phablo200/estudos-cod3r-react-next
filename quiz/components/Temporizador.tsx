import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styles from '../styles/Temporizador.module.css';

interface TemporizadorProps {
	duracao: number;
	tempoEsgotado: () => void;
}

const Temporizador = (props: TemporizadorProps) => {
	return (
		<div className={styles.temporizador}>
			<CountdownCircleTimer size={120} 
				duration={props.duracao} 
				isPlaying
				onComplete={props.tempoEsgotado}
				colors={[
					['#BCE596', 0.33],
					['#F7B801', 0.33],
					['#ED827A', 0.33]
				]}
			>
				{({ remainingTime }) => remainingTime}
			</CountdownCircleTimer>
		</div>
	);
};

export default Temporizador;