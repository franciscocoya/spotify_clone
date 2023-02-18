import Head from 'next/head';

function MetadataLayout({ children, ...props }) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      {children}
    </>
  );
}

export default MetadataLayout;
