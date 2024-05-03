'use client'

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

function ButtonSwitch() {
  const router = useRouter();
  const path =  usePathname();
  const changeLanguage = (lang: string) => {
  
    
    console.log(path)
  
  
    const segments = path.split('/');
    segments[1] = lang; 

    
    const newPath = segments.join('/');

    
    router.push(newPath);
  };

  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-row items-center right-1">
        <button
          onClick={() => changeLanguage('kk')}
          className="p-2 flex flex-row items-center  text-sm font-medium text-gray-500 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none"
        >
          <span className="text-md">KK</span>
          <span className="ml-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/1280px-Flag_of_Kazakhstan.svg.png"
              className="w-[20px] h-[14px]"
            />
          </span>
        </button>

        <button
          onClick={() => changeLanguage('ru')}
          className="p-2 flex flex-row items-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none"
        >
          <span className="text-md">RU</span>
          <span className="ml-1">
            <img
              src="https://goodies.icons8.com/web/common/header/flags/ru.svg"
              className="w-5 h-5"
            />
          </span>
        </button>
      </div>
    </div>
  );
}

export default ButtonSwitch;
