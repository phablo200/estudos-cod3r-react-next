export default function Lista(props) {
    return (
        <div>
            <h1>Lista de Algo</h1>
            <ul>
                {props.children}
            </ul>
        </div>
    );
};
