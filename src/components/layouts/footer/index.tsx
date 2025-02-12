"use client";

import axios from "axios";
import {
  Copyright,
  Facebook,
  Instagram,
  Linkedin,
  XIcon,
  Youtube,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

import { getApiUrl } from "~/actions/getApiUrl";
import CustomButton from "~/components/common/common-button/common-button";
import { Input } from "~/components/common/input";
import LoadingSpinner from "~/components/miscellaneous/loading-spinner";
import { Toaster } from "~/components/ui/toaster";
import { useToast } from "~/components/ui/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const t = useTranslations("footer");
  const locale = localStorage.getItem("preferredLanguage");
  const toastDesc =
    locale === "fr"
      ? "Veuillez fournir votre e-mail"
      : locale === "es"
        ? "Por favor, proporcione su correo electrónico"
        : "Please provide your email";

  // handle submit
  const handleSubmit = async () => {
    setLoading(true);

    if (email === "") {
      toast({
        title: "Error",
        description: toastDesc,
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    // const payload = {
    //   email: values,
    // };

    try {
      const apiUrl = await getApiUrl();
      const response = await axios.post(
        `${apiUrl}/api/v1/newsletter-subscription`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      toast({
        title: "Success",
        description: response?.data?.message,
        variant: "default",
      });
      setLoading(false);
      setEmail("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "An unknown error occurred",
          variant: "destructive",
        });
      }
      setLoading(false);
    }
  };

  const footerLinks = [
    {
      title: t("navigation"),
      links: [
        { route: "home", link: "/" },
        { route: "aboutUs", link: "/about-us" },
        { route: "career", link: "/career" },
        { route: "features", link: "/" },
        { route: "blog", link: "/blog" },
      ],
    },
    {
      title: t("support"),
      links: [
        { route: "helpCenter", link: "/help-center" },
        { route: "faq", link: "/faqs" },
        { route: "waitingList", link: "/waitlist" },
        { route: "pricingExperience", link: "/pricing" },
        { route: "contactUs", link: "/contact-us" },
      ],
    },
    {
      title: t("legal"),
      links: [
        { route: "privacyPolicy", link: "/privacy-policy" },
        { route: "termsAndConditions", link: "/terms-and-conditions" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: XIcon,
      link: "/",
    },
    {
      icon: Youtube,
      link: "/",
    },
    {
      icon: Instagram,
      link: "/",
    },
    {
      icon: Linkedin,
      link: "/",
    },
    {
      icon: Facebook,
      link: "/",
    },
  ];

  const footerBottom = [
    { route: "privacyPolicy", link: "/" },
    { route: "termsOfUse", link: "/" },
  ];

  //

  return (
    <footer className="bg-background dark:bg-default">
      <div className="px-4">
        <div className="mx-auto w-full max-w-[1200px] items-start justify-between gap-[60px] pb-[130px] pt-[28px] sm:grid-cols-2 md:gap-4 md:pb-[46px] md:pt-[72px] lg:flex">
          <div className="mb-[100px] lg:mb-0">
            <div className="mb-[47px] flex w-full flex-col items-center justify-center sm:mb-[60px] md:block md:max-w-[254px] lg:mb-0">
              <h5 className="text-nuetral-dark-2 text-md mb-[34px] text-center font-bold sm:text-left">
                Boiler plate
              </h5>
              <p className="text-nuetral-dark-2 text-center text-[12px] font-medium sm:text-left">
                Logo subject details and address
              </p>
            </div>
            <div className="flex flex-col items-center justify-center md:block lg:hidden">
              <h5 className="text-neurtal-dark-2 text-md mb-4 text-center font-semibold sm:text-left md:mb-[36px]">
                {t("newsletterSignUp")}
              </h5>
              <div className="item flex h-[46px] w-full items-center justify-start md:max-w-[283px]">
                <Input
                  placeholder="Enter your email"
                  className="border-r-none text-md h-[46px] rounded-r-none border-r-0 border-r-transparent bg-transparent active:border-transparent"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                />
                <CustomButton
                  variant="primary"
                  className="h-full"
                  onClick={handleSubmit}
                >
                  {loading ? (
                    <span className="flex items-center gap-x-2">
                      <span className="animate-pulse">Loading</span>{" "}
                      <LoadingSpinner className="size-4 animate-spin sm:size-5" />
                    </span>
                  ) : (
                    "Subscibe"
                  )}
                </CustomButton>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-1 gap-y-[60px] md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {footerLinks.map((item, index) => {
              return (
                <div key={index}>
                  <h5 className="text-neurtal-dark-2 mb-[37px] text-[16px] font-semibold">
                    {item.title}
                  </h5>
                  <ul className="flex flex-col gap-4">
                    {item.links.map((item, index) => {
                      return (
                        <li key={index}>
                          <Link
                            href={item.link}
                            className="text-md cursor-pointer text-neutral-dark-2 transition-colors duration-300 hover:text-primary hover:underline dark:text-white"
                          >
                            {t(`links.${item.route}`)}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}

            <div className="hidden lg:block">
              <h5 className="text-neurtal-dark-2 text-md mb-4 font-semibold md:mb-[36px]">
                {t("newsletterSignUp")}
              </h5>
              <div className="item flex h-[46px] w-full max-w-[283px] items-center justify-start">
                <Input
                  className="border-r-none h-[46px] rounded-r-none border-r-0 border-r-transparent bg-transparent active:border-transparent"
                  placeholder={t("enterYourEmail")}
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                />
                <CustomButton
                  variant="primary"
                  className="h-full hover:bg-destructive"
                  onClick={handleSubmit}
                >
                  {loading ? (
                    <span className="flex items-center gap-x-2">
                      <span className="animate-pulse">Loading</span>{" "}
                      <LoadingSpinner className="size-4 animate-spin sm:size-5" />
                    </span>
                  ) : (
                    `${t("subscribe")}`
                  )}
                </CustomButton>
              </div>
            </div>

            <div className="lg:hidden">
              <h5 className="text-neurtal-dark-2 mb-[10px] text-[20px] font-semibold">
                {t("followUs")}
              </h5>
              <div className="flex w-full max-w-[116px] items-center justify-between gap-1 md:max-w-[212px]">
                {socialLinks.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-primary p-1 hover:bg-default md:h-10 md:w-10"
                    >
                      <item.icon className="h-[10px] w-[10px] text-white md:h-4 md:w-4" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-default"></div>
      <div className="px-4">
        <div className="mx-auto block w-full max-w-[1200px] items-center justify-between pb-[30px] pt-4 md:pt-[27px] lg:flex">
          <div className="hidden lg:block">
            <div className="flex w-full max-w-[116px] items-center justify-between gap-1 md:max-w-[212px]">
              {socialLinks.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-primary p-1 hover:bg-destructive md:h-10 md:w-10"
                  >
                    <item.icon className="h-[10px] w-[10px] text-white md:h-4 md:w-4" />
                  </div>
                );
              })}
            </div>
          </div>
          <span className="flex items-center justify-center text-center text-xs font-semibold text-stroke-colors-stroke">
            <Copyright className="h-5 w-5 text-stroke-colors-stroke" />
            {t("footerBottom.copyright")}
          </span>
          <div className="hidden lg:block">
            <ul className="flex items-center justify-between gap-[13px]">
              {footerBottom.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="cursor-pointer text-sm text-neutral-dark-2 transition-colors duration-300 hover:text-primary hover:underline"
                    >
                      {t(`footerBottom.${item.route}`)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <Toaster />
    </footer>
  );
};

export default Footer;
