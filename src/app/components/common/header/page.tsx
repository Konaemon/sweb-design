'use client'
import Image from "next/image";
import { useState } from "react";
import ImageSlider from "../../page/ImageSlider";

type KeywordProps = {
  setKeyword: any;
};

const Header = ({ setKeyword }: KeywordProps) => {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setSearchVisible(!isSearchVisible);
  }

  const handleSearchEnter = (e: React.KeyboardEvent<HTMLParagraphElement>) => {
    //文字確定のエンターと検索のエンターの識別
    if (!e.nativeEvent.isComposing && e.key === "Enter") {
      if (!(e.target instanceof HTMLInputElement)) {
        return;
      }
      setKeyword(e.target.value);
    }
  };
  return (
    <div className="max-w-[1600px] text-[#333] min-h-screen flex flex-col">
      <div className="flex justify-between items-start flex-1 bg-white">
        <div className="flex gap-4 items-start">
          <Image className='object-contain' src='/images/logo.svg' width={113} height={34} alt="logo" />

          <div className="mt-6 text-[10px] flex gap-[50px]">
            <div className="flex gap-8">
              <p>profile</p>
              <ul className="flex flex-col gap-2">
                <li>web</li>
                <li>visual identity</li>
                <li>graphic design</li>
                <li>editorial</li>
              </ul>
              <ul className="flex flex-col gap-2">
                <li>fashion</li>
                <li>photograph</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center border-b border-[#333]">
                <label className="text-[#333]">search：</label>
                <input
                  enterKeyHint="search"
                  type="text"
                  className="bg-[#F9F9F9] w-full pl-1 outline-none"
                  placeholder="Enter"
                  onKeyUp={handleSearchEnter}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="my-[13px] w-[51px] text-[10px] leading-none text-left whitespace-nowrap">
          <p>© 2024</p>
          <p>sweb</p>
          <p>ALL</p>
          <p>RIGHTS</p>
          <p>RESERV</p>
          <p>ED.</p>
        </div>
      </div>

      <div className="bg-black h-[392px] overflow-hidden">
        <ImageSlider/>
      </div>
    </div>
  );
}

export default Header;
