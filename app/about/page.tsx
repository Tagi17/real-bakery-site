import Image from "next/legacy/image";
import rome from "./rome.jpg";

const About = () => {
  return (
    <div className="">
      <div className="">
        <h1 className="text-4xl text-center font-bold text-soft-pink mb-6 mt-20 shadow-lg">
          About
        </h1>
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-3xl mt-20 mb-6 text-center leading-relaxed">
            Hi I&apos;m Nazia,
          </p>
          <p className="text-3xl mb-6 text-center leading-relaxed">
            I&apos;m a 23 year old dessert enthusiast providing a range of
            baking services to businesses and customers.
          </p>
          <p className="text-3xl mb-6 text-center leading-relaxed">
            I&apos;ve always had a deep passion for baking since my childhood.
            In the past I wished to pursue a professional culinary education,
            however, seeing as I did not have the means to do so I decided to
            embark on my culinary journey at home.
          </p>
          <hr className="my-6 border-t border-soft-pink" />
          <p className="text-3xl  mb-9 text-center leading-relaxed">
            {/* The inspiration behind the name &quot;Celestine Crunch&quot; stems
            from my aspiration to create an experience of elegance and delight
            in every bite. me, food embodies the essence of joy and enchantment,
            and my goal is to infuse that sense of refinement into each of my
            desserts. I founded this company to share my desserts globally,
            allowing everyone to enjoy high-quality treats, because everyone
            deserves a little sweetness in life. */}
            The name &quot;losnazia&quot; reflects my personal touch and inspiration behind each creative dessert.
            Combining 'los' with my name signifies my role in crafting unique, high-quality treats.
            losnazia embodies elegance, joy, and enchantment, ensuring everyone enjoys a little sweetness in life.
          </p>
          <div className="flex justify-center mb-10">
            <Image src={rome} width={400} height={300} alt="me" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;