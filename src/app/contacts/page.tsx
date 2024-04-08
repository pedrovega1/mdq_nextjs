export default function Home() {
  return (
    <main>

     <div className="max-w-6xl mx-auto p-4 my-60">

        <h2 className="text-3xl font-semibold mb-4">Контакты</h2>
        <div className="md:flex-row flex-col md:flex ">
          <div className="map bg-gray-200 w-full md:w-1/2 h-64"></div>
          <div className="flex flex-col mb-8 md:mr-4 md:p-4 p-0">
            <p className="mb-2">г. Нур-Султан</p>
            <p className="mb-2">Динмухамеда Кунаева, 2,</p>
            <p className="mb-2">Бизнес-центр «CCC»</p>
            <p className="mb-2">info@mdq.kz</p>
            <p className="mb-2">+7 7172 64 66 66</p>
            <p>Корпоративный Фонд «Медиа дамыту қоры»</p>
          </div>
          
        </div>
      </div>
    </main>
  );
}
