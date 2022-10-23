import Head from "next/head";

const Meta = ({ title, keywords, description, image }) => {
  const metaTitle = "Vacation Homes and Condo Rentals - Airnb";

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords || ""} />
      <meta name="description" content={description || ""} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.png" />
      <title>{metaTitle}</title>
    </Head>
  );
};

export default Meta;
