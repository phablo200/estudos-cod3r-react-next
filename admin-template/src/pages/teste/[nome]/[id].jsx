import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()
    const { id, nome } = router.query


  return (
    <h1>testando params</h1>
  );
};

