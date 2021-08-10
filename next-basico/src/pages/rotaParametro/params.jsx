import { useRouter } from "next/router";
import Link from 'next/link';

const Params = () => {

    const router = useRouter();
    const {id, nome} = router.query;
    
    return (
        <div>
            <h1>Olá {nome} seu id é {id} </h1>
            <Link href="/rotaParametro">
                <button>
                    Voltar
                </button>
            </Link>
        </div>
    );
};

export default Params;