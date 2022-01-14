import Head from "next/head";
import Layout from "../layout/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <h1>it working</h1>
          </main>
        </div>
      </Layout>
    </>
  );
}
