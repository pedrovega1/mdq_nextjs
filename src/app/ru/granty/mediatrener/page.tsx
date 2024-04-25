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
    question: "Кто может стать участником грантовой программы?",
    answer: "Кандидат должен быть гражданином Республики Казахстан; иметь опыт работы в области средств массовой информации не менее 5 лет; иметь соответствующее высшее образование."
  },
  {
    question: "По каким тематическим направлениям будут предоставлены гранты?",
    answer: "Гранты для медиатренеров предоставляются в целях проведения обучающих тренингов и курсов по следующим темам: аналитическая журналистика; освещение чувствительных тем (профессиональная медиаэтика); критический анализ и объективность при изучении и подаче информации."
  },
  {
    question: "Как принять участие в грантовой программе?",
    answer: "Лица, претендующие на получение гранта на обучение журналистов и блогеров прикрепляют заполненную заявку; анкету с информацией о планируемом курсе; резюме с кратким описанием собственных проектов (формы документов прилагаются)."
  },
  {
    question: "Сколько медиатренеров от одного юридического лица?",
    answer: "Одно юридическое лицо, являющееся субъектом частного предпринимательства — один медиатренер."
  },
  {
    question: "Какие требования к производству медиапродуктов?",
    answer: "Форматы и жанры медиапродуктов не ограничиваются какими-либо конкретными требованиями."
  },
  {
    question: "Какую информацию кандидату нужно указать в заявке?",
    answer: "Кандидат должен указать выбранное одно тематическое направление медиакурса; в какой области страны и на каком языке (-ах) планирует провести обучение; предполагаемая продолжительность курса; сколько журналистов и блогеров планирует охватить обучением; партнеров и планируемый бюджет."
  },
  {
    question: "Какие критерии оценки заявки кандидата?",
    answer: "Заявка будет оцениваться по пяти основным критериям: насколько соответствует учебный план направлению, задачам и ожидаемым результатам курса; актуальность содержания учебного плана курса и ориентированность на практику; связность, полнота, охват курса; реалистичность и обоснованность бюджета курса; образованию кандидата и его опыта работы в области масс медиа."
  },
  {
    question: "Как и кем оценивается заявка от кандидата?",
    answer: "Заявка кандидата рассматривается конкурсной комиссией по вышеупомянутым четырем критериям и оценивается по десятибалльной шкале."
  },
  {
    question: "Есть ли критерии оценки резюме кандидата?",
    answer: "Основной критерий оценки резюме — соответствующие образование кандидата и его опыт работы в области масс-медиа. Оценивается по пятибалльной шкале."
  },
  {
    question: "В какой области Казахстана грантополучатель может провести обучение для журналистов и блогеров?",
    answer: "Грантополучатель проводит один курс по одному тематическому направлению в одной выбранной им области Казахстана."
  },
  {
    question: "Сколько журналистов и блогеров может охватить медиакурсом грантополучатель?",
    answer: "Грантополучатель может обучить не менее десяти учащихся."
  },
  {
    question: "Необходимо ли грантополучателю с Фондом согласовывать список учащихся?",
    answer: "Грантополучатель самостоятельно формирует список учащихся и согласовывает его с Фондом."
  },
  {
    question: "Если грантополучатель привлекает к проекту партнеров, нужно ли согласование с Фондом?",
    answer: "Грантополучатель обязан согласовать с Фондом партнеров по проекту."
  },
  {
    question: "Размер гранта?",
    answer: "Размер гранта для медиатренеров на обучение журналистов и блогеров не должен превышать 5 млн тенге."
  },

  {
    question: "На каком языке подается заявка?",
    answer: "Все документы заполняются на казахском или русском языках."
  },
  {
    question: "Сколько раз можно подавать заявку одному кандидату?",
    answer: "Для участия в конкурсе кандидат, претендующий на получение гранта, вправе подать только одну заявку на одно тематическое направление."
  },
  {
    question: "Сколько дней рассматривается заявка?",
    answer: "Заявка кандидата на получение гранта рассматривается в течение десяти рабочих дней после завершения срока приема заявок."
  },
  {
    question: "Как узнать результаты рассмотрения заявки?",
    answer: "Вы узнаете результаты рассмотрения заявки от специалистов отдела поддержки масс-медиа КФ «Медиа дамыту қоры». С Вами свяжутся."
  },
  {
    question: "Укажите контактные данные КФ MDQ.",
    answer: "Контактные данные отдела поддержки масс-медиа КФ «Медиа дамыту қоры»: E-mail: grants.mdq@gmail.com, Телефон: +7 775 807 38 93"
  }
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
        <div className="container">
          <iframe
            className="responsive-iframe p-4 "
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        </div>
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
