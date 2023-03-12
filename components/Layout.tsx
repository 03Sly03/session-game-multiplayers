import Head from 'next/head';
import React from 'react';

type Props = {
  children: JSX.Element | JSX.Element[];
  title: string;
};

function Layout({ children, title }: Props) {
  return (
    <div>
      <Head>
        <title>{title ? title + 'Game Test' : 'Game Test'}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="m-10 flex justify-center">{children}</main>
    </div>
  );
}

export default Layout;