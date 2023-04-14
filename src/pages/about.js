import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

const about = () => {
  return (
    <>
      <Head>
        <title>Khalid Hasan | About</title>
        <meta name="description" content="any description" />
      </Head>

      <main className="flex w-full items-center justify-center">
        <Layout className="pt-10">
          <AnimatedText text="Passion Fuels Perposal" className="!text-7xl " />
        </Layout>
      </main>
    </>
  );
};

export default about;
