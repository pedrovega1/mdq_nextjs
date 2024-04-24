import Link from "next/link";
interface AnnouncementLinkProps {
  href: string;
  text: string;
}
interface ContractLinkProps {
  href: string;
  text: string;
}
function AnnouncementLink({ href, text }: AnnouncementLinkProps) {
  return (
    <li>
      <Link href={href}>
        <p className="text-white hover:text-blue-500 hover:underline cursor-pointer">
          {text}
        </p>
      </Link>
    </li>
  );
}

function ContractLink({ href, text }: ContractLinkProps) {
  return (
    <li>
      <Link href={href}>
        <p className="text-white hover:text-blue-500 hover:underline cursor-pointer">
          {text}
        </p>
      </Link>
    </li>
  );
}

export default function Zakup() {
  const announcements2024 = [
    {
      id: 1,
      href: "/docs/2024_1_announcement_autorent.docx",
      text: "Информационное сообщение о проведении закупок №1",
    },
    {
      id: 2,
      href: "/docs/2024_2_announcement_internet.docx",
      text: "Информационное сообщение о проведении закупок №2",
    },
    {
      id: 3,
      href: "/docs/2024_3_announcement_water.docx",
      text: "Информационное сообщение о проведении закупок №3",
    },
    {
      id: 4,
      href: "/docs/2024_4_announcement_internet.docx",
      text: "Информационное сообщение о проведении закупок №4",
    },
    {
      id: 4,
      href: "/docs/2024_5_announcement_water.docx",
      text: "Информационное сообщение о проведении закупок №5",
    },
    
  ];

  const contracts2024 = [
    {
      id: 2,
      href: "/docs/projectdogovor/2024_2_dogovor_internet.doc",
      text: "Проект договора №2",
    },
    {
      id: 3,
      href: "/docs/projectdogovor/2024_3_dogovor_water.doc",
      text: "Проект договора №3",
    },
    {
      id: 4,
      href: "/docs/projectdogovor/2024_4_dogovor_internet.doc",
      text: "Проект договора №4",
    },
    {
      id: 5,
      href: "/docs/projectdogovor/2024_5_dogovor_water.doc",
      text: "Проект договора №5",
    },
  ];

  const announcements2023 = [
    {
      id: 1,
      href: "/docs/zakup2023/1_announcement_internet.docx",
      text: "Информационное сообщение о проведении закупок №1",
    },
    {
      id: 2,
      href: "/docs/zakup2023/2_announcement_cartridges.docx",
      text: "Информационное сообщение о проведении закупок №2",
    },
    {
      id: 3,
      href: "/docs/zakup2023/3_dogovor_cleaning.docx",
      text: "Информационное сообщение о проведении закупок №3",
    },
    {
      id: 4,
      href: "/docs/zakup2023/4_announcement_water.docx",
      text: "Информационное сообщение о проведении закупок №4",
    },
    {
      id: 5,
      href: "/docs/zakup2023/5_announcement_autorent.docx",
      text: "Информационное сообщение о проведении закупок №5",
    },
    {
      id: 6,
      href: "/docs/zakup2023/5_announcement_autorent.docx",
      text: "Информационное сообщение о проведении закупок №6",
    },
    {
      id: 7,
      href: "/docs/zakup2023/5_announcement_autorent.docx",
      text: "Информационное сообщение о проведении закупок №7",
    },
    {
      id: 8,
      href: "/docs/zakup2023/5_announcement_autorent.docx",
      text: "Информационное сообщение о проведении закупок №8",
    },
    {
      id: 9,
      href: "/docs/zakup2023/5_announcement_autorent.docx",
      text: "Информационное сообщение о проведении закупок №9",
    },
  ];

  const contracts2023 = [
    {
      id: 1,
      href: "/docs/zakup2023/projectdogovor/1_dogovor_internet.doc",
      text: "Проект договора №1",
    },
    {
      id: 2,
      href: "/docs/zakup2023/projectdogovor/2_dogovor_cartridges.doc",
      text: "Проект договора №2",
    },
    {
      id: 3,
      href: "/docs/projectdogovor/3_dogovor_cleaning.doc",
      text: "Проект договора №3",
    },
    {
      id: 4,
      href: "/docs/projectdogovor/4_dogovor_water.doc",
      text: "Проект договора №4",
    },
    {
      id: 5,
      href: "/docs/projectdogovor/5_dogovor_autorent.doc",
      text: "Проект договора №5",
    },
    {
      id: 6,
      href: "/docs/projectdogovor/6_dogovor_paper.doc",
      text: "Проект договора №6",
    },
    {
      id: 7,
      href: "/docs/projectdogovor/7_dogovor_kanctov.doc",
      text: "Проект договора №7",
    },
    {
      id: 8,
      href: "/docs/projectdogovor/8_dogovor_antivirus.doc",
      text: "Проект договора №8",
    },
    {
      id: 8,
      href: "/docs/projectdogovor/9_dogovor_hdd.doc",
      text: "Проект договора №9",
    },
  ];

  const protocols2023 = [
    {
      id: 1,
      href: "/pdf/8_protocol.pdf",
      text: 'Протокол Заседания Управляющего совета КФ "Медиа дамыту қоры №8',
    },
    {
      id: 2,
      href: "/pdf/9_protocol.pdf",
      text: 'Протокол Заседания Управляющего совета КФ "Медиа дамыту қоры №9',
    },
    {
      id: 3,
      href: "/pdf/10_protocol.pdf",
      text: 'Протокол Заседания Управляющего совета КФ "Медиа дамыту қоры №10',
    },
    {
      id: 4,
      href: "/pdf/11_protocol.pdf",
      text: 'Протокол Заседания Управляющего совета КФ "Медиа дамыту қоры №11',
    },
    {
      id: 5,
      href: "/pdf/12_protocol.pdf",
      text: 'Протокол Заседания Управляющего совета КФ "Медиа дамыту қоры №12',
    },
    {
      id: 6,
      href: "/pdf/15_protocol.pdf",
      text: 'Протокол Заседания Управляющего совета КФ "Медиа дамыту қоры №15',
    },
  ];
  const protocols2024 = [
    {
      id: 1,
      href: "/pdf/2024_3_protocol.pdf",
      text: 'Протокол Заседания Управляющего совета КФ "Медиа дамыту қоры №8',
    },
   
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
      <div className="flex flex-col">
        <section className="zakup2024  border-b ">
          <h2 className="text-gray-200 font-semibold md:text-4xl text-2xl mb-2">
            Закупки 2024 года
          </h2>
          <div className="md:flex md:flex-row md:justify-between flex-col mb-2">
            <div className="mb-2">
              <h3 className="text-gray-300 font-medium mb-2">
                Информационные сообщения:
              </h3>
              <ul className="list-disc pl-6">
                {announcements2024.map((announcement) => (
                  <AnnouncementLink
                    key={announcement.id}
                    href={announcement.href}
                    text={announcement.text}
                  />
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-gray-300 font-medium mb-2">
                Проекты договоров:
              </h3>
              <ul className="list-disc pl-6">
                {contracts2024.map((contract) => (
                  <ContractLink
                    key={contract.id}
                    href={contract.href}
                    text={contract.text}
                  />
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="zakup2023 mb-2 border-b">
          <h2 className="text-gray-200 font-semibold md:text-4xl text-2xl mb-2">
            Закупки 2023 года
          </h2>
          <div className="md:flex md:flex-row md:justify-between mb-2">
            <div className="mb-2">
              <h3 className="text-gray-300 font-medium mb-2">
                Информационные сообщения:
              </h3>
              <ul className="list-disc pl-6">
                {announcements2023.map((announcement) => (
                  <AnnouncementLink
                    key={announcement.id}
                    href={announcement.href}
                    text={announcement.text}
                  />
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-gray-300 font-medium mb-2">
                Проекты договоров:
              </h3>
              <ul className="list-disc pl-6">
                {contracts2023.map((contract) => (
                  <ContractLink
                    key={contract.id}
                    href={contract.href}
                    text={contract.text}
                  />
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="protocols2024 mb-2 border-b">
          <h2 className="text-gray-200 font-semibold md:text-4xl text-2xl  mb-2">
            Протоколы 2024 года
          </h2>
          <ul className="list-disc pl-6 mb-2">
            {protocols2024.map((protocol) => (
              <AnnouncementLink
                key={protocol.id}
                href={protocol.href}
                text={protocol.text}
              />
            ))}
          </ul>
        </section>

        <section className="protocols2024  mb-2 border-b">
          <h2 className="text-gray-200 font-semibold md:text-4xl text-2xl">
            Протоколы 2023 года
          </h2>
          <ul className="list-disc pl-6 mb-2">
            {protocols2023.map((protocol) => (
              <AnnouncementLink
                key={protocol.id}
                href={protocol.href}
                text={protocol.text}
              />
            ))}
          </ul>
        </section>

        <section className="announcement2023 ">
        <h2 className="text-gray-300 font-semibold md:text-4xl text-2xl mb-2">
            Объявления 2023 года
          </h2>
          <h1>
            Объявление о включении в реестр потенциальных поставщиков по
            созданию аудиовизуальной продукции
          </h1>
        </section>
      </div>
    </main>
  );
}
