"use client"

import 'react';
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { useTranslation } from 'react-i18next';

const TAB_DATA = [
  {
    title: "Lenguajes",
    id: "Lenguajes",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "educacion",
    id: "educacion",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack</li>
        <li>Universidad Tecnológica de Tula Tepeji</li>
        <Image src="/images/ut.png" width={75} height={75} />
      </ul>
    ),
  },
  {
    title: "Certificados",
    id: "certificados",
    content: (
      <ul className="list-disc pl-2">
        <li>Tengo una certificacion en Cisco de Linux</li>
        <Image src="/images/linux.png" width={75} height={75} />
      </ul>
    ),
  },
];

const AboutSection = () => {
  const { t } = useTranslation();

  const [tab, setTab] = useState("Lenguajes");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="Sobre mi">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/pro.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">{t('aboutMe')}</h2>
          <p className="text-base lg:text-lg">{t('developerIntro')}</p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("Lenguajes")}
              active={tab === "Lenguajes"}
            >
              {t('languages')}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("educacion")}
              active={tab === "educacion"}
            >
              {t('education')}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certificados")}
              active={tab === "certificados"}
            >
              {t('certificates')}
            </TabButton>
          </div>
          
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
