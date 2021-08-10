function acao1 () {
    console.log("ação1");
}
export default function botao () {

    function acao2() {
        console.log("ação 2");
    }

    function acao5 (e) {
        console.log('evento', e);
    }

    return (<div>
        <button onClick={acao1}>Click #01</button>
        <button onClick={acao2}>Click #02</button>
        <button onClick={() => console.log("ação 3")}>Click #03</button>
        <button onClick={acao5}>Click #05</button>
        <button onClick={e => acao5(e.altKey)}>Click #05 v2</button>
    </div>);
};
