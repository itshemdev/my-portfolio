import Image from 'next/image';
import { Roboto } from 'next/font/google';
import Motion from './motion';

const roboto = Roboto({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const WorkCard = ({
  title,
  subTitle,
  imageUrl,
  link,
}: {
  title: string;
  subTitle: string;
  imageUrl: string;
  link: string;
}) => {
  const onClick = () => {
    document.location.href = link;
  };

  return (
    <a href={link} target="_blank">
      <div className={`basis-1/2`}>
        <div className="overflow-hidden">
          <Motion
            initial={{ transform: 'scale(1)' }}
            whileHover={{ transform: 'scale(1.05)' }}
            className="relative w-full h-full aspect-square overflow-hidden"
          >
            <Image
              src={imageUrl}
              alt={title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </Motion>
        </div>
        <div className="mt-1 flex justify-between items-center">
          <div className="flex flex-col">
            <h4 className={`text-xl ${roboto.className}`}>{title}</h4>
            <h5 className={`text-xs ${roboto.className}`}>{subTitle}</h5>
          </div>
          <div className="max-w-[32px] md:max-w-[42px] relative">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/long-arrow-right--v1.png"
              alt="long-arrow-right--v1"
            />
          </div>
        </div>
      </div>
    </a>
  );
};

export default WorkCard;
