import { useRouter } from "next/router";

const Item = () => {

    const router = useRouter();

    console.log('router', router.query.id);

    return (
        <div>
            Item
        </div>
    );
};

export default Item;