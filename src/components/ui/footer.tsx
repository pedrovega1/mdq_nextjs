import React from "react";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
	return (
		<>
			<div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start">
				<div className="p-5 ">
					<ul>
						<p className="text-gray-800 font-bold text-3xl pb-6">
							MD<span className="text-sky-700">Q</span>
						</p>
						<div className="flex gap-6 pb-5">
							<a href="https://www.instagram.com/"><FaInstagram className="text-2xl cursor-pointer text-blue-700" /></a>
							<a href="https://www.telegram.org/"><FaTelegram className="text-2xl cursor-pointer text-blue-700" /></a>
							<a href="https://www.facebook.com/"><FaFacebook className="text-2xl cursor-pointer text-blue-700" /></a>
							<a href="https://www.youtube.com/"><FaYoutube className="text-2xl cursor-pointer text-blue-700" /></a>
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<a href="/"><p className="text-gray-800 font-bold text-xl pb-4 hover:text-blue-600 cursor-pointer">О фонде</p>
						</a>
					</ul>
				</div>
				<div className="p-5">
					<ul>
                    <a href="granty"><p className="text-gray-800 font-bold text-xl pb-4 hover:text-blue-600 cursor-pointer">Гранты</p></a>
						<li className="text-gray-800 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <a href="">
							Новости
                            </a>
						</li>
						<li className="text-gray-800 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                        <a href="faq">
                            FAQ
                            </a>
						</li>
						<li className="text-gray-800 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							<a href="contacts">
                            Контакты
                            </a>
						</li>
						{/* <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Careers
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Press & Media
						</li> */}
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-xl pb-4 hover:text-blue-600 cursor-pointer">Контакты</p>
						<li className="text-sky-700 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                        +7 7172 64 66 66
						</li>
						<li className="text-gray-800 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							info@mdq.kz
						</li>
						
						<li className="text-gray-800 pt-10 font-bold text-xl pb-4 hover:text-blue-600 cursor-pointer">
							Адрес
						</li>
						<li className="text-gray-500 text-xs/6 pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                        Динмухамеда Кунаева, 2, Бизнес-центр «CCC»

						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col p-5 pl-16 bg-gray-50 text-xs">
				<h1 className="text-gray-500 font-semibold">
					© 2024 MDQ
				</h1>
			</div>
		</>
	);
}

export default Footer;