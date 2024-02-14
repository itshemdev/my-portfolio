import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black py-14 mt-16 px-4">
      <h2 className="text-4xl text-white">Have a project in mind?</h2>
      <a href="" className="text-white text-xl mt-2 block">
        hemsundar.paranthaman@outlook.com
      </a>

      {/* <div>{[{ link: 'https://github.com/itshemdsev', icon:  }]}</div> */}
      <div className="mt-8 flex gap-6">
        <a
          href="https://github.com/itshemdev"
          className="relative w-10 aspect-square block"
        >
          <Image src={'/icons/github-light-icon.png'} alt="Github icon" fill />
        </a>
        <a
          href="https://github.com/itshemdev"
          className="relative w-10 aspect-square block"
        >
          <Image src={'/icons/twitter-icon.png'} alt="Twitter icon" fill />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
