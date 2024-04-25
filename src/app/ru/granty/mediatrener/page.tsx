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
import CustomAccordion from "@/components/accordion_journalist";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());


const faqItems = [
  {
    question: "Акселератор дегеніміз не?    ",
    answer: `Шағын медианы дамытуға арналған бағдарламаның  акселераторы «Медиа дамыту қоры» КҚ  болып есептеледі. Шағын медиа акселерациясына арналған грант әлеуметтік маңызы бар және жаңа мақсатты аудиторияға арналған медиажобаларға беріледі.`,
  },
  {
    question: "Шағын медиа дегеніміз не? ",
    answer: `Бұл өз аймағында сапалы контент өндіретін бұқаралық ақпарат құралдары. Аталған БАҚ республикалық бұқаралық ақпарат құралдарымен бәсекелесе алмайды.`,
  },
  {
    question: "Қандай БАҚ грантты ала алады?    ",
    answer:
      "Қазақстан Республикасы аумағында ресми тіркелген барлық шағын медиа.",
  },

  {
    question: "Қандай БАҚ конкурқа қатыса алмайды?",
    answer: (
      <div>
        <ul>
          <li>
            - қайта ұйымдастыру (реорганизация), тарату немесе банкроттық
            сатысындағы, сондай-ақ ҚР қолданыстағы заңнамаға сәйкес қызметі
            тоқтатылған бұқаралық ақпарат құралдары;
          </li>
          <li>
            - салық және бюджетке төленетін басқа да міндетті төлемдер бойынша
            берешегі бар бұқаралық ақпарат құралдары;
          </li>
          <li>
            - атқарушылық іс жүргізу қозғалған бұқаралық ақпарат құралдары.
          </li>
        </ul>
      </div>
    ),
  },

  {
    question: "Гранттар қандай талаптар бойынша беріледі?    ",
    answer: (
      <div>
        <ul>
          <li>- Әлеуметтік маңызы бар медиа жоба;</li>
          <li>- Салалық медиа жоба;</li>
          <li>- Жаңа мақсатты аудиторияға арналған медиа жоба.</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Медиа жоба дегеніміз не?    ",
    answer: `Белгілі бір міндеттерді орындайтын дәйекті және өзара байланысы бар медиа өнімдер (мақала, сюжет, арнайы репортаж, подкаст, бағдарлама және т.б.).`,
  },
  {
    question: "Медиа жоба қандай міндеттерді көздейді?    ",
    answer: (
      <div>
        <ul>
          <li>
            - әлеуметтік маңызы бар медиа жоба өзекті әлеуметтік мәселені
            көтеріп, оның шешімін ұсынуы керек;
          </li>
          <li>
            {" "}
            - салалық медиа жоба қоғамның күнделікті өміріне қатысы бар жеке
            саланың өзекті мәселелерін көтеріп, оларды шешу жолдарын ұсынуы
            тиіс;{" "}
          </li>
          <li>
            - медиа жобаның міндеті - әлеуметтік тақырыптардың өзектілігін
            негіздей отырып жаңа мақсатты аудиторияға шығу.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Грант алу үшін БАҚ-та ресми тіркеу болуы қажет пе?",
    answer: `БАҚ Қазақстан Республикасының заңнамасына сәйкес мемлекеттік тіркеуден өтуі тиіс. Сонымен қатар, штат саны 10 адамға дейін болуы тиіс; соңғы 3 айда сайттың қаралым саны 1 млн. аспауы керек.
`,
  },
  {
    question: "Грант мөлшері қандай?",
    answer: `Шағын медиа акселерациясының грант мөлшері: 3 млн теңгеден 10 млн теңгеге дейін.`,
  },
  {
    question: "Конкурсқа қатысу үшін не қажет?    ",
    answer: `«Медиа дамыту қоры» КҚ ресми сайтында өтінімді толтырыңыз. Өтінімде БАҚ туралы толық ақпарат, жоспарланған жоба мен бюджет, оны жүзеге асыру іс-шаралар жоспары, медиа жоба  (өтінім формасы сайтта бар) туралы толық ақпарат және портфолио болуы қажет. Сондай-ақ соңғы екі жыл ішінде іске асырылған өз жобаларыңыздың 3-5 сілтемесін көрсете отырып, портфолио формасын толтыру қажет.`,
  },
  {
    question: "Как и по какой системе оценивается портфолио?",
    answer:
      "Основной критерий оценки портфолио – качество проекта и/или медиапродукта. Оценивается по пятибалльной шкале.",
  },
  {
    question: "Үміткердің өтінімі қалай және кіммен бағаланады?",
    answer: ` Үміткердің өтінімін конкурстық комиссия сегіз критерий бойынша 10 балдық шкаламен қарап, бағалайды. Бірінші кезеңде конкурстық комиссия әлеуметтік мәселенің өзектілігі мен жобаның маңыздылығын, саланың әлеуметтік маңыздылығын және көтерілетін мәселелердің өзектілігін, сондай-ақ таңдалған мақсатты аудиторияның өзектілігі мен әлеуметтік маңыздылығын бағалайды. Екінші кезеңде жобаның үйлесімділігі, толықтығы мен қамтылуы, жобаның жаңалығы мен бірегейлігі, жобаның іске асырылуы мен перспективалары, бюджеттің шынайылығы мен негізділігі, сондай-ақ жобалардың және/немесе медиа өнімдердің сапасы ескеріледі. Конкурстық комиссияның екі кезеңді қарау қорытындысы бойынша балдар  қосылып,  Қор бөлген қаражаттың жалпы көлемі аясында гранттар ең көп балл жинаған қатысушыларға бөлінеді.
`,
  },
  {
    question: "Өтінім қандай критерийлер бойынша бағаланады?",
    answer: `Медиа жоба бірегей, өзекті, әлеуметтік маңызды, мақсатты аудитория үшін қызықты, перспективалы болуы керек. Міндетті түрде бюджетті көрсету керек. 
`,
  },
  {
    question: "Грант қаражатын қандай мақсаттарға жұмсауға болады?      ",
    answer: (
      <div>
        Грант алушылар қойылған міндеттерге қол жеткізу мақсатында грантты
        келесі мақсаттарға пайдалануға құқылы:
        <ul>
          <li> - ғимаратты жалға алу үшін;</li>
          <li> - реквизиттерді сатып/жалға алу үшін;</li>
          <li>
            {" "}
            - жобаға тартылатын және сметада көрсетілген техмамандардың іссапар
            шығындарын өтеу үшін;
          </li>
          <li> - техниканы сатып/жалға алу үшін.</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Грант қаражатын не нәрсеге жұмсауға болмайды?",
    answer:
      "Медиа жобаларға жасауға қатысты емес барлық шығындарға жұмсауға болмайды.",
  },
  {
    question:
      "Қандай жағдайларда грант алушы өзіне бөлінген гранттық қаражаттан айырылуы мүмкін? ",
    answer: (
      <div>
        <ul>
          <li>
            гранттық конкурсқа қатыспаған үшінші тұлғалардың контент жасағаны
            үшін;
          </li>
          <li>
            конкурстық комиссия мүшелерімен және қор қызметкерлерімен үлестес
            тұлғалардың көмегімен грант алғаны үшін;
          </li>
          <li>
            адамдардың ар-намысы мен қадір-қасиетін қорлайтын, қауіп төндіретін
            сипаттағы медиа өнімдер, нәсілдік, этникалық, жыныстық, әлеуметтік
            белгілері бойынша адамдарды кемсітуді насихаттайтын, діни, нәсілдік
            немесе ұлтаралық алауыздықты қоздыруға ықпал ететін материалдар және
            т. б. үшін.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Өтінімді қай тілде толыру керек?",
    answer: "Барлық құжаттар қазақ немесе орыс тілдерінде толтырылады. ",
  },
  {
    question: "Неше рет өтінім беруге болады?",
    answer:
      "Конкурсқа қатысатын әр шағын медиа тек бір өтінімді бір тақырыптық бағыт бойынша бере алады.",
  },
  {
    question: "Өтінім неше күн қарастыралады?    ",
    answer:
      "Грант алуға үміткердің өтінімі өтінімдерді қабылдау мерзімі аяқталғаннан кейін он жұмыс күні ішінде қаралады.",
  },
  {
    question:
      "Грантты іске асыру қорытындысы бойынша шағын медиа атқарылған жұмыс туралы есеп беруге міндетті ме?     ",
    answer:
      "Грантты іске асыру қорытындылары бойынша шағын медиа алған білімдері мен құзыреттерін көрсету, гранттың игерілуін растау үшін дайын медиа өнімді ұсынуға міндетті.",
  },
  {
    question: "Өтінімді қарау нәтижелерін қалай білуге болады?    ",
    answer:
      "«Медиа дамыту қоры» КҚ масс-медианы қолдау бөлімінің мамандары Сізбен байланысады.",
  },
  {
    question: " MDQ КҚ байланыс номерлері қандай?    ",
    answer:
      "«Медиа дамыту қоры» КҚ байланыс үшін: e-mail: grants.mdq@gmail.com, тел: +7 775 807 38 93      ",
  },
];
export default function Home() {
  return (
    <main className="">
      <Card className="place-self-center lg:ml-96 max-w-6xl m-5 my-8 ">
        <CardHeader>
          <CardTitle className="mb-5">
            Гранты для обучения журналистов и блогеров в регионах
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
              <a href="https://forms.gle/oSaQPLx1vEFBd2vD6">Податься</a>
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
          <source src="/video-grants/tutorialrumedia.webm" type="video/webm" />
        </video>

        <CardTitle className="m-5 mt-20">FAQ</CardTitle>
        <CustomAccordion items={faqItems} />
        <div className="p-4 flex items-center">
          <div className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <a href="https://forms.gle/oSaQPLx1vEFBd2vD6">Податься</a>
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
