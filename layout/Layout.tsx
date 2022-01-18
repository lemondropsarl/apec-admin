import Head from "next/head";
import { type } from "os";
import { FC } from "react";
import Content from "../components/Content";
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
      <body className="bg-gray-100 font-sans">
        <Header />
        <div className="flex md:flex-row">
          <Sidebar />
          <Content children={children} />
        </div>
      </body>
    </>
  );
};

export default Layout;
