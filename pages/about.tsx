import Link from "next/link";
import Layout from "../components/Layout";
import { useQuery } from "@apollo/react-hooks";
import { ALL_CHARACTERS } from "../gql/allCharacters";
import { withApollo } from "../libs/apollo";

const AboutPage: React.FunctionComponent = () => {
  const { loading, error, data } = useQuery(ALL_CHARACTERS);
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
      <>
        {data.characters.results.map((data: any) => (
          <ul key={data.id}>
            <li>{data.name}</li>
          </ul>
        ))}
      </>
    </Layout>
  );
};

export default withApollo({ ssr: true })(AboutPage);
