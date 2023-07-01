import Button from "@/components/Button";
import ButtonFunctions from "@/components/ButtonFunctions";
import Compatibility from "@/components/Compatibility";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section className="px-[15px] min-h-screen flex items-center">
        <div className="container">
          <div className="flex flex-row items-center gap-[30px] mx-auto">
            <div className="w-6/12">
              <h1 className="font-bold uppercase mb-16">
                Wireless <br /> Earbuds
              </h1>
              <h3 className="font-semibold uppercase mb-16">
                Odkryj wolność bezprzewodowego dźwięku i doświadcz niezwykłych
                brzmień!
              </h3>
              <Button>Kup teraz</Button>
            </div>
            <div className="w-6/12">
              <Image
                src="/images/header-product.png"
                alt=""
                width={667}
                height={637}
                className="block mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-pattern bg-no-repeat bg-center">
        <section className="px-[15]">
          <div className="container">
            <div className="flex items-center gap-[30px] mx-auto">
              <div className="w-6/12">
                <Image
                  src="/images/product-mirror.png"
                  alt=""
                  width={710}
                  height={645}
                  className="block mx-auto object-contain"
                />
              </div>
              <div className="w-6/12">
                <h2 className="font-bold uppercase mb-10">
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
              </div>
            </div>
          </div>
        </section>

        <section className="px-[15] mt-24">
          <div className="container">
            <div className="flex items-center gap-[30px] mx-auto">
              <div className="w-7/12">
                <h2 className="font-bold uppercase mb-10">
                  Nieustająca muzyka na wyciągnięcie ręki!
                </h2>
                <p className="text-justify mb-8">
                  Odkryj rewolucyjne słuchawki bezprzewodowe z wbudowanym
                  powerbankiem, które zapewnią Ci nieograniczoną muzykę bez
                  martwienia się o ładowanie. Dzięki wydajnemu powerbankowi w
                  etui, czas ładowania wynosi zaledwie jedną godzinę, a
                  następnie możesz cieszyć się cały dzień słuchania ulubionych
                  utworów. Niezależnie od miejsca i czasu, nasze słuchawki z
                  powerbankiem zapewnią Ci nieustającą przyjemność dźwięku.
                </p>
                <Button>Zamawiam</Button>
              </div>
              <div className="w-5/12">
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

        <section className="px-[15] mt-24">
          <div className="container">
            <div className="flex items-center gap-[30px] mx-auto">
              <div className="w-4/12">
                <Image
                  src="/images/earbuds-button.png"
                  alt=""
                  width={383}
                  height={651}
                  className="block mx-auto object-contain"
                />
              </div>
              <div className="w-8/12">
                <h2 className="font-bold uppercase mb-10">
                  Wygodny przycisk wielofunkcyjny
                </h2>
                <p className="text-justify">
                  Odkryj moc naszego przycisku All-in-One umieszczonego na
                  przedniej części każdej słuchawki. To rozwiązanie, które
                  zapewni Ci pełną kontrolę bez względu na to, czy słuchasz
                  muzyki, czy oglądasz filmy.
                </p>
                <div className="flex gap-[30px] mt-20">
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

      <section className="px-[15] mt-24">
        <div className="container">
          <div className="flex items-center gap-[30px] mx-auto">
            <div className="w-6/12">
              <h2 className="font-bold uppercase mb-10">
                Niezawodna ochrona przed wodą
              </h2>
              <p className="text-justify mb-8">
                Nasze słuchawki zapewniają niezawodną ochronę przed wodą,
                spełniając wymogi klasyfikacji IPX4. Teraz możesz swobodnie
                pływać, brać prysznic, biegać nawet w deszczu i nie martwić się
                o ich uszkodzenie. Słuchawki są odporne na krótkotrwałe
                zanurzenie pod wodą, gwarantując Ci spokój i nieprzerwaną
                przyjemność użytkowania.
              </p>
              <Button>Kup teraz</Button>
            </div>
            <div className="w-6/12">
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

      <section className="px-[15] mt-24 bg-section-pattern bg-no-repeat bg-center bg-contain">
        <div className="container">
          <div className="text-center">
            <h2 className="font-bold uppercase mb-10">
              Zestaw słuchawek bezprzewodowych
            </h2>
          </div>
          <div className="flex gap-[30px] mx-auto min-h-[400px]">
            <div className="w-5/12">
              <Image
                src="/images/set-earbuds.png"
                alt=""
                width={400}
                height={400}
                className="block mx-auto object-contain"
              />
            </div>
            <div className="w-2/12 relative">
              <Image
                src="/images/point.svg"
                alt=""
                width={50}
                height={50}
                className="block mx-auto object-contain relative z-10"
              />
              <div className="w-[6px] h-full bg-[#700B97] absolute top-[25px] left-[50%] translate-x-[-50%] z-0"></div>
            </div>
            <div className="w-5/12">
              <h3 className="font-bold uppercase mb-8">Słuchawki</h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nobis reiciendis iusto animi id facere est labore, sed incidunt
                quibusdam aspernatur a at beatae ducimus consequuntur
                perspiciatis provident, voluptate vero!
              </p>
            </div>
          </div>
          <div className="flex gap-[30px] mx-auto min-h-[400px]">
            <div className="w-5/12">
              <Image
                src="/images/set-case.png"
                alt=""
                width={400}
                height={400}
                className="block mx-auto object-contain"
              />
            </div>
            <div className="w-2/12 relative">
              <Image
                src="/images/point.svg"
                alt=""
                width={50}
                height={50}
                className="block mx-auto object-contain relative z-10"
              />
              <div className="w-[6px] h-full bg-[#700B97] absolute top-[25px] left-[50%] translate-x-[-50%] z-0"></div>
            </div>
            <div className="w-5/12">
              <h3 className="font-bold uppercase mb-8">Etui z powerbankiem</h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nobis reiciendis iusto animi id facere est labore, sed incidunt
                quibusdam aspernatur a at beatae ducimus consequuntur
                perspiciatis provident, voluptate vero!
              </p>
            </div>
          </div>
          <div className="flex gap-[30px] mx-auto min-h-[400px]">
            <div className="w-5/12">
              <Image
                src="/images/set-cable.png"
                alt=""
                width={400}
                height={400}
                className="block mx-auto object-contain"
              />
            </div>
            <div className="w-2/12 relative">
              <Image
                src="/images/point.svg"
                alt=""
                width={50}
                height={50}
                className="block mx-auto object-contain relative z-10"
              />
              <div className="w-[6px] h-full bg-[#700B97] absolute top-[25px] left-[50%] translate-x-[-50%] z-0"></div>
            </div>
            <div className="w-5/12">
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
          <div className="flex gap-[30px] mx-auto min-h-[400px]">
            <div className="w-5/12">
              <Image
                src="/images/set-erasers.png"
                alt=""
                width={400}
                height={400}
                className="block mx-auto object-contain"
              />
            </div>
            <div className="w-2/12">
              <Image
                src="/images/point.svg"
                alt=""
                width={50}
                height={50}
                className="block mx-auto object-contain relative z-10"
              />
            </div>
            <div className="w-5/12">
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

      <section className="bg-section-pattern bg-no-repeat bg-center bg-contain">
        <section className="px-[15] mt-24">
          <div className="container">
            <div className="w-6/12 mx-auto text-center">
              <h2 className="font-bold uppercase mb-10">KOMPATYBILNOŚĆ</h2>
              <p>
                Słuchawki prezentowanej w tej ofercie świetnie współpracują z
                każdym urządzeniem które posiada opcję Bluetooth.
              </p>
            </div>
            <div className="flex justify-between gap-[30px] mt-16">
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

        <section className="px-[15] mt-24">
          <div className="container">
            <div className="flex items-center gap-[30px] mx-auto">
              <div className="w-8/12">
                <h2 className="font-bold uppercase mb-10">
                  SZYBKA i darmowa WYSYŁKA
                </h2>
                <p className="text-justify">
                  Szybka dostawa to nasza specjalność! Realizujemy wysyłki w
                  ciągu zaledwie jednego dnia roboczego, bez żadnych dodatkowych
                  opłat. Bez względu na to, czy wybierzesz dostawę pod wskazany
                  adres czy do paczkomatu, zapewniamy Ci wygodę i niezawodność.
                  Nie trać czasu - zamów już teraz i ciesz się szybką i
                  bezpłatną dostawą Twoich zakupów.
                </p>
              </div>
              <div className="w-4/12">
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

        <section className="px-[15] mt-24">
          <div className="container">
            <div className="flex items-center gap-[30px] mx-auto">
              <div className="w-6/12">
                <Image
                  src="/images/bottom-product.png"
                  alt=""
                  width={600}
                  height={600}
                  className="block mx-auto object-contain"
                />
              </div>
              <div className="w-6/12">
                <h2 className="font-bold uppercase mb-10">DANE TECHNICZNE</h2>
                <ul className="mb-10 ml-[17px] list-disc">
                  <li>Wersja Bluetooth: 5.1</li>
                  <li>Kolor dominujący: czarny</li>
                  <li>Zasięg Bluetooth: 20 m</li>
                  <li>Czas odtwarzania muzyki: 6 godzin</li>
                  <li>Czas czuwania: 120h</li>
                  <li>Pasmo przenoszenia: 20-20000 Hz</li>
                  <li>Certyfikat wodoodporności: IPX4</li>
                  <li>20-20000 Hz: TAK</li>
                </ul>
                <Button>Zamawiam</Button>
              </div>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}
