import Link from "next/link";

interface HeroProps {
  image: string;
  headline: string;
  description: string;
  ctaLink: string;
  ctaText: string;
}

const Hero = ({
  image,
  headline,
  description,
  ctaLink,
  ctaText,
}: HeroProps) => {
  return (
    <div
      className="hero h-[calc(100vh-4rem)]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-screen-2xl">
          <h1 className="mb-5 text-5xl font-bold">{headline}</h1>
          <p className="mb-5">{description}</p>
          <Link href={ctaLink} className="btn btn-primary">
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
