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
const SLIDE_COUNT = 8;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys(), i => `content_kz${i}`);;
const faqItems = [
  {
    question: "Кім грант иегері бола алады?",
    answer:
      "Конкурсқа 14 жастан бастап Қазақстан Республикасының азаматтары қатыса алады (егер қатысушы кәмелет жасына толмаған жағдайда, оның заңды өкілі болуы тиіс).",
  },
  {
    question: "Үміткердің контенті қандай площадкаларда болу керек?",
    answer:
      "Instagram, TikTok, YouTube – осы әлеуметтік желінің бірінде болу керек.",
  },
  {
    question:
      "Конкурсқа қатысу үшін үміткердің аккаунты немесе контенті қандай критерийлерге сәйкес келуі керек?",
    answer: (
      <ul>
        <li>- Instagram-да оқырмандар саны - 5 000-нан 10 0000-ға дейін;</li>
        <li>- TikTok -та оқырмандар саны - 5 000-нан 100 000-ға дейін;</li>
        <li>- YouTube-та оқырмандар саны - 5 000-нан 50 000-ға дейін.</li>
      </ul>
    ),
  },
  {
    question: "Гранттың мөлшері қандай?",
    answer:
      "Әлеуметтік желілердегі контент авторлары үшін грант мөлшері: 3 млн теңгеден 10 млн теңгеге дейін.",
  },
  {
    question: "Бір үміткер қанша рет өтінім бере алады?",
    answer:
      "Бір автор көрсетілген үш әлеуметтік желіден (Instagram, TikTok, YouTube) бір ғана өтінім бере алады. Аккаунт немесе канал автордың өзінің жеке парақшасы болуы керек.",
  },
  {
    question:
      "Әлеуметтік желідегі бір аккаунттың немесе каналдың авторлары...?",
    answer:
      "Әлеуметтік желідегі бір аккаунтқа немесе каналға иелік ететін және басқаратын шығармашылық ұжым өзінің бір өкілін ұсына отырып, гранттық конкурсқа қатыса алады. Бұл өкіл грантқа үміткер ретінде қарастырылады.",
  },
  {
    question:
      "Бір отбасы мүшелері гранттық конкурсқа қатысуға өтінім бере ала ма? ",
    answer:
      " Жоқ. Бір отбасынан бір адам ғана гранттық конкурсқа қатыса алады және грантқа үміткер бола алады.",
  },
  {
    question: "Грантты қандай мақсаттарға пайдалануға болады?",
    answer: (
      <div>
        Грант алушы қойылған міндеттерге қол жеткізу мақсатында ақшалай
        қаражатты грантты іске асыруға байланысты шығындарға ғана пайдалануға
        құқылы, атап айтқанда:
        <ul>
          <li>
            - аудиовизуалды өнім жасау үшін техника мен жабдықты сатып алуға
            және/немесе жалға алуға жұмсалатын қаражат грант мөлшерінің 30
            пайызынан аспауы керек;
          </li>
          <li>
            - медиа өнімнің маркетингтік іс-шараларына қызметтерді төлеуге
            жұмсалатын қаражат грант мөлшерінің 100 пайызынан аспауы керек;
          </li>
          <li>
            - жобадағы нақты рөлі үшін шығармашылық ұжымның қатысушысына сыйақы
            төлеуге (сценарист, оператор, режиссер, продюсер және т. б.);
          </li>
          <li>- ғимаратты жалға алуға;</li>
          <li> -грантты іске асыруға байланысты іссапар шығындарын өтеуге;</li>
          <li>
            - түсірілім үшін реквизиттерді жалға алуға және/немесе сатып алуға;
          </li>
          <li>
            - грант алушының шығындар сметасында көрсетілген техникалық
            мамандардың сыйақысын төлеуге.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Грант қаражатын қандай мақсаттарға жұмсауға болмайды?",
    answer:
      "әлеуметтік медиа контент авторларына арналған гранттарды мазмұнды құруға және таратуға қатысы жоқ әрекеттер үшін пайдалану мүмкін емес.",
  },
  {
    question: "Өтінім қай тілде толтырылады?    ",
    answer:
      "Барлық құжаттар қазақ немесе орыс тілдерінде толтырылады.  Жоба сізге ыңғайлы тілде қорғалады.",
  },
  {
    question:
      "Конкурстық комиссия жобаны/контентті жасау үшін қандай тақырыптар мен бағыттарды ұсынады? ",
    answer: (
      <div>
        <ul>
          <li>- ағартушылық; </li>
          <li>- азаматтық және әлеуметтік білім;</li>
          <li>- салауатты өмір салтын насихаттау;</li>
          <li>- физикалық, ақыл-ой еңбегін насихаттау;</li>
          <li>- қаржылық, құқықтық, цифрлық сауаттылық;</li>
          <li>- балалар мен жастарға мәдени және тарихи білім беру;</li>
          <li>- гендерлік саясат.</li>
        </ul>
        <p>
          Егер сізде мазмұн жасау үшін басқа тақырып болса, оны өтінімде
          көрсетіңіз.
        </p>
      </div>
    ),
  },
  {
    question: "Байқауда неше кезең бар?",
    answer:
      "Байқау екі кезеңнен тұрады: жобалық өтінім кезеңі және жобаны қорғау кезеңі.",
  },
  {
    question: "Байқаудың бірінші кезеңі нені қамтиды?",
    answer: `Үміткер жеке деректер мен алдағы уақытта жоспарлап отырған контентті туралы шығаратын аккаунттың немесе арнаның атауы көрсетілетін сауалнаманы (толтыру формасы қоса беріледі) толтыруы тиіс. Егер үміткер бұрын контентті құруға грант алған болса, онда қандай және қашан алғанын жазуы керек. Сондай-ақ, үміткер жобаны іске асыру үшін қандай серіктестерді/қатысушыларды тартуды жоспарлап отырғанын атап өту қажет. 
Жобалық өтінімде (өтінім формасы қоса беріледі) үміткер ұсынылатын жобаның идеясын, мақсатын, міндеттерін, өзектілігі мен маңыздылығын нақты баяндауы тиіс; жобаның мазмұнын қандай форматта және жанрда құруды жоспарлап отырғанын белгілеп, жоспарланған мазмұнның мақсатты аудиториясын егжей-тегжейлі сипаттауы тиіс. Медиа өнімдердің болжамды санын және олардың хронометражын көрсету қажет. Егер ұқсас жобалары болса, оларға сілтемелерді көрсеткен жөн.
`,
  },
  {
    question: " Байқаудың екінші кезеңі нені қамтиды? ",
    answer: `Екінші кезеңге өткен үміткер жобаны конкурстық комиссия алдында офлайн қорғайды. Ол өзінің жобасы туралы айтып және бюджеттік жоспарларымен бөліседі.`,
  },
  {
    question: "Үміткерге өз жобасын қорғауға қанша уақыт беріледі?",
    answer: `Жобаны қорғауға 20 минут уақыт бөлінеді, оның 3 минуты конкурстық комиссия алдында жобаның таныстырылымы, қалған уақыты – сұрақ-жауап сессиясы.    `,
  },
  {
    question: "Жобаны бағалау критерийлері қандай?    ",
    answer: `Грант алушы жобасының тақырыбы өзекті, әлеуметтік маңызы бар, өзіндік болуы тиіс. Жобаның іске асырылуы туралы сауатты жазылған жоспары болуы тиіс. Бюджеттің шынайылығы мен нақтылығы. Критерийлер 10 балдық шкала бойынша бағаланады.`,
  },
  {
    question:
      "Гранттық қаражатқа жасалған медиа өнімдер қай жерде орналастырылу керек? ",
    answer:
      "Грант алушының үш жеке алаңының бірінде: Instagram, Tik Tok, YouTube.",
  },

  {
    question:
      "Қандай жағдайларда грант алушы өзіне бөлінген гранттық қаражаттан айырылуы мүмкін? ",
    answer: (
      <div>
        - гранттық конкурсқа қатыспаған үшінші тұлғалардың контент жасағаны
        үшін;
        <ul>
          <li>
            - конкурстық комиссия мүшелерімен және қор қызметкерлерімен үлестес
            тұлғалардың көмегімен грант алғаны үшін;
          </li>

          <li>
            - падамдардың ар-намысы мен қадір-қасиетін қорлайтын, қауіп
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
    question:
      "Грантты іске асыру қорытындысы бойынша контент авторлары атқарылған жұмыс туралы есеп беру керек пе?      ",
    answer: `Грантты іске асыру қорытындысы бойынша контент авторлары гранттың мақсатты пайдаланылуын растайтын, өзекті әлеуметтік маңызы бар тақырыпты көрсететін кез келген цифрлық форматта медиа өнімді және/немесе бірқатар медиа өнімдерді ұсынуы тиіс. 
`,
  },
  {
    question: "Жобалық өтінім қанша күн қарастырылады?",
    answer:
      "Грант алуға үміткердің өтінімі өтінімдерді қабылдау мерзімі аяқталғаннан кейін он жұмыс күн ішінде қаралады.",
  },
  {
    question: "Жобалық өтінімді қарау нәтижелерін қалай білуге болады?",
    answer: `«Медиа дамыту қоры» КҚ масс-медианы қолдау бөлімінің мамандары Сізбен байланысады.`,
  },
  {
    question: "«Медиа Даму коры» КҚ байланыс номерлері қандай?",
    answer:
      "«Медиа дамыту қоры» КҚ байланыс үшін: e-mail: grants.mdq@gmail.com, тел: +7 775 807 38 93",
  },
];
export default function Home() {
  return (
    <main className="">
      <Card className="place-self-center lg:ml-96 max-w-6xl m-5 my-8 ">
        <CardHeader>
          <CardTitle className="mb-5">
            ӘЛЕУМЕТТІК ЖЕЛІДЕ МЕДИА КОНТЕНТ АВТОРЛАРЫНА АРНАЛҒАН ГРАНТ
          </CardTitle>
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
              <a href="https://forms.gle/jzqTn1aBrL1nHXg49">Податься</a>
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
          <source src="/video-grants/authorkk.webm" type="video/webm" />
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
