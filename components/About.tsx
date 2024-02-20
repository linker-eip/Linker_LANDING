'use client'
import { useState } from "react";
import styles from "../styles/About.module.scss";

type Tab = 'mobile' | 'web';

const About = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<Tab>('mobile');

  const toggleTab = (tab: Tab) => {
    setActiveTab(tab);
  };

  const videoUrls = {
    mobile: "https://www.youtube.com/embed/Z3ejysKJC20?si=4gDO8met1qlEuxKd",
    web: "https://www.youtube.com/embed/NEAtKgqPFGo?si=1W6Ser0qytPMiUQR"
  };

  return (
    <div className="bg-white md:mt-10" id="about">
      <div data-aos="fade-up" className="container mx-auto flex flex-col items-center py-8 px-4">
        <h1 className="text-2xl md:text-4xl font-medium text-gray-100 mb-5 md:mb-8">Le futur du freelance étudiant</h1>
        <p className="text-base md:text-2xl text-gray-100 mb-5 md:mb-16 text-center">
          Linker est une application web et mobile visant à <br />
          mettre en avant le freelance étudiant en tant que <br />
          groupe pluri-disciplinaire.
        </p>
        <div className={styles.switchContainer}>
          <button
            className={`${styles.tab} ${activeTab === 'mobile' ? styles.active : ''}`}
            onClick={() => toggleTab('mobile')}>
            <span className={styles.smallText}>Vidéo de présentation</span>
            APPLICATION MOBILE
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'web' ? styles.active : ''}`}
            onClick={() => toggleTab('web')}>
            <span className={styles.smallText}>Vidéo de présentation</span>
            APPLICATION WEB
          </button>
          <div className={`${styles.activeBackground} ${activeTab === 'mobile' ? styles.mobileActive : styles.webActive}`}></div>
        </div>
        <div data-aos="fade-up" className="shadow-3xl my-10 md:my-16 rounded-3xl">
          <iframe
            className={styles.videoFrame}
            width="700"
            height="450"
            src={videoUrls[activeTab]}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default About