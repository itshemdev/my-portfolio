'use client';

import { Lora, Roboto } from 'next/font/google';
import Line from '../_components/line';
import Image from 'next/image';
import { useFormik } from 'formik';

const roboto = Roboto({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const lora = Lora({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-lora',
});

const serif = Lora({
  style: 'normal',
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-lora',
});

const ContactSection = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <section className="px-4 min-[480px]:px-6 md:px-10">
      <div className="max-w-(--breakpoint-xl) m-auto">
        <Line className="mb-16 mt-16" />
        <div className="flex items-center gap-20">
          <div className="relative hidden basis-5/12 aspect-square md:flex overflow-hidden rounded-full">
            <Image
              src={'/jean-philippe-delberghe-75xPHEQBmvA-unsplash.jpg'}
              alt="Photo of Hemsundar Paranthaman."
              fill
            />
          </div>
          <form
            className="basis-full md:basis-5/12 lg:p-10"
            action="https://usebasin.com/f/253e69c15bce"
            method="POST"
          >
            <h1 className="text-4xl lg:text-5xl">Get In Touch.</h1>
            <p className={`${roboto.className} mt-2`}>
              I would love to collaborate for something.
            </p>

            <div className={`mt-10 flex flex-col  gap-4 ${roboto.className}`}>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                className={`border-2 rounded-lg p-2 w-full `}
              />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className={`border-2 rounded-lg p-2 w-full ${roboto.className}`}
              />
              <textarea
                name="description"
                id=""
                className="border-2 w-full rounded-lg p-2"
                placeholder="Write something here."
              ></textarea>
              <button
                className={`block bg-black text-white px-4 py-2 rounded-lg`}
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
