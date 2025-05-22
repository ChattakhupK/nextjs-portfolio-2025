"use client";
import { Switch } from "antd";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import React, { useTransition } from "react";

const LangButton = ({ currentLocale }) => {
  console.log("s", currentLocale);
  const t = useTranslations("Lang");
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleChange = (checked) => {
    const newLocale = checked ? "en" : "th";

    startTransition(() => {
      setTimeout(() => {
        router.replace(newLocale);
      }, 500);
    });
  };

  return (
    <div className="flex items-center text-white">
      <span className="pr-4 select-none">|</span>
      <Switch
        checkedChildren={t("en")}
        unCheckedChildren={t("th")}
        checked={currentLocale === "en"}
        onChange={handleChange}
        loading={isPending}
      />
    </div>
  );
};

export default LangButton;
