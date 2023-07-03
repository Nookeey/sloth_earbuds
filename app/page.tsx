"use client";

import Button from "@/components/Button";
import ButtonFunctions from "@/components/ButtonFunctions";
import Compatibility from "@/components/Compatibility";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const leftElementVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

const rightElementVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const slideUpVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const fadeInVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <main className="">
      <section
        ref={ref}
        className="header px-[15px] min-h-screen flex items-center section-top bg-no-repeat bg-center"
      >
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-row flex-wrap items-center gap-[30px] mx-auto md:flex-nowrap">
            <div className="w-full md:w-6/12">
              <motion.h1
                className="font-bold uppercase mb-8 md:mb-16"
                variants={slideUpVariants}
              >
                Wireless <br /> Earbuds
              </motion.h1>
              <motion.h3
                className="font-semibold uppercase mb-8 md:mb-16"
                variants={slideUpVariants}
              >
                Odkryj wolność bezprzewodowego dźwięku i&nbsp;doświadcz
                niezwykłych brzmień!
              </motion.h3>
              <Image
                src="/images/header-product.png"
                alt=""
                width={667}
                height={637}
                className="block mx-auto object-contain md:hidden w-[70%] mb-8"
              />
              <motion.div
                className="text-center md:text-left"
                variants={slideUpVariants}
              >
                <Button>Kup teraz</Button>
              </motion.div>
            </div>
            <motion.div
              className="hidden md:block md:w-6/12"
              variants={slideUpVariants}
            >
              <Image
                src="/images/header-product.png"
                alt=""
                width={667}
                height={637}
                className="block mx-auto object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="bg-section-pattern bg-no-repeat bg-center bg-contain md:bg-auto mt-12 md:mt-0">
        <motion.section
          ref={ref}
          className="px-[15px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container">
            <div className="flex items-center gap-[30px] mx-auto flex-wrap-reverse md:flex-nowrap">
              <motion.div
                className="w-full md:w-6/12"
                variants={slideUpVariants}
              >
                <Image
                  src="/images/product-mirror.png"
                  alt=""
                  width={710}
                  height={645}
                  className="block mx-auto object-contain max-w-[70%] md:max-w-[100%] mt-4 mb-12"
                />
              </motion.div>
              <motion.div
                className="w-full md:w-6/12"
                variants={slideUpVariants}
              >
                <h2 className="font-bold uppercase mb-8">
                  Słuchawki bezprzewodowe z powerbankiem - najnowszy model
                </h2>
                <p className="text-justify">
                  Odkryj bezprzewodowy dźwięk w najlepszym stylu dzięki naszym
                  najnowszym słuchawkom TWS z ładowalnym etui. Dzięki
                  technologii Bluetooth 5.1, słuchawki bezprzewodowe łączą się z
                  każdym urządzeniem, zapewniając doskonałą jakość dźwięku.
                  Słuchaj muzyki, biegaj, trenuj i ciesz się ulubionymi utworami
                  gdziekolwiek jesteś. Wysokiej jakości magnetyczne wgłębienia w
                  etui chronią słuchawki przed wypadnięciem. Zamów teraz i
                  doświadcz swobody bez kabli!
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <section ref={ref} className="px-[15px] md:mt-24">
          <div className="container">
            <div className="flex items-center gap-[30px] mx-auto">
              <div className="w-full md:w-7/12">
                <h2 className="font-bold uppercase mb-8">
                  Nieustająca muzyka na wyciągnięcie ręki!
                </h2>
                <p className="text-justify mb-12">
                  Odkryj rewolucyjne słuchawki bezprzewodowe z wbudowanym
                  powerbankiem, które zapewnią Ci nieograniczoną muzykę bez
                  martwienia się o ładowanie. Dzięki wydajnemu powerbankowi w
                  etui, czas ładowania wynosi zaledwie jedną godzinę, a
                  następnie możesz cieszyć się cały dzień słuchania ulubionych
                  utworów. Niezależnie od miejsca i czasu, nasze słuchawki z
                  powerbankiem zapewnią Ci nieustającą przyjemność dźwięku.
                </p>
                <div className="text-center md:text-left">
                  <Button>Zamawiam</Button>
                </div>
              </div>
              <div className="w-5/12 hidden md:block">
                <Image
                  src="/images/battery-charging-full.svg"
                  alt=""
                  width={413}
                  height={436}
                  className="block mx-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section ref={ref} className="px-[15px] mt-24">
          <div className="container">
            <div className="flex items-center gap-[30px] mx-auto flex-wrap md:flex-nowrap">
              <div className="w-full md:w-4/12 hidden md:block">
                <Image
                  src="/images/earbuds-button.png"
                  alt=""
                  width={383}
                  height={651}
                  className="block mx-auto object-contain"
                />
              </div>
              <div className="w-full md:w-8/12">
                <h2 className="font-bold uppercase mb-8">
                  Wygodny przycisk wielofunkcyjny
                </h2>
                <p className="text-justify">
                  Odkryj moc naszego przycisku All-in-One umieszczonego na
                  przedniej części każdej słuchawki. To rozwiązanie, które
                  zapewni Ci pełną kontrolę bez względu na to, czy słuchasz
                  muzyki, czy oglądasz filmy.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] mt-12">
                  <ButtonFunctions
                    icon="icon_prev"
                    title="Poprzedni utwór"
                    description="dotykamy dwa razy lewej słuchawki"
                  />
                  <ButtonFunctions
                    icon="icon_back"
                    title="Następny utwór"
                    description="dotykamy dwa razy prawej słuchawki"
                  />
                  <ButtonFunctions
                    icon="icon_volume"
                    title="Głośniej / ciszej"
                    description="trzy krotne dotknięcie słuchawki"
                  />
                  <ButtonFunctions
                    icon="icon_back"
                    title="Pause / Play"
                    description="jednokrotny dotyk"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section ref={ref} className="px-[15px] mt-24">
        <div className="container">
          <div className="flex items-center gap-[30px] mx-auto flex-wrap md:flex-nowrap">
            <div className="w-full md:w-6/12">
              <h2 className="font-bold uppercase mb-8">
                Niezawodna ochrona przed wodą
              </h2>
              <p className="text-justify mb-10 md:mb-12">
                Nasze słuchawki zapewniają niezawodną ochronę przed wodą,
                spełniając wymogi klasyfikacji IPX4. Teraz możesz swobodnie
                pływać, brać prysznic, biegać nawet w deszczu i nie martwić się
                o ich uszkodzenie. Słuchawki są odporne na krótkotrwałe
                zanurzenie pod wodą, gwarantując Ci spokój i nieprzerwaną
                przyjemność użytkowania.
              </p>
              <Image
                src="/images/waterproof.png"
                alt=""
                width={583}
                height={667}
                className="block mx-auto object-contain max-w-[70%] md:max-w-[100%] md:hidden mb-10"
              />
              <div className="text-center md:text-left">
                <Button>Kup teraz</Button>
              </div>
            </div>
            <div className="w-full md:w-6/12 hidden md:block">
              <Image
                src="/images/waterproof.png"
                alt=""
                width={583}
                height={667}
                className="block mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        ref={ref}
        className="px-[15px] mt-24 bg-section-pattern bg-no-repeat bg-center"
      >
        <div className="container">
          <div className="text-center">
            <h2 className="font-bold uppercase mb-10 md:mb-20">
              Zestaw słuchawek bezprzewodowych
            </h2>
          </div>
          <div className="flex gap-[15px] sm:gap-[30px] mx-auto min-h-[400px] flex-wrap-reverse sm:flex-nowrap mb-10 sm:mb-0">
            <div className="w-full sm:w-5/12">
              <Image
                src="/images/set-earbuds.png"
                alt=""
                width={400}
                height={400}
                className="block mx-auto object-contain"
              />
            </div>
            <div className="w-2/12 relative hidden sm:block">
              <Image
                src="/images/point.svg"
                alt=""
                width={50}
                height={50}
                className="block mx-auto object-contain relative z-10"
              />
              <div className="w-[6px] h-full bg-[#700B97] absolute top-[25px] left-[50%] translate-x-[-50%] z-0"></div>
            </div>
            <div className="w-full sm:w-5/12">
              <h3 className="font-bold uppercase mb-8">Słuchawki</h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nobis reiciendis iusto animi id facere est labore, sed incidunt
                quibusdam aspernatur a at beatae ducimus consequuntur
                perspiciatis provident, voluptate vero!
              </p>
            </div>
          </div>
          <div className="flex gap-[15px] sm:gap-[30px] mx-auto min-h-[400px] flex-wrap-reverse sm:flex-nowrap mb-10 sm:mb-0">
            <div className="w-full sm:w-5/12">
              <Image
                src="/images/set-case.png"
                alt=""
                width={400}
                height={400}
                className="block mx-auto object-contain"
              />
            </div>
            <div className="w-2/12 relative hidden sm:block">
              <Image
                src="/images/point.svg"
                alt=""
                width={50}
                height={50}
                className="block mx-auto object-contain relative z-10"
              />
              <div className="w-[6px] h-full bg-[#700B97] absolute top-[25px] left-[50%] translate-x-[-50%] z-0"></div>
            </div>
            <div className="w-full sm:w-5/12">
              <h3 className="font-bold uppercase mb-8">Etui z powerbankiem</h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nobis reiciendis iusto animi id facere est labore, sed incidunt
                quibusdam aspernatur a at beatae ducimus consequuntur
                perspiciatis provident, voluptate vero!
              </p>
            </div>
          </div>
          <div className="flex gap-[15px] sm:gap-[30px] mx-auto min-h-[400px] flex-wrap-reverse sm:flex-nowrap mb-10 sm:mb-0">
            <div className="w-full sm:w-5/12">
              <Image
                src="/images/set-cable.png"
                alt=""
                width={400}
                height={400}
                className="block mx-auto object-contain"
              />
            </div>
            <div className="w-2/12 relative hidden sm:block">
              <Image
                src="/images/point.svg"
                alt=""
                width={50}
                height={50}
                className="block mx-auto object-contain relative z-10"
              />
              <div className="w-[6px] h-full bg-[#700B97] absolute top-[25px] left-[50%] translate-x-[-50%] z-0"></div>
            </div>
            <div className="w-full sm:w-5/12">
              <h3 className="font-bold uppercase mb-8">
                Kabel USB do ładowania
              </h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nobis reiciendis iusto animi id facere est labore, sed incidunt
                quibusdam aspernatur a at beatae ducimus consequuntur
                perspiciatis provident, voluptate vero!
              </p>
            </div>
          </div>
          <div className="flex gap-[15px] sm:gap-[30px] mx-auto min-h-[400px] flex-wrap-reverse sm:flex-nowrap mb-10 sm:mb-0">
            <div className="w-full sm:w-5/12">
              <Image
                src="/images/set-erasers.png"
                alt=""
                width={400}
                height={400}
                className="block mx-auto object-contain"
              />
            </div>
            <div className="w-2/12 hidden sm:block">
              <Image
                src="/images/point.svg"
                alt=""
                width={50}
                height={50}
                className="block mx-auto object-contain relative z-10"
              />
            </div>
            <div className="w-full sm:w-5/12">
              <h3 className="font-bold uppercase mb-8">
                Zestaw gumek o różnych wielkościach
              </h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nobis reiciendis iusto animi id facere est labore, sed incidunt
                quibusdam aspernatur a at beatae ducimus consequuntur
                perspiciatis provident, voluptate vero!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-pattern bg-no-repeat bg-center">
        <section ref={ref} className="px-[15px] md:mt-24">
          <div className="container">
            <div className="w-full md:w-8/12 lg:w-6/12 mx-auto text-center">
              <h2 className="font-bold uppercase mb-8">KOMPATYBILNOŚĆ</h2>
              <p>
                Słuchawki prezentowanej w tej ofercie świetnie współpracują z
                każdym urządzeniem które posiada opcję Bluetooth.
              </p>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap sm:justify-center lg:justify-between gap-[30px] mt-16">
              <Compatibility icon="icon_phone" title="Telefon" />
              <Compatibility icon="icon_laptop" title="Laptop" />
              <Compatibility icon="icon_tablet" title="Teblet" />
              <Compatibility icon="icon_tv" title="TV" />
              <Compatibility
                icon="icon_bluetooth"
                title="Urządzenia Bluetooth"
              />
            </div>
            <div className="text-center mt-16">
              <Button>Kup teraz</Button>
            </div>
          </div>
        </section>

        <section ref={ref} className="px-[15px] mt-20 md:mt-40">
          <div className="container">
            <div className="flex items-center gap-[30px] mx-auto">
              <div className="full md:w-8/12">
                <h2 className="font-bold uppercase mb-8">
                  SZYBKA i darmowa WYSYŁKA
                </h2>
                <Image
                  src="/images/shipment-car.svg"
                  alt=""
                  width={400}
                  height={400}
                  className="block mx-auto object-contain w-[180px] md:hidden mb-8"
                />
                <p className="text-justify">
                  Szybka dostawa to nasza specjalność! Realizujemy wysyłki w
                  ciągu zaledwie jednego dnia roboczego, bez żadnych dodatkowych
                  opłat. Bez względu na to, czy wybierzesz dostawę pod wskazany
                  adres czy do paczkomatu, zapewniamy Ci wygodę i niezawodność.
                  Nie trać czasu - zamów już teraz i ciesz się szybką i
                  bezpłatną dostawą Twoich zakupów.
                </p>
              </div>
              <div className="w-4/12 hidden md:block">
                <Image
                  src="/images/shipment-car.svg"
                  alt=""
                  width={400}
                  height={400}
                  className="block mx-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section ref={ref} className="px-[15px] mt-20 md:mt-24">
          <div className="container">
            <div className="flex items-center gap-[30px] mx-auto flex-wrap md:flex-nowrap">
              <div className="w-6/12 hidden md:block">
                <Image
                  src="/images/bottom-product.png"
                  alt=""
                  width={600}
                  height={600}
                  className="block mx-auto object-contain w-[70%] md:w-[100%]"
                />
              </div>
              <div className="w-full md:w-6/12">
                <h2 className="font-bold uppercase mb-8">DANE TECHNICZNE</h2>
                <ul className="mb-0 md:mb-12 ml-[17px] list-disc">
                  <li>Wersja Bluetooth: 5.1</li>
                  <li>Kolor dominujący: czarny</li>
                  <li>Zasięg Bluetooth: 20 m</li>
                  <li>Czas odtwarzania muzyki: 6 godzin</li>
                  <li>Czas czuwania: 120h</li>
                  <li>Pasmo przenoszenia: 20-20000 Hz</li>
                  <li>Certyfikat wodoodporności: IPX4</li>
                  <li>20-20000 Hz: TAK</li>
                </ul>
                <Image
                  src="/images/bottom-product.png"
                  alt=""
                  width={600}
                  height={600}
                  className="block mx-auto object-contain w-[70%] md:hidden my-4"
                />
                <div className="text-center md:text-left">
                  <Button>Zamawiam</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}
