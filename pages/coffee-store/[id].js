import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import coffeeStoresData from "../../data/coffee-store.json";

export function getStaticProps(staticProps) {
  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => {
        const params = staticProps.params;
        return coffeeStore.id == params.id; //dynamic id
      }),
    },
  };
}

export function getStaticPaths(staticPaths) {
  return {
    paths: [{ params: { id: "0" } }, { params: { id: "1" } }],
    fallback: true,
  };
}
const CoffeeStore = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div> Loading...</div>;
  }
  const { address, name, neighbourhood } = props.coffeeStore;
  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
      <p>{address}</p>
      <p>{name}</p>
      <p>{neighbourhood}</p>
    </div>
  );
};

export default CoffeeStore;
