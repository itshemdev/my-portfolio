import { Fragment } from "react";
import Head from "next/head";

const Contact = () => {
  const profileLinks = [
    { name: "Twitter", link: "https://twitter.com/Hemsundar_1508" },
    { name: "Github", link: "https://github.com/Hemsundar15" },
    {
      name: "Instagram",
      link: "https://www.instagram.com/hemsundarr_paranthaman/",
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>Hem | Contact</title>
      </Head>

      <section className="contact">
        <h1>
          Let&apos;s do something <br />
          cool together!
        </h1>
        <a href="mailto: hemsundar.paranthaman@outlook.com" className="mailto">
          hemsundar.paranthaman@outlook.com
        </a>
        <div className="medialinks">
          {profileLinks.map((item, index) => (
            <a href={item.link} key={index}>
              {item.name}
            </a>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
