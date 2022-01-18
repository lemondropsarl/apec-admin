import  Head  from "next/head";
import React, { FC, useState } from "react";

type Props = {
  children: React.ReactNode;
};
const Content: FC<Props> = ({ children }) => {
  const [title, settitle] = useState<string>("Apec")
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container pt-2 w-full">
        <div
          id="main"
          className="flex-1 bg-gray-100 mt-6 items-center pb-24"
        >
          <div className="bg-gray-800 pt-4 items-center">
            <div className=" rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
              <h1 className="font-bold pl-2 ">{title}</h1>
            </div>
          </div>
          {children}
        </div>
      </section>
    </>
  );
};

export default Content;
