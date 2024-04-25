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
    question: "Акселератор – что это?    ",
    answer: "Акселератором является КФ «Медиа дамыту қоры», разработавший специальную программу для развития и роста малых СМИ. Гранты на акселерацию малых СМИ предоставляются для разработки социально значимых медиапроектов с вовлечением новой целевой аудитории."
  },
  {
    question: "Малые СМИ – что это? ",
    answer: "Это небольшие средства массовой информации, которые публикуют и показывают значимый для населения информационный контент. Являются актуальными только в своем регионе. Не способные конкурировать с республиканскими СМИ."
  },
  {
    question: "Какие СМИ могут претендовать на получение гранта?    ",
    answer: "Все малые СМИ, зарегистрированные в Республике Казахстан."
  },
  
  {
    question: "Какие требования к производству медиапродуктов?",
    answer: "- малые СМИ, находящие на стадии реорганизации, ликвидации или банкротства, а также деятельность, которых приостановлена в соответствии с действующим законодательством РК; - малые СМИ, имеющие задолженность по налогам и другим обязательным платежам в бюджет; - малые СМИ, в отношении которых возбуждено исполнительное производство."
  },
  {
    question: "По каким категориям выдаются гранты?    ",
    answer: "- социально значимый медиапроект; - отраслевой медиапроект; - медиапроект для выхода на новую целевую аудиторию."
  },
  {
    question: "Что подразумевается под медиапроектом?    ",
    answer: " - Социально значимый медиапроект должен поднять актуальную социальную проблему в регионе и предложить ее решение.  - Отраслевой медиапроект должен поднять актуальные вопросы отдельной отрасли, имеющие отношение к повседневной жизни общества, предложить пути их решений.  - Задача медиапроекта для выхода на новую целевую аудиторию — вовлечение новой целевой аудитории, обоснованное социальной актуальностью."
  },
  {
    question: "Какие условия должны быть соблюдены для регистрации малых СМИ в рамках грантовой программы?    ",
    answer: "Малые СМИ должны иметь государственную регистрацию в соответствии с законодательством Республики Казахстан. А также иметь штатную численность не более 10 человек. Количество посещений своего сайта за последние 3 месяца не более 1 млн человек, либо охват аудитории в Instagram, или TikTok, или Telegram, или YouTube не более 100 000 аккаунтов.    "
  },
  {
    question: "Размер гранта на акселерацию малых СМИ?",
    answer: "Размер гранта на акселерацию малых СМИ: от 3 млн до 10 млн тенге."
  },
  {
    question: "Как принять участие в конкурсе?",
    answer: "На официальном сайте КФ «Медиа дамыту қоры» нужно подать заявку с указанием общих данных о СМИ, предполагаемом проекте и плане мероприятий, планируемом бюджете (форма прилагается). А также заполнить форму портфолио с указанием ссылок собственных проектов (от 3 до 5), реализованных в течение последних двух лет."
  },
  {
    question: "Как и кем оценивается заявка?",
    answer: "Заявка претендента рассматривается конкурсной комиссией по восьми критериям по десятибалльной шкале. На первом этапе конкурсной комиссией оценивается актуальность социальной проблемы и значимость проекта, социальная значимость отрасли и актуальность поднимаемых вопросов, а также актуальность и социальная значимость выбора целевой аудитории. На втором этапе учитывается связность, полнота и охват проекта, новизна и уникальность проекта, реализуемость и перспективы проекта, реалистичность и обоснованность бюджета, а также качество проектов и/или медиапродуктов. По итогам рассмотрения двух этапов конкурсной комиссией критерии оценки суммируются, а гранты распределяются в соответствии с общим рейтингом бальной оценки, начиная с участника, набравшего максимальное количество баллов, и так далее, в пределах общего объема выделенных Фондом денежных средств.    "
  },
  {
    question: "По каким критериям оценивается заявка?",
    answer: "Медиапроект должен быть уникальным, социально значимым, интересен для целевой аудитории, реализуем и перспективным."
  },
  {
    question: "Как и по какой системе оценивается портфолио?",
    answer: "Основной критерий оценки портфолио – качество проекта и/или медиапродукта. Оценивается по пятибалльной шкале."
  },
  {
    question: "На какие цели грантополучатель может использовать грант?",
    answer: "Грантополучатели в целях достижения поставленных задач вправе использовать грант на следующие цели: на аренду помещения; на аренду и/или приобретение реквизитов; на оплату вознаграждения привлекаемых техспециалистов, указанных в смете расходов грантополучателя и командировочных расходов, связанных с реализацией гранта; на аренду и/или приобретение техники."
  },
  {
    question: "На что нельзя тратить грант?",
    answer: "Гранты для акселерации малых СМИ не могут быть использованы для деятельности, не связанной с созданием и распространением медиапроектов."
  },
  {
    question: "В каких случаях грантополучатель может лишиться выделенных ему грантовых средств?",
    answer: "создание контента третьими лицами, не принимавшими участие в конкурсе на получение гранта; получение гранта с помощью лиц аффилированных с членами конкурсной комиссии и работниками Фонда лиц; -производство медиапродуктов оскорбляющего честь и достоинства людей, угрожающего характера, материалы, пропагандирующие дискриминацию людей по расовому, этническому, половому, социальному признакам, способствующие разжиганию религиозной, расовой или межнациональной розни и т.д."
  },
  {
    question: "На каком языке подается заявка?",
    answer: "Все документы заполняются на казахском или русском языках."
  },
  {
    question: "Сколько раз можно подавать заявку одному малому СМИ?",
    answer: "Малое СМИ, претендующее на получение гранта, вправе подать только одну заявку на одну тематическую линию."
  },
  {
    question: "Сколько дней рассматривается заявка?",
    answer: "Заявка претендента на получение гранта рассматривается в течение десяти рабочих дней после завершения срока приема заявок."
  },
  {
    question: "По итогам реализации гранта обязаны ли малые СМИ предоставить отчет о проделанной работе?",
    answer: "По итогам реализации гранта малые СМИ обязаны представить готовую медиапродукцию для демонстрации полученных знаний и компетенций, подтверждения целевого освоения гранта."
  },
  {
    question: "Как узнать результаты рассмотрения заявки?",
    answer: "Результаты рассмотрения заявки будут сообщены специалистами отдела поддержки масс медиа КФ «Медиа дамыту қоры». С вами свяжутся."
  },
  {
    question: "Укажите контактные данные КФ MDQ.",
    answer: "Контактные данные отдела поддержки масс медиа КФ «Медиа дамыту қоры»: e-mail: grants.mdq@gmail.com, тел: +7 775 807 38 93"
  }

];
export default function Home() {
  return (
    <main className="">
      <Card className="place-self-center lg:ml-96 max-w-6xl m-5 my-8 ">
        <CardHeader>
          <CardTitle className="mb-5">Гранты для акселерации малых СМИ</CardTitle>
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
              <a href="https://forms.gle/cq2R7Zo1z6xyP79w7">Податься</a>
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
    <CustomAccordion items ={faqItems}/>
        <div className="p-4 flex items-center">
          <div className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <a href="https://forms.gle/cq2R7Zo1z6xyP79w7">Податься</a>
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
