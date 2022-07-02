import ContactForm from "../components/ContactForm";
import SidebarContact from "../components/SidebarContact";
import Head from "next/head";

function Contact({ ct }: any) {
  return (
    <div className="mainSection">
      <Head>
        <title>Vadim Sher - Contact</title>
        <meta
          name="Vadim Sher"
          content="Vadim Sher - Pianiste, compositeur, musicien de scène"
        />
        <script
          async
          defer
          data-website-id="fafc8256-3873-4ad6-adfa-9dc8ffc13593"
          src="https://s.abla.io/abla.js"
        ></script>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="sidebar">
        <SidebarContact ctPic={ct.acf.imageUrl} />
      </div>
      <div className="main">
        <ContactForm ctText={ct.content.rendered} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "http://musards.fr/wp/vadimsher/wp-json/wp/v2/pages/241"
  );
  const ct = await res.json();
  return {
    props: { ct },
    revalidate: 20,
  };
}

export default Contact;
