export default function Filho (props) {
    return (
        <div>
            <h1>Filho #ALTERADO</h1>
            <button onClick={ev => props.funcao("Passei no ENEM")}>Falar com pai</button>
        </div>
    );
}