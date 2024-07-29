import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardFooter, CardTitle } from "~/components/ui/card";

interface TeamCardProperties {
  name: string;
  imageSrc: string;
  imageAlt: string;
  role: string;
  description: string;
  facebookURL?: string;
  instagramURL?: string;
  twitterURL?: string;
}

const TeamCard: React.FC<TeamCardProperties> = ({
  name,
  imageSrc,
  imageAlt,
  role,
  description,
  facebookURL,
  instagramURL,
  twitterURL,
}) => {
  return (
    <Card className="flex h-[400px] w-[277px] flex-col gap-4 border-none bg-subtle shadow-none">
      <div className="relative h-[205px] bg-neutral-300">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill={true}
          className="object-cover"
        />
      </div>

      <CardContent className="flex flex-col justify-between gap-5 px-[14.31px] pb-3.5">
        <div>
          <CardTitle className="pb-1 text-lg font-bold leading-[21.78px] text-neutral-600 md:font-semibold">
            {name}
          </CardTitle>
          <p className="pb-[7.16px] text-[12.53px] leading-[15.16px] text-neutral-600">
            {role}
          </p>
          <p className="md:text-normal line-clamp-3 text-sm font-medium leading-[19.36px] text-neutral-600 md:font-normal">
            {description}
          </p>
        </div>

        <CardFooter className="flex h-8 gap-3.5 p-0">
          {facebookURL && (
            <Link
              href={facebookURL}
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Facebook strokeWidth={1} />
            </Link>
          )}

          {instagramURL && (
            <Link
              href={instagramURL}
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Instagram strokeWidth={1} />
            </Link>
          )}
          {twitterURL && (
            <Link
              href={twitterURL}
              target="_blank"
              aria-label="Twitter"
              rel="noreferrer noopener"
            >
              <Twitter strokeWidth={1} />
            </Link>
          )}
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
