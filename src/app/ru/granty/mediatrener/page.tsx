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
import Link from "next/link";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 7;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys(), i => `Media_ru${i}`);;
console.log(SLIDES);



const faqItems = [
  {
    question: "Кто может стать участником грантовой программы?",
    answer:
      "Кандидат должен быть гражданином Республики Казахстан; иметь опыт работы в области средств массовой информации не менее 5 лет; иметь соответствующее высшее образование.",
  },
  {
    question: "По каким тематическим направлениям будут предоставлены гранты?",
    answer:
      "Гранты для медиатренеров предоставляются в целях проведения обучающих тренингов и курсов по следующим темам: аналитическая журналистика; освещение чувствительных тем (профессиональная медиаэтика); критический анализ и объективность при изучении и подаче информации.",
  },
  {
    question: "Как принять участие в грантовой программе?",
    answer:
      "Лица, претендующие на получение гранта на обучение журналистов и блогеров прикрепляют заполненную заявку; анкету с информацией о планируемом курсе; резюме с кратким описанием собственных проектов (формы документов прилагаются).",
  },
  {
    question: "Сколько медиатренеров от одного юридического лица?",
    answer:
      "Одно юридическое лицо, являющееся субъектом частного предпринимательства — один медиатренер.",
  },
  {
    question: "Какие требования к производству медиапродуктов?",
    answer:
      "Форматы и жанры медиапродуктов не ограничиваются какими-либо конкретными требованиями.",
  },
  {
    question: "Какую информацию кандидату нужно указать в заявке?",
    answer:
      "Кандидат должен указать выбранное одно тематическое направление медиакурса; в какой области страны и на каком языке (-ах) планирует провести обучение; предполагаемая продолжительность курса; сколько журналистов и блогеров планирует охватить обучением; партнеров и планируемый бюджет.",
  },
  {
    question: "Какие критерии оценки заявки кандидата?",
    answer:
      "Заявка будет оцениваться по пяти основным критериям: насколько соответствует учебный план направлению, задачам и ожидаемым результатам курса; актуальность содержания учебного плана курса и ориентированность на практику; связность, полнота, охват курса; реалистичность и обоснованность бюджета курса; образованию кандидата и его опыта работы в области масс медиа.",
  },
  {
    question: "Как и кем оценивается заявка от кандидата?",
    answer:
      "Заявка кандидата рассматривается конкурсной комиссией по вышеупомянутым четырем критериям и оценивается по десятибалльной шкале.",
  },
  {
    question: "Есть ли критерии оценки резюме кандидата?",
    answer:
      "Основной критерий оценки резюме — соответствующие образование кандидата и его опыт работы в области масс-медиа. Оценивается по пятибалльной шкале.",
  },
  {
    question:
      "В какой области Казахстана грантополучатель может провести обучение для журналистов и блогеров?",
    answer:
      "Грантополучатель проводит один курс по одному тематическому направлению в одной выбранной им области Казахстана.",
  },
  {
    question:
      "Сколько журналистов и блогеров может охватить медиакурсом грантополучатель?",
    answer: "Грантополучатель может обучить не менее десяти учащихся.",
  },
  {
    question:
      "Необходимо ли грантополучателю с Фондом согласовывать список учащихся?",
    answer:
      "Грантополучатель самостоятельно формирует список учащихся и согласовывает его с Фондом.",
  },
  {
    question:
      "Если грантополучатель привлекает к проекту партнеров, нужно ли согласование с Фондом?",
    answer:
      "Грантополучатель обязан согласовать с Фондом партнеров по проекту.",
  },
  {
    question: "Размер гранта?",
    answer:
      "Размер гранта для медиатренеров на обучение журналистов и блогеров не должен превышать 5 млн тенге.",
  },

  {
    question: "На каком языке подается заявка?",
    answer: "Все документы заполняются на казахском или русском языках.",
  },
  {
    question: "Сколько раз можно подавать заявку одному кандидату?",
    answer:
      "Для участия в конкурсе кандидат, претендующий на получение гранта, вправе подать только одну заявку на одно тематическое направление.",
  },
  {
    question: "Сколько дней рассматривается заявка?",
    answer:
      "Заявка кандидата на получение гранта рассматривается в течение десяти рабочих дней после завершения срока приема заявок.",
  },
  {
    question: "Как узнать результаты рассмотрения заявки?",
    answer:
      "Вы узнаете результаты рассмотрения заявки от специалистов отдела поддержки масс-медиа КФ «Медиа дамыту қоры». С Вами свяжутся.",
  },
  {
    question: "Укажите контактные данные КФ MDQ.",
    answer:
      "Контактные данные отдела поддержки масс-медиа КФ «Медиа дамыту қоры»: E-mail: grants.mdq@gmail.com, Телефон: +7 775 807 38 93",
  },
];
export default function Home() {
  return (
    <main className="">
      <Card className="place-self-center lg:ml-96 max-w-6xl m-5 my-8 ">
        <CardHeader>
          <CardTitle className="mb-5">
          Гранты для медиатренеров
          </CardTitle>
          <CardDescription>
          Менторство для Вас! 
Если Вы профессиональный журналист Казахстана с опытом работы в масс-медиа не менее 5 лет и мечтаете раскрыть потенциал молодых перспективных журналистов и блогеров, то грантовая программа Фонда для Вас! Вы сможете передать свой опыт, знания и ценные советы молодым специалистам из регионов, показать, как стать настоящим профессионалом и научить делать качественный контент! Не упустите возможность внести новаторство в области аналитической журналистики, профессиональной медиа этики и критического анализа при подаче информации. Пора внести значительный вклад в развитие казахстанской медиасферы!  
 
Сроки предоставления заявок: с 15 мая по 30 июня 2024 года
          </CardDescription>
        </CardHeader>
        <div className="p-4">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <a href="https://forms.gle/oSaQPLx1vEFBd2vD6">Подать заявку</a>
            </span>
            
          </button>
          <div className=" inline-flex px-1"></div>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <Link href="/docs/granty/obyavlenie_ru.docx">Полная информация</Link>
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

        <CardTitle className="m-5 mt-20">Вопросы-ответы</CardTitle>
        <CustomAccordion items={faqItems} />
        <div className="p-4 flex items-center">
          <div className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <a href="https://forms.gle/oSaQPLx1vEFBd2vD6">Подать заявку</a>
            </span>
          </div>

          <div className=" inline-flex px-1"></div>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <Link href="/docs/granty/obyavlenie_ru.docx">Полная информация</Link>
            </span>
</button>
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
