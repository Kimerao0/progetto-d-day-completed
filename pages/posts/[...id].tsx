import { useRouter } from "next/router";
import { getData } from "../../utils/functions";

const SingoloArticolo = (props: any) => {
  return (
    <div>
      <h2></h2>
      <p></p>
    </div>
  );
};

export async function getStaticProps(context: any) {
  console.log(context);
}

export default SingoloArticolo;
