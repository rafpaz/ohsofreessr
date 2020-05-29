import Link from 'next/link';
import Layout from '../components/Layout';
import { ALL_PRODUCTS } from '../gql/allProducts';
import { useQuery } from '@apollo/react-hooks';

const AboutPage = () => {
  const { loading, error, data } = useQuery(ALL_PRODUCTS);
  if (error) return <h1>Error</h1>;
  if (loading || !data) return <h1>Loading...</h1>;

  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About!!!</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home!</a>
        </Link>
      </p>
      <>
        {data.allProduct.map(({ title, _id }) => (
          <ul key={_id ?? 1}>
            <li>{title}</li>
          </ul>
        ))}
      </>
    </Layout>
  );
};

export default AboutPage;
