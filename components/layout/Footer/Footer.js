const Footer = () => {
  const profileLinks = [
    // {
    //   name: "Behance",
    // },
    { name: "Github", link: "https://github.com/Hemsundar15" },
    {
      name: "Instagram",
      link: "https://www.instagram.com/hemsundarr_paranthaman/",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/hemsundar-paranthaman-a65938234/",
    },
  ];

  return (
    <footer className="footer">
      <h1 className="footer__title">Let&apos;s do something</h1>
      <h1 className="footer__title">cool together!</h1>

      <a
        href="mailto: hemsundar.paranthaman@outlook.com"
        className="footer__mail"
      >
        hemsundar.paranthaman@outlook.com
      </a>
      <div className="footer__medialinks">
        {profileLinks.map((item, index) => (
          <a href={item.link} key={index}>
            {item.name}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
