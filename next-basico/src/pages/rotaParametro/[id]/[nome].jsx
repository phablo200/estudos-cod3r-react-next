const { useRouter } = require("next/router")

const Nome = () => {
    const router = useRouter();

    return <div>{router.query.nome}</div>;
}

export default Nome;