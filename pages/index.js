import Link from 'next/link';
import Layout from '../components/Layout';
import withApollo from '../libs/apollo';
import AboutPage from './about';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <AboutPage />
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default withApollo({ ssr: true })(IndexPage);
