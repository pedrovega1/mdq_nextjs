import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <div className="max-w-6xl mx-auto p-4 sm:my-44">
        <h2 className="text-3xl font-semibold mb-4 text-center"> Свяжитесь с нами</h2>

        <div className="flex justify-center">
          <div className="map bg-gray-200 w-full md:w-1/2 h-64 rounded-lg mb-4"></div>
        </div>
        <div className="flex justify-center gap-4">
          <div className="grid grid-cols-1 md:grid-cols-3 md:p-4 p-0 gap-4">
            <div className=" p-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
              <a
                href="https://2gis.kz/astana/firm/70000001018101942?m=71.41803%2C51.13095%2F19.08"
                className="flex flex-col items-center"
              >
                <FaMapMarkerAlt className="text-2xl mb-2 mx-auto" />
                <p className="text-center">г. Нур-Султан</p>
                <p className="text-center">Дінмұхамед Қонаев көшесі, 2</p>{" "}
              </a>
            </div>
            <div className=" p-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
              <a
                href="mailto:info@mdq.kz"
                className="flex flex-col items-center"
              >
                <FaEnvelope className="text-2xl mb-2 mx-auto" />
                <p className="text-center">info@mdq.kz</p>
              </a>
            </div>
            <div className=" p-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105 ">
              <a href="tel:+77172646666" className="flex flex-col items-center">
                <FaPhone className="text-2xl mb-2 mx-auto" />
                <p className="text-center">+7 7172 64 66 66</p>
              </a>
            </div>
          </div>
        </div>
        <TextGenerateEffect
          words="Корпоративный Фонд «Медиа дамыту қоры»"
          className="text-center"
        />
      </div>
    </main>
  );
}
