import Head from "next/head";
import { type } from "os";
import { FC } from "react";
import Header from "../components/navigation/Header";
import Sidebar from "../components/navigation/Sidebar";

type Props = {
  children: React.ReactNode;
};
const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        />
      </Head>
      <Header />

      <div className="flex flex-col">
        <Sidebar />
        <section>
          
            {children}
        </section>
      </div>
    </>
  );
};

export default Layout;
