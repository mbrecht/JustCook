import Head from '../Head';
import Header from './Header';

export default function Layout({children}) {
  return (
    <>
      <Head />
      <Header />
      <main>{children}</main>
    </>
  );
}
