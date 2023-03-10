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

        <main className="flex-grow mt-[60px] mb-[60px]">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
