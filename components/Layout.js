import Head from "next/head";
import { useRouter } from "next/router";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { AiOutlineArrowUp } from "react-icons/ai";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Layout(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "MFE",
    description: `Martin Fernandez Etchegaray`,
    image: "https://srcouto.ar/static/images/banner.png",
    type: "website",
    ...customMeta,
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://enjm.com.ar${router.asPath}`} />
        <link rel="canonical" href={`https://enjm.com.ar${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="mfetchegaray" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mfetchegaray" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div id="top" />
      <Header />
      <main id="skip" className="flex flex-col justify-center pt-16 bg-white md:pt-0 dark:bg-gray-900">
        {children}
      </main>
      <AnchorLink className="anchorLinkToTop" href="#top">
        <AiOutlineArrowUp />
      </AnchorLink>
      <Footer />
    </div>
  );
}
