import "./globals.css";

import Image from "next/legacy/image";
import Link from "next/link";
import crunchnw from "./crunchnw.png";
import mousse from "./mousse.png";
import styles from "./components/Navbar.module.css";

const Home = () => {
  return (
    <div className="bg-cream text-center p-8">
      <div className="text-gray-800 text-3xl md:text-4xl font-semibold pt-12 pb-5">
        Artisanal Desserts Crafted for Every Occassion
      </div>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-gray-700 text-lg md:text-xl leading-relaxed pt-3">
          I&apos;m a private dessert chef offering custom, high-quality desserts
          for coffee shops, restaurants, events, and businesses. I specialize in
          creating desserts that complement your offerings, whether it&apos;s
          for a special event or as a permanent addition to your menu. My goal
          is to craft desserts that your customers will truly enjoy and
          remember.
        </div>
        <div className="text-2xl md:text-3xl text-primary mt-4">
          <a
            href="https://xwp9igsg572.typeform.com/to/zCfU4ywc"
            target="_blank"
            rel="noopener noreferrer"
            className=" underline"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center py-16 text-center bg-light-peach">
        <div className="text-gray-800 text-3xl md:text-4xl font-semibold mb-3">
          Welcome to
        </div>
        <div className="text-gray-600 text-3xl md:text-4xl mb-6">losnazia</div>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-2">
            Born from a profound passion for desserts, losnazia is dedicated to
            offering unique and eclectic flavor combinations. I strive to create
            delightful culinary experiences, inviting everyone to explore the
            joy of my creations.
          </p>
        </div>
        <Link href="/about" passHref>
          <button className="button-83 text-lg md:text-xl">My Story</button>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-19">
        <div className="text-gray-800 text-3xl md:text-4xl text-center mb-7">
          Testimonials
        </div>
        <div className="text-gray-700 text-xl leading-relaxed">
          &quot;We are thrilled to feature losnazia&apos;s exceptional cookies
          at Fudgarten. Their dedication to quality and flavor excellence
          enhances our offerings and delights our customers.&quot;
          <span className="block mt-4 mb-2 text-gray-600">- Fudgarten</span>
        </div>
      </div>
    </div>
  );
};
export default Home;
