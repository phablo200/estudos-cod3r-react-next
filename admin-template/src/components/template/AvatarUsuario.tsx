import Link from 'next/dist/client/link';
import useAuth from '../../data/hook/useAuth';
import { IconeUsuario } from '../icons';

interface AvatarUsuarioProps {
    className?: string;
};

const AvatarUsuario = (props: AvatarUsuarioProps) => {
    const { usuario } = useAuth();
    return (
        <Link href="/perfil">
            {
                <img src={usuario?.imagemUrl ?? '/images/avatar.png'} 
                    alt="Avatar do usuário" 
                    className={`
                        h-10 w-10 rounded-full cursor-pointer
                        ${props.className}
                    `}
                />
            }
        </Link>
    );
};

export default AvatarUsuario;