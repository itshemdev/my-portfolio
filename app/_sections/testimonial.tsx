import { Lora, Roboto } from 'next/font/google';
import Line from '../_components/line';

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

const TestimonialSection = () => {
  return (
    <section className="px-4 min-[480px]:p-6 md:px-10">
      <div className="max-w-(--breakpoint-xl) m-auto">
        <Line className="mt-12" />
        <h2 className={`text-3xl lg:text-4xl mt-12 ${serif.variable}`}>
          Testimonials
        </h2>

        {/* <div className="mt-8 w-[100%] flex flex-col gap-12 md:flex-row">
            {[
              {
                description: `Hem's diverse skills in development and testing greatly benefit JadeCore. A crucial asset to our team.`,
                name: 'Abel',
                at: 'JadeCore',
                role: 'CEO',
              },
              {
                description: `Very fast and efficient. Great seller!`,
                name: 'Shahshauhin',
                at: 'Inner Balance Institute  ',
                role: 'CEO',
              },
              {
                description: `Hem went above and beyond what was required of the gig, very professional and much appreciated.`,
                name: 'Ryan',
                at: 'HypeDisco  ',
                role: 'CEO',
              },
            ].map((testimonial) => (
              <div
                className={`${roboto.className} w-1/2 relative w-full lg:w-full`}
                key={testimonial.at}
              >
                <p className="text-xl">"{testimonial.description}"</p>
                <p className="ml-0 text-sm mt-2 font-medium">
                  - {`${testimonial.name} at ${testimonial.at}`}
                </p>
              </div>
            ))}
          </div> */}
        <div className="mt-8 w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 \ gap-10 md:gap-y-16">
          {[
            {
              description: `Hem's diverse skills in development and testing greatly benefit JadeCore. A crucial asset to our team.`,
              name: 'Abel',
              at: 'JadeCore',
              role: 'CEO',
            },
            {
              description: `Hem went above and beyond what was required of the gig, very professional and much appreciated.`,
              name: 'Ryan',
              at: 'HypeDisco  ',
              role: 'CEO',
            },
            {
              description: `Very fast and efficient. Great seller!`,
              name: 'Shahshauhin',
              at: 'Inner Balance Institute  ',
              role: 'CEO',
            },
          ].map((testimonial, index) => (
            <div
              className={`${
                roboto.className
              } relative w-full h-full lg:w-full flex flex-col justify-between ${
                index === 2 &&
                'md:col-start-1 md:col-end-3 md:w-1/2 md:m-auto lg:col-start-3 lg:col-end-4'
              }`}
              key={testimonial.at}
            >
              <p className="text-xl">"{testimonial.description}"</p>
              <p className="ml-0 text-sm mt-2 font-medium">
                - {`${testimonial.name} at ${testimonial.at}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
