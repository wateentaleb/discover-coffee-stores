import { useRouter } from "next/router";
import Head from "next/head";

const DynamicExample = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.id}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {router.query.id}
    </div>
  );
};

export default DynamicExample;
