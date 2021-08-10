const { useRouter } = require("next/router");

const Id = () => {
    const router = useRouter();

    return (
        <div>Id: {router.query.id}</div>
    );
}

export default Id;