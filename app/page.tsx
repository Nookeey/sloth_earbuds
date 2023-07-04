"use client";

import Button from "@/components/Button";
import ButtonFunctions from "@/components/ButtonFunctions";
import Compatibility from "@/components/Compatibility";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimateWhenVisible from "./utils/AnimateWhenVisible";
import Link from "next/link";

const staggerVariants = {
  visible: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const slideLeftVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    x: -100,
  },
};

const slideRightVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: { opacity: 0, x: 100 },
};

const slideUpVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: { opacity: 0, y: 100 },
};

const fadeInVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hidden: { opacity: 0 },
};

export default function Home() {
  return (
    <motion.main className="overflow-hidden" initial="hidden" animate="visible">
      <motion.section
        className="header py-6 md:py-0 mb-10 md:mb-0 px-[15px] md:min-h-screen flex items-center section-top bg-no-repeat bg-center"
        variants={staggerVariants}
      >
        <div className="container">
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
              <motion.div variants={slideUpVariants}>
                <Image
                  src="/images/header-product.png"
                  alt=""
                  width={667}
                  height={637}
                  className="block mx-auto md:hidden w-[70%] mb-8"
                />
              </motion.div>
              <div className="text-center md:text-left">
                <motion.div variants={slideLeftVariants}>
                  <Link href="/order">
                    <Button>Kup teraz</Button>
                  </Link>
                </motion.div>
              </div>
            </div>
            <div className="hidden md:block md:w-6/12">
              <motion.div variants={slideRightVariants}>
                <Image
                  src="/images/header-product.png"
                  alt=""
                  width={667}
                  height={637}
                  className="block mx-auto"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="bg-section-pattern bg-no-repeat bg-center md:bg-auto">
        <section className="px-[15px]">
          <div className="container">
            <div className="flex items-center gap-[30px] mx-auto flex-wrap-reverse md:flex-nowrap">
              <div className="w-full md:w-6/12">
                <AnimateWhenVisible variants={slideLeftVariants}>
                  <Image
                    src="/images/product-mirror.png"
                    alt=""
                    width={710}
                    height={645}
                    className="block mx-auto max-w-[70%] md:max-w-[100%] mt-4 mb-12"
                  />
                </AnimateWhenVisible>
              </div>
              <div className="w-full md:w-6/12">
                <AnimateWhenVisible variants={slideRightVariants}>
                  <h2 className="font-bold uppercase mb-8">
                    Słuchawki bezprzewodowe z powerbankiem - najnowszy model
                  </h2>
                  <p className="text-justify">
                    Odkryj bezprzewodowy dźwięk w najlepszym stylu dzięki naszym
                    najnowszym słuchawkom TWS z ładowalnym etui. Dzięki
                    technologii Bluetooth 5.1, słuchawki bezprzewodowe łączą się
                    z każdym urządzeniem, zapewniając doskonałą jakość dźwięku.
                    Słuchaj muzyki, biegaj, trenuj i ciesz się ulubionymi
                    utworami gdziekolwiek jesteś. Wysokiej jakości magnetyczne
                    wgłębienia w etui chronią słuchawki przed wypadnięciem.
                    Zamów teraz i doświadcz swobody bez kabli!
                  </p>
                </AnimateWhenVisible>
              </div>
            </div>
          </div>
        </section>

        <section className="px-[15px] md:mt-24">
          <div className="container">
            <div className="flex items-center gap-[30px] mx-auto">
              <motion.div
                className="w-full md:w-7/12"
                variants={staggerVariants}
              >
                <AnimateWhenVisible variants={slideLeftVariants}>
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
                </AnimateWhenVisible>
                <div className="text-center md:text-left">
                  <AnimateWhenVisible variants={slideLeftVariants}>
                    <Link href="/order">
                      <Button>Zamawiam</Button>
                    </Link>
                  </AnimateWhenVisible>
                </div>
              </motion.div>
              <div className="w-5/12 hidden md:block">
                <AnimateWhenVisible variants={slideRightVariants}>
                  <Image
                    src="/images/battery-charging-full.svg"
                    alt=""
                    width={413}
                    height={436}
                    className="block mx-auto"
                  />
                </AnimateWhenVisible>
              </div>
            </div>
          </div>
        </section>

        <section className="px-[15px] mt-24">
          <div className="container">
            <div className="flex items-center gap-[30px] mx-auto flex-wrap md:flex-nowrap">
              <div className="w-full md:w-4/12 hidden md:block">
                <AnimateWhenVisible variants={slideLeftVariants}>
                  <Image
                    src="/images/earbuds-button.png"
                    alt=""
                    width={383}
                    height={651}
                    className="block mx-auto"
                  />
                </AnimateWhenVisible>
              </div>
              <div className="w-full md:w-8/12">
                <AnimateWhenVisible variants={slideRightVariants}>
                  <h2 className="font-bold uppercase mb-8">
                    Wygodny przycisk wielofunkcyjny
                  </h2>
                  <p className="text-justify">
                    Odkryj moc naszego przycisku All-in-One umieszczonego na
                    przedniej części każdej słuchawki. To rozwiązanie, które
                    zapewni Ci pełną kontrolę bez względu na to, czy słuchasz
                    muzyki, czy oglądasz filmy.
                  </p>
                </AnimateWhenVisible>
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] mt-12"
                  variants={staggerVariants}
                >
                  <AnimateWhenVisible variants={slideUpVariants}>
                    <ButtonFunctions
                      icon="icon_prev"
                      title="Poprzedni utwór"
                      description="dotykamy dwa razy lewej słuchawki"
                    />
                  </AnimateWhenVisible>
                  <AnimateWhenVisible variants={slideUpVariants}>
                    <ButtonFunctions
                      icon="icon_back"
                      title="Następny utwór"
                      description="dotykamy dwa razy prawej słuchawki"
                    />
                  </AnimateWhenVisible>
                  <AnimateWhenVisible variants={slideUpVariants}>
                    <ButtonFunctions
                      icon="icon_volume"
                      title="Głośniej / ciszej"
                      description="trzy krotne dotknięcie słuchawki"
                    />
                  </AnimateWhenVisible>
                  <AnimateWhenVisible variants={slideUpVariants}>
                    <ButtonFunctions
                      icon="icon_back"
                      title="Pause / Play"
                      description="jednokrotny dotyk"
                    />
                  </AnimateWhenVisible>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="px-[15px] mt-24">
        <div className="container">
          <div className="flex items-center gap-[30px] mx-auto flex-wrap md:flex-nowrap">
            <motion.div className="w-full md:w-6/12" variants={staggerVariants}>
              <AnimateWhenVisible variants={slideLeftVariants}>
                <h2 className="font-bold uppercase mb-8">
                  Niezawodna ochrona przed wodą
                </h2>
                <p className="text-justify mb-10 md:mb-12">
                  Nasze słuchawki zapewniają niezawodną ochronę przed wodą,
                  spełniając wymogi klasyfikacji IPX4. Teraz możesz swobodnie
                  pływać, brać prysznic, biegać nawet w deszczu i nie martwić
                  się o ich uszkodzenie. Słuchawki są odporne na krótkotrwałe
                  zanurzenie pod wodą, gwarantując Ci spokój i nieprzerwaną
                  przyjemność użytkowania.
                </p>
              </AnimateWhenVisible>
              <AnimateWhenVisible variants={slideLeftVariants}>
                <Image
                  src="/images/waterproof.png"
                  alt=""
                  width={583}
                  height={667}
                  className="block mx-auto max-w-[70%] md:max-w-[100%] md:hidden mb-10"
                />
              </AnimateWhenVisible>
              <div className="text-center md:text-left">
                <AnimateWhenVisible variants={slideLeftVariants}>
                  <Link href="/order">
                    <Button>Kup teraz</Button>
                  </Link>
                </AnimateWhenVisible>
              </div>
            </motion.div>
            <div className="w-full md:w-6/12 hidden md:block">
              <AnimateWhenVisible variants={slideRightVariants}>
                <Image
                  src="/images/waterproof.png"
                  alt=""
                  width={583}
                  height={667}
                  className="block mx-auto"
                />
              </AnimateWhenVisible>
            </div>
          </div>
        </div>
      </section>

      <section className="px-[15px] mt-24 bg-section-pattern bg-no-repeat bg-center">
        <div className="container">
          <div className="text-center">
            <AnimateWhenVisible variants={slideUpVariants}>
              <h2 className="font-bold uppercase mb-10 md:mb-20">
                Zestaw słuchawek bezprzewodowych
              </h2>
            </AnimateWhenVisible>
          </div>
          <div className="flex gap-[15px] sm:gap-[30px] mx-auto min-h-[400px] flex-wrap-reverse sm:flex-nowrap mb-10 sm:mb-0">
            <div className="w-full sm:w-5/12 sm:min-h-[300px]">
              <AnimateWhenVisible variants={slideLeftVariants}>
                <Image
                  src="/images/set-earbuds.png"
                  alt=""
                  width={244}
                  height={229}
                  className="block mx-auto mt-4 mb-8 sm:my-0 max-w-[60%] sm:max-w-[100%]"
                />
              </AnimateWhenVisible>
            </div>
            <div className="w-2/12 relative hidden sm:block">
              <AnimateWhenVisible variants={fadeInVariants}>
                <Image
                  src="/images/point.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="block mx-auto relative z-10"
                />
                <div className="w-[6px] h-full bg-[#700B97] absolute top-[25px] left-[50%] translate-x-[-50%] z-0"></div>
              </AnimateWhenVisible>
            </div>
            <div className="w-full sm:w-5/12 sm:min-h-[300px]">
              <AnimateWhenVisible variants={slideRightVariants}>
                <h3 className="font-bold uppercase mb-8">Słuchawki</h3>
                <p className="text-justify">
                  Słuchawki są kompatybilne z dowolnym urządzeniem wyposażonym w
                  Bluetooth, niezależnie od systemu operacyjnego i typu
                  urządzenia. Dzięki nim możesz swobodnie cieszyć się muzyką
                  podczas biegania, ćwiczeń lub w dowolnym miejscu, takim jak
                  samochód, dom, autobus czy spacer.
                </p>
              </AnimateWhenVisible>
            </div>
          </div>
          <div className="flex gap-[15px] sm:gap-[30px] mx-auto min-h-[400px] flex-wrap-reverse sm:flex-nowrap mb-10 sm:mb-0">
            <div className="w-full sm:w-5/12 sm:min-h-[300px]">
              <AnimateWhenVisible variants={slideLeftVariants}>
                <Image
                  src="/images/set-case.png"
                  alt=""
                  width={300}
                  height={287}
                  className="block mx-auto mt-4 mb-8 sm:my-0 max-w-[60%] sm:max-w-[100%]"
                />
              </AnimateWhenVisible>
            </div>
            <div className="w-2/12 relative hidden sm:block">
              <AnimateWhenVisible variants={fadeInVariants}>
                <Image
                  src="/images/point.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="block mx-auto relative z-10"
                />
                <div className="w-[6px] h-full bg-[#700B97] absolute top-[25px] left-[50%] translate-x-[-50%] z-0"></div>
              </AnimateWhenVisible>
            </div>
            <div className="w-full sm:w-5/12 sm:min-h-[300px]">
              <AnimateWhenVisible variants={slideRightVariants}>
                <h3 className="font-bold uppercase mb-8">
                  Etui z powerbankiem
                </h3>
                <p className="text-justify">
                  Etui z funkcją ładowania to obecnie najlepszy system dla
                  słuchawek bezprzewodowych. Dzięki magnetycznym wgłębieniom,
                  słuchawki są bezpiecznie zabezpieczone przed wypadnięciem, co
                  zapewnia większą ochronę.
                </p>
              </AnimateWhenVisible>
            </div>
          </div>
          <div className="flex gap-[15px] sm:gap-[30px] mx-auto min-h-[400px] flex-wrap-reverse sm:flex-nowrap mb-10 sm:mb-0">
            <div className="w-full sm:w-5/12 sm:min-h-[300px]">
              <AnimateWhenVisible variants={slideLeftVariants}>
                <Image
                  src="/images/set-cable.png"
                  alt=""
                  width={300}
                  height={221}
                  className="block mx-auto mt-4 mb-8 sm:my-0 max-w-[60%] sm:max-w-[100%]"
                />
              </AnimateWhenVisible>
            </div>
            <div className="w-2/12 relative hidden sm:block">
              <AnimateWhenVisible variants={fadeInVariants}>
                <Image
                  src="/images/point.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="block mx-auto relative z-10"
                />
                <div className="w-[6px] h-full bg-[#700B97] absolute top-[25px] left-[50%] translate-x-[-50%] z-0"></div>
              </AnimateWhenVisible>
            </div>
            <div className="w-full sm:w-5/12 sm:min-h-[300px]">
              <AnimateWhenVisible variants={slideRightVariants}>
                <h3 className="font-bold uppercase mb-8">
                  Kabel USB do ładowania
                </h3>
                <p className="text-justify">
                  W zestawie dołączony jest również kabel USB, który umożliwia
                  ładowanie etui. Dzięki temu łatwo i wygodnie można naładować
                  etui słuchawek, zapewniając im długotrwałe działanie.
                </p>
              </AnimateWhenVisible>
            </div>
          </div>
          <div className="flex gap-[15px] sm:gap-[30px] mx-auto min-h-[400px] flex-wrap-reverse sm:flex-nowrap mb-10 sm:mb-0">
            <div className="w-full sm:w-5/12 sm:min-h-[300px]">
              <AnimateWhenVisible variants={slideLeftVariants}>
                <Image
                  src="/images/set-erasers.png"
                  alt=""
                  width={287}
                  height={213}
                  className="block mx-auto mt-4 mb-8 sm:my-0 max-w-[60%] sm:max-w-[100%]"
                />
              </AnimateWhenVisible>
            </div>
            <div className="w-2/12 hidden sm:block">
              <AnimateWhenVisible variants={fadeInVariants}>
                <Image
                  src="/images/point.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="block mx-auto relative z-10"
                />
              </AnimateWhenVisible>
            </div>
            <div className="w-full sm:w-5/12 sm:min-h-[300px]">
              <AnimateWhenVisible variants={slideRightVariants}>
                <h3 className="font-bold uppercase mb-8">
                  Zestaw gumek o różnych wielkościach
                </h3>
                <p className="text-justify">
                  Zestaw gumek dousznych oferuje różne rozmiary, dzięki czemu
                  każdy może znaleźć idealne dopasowanie. W zestawie znajdują
                  się trzy różne rozmiary, co pozwala na dopasowanie ich do
                  indywidualnych preferencji i komfortu użytkownika.
                </p>
              </AnimateWhenVisible>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-pattern bg-no-repeat bg-center">
        <section className="px-[15px]">
          <div className="container">
            <div className="w-full md:w-8/12 lg:w-6/12 mx-auto text-center">
              <AnimateWhenVisible variants={slideUpVariants}>
                <h2 className="font-bold uppercase mb-8">KOMPATYBILNOŚĆ</h2>
                <p>
                  Słuchawki prezentowanej w tej ofercie świetnie współpracują z
                  każdym urządzeniem które posiada opcję Bluetooth.
                </p>
              </AnimateWhenVisible>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-x-[0px] sm:gap-x-[30px] gap-[30px] mt-16">
              <AnimateWhenVisible
                variants={slideUpVariants}
                className="w-1/2 sm:w-1/4"
              >
                <Compatibility icon="icon_phone" title="Telefon" />
              </AnimateWhenVisible>
              <AnimateWhenVisible
                variants={slideUpVariants}
                className="w-1/2 sm:w-1/4"
              >
                <Compatibility icon="icon_laptop" title="Laptop" />
              </AnimateWhenVisible>
              <AnimateWhenVisible
                variants={slideUpVariants}
                className="w-1/2 sm:w-1/4"
              >
                <Compatibility icon="icon_tablet" title="Teblet" />
              </AnimateWhenVisible>
              <AnimateWhenVisible
                variants={slideUpVariants}
                className="w-1/2 sm:w-1/4"
              >
                <Compatibility icon="icon_tv" title="TV" />
              </AnimateWhenVisible>
              <AnimateWhenVisible
                variants={slideUpVariants}
                className="w-1/2 sm:w-1/4"
              >
                <Compatibility
                  icon="icon_bluetooth"
                  title="Urządzenia Bluetooth"
                />
              </AnimateWhenVisible>
            </div>
            <div className="text-center mt-16">
              <AnimateWhenVisible variants={slideUpVariants}>
                <Link href="/order">
                  <Button>Kup teraz</Button>
                </Link>
              </AnimateWhenVisible>
            </div>
          </div>
        </section>

        <section className="px-[15px] mt-20 md:mt-40">
          <div className="container">
            <div className="flex items-center gap-[30px] mx-auto">
              <div className="full md:w-8/12">
                <AnimateWhenVisible variants={slideLeftVariants}>
                  <h2 className="font-bold uppercase mb-8">
                    SZYBKA i darmowa WYSYŁKA
                  </h2>
                </AnimateWhenVisible>
                <AnimateWhenVisible variants={slideLeftVariants}>
                  <Image
                    src="/images/shipment-car.svg"
                    alt=""
                    width={300}
                    height={300}
                    className="block mx-auto w-[180px] md:hidden mb-8"
                  />
                </AnimateWhenVisible>
                <AnimateWhenVisible variants={slideLeftVariants}>
                  <p className="text-justify">
                    Szybka dostawa to nasza specjalność! Realizujemy wysyłki w
                    ciągu zaledwie jednego dnia roboczego, bez żadnych
                    dodatkowych opłat. Bez względu na to, czy wybierzesz dostawę
                    pod wskazany adres czy do paczkomatu, zapewniamy Ci wygodę i
                    niezawodność. Nie trać czasu - zamów już teraz i ciesz się
                    szybką i bezpłatną dostawą Twoich zakupów.
                  </p>
                </AnimateWhenVisible>
              </div>
              <div className="w-4/12 hidden md:block">
                <AnimateWhenVisible variants={slideRightVariants}>
                  <Image
                    src="/images/shipment-car.svg"
                    alt=""
                    width={400}
                    height={400}
                    className="block mx-auto"
                  />
                </AnimateWhenVisible>
              </div>
            </div>
          </div>
        </section>

        <section className="px-[15px] mt-20 md:mt-24">
          <div className="container">
            <div className="flex items-center gap-[30px] mx-auto flex-wrap md:flex-nowrap">
              <div className="w-6/12 hidden md:block">
                <AnimateWhenVisible variants={slideLeftVariants}>
                  <Image
                    src="/images/bottom-product.png"
                    alt=""
                    width={600}
                    height={600}
                    className="block mx-auto w-[70%] md:w-[100%]"
                  />
                </AnimateWhenVisible>
              </div>
              <div className="w-full md:w-6/12">
                <AnimateWhenVisible variants={slideRightVariants}>
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
                </AnimateWhenVisible>
                <AnimateWhenVisible variants={slideRightVariants}>
                  <Image
                    src="/images/bottom-product.png"
                    alt=""
                    width={600}
                    height={600}
                    className="block mx-auto w-[70%] md:hidden my-4"
                  />
                </AnimateWhenVisible>
                <AnimateWhenVisible variants={slideRightVariants}>
                  <div className="text-center md:text-left">
                    <Link href="/order">
                      <Button>Zamawiam</Button>
                    </Link>
                  </div>
                </AnimateWhenVisible>
              </div>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </motion.main>
  );
}
function useMediaQuery(arg0: string) {
  throw new Error("Function not implemented.");
}
