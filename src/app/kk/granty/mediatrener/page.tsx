"use client";
import "@/css/embla.css";
import "@/css/sandbox.css";
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import { WhatsappShareButton, TelegramShareButton } from "react-share";
import { EmblaOptionsType } from "embla-carousel";
import Video from "next-video";
import "./lol.css";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import CustomAccordion from "@/components/accordion_journalist";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 7;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys(), i => `Media_kz${i}`);;
const faqItems = [
  {
    question: "Гранттық бағдарламаға кім қатыса алады?    ",
    answer: `Үміткер Қазақстан Республикасының азаматы болуға, бұқаралық ақпарат құралдары саласында кемінде 5 жыл жұмыс тәжірибесі және жоғары білімі болуға тиіс`,
  },
  {
    question: "Грант қандай тақырыптық бағыттар бойынша берілетін болады?",
    answer: (
      <div>
        Медиа тренерлерге арналған гранттар келесі тақырыптар бойынша оқыту
        тренингтері мен курстарын өткізу мақсатында беріледі:
        <ul>
          <li>- аналитикалық журналистика;</li>
          <li>- сезімтал тақырыптарды қамту (кәсіби медиа этика);</li>
          <li>
            - ақпаратты зерттеу және беру кезіндегі сыни талдау және
            объективтілік.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Гранттық бағдарламаға қалай қатысуға болады?",
    answer: `Журналистер мен блогерлерді оқыту үшін грант алуға үміткерлер толтырылған өтінімді; жоспарланған курс туралы ақпараты бар сауалнаманы; өз жобаларының қысқаша сипаттамасы бар түйіндемені (құжаттардың нысандары қоса беріледі) тіркейді.`,
  },
  {
    question:
      "Жеке кәсіпкерлік субъектісі болып табылатын бір заңды тұлғадан қанша медиатренер гранттық конкурсқа қатыса алады?",
    answer: "Бір заңды тұлға – бір медиа тәлімгер.",
  },
  {
    question: "Медиа өнімді жасау үшін қандай талаптар қойылады?",
    answer: "Медиа өнімнің форматы мен жанрына шектеу қойылмайды.",
  },
  {
    question: "Өтініште үміткерге қандай ақпаратты көрсету керек?",
    answer: `Үміткер бағдарламаның қай бағытын таңдағанын көрсетуі керек; қай өңірде оқытуды жоспарлап отырғанын; оқыту қай тілде болатынын; курстың ұзақтығын; қанша журналист пен блогер оқыту бағдарламасымен қамтылатынын; серіктестер және бағдарламаның бюджетін көрсету керек. `,
  },
  {
    question: "Үміткердің өтінімін бағалау критерийлерін көрсетіңіз.",
    answer: (
      <div>
        Өтінім бес негізгі критерий бойынша бағаланады:
        <ul>
          <li>
            - оқу жоспары курстың бағытына, міндеттеріне және күтілетін
            нәтижелеріне қаншалықты сәйкес келеді;
          </li>
          <li>
            {" "}
            - курстың оқу жоспары мазмұнының өзектілігі және тәжірибеге
            бағдарлану.
          </li>
          <li> - сабақтастық, толық қамтылу, курстың ақпараттылығы;</li>
          <li> - курс бюджетінің шынайылығы мен толықтығы;</li>
          <li>
            {" "}
            - кандидаттың білімі және оның бұқаралық ақпарат құралдары
            саласындағы жұмыс тәжірибесі.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Үміткердің өтінімі қалай және кіммен бағаланады?",
    answer:
      "Үміткердің өтінімін конкурстық комиссия 5 критерий бойынша және 10 балдық шкаламен бағаланады. ",
  },
  {
    question: "Үміткердің түйіндемесін бағалау критерийлері бар ма?",
    answer:
      "Бар. Түйіндемені бағалаудың негізгі критерийі - үміткердің білімі және оның бұқаралық ақпарат құралдарындағы тәжірибесі. 5 балдық жүйе бойынша бағаланады.",
  },
  {
    question: "Грант алушы ҚР қай аймағында оқуларды өткізе алады?",
    answer:
      "Грант алушы таңдаған бір бағыт бойынша бір толық курсты тек бір аймақта өткізе алады.",
  },
  {
    question:
      "Грант алушы өз курсымен қанша журналист пен блогерге оқу өткізе алады?",
    answer: "Грант алушы өз курсына кем дегенде он маманды оқыта алады.    ",
  },
  {
    question: "Курс оқушыларының тізімін қормен келісілу қажет пе?",
    answer:
      "Грант алушы оқушылардың тізімін өзі құрып, Қормен келісілуі міндетті.",
  },
  {
    question:
      "Егер грант алушы оқыту курсына серіктестерді тартса, қормен келісілу қажет пе?",
    answer: " Иә, келісілу қажет.      ",
  },
  {
    question: "Гранттың мөлшері қандай?    ",
    answer:
      "Журналистер мен блогерлерді оқытуға медиа тренерлерге арналған грант мөлшері: 5 млн теңгеге дейін. ",
  },

  {
    question: "Грант қаражатын қандай бағытта қолдануға болады?    ",
    answer: (
      <div>
        <ul>
          <li>- ғимаратты жалға алу үшін;</li>
          <li>
            - гранттық жобаны жүзеге асыруға арналған іссапар шығындарына;
          </li>
          <li>- оқыту барысында қажет болатын оқу материалдарына;</li>
          <li>- менторлық қолдау үшін тартылған медиа мамандар үшін;</li>
          <li>- техникалық жабдықтарды жалға алу үшін.</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Грант қаражатын қай бағытта жұмсауға болмайды?",
    answer:
      "Гранттық жоба аясында жүзеге асырылатын жобаларға қатысты емес іс-әрекетке жұмсауға болмайды.",
  },
  {
    question:
      "Қандай жағдайларда грант алушы өзіне бөлінген гранттық қаражаттан айырылуы мүмкін?    ",
    answer: (
      <div>
        <ul>
          <li>
            - гранттық конкурсқа қатыспаған үшінші тұлғалардың контент жасағаны
            үшін;
          </li>
          <li>
            - конкурстық комиссия мүшелерімен және қор қызметкерлерімен үлестес
            тұлғалардың көмегімен грант алғаны үшін;
          </li>
          <li>
            - адамдардың ар-намысы мен қадір-қасиетін қорлайтын, қауіп
            төндіретін сипаттағы медиа өнімдер, нәсілдік, этникалық, жыныстық,
            әлеуметтік белгілері бойынша адамдарды кемсітуді насихаттайтын,
            діни, нәсілдік немесе ұлтаралық алауыздықты қоздыруға ықпал ететін
            материалдар және т. б. үшін.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Курсты аяқтағаннан кейін медиа өнімді шығару қажет пе?    ",
    answer:
      "Курстың соңында студенттер грант алушының басшылығымен жеке немесе топтық медиа өнімдер жасайды, олардың мазмұны курстың бағытына сәйкес келеді.",
  },

  {
    question: "Өтінім қай тілде беріледі?",
    answer: "Барлық құжаттар қазақ немесе орыс тілдерінде толтырылады.",
  },
  {
    question: "Бір үміткерге қанша рет өтінім бере алады?",
    answer:
      "Үміткер бір бағыт бойынша қатысып, тек бір рет өтінім бере алады.      ",
  },
  {
    question: "Өтінім қанша күн бойы қаралады?",
    answer:
      "Грант алуға үміткердің өтінімі өтінімдерді қабылдау мерзімі аяқталғаннан кейін он жұмыс күні ішінде қаралады.",
  },
  {
    question: "MDQ КҚ байланыс деректерін көрсетіңіз.",
    answer:
      "«Медиа дамыту қоры» КҚ байланыс үшін: e-mail: grants.mdq@gmail.com, тел: +7 775 807 38 93      ",
  },
];
export default function Home() {
  return (
    <main className="">
      <Card className="place-self-center lg:ml-96 max-w-6xl m-5 my-8 ">
        <CardHeader>
          <CardTitle className="mb-5">ҚР ОБЛЫСТАРЫНДАҒЫ ЖУРНАЛИСТЕР МЕН БЛОГЕРЛЕРДІ ОҚЫТУҒА АРНАЛҒАН МЕДИА ТРЕНЕРЛЕРГЕ БЕРІЛЕТІН ГРАНТТАР</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nibh
            ante, rhoncus ut ullamcorper et, faucibus porta massa. Suspendisse
            augue sapien, luctus id dolor et, ornare lacinia leo. Phasellus
            placerat nisi sit amet sem ultrices auctor. Nulla sit amet molestie
            nisi. Aliquam vitae venenatis turpis. Morbi laoreet mi non dui
            consectetur, vel ullamcorper augue cursus. Phasellus lacus magna,
            eleifend eu lacus in, dictum finibus metus. Maecenas sed tortor
            arcu. Donec nisl urna, pulvinar quis felis in, aliquam volutpat
            nisi. Pellentesque dui erat, fringilla in condimentum et, hendrerit
            vel risus. Suspendisse vehicula vel sapien aliquam dictum. Sed
            ultrices, eros ac porta lacinia, mi justo pharetra purus, ut
            convallis purus purus et erat. Mauris pretium mi id erat commodo
            malesuada. Suspendisse in tortor quis quam fermentum tempus sit amet
            convallis arcu. Suspendisse orci leo, scelerisque at luctus sed,
            imperdiet id augue. Praesent lobortis fermentum nibh. Nam eu
            fermentum orci. Vivamus dictum dapibus augue sit amet mattis. In
            ullamcorper lacus id mi pellentesque sollicitudin. Vestibulum
            vehicula quis odio non interdum. Vestibulum dolor felis, lobortis
            eget sapien nec, placerat congue libero. Pellentesque non felis quis
            augue suscipit gravida a sagittis dui. Phasellus in justo a lacus
            fermentum tempor quis ac orci.
          </CardDescription>
        </CardHeader>
        <div className="p-4">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <a href="https://forms.gle/PDckh73hsy6krzWu8">Податься</a>
            </span>
          </button>
        </div>
        <CardContent>
          {/* <Image src="/1.png" width="500" height="500" className=''/> */}
        </CardContent>
        <CardTitle className=" m-20"> </CardTitle>
        <CardTitle className=" m-5">Презентация</CardTitle>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        <CardTitle className=" m-20"> </CardTitle>
        <CardTitle className=" m-5">Видео-инструкция</CardTitle>
        <video controls className="responsive-video p-4">
          <source src="/video-grants/tutorialkkmedia.webm" type="video/webm" />
        </video>
        <CardTitle className="m-5 mt-20">FAQ</CardTitle>
        <CustomAccordion items={faqItems} />
        <div className="p-4 flex items-center">
          <div className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <a href="https://www.google.com/forms/about/">Податься</a>
            </span>
          </div>

          <div className="p-2 flex gap-2 items-center">
            <div className="flex items-center justify-center bg-slate-950 p-3 rounded-full ">
              <WhatsappShareButton url="https://www.youtube.com/watch?v=9WzIACv_mxs">
                <FaWhatsapp className="text-3xl cursor-pointer text-blue-700" />
              </WhatsappShareButton>
            </div>
            <div className="flex items-center justify-center bg-slate-950 p-3 rounded-full">
              <TelegramShareButton url="https://www.youtube.com/watch?v=QnKxdhvJNcU&t=9s">
                <FaTelegram className="text-3xl cursor-pointer text-blue-700 " />
              </TelegramShareButton>
            </div>
          </div>
        </div>
      </Card>
    </main>
  );
}
