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
const SLIDE_COUNT = 8;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys(), i => `content_ru${i}`);;
const faqItems = [
  {
    question: "Сколько раз можно подавать заявку одному малому СМИ?",
    answer:
      "Малое СМИ, претендующее на получение гранта, вправе подать только одну заявку на одну тематическую линию.",
  },
  {
    question: "Кто может участвовать в грантовой программе?",
    answer:
      "В конкурсе может участвовать гражданин Республики Казахстан в возрасте от 14 лет (если несовершеннолетний – законный представитель), являющийся автором своего аккаунта или канала в социальной сети.",
  },
  {
    question: "На каких площадках должен быть размещен контент?",
    answer: "На одной из трех площадок: Instagram, TikTok, YouTube.",
  },
  {
    question:
      "Каким характеристикам должен соответствовать аккаунт или канал претендента для участия в конкурсе?",
    answer: (
      <ul>
        <li>- Число подписчиков аккаунта в Instagram – от 5 000 до 100 000;</li>
        <li>- число подписчиков аккаунта в TikTok – от 5 000 до 100 000;</li>
        <li>- число подписчиков YouTube-канала – от 5 000 до 50 000.</li>
      </ul>
    ),
  },
  {
    question: "Размер гранта?",
    answer:
      "Размер гранта для авторов контента в социальных сетях: от 3 млн до 10 млн тенге.",
  },
  {
    question: "Сколько заявок может подать один претендент?",
    answer:
      "Один претендент может подать одну заявку по одной из указанных трех площадок (Instagram, TikTok, YouTube). Аккаунт или канал должен принадлежать самому автору и вестись им же.",
  },
  {
    question:
      "Как подать заявку на участие в грантовом конкурсе от творческого коллектива, являющиеся авторами одного аккаунта или канала в социальной сети?",
    answer:
      "Творческий коллектив, владеющий и управляющий одним аккаунтом или каналом в социальной сети, может принять участие в грантовом конкурсе, выдвинув одного своего представителя. Этот представитель будет рассматриваться как претендент на получение гранта.",
  },
  {
    question:
      "Могут ли члены одной семьи подать заявку на участие в грантовом конкурсе?",
    answer:
      "Нет. Только один человек из одной семьи может подать заявку на грантовый конкурс и претендовать на получение гранта.",
  },
  {
    question: "На какие цели можно использовать грант?",
    answer: (
      <div>
        Грантополучатель в целях достижения поставленных задач вправе
        использовать денежные средства только на расходы, связанные с
        реализацией гранта, а именно:
        <ul>
          <li>
            - на приобретение и/или аренду техники и оборудования для создания
            аудиовизуальной продукции, но в сумме не более 30 процентов от
            размера гранта;
          </li>
          <li>
            - на оплату услуг по маркетинговым мероприятиям для цели продвижения
            медиапродукта, но в сумму не более 10 процентов от размера гранта;
          </li>
          <li>
            - на выплату вознаграждения участнику творческого коллектива за
            конкретную роль в проекте (сценарист, оператор, режиссер, продюсер и
            др.);
          </li>
          <li>- на аренду помещений;</li>
          <li>
            {" "}
            -на возмещение командировочных расходов, связанных с реализацией
            гранта;
          </li>
          <li>- на аренду и/или приобретение реквизитов для съемок;</li>
          <li>
            - на оплату вознаграждения привлекаемых технических специалистов,
            указанных в смете расходов грантополучателя.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "На что нельзя тратить грант?",
    answer:
      "Гранты для авторов контента в социальных сетях не могут быть использованы для деятельности, не связанной с созданием и распространением контента.",
  },
  {
    question: "На каком языке подается проектная заявка?",
    answer:
      "Все документы заполняются на казахском или русском языках. Проект защищается на удобном Вам языке.",
  },
  {
    question:
      "Какие темы и направления рекомендует конкурсная комиссия для создания контента? ",
    answer: (
      <div>
        <ul>
          <li>- просветительский контент;</li>
          <li>- гражданское и социальное образование;</li>
          <li>- популяризация здорового образа жизни;</li>
          <li>- популяризация физического, умственного труда;</li>
          <li>- финансовая, правовая, цифровая грамотность;</li>
          <li>- культурное и историческое просвещение детей и молодежи;</li>
          <li>- гендерная политика</li>
        </ul>
        <p>
          Если у Вас есть другая тема для создания контента укажите ее в заявке.{" "}
        </p>
      </div>
    ),
  },
  {
    question: "Сколько этапов в конкурсе?",
    answer:
      "Конкурс состоит из двух этапов: этап проектной заявки и этап защиты проекта.",
  },
  {
    question: "Что включает в себя первый этап конкурса?",
    answer:
      "На сайте КФ «Медиа дамыту қоры» претендент должен заполнить заявку и анкету с указанием личных данных, наименования аккаунта или канала, на котором планирует размещение контента. Если претендент ранее получал гранты на создание контента, нужно написать какие и когда. А также нужно отметить каких партнеров/участников претендент планирует привлечь для реализации проекта, размер гранта. В проектной заявке претендент должен понятно изложить идею, цель, задачи, актуальность и значимость предлагаемого проекта; отметить в каком формате и жанре планирует создавать проект и подробно описать целевую аудиторию планируемого контента. Необходимо указать предполагаемое количество медиапродуктов и их хронометраж. При наличии примеров похожих проектов указать их ссылки.",
  },
  {
    question: "Что включает в себя второй этап конкурса?",
    answer:
      "Прошедший во второй этап претендент в формате онлайн или вживую защищает проект перед конкурсной комиссией. Он более детально рассказывает о планируемом медиапроекте и смете расходов, дополняя планами маркетинговых мероприятий.",
  },
  {
    question: "Сколько минут дается претенденту на защиту своего проекта?",
    answer:
      "На защиту проекта отводится до 20 минут. 3 минуты – непосредственная презентация проекта перед конкурсной комиссией, остальное время – сессия Вопрос-Ответ.",
  },
  {
    question: "Какие критерии оценки проекта?",
    answer:
      "Тема проекта грантополучателя должна быть актуальной, социально значимой, оригинальной. Проект должен быть реализуем и перспективен, грамотно аргументирован и иметь перспективность плана продвижения. Бюджет - обоснованным. Критерии оцениваются по десятибалльной шкале.",
  },
  {
    question:
      "На каких площадках должны размещаться готовые медиапродукты, реализованные на грантовые средства?",
    answer:
      "На одной из трех собственных площадок грантополучателя: Instagram, TikTok, YouTube.",
  },

  {
    question:
      "В каких случаях грантополучатель может лишиться выделенных ему грантовых средств?",
    answer: (
      <div>
        Грантополучатель в целях достижения поставленных задач вправе
        использовать денежные средства только на расходы, связанные с
        реализацией гранта, а именно:
        <ul>
          <li>
            - создание контента третьими лицами, не принимавшими участие в
            конкурсе на получение гранта;
          </li>
          <li>
            - получение гранта с помощью лиц, аффилированных с членами
            конкурсной комиссии и работниками Фонда;
          </li>
          <li>
            - производство медиапродуктов оскорбляющего честь и достоинства
            людей, угрожающего характера, материалы, пропагандирующие
            дискриминацию людей по расовому, этническому, половому, социальному
            признакам, способствующие разжиганию религиозной, расовой или
            межнациональной розни и т.д.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "По итогу реализации гранта должны ли авторы контента предоставить отчет о проделанной работе?",
    answer:
      "По итогу реализации гранта авторы цифрового контента должны представить медиапродукт и/или ряд медиапродуктов в любом цифровом формате, отражающий актуальную социально значимую тему, подтверждающий целевое использование гранта.",
  },
  {
    question: "Сколько дней рассматривается проектная заявка?",
    answer:
      "Заявка претендента на получение гранта рассматривается в течение десяти рабочих дней после завершения срока приема заявок.",
  },
  {
    question: "Как узнать результаты рассмотрения проектной заявки?",
    answer:
      "Специалисты отдела поддержки массмедиа КФ «Медиа дамыту қоры» будут с Вами на связи. В случае одобрения/отказе в предоставлении гранта сообщат в течение двух рабочих дней со дня подписания протокола конкурсной комиссией.",
  },
  {
    question: "Укажите контактные данные КФ MDQ.",
    answer:
      "Контактные данные отдела поддержки масс медиа КФ «Медиа дамыту қоры»: e-mail: grants.mdq@gmail.com, тел: +7 775 807 38 93",
  },
];
export default function Home() {
  return (
    <main className="">
      <Card className="place-self-center lg:ml-96 max-w-6xl m-5 my-8 ">
        <CardHeader>
          <CardTitle className="mb-5">
            Гранты для авторов контента в социальных сетях
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
              <a href="https://forms.gle/H8J5xknVAyL9YKTM6">Податься</a>
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
          <source src="/video-grants/authorru.webm" type="video/webm" />
        </video>
        <CardTitle className="m-5 mt-20">FAQ</CardTitle>
        <CustomAccordion items={faqItems} />
        <div className="p-4 flex items-center">
          <div className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <a href="https://forms.gle/H8J5xknVAyL9YKTM6">Податься</a>
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
