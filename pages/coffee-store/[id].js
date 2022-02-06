import { useRouter } from "next/router";
import Link from "next/link";

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
    fallback: false,
  };
}
const CoffeeStore = (props) => {
  const router = useRouter();
  return (
    <div>
      Coffee Store Page{router.query.id}
      <Link href="/">
        <a>Back to Home</a>
      </Link>
      <Link href="/coffee-store/dynamic">
        <a>Go to page dynamic</a>
      </Link>
      <p>{props.coffeeStore.address}</p>
      <p>{props.coffeeStore.name}</p>
    </div>
  );
};

export default CoffeeStore;
