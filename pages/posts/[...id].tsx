import { useRouter } from "next/router";

const SingoloArticolo = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  const text = router.query.id
    ? typeof router.query.id === "string"
      ? router.query.id
      : router.query.id[router.query.id.length - 1]
    : "Nessun articolo";
  return <div>{text}</div>;
};

export default SingoloArticolo;
