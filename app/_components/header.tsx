import Padding from './padding';

const Header = () => {
  return (
    <header className="bg-transparent z-50 fixed h-16 w-full top-0">
      <div className="bg-black text-white text-center w-full py-1">Site is under maintenance</div>

      <div className="flex items-center justify-between top-0 px-2">
        <a href="" className="text-xl">
          Hem
        </a>
        <nav className="flex gap-2">
          {['Work', 'About', 'Contact'].map((item) => (
            <a className="opacity-80">{item}</a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
