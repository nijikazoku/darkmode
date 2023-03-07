import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>test</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow mt-[100px]">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
