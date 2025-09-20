"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Typography, Row, Col, Card } from "antd";

const { Title, Paragraph } = Typography;

const galleryImages = [
  "/me/IMG_1448.jpg",
  "/me/IMG_2651.jpg",
  "/me/IMG_2756.jpg",
];

const About = () => {
  const t = useTranslations("About");

  return (
    <section data-aos="fade-up" className="container-box px-4 md:px-0 py-10">
      <Row
        gutter={[16, 16]}
        justify="center"
        align="middle"
        className="mb-10 !max-w-[800px]"
      >
        <Col xs={24} md={10} className="flex justify-center">
          <Image
            alt="Profile Image"
            priority
            src="https://i.ibb.co/ZPwCNbQ/S-6774787-1.jpg"
            width={250}
            height={300}
            className="rounded-lg object-cover shadow-md"
          />
        </Col>
        <Col xs={24} md={14}>
          <Title level={1} className="text-center md:text-left">
            {t("aboutTitle")}
          </Title>
          <Paragraph className="mt-4 text-gray-700">{t("aboutp")}</Paragraph>
        </Col>
      </Row>

      <Paragraph className="my-10 text-center leading-relaxed text-gray-700">
        {t("aboutp1")}
      </Paragraph>

      <Row gutter={[16, 16]} justify="center">
        {galleryImages.map((src, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <div className="relative w-full h-[250px] overflow-hidden rounded-md shadow-md">
              <Image
                alt={`Gallery image ${index + 1}`}
                src={src}
                fill
                className="object-cover transition-transform hover:scale-105"
                priority={index === 0}
              />
            </div>
          </Col>
        ))}
      </Row>

      <Paragraph className="my-10 text-center leading-relaxed text-gray-700">
        {t("aboutp2")}
      </Paragraph>
    </section>
  );
};

export default About;
