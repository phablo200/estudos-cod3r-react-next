import Image from 'next/image';
import router from 'next/router';
import Head from 'next/head';
import loading from '../../../public/images/loading.gif';
import useAuth from '../../data/hook/useAuth';

const ForcarAutenticacao = (props) => {
    const { usuario, carregando } = useAuth();

    const renderizarConteudo = () => {
        return (
            <>
                <Head>
                    <script 
                        dangerouslySetInnerHTML={{
                            __html: `
                                if (!document.cookie?.includes("admin-template")) {
                                    window.location.href="/autenticacao"
                                }
                            `
                        }}
                    />
                </Head>
                {props.children}
            </>
        );
    };

    const renderizarCarregando = () => {
        return (
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <Image src={loading} alt="loading" />
            </div>
        );
    };

    if (!carregando && usuario?.email) {
        return renderizarConteudo();
    } else if (carregando) {
        return renderizarCarregando();
    } else {
        router.push('/autenticacao');
        return null;
    }
};

export default ForcarAutenticacao;