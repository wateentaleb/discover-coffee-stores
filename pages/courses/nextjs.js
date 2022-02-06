import { useRouter } from "next/router";
import Link from "next/link";
const NextJs = () => {
  const router = useRouter();
  console.log("router", router);
  return <div>Welcome to Next.js with Ankita</div>;
};

export default NextJs;
