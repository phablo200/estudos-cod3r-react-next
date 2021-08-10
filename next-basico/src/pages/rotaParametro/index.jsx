import router, { useRouter } from "next/router";
import Link from 'next/link';

const RotaParametro = () => {

    const navegacaoSimples = (url) => {
        router.push(url);
    }

    const navegacaoComParams = () => {
        router.push({
            pathname: "rotaParametro/params",
            query: {
                id: 123,
                nome: 'Ana'
            }
        }) 
    }

    return (
        <div>
            <h1>Rotas Index</h1>
            <ul>
                <Link href='/rotaParametro/params?id=12&nome=Ana'>
                    <li>Params</li>
                </Link>
                <Link href='/rotaParametro/123/buscar'>
                    <li>Buscar</li>
                </Link>
            </ul>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <button onClick={() => router.push('/rotaParametro/123/buscar')}>Buscar</button>
                <button onClick={() => navegacaoSimples('/rotaParametro/123/buscar')}>Buscar</button>
                <button onClick={navegacaoComParams}>Params</button>
            </div>
        </div>
    )
};

export default RotaParametro;
