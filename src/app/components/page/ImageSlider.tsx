'use client'
import { useState, useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  { src: '/images/logo-pc.png', alt: 'logo', description: 'This is the description for the Logo image. It might be quite long and should animate properly.' },
  { src: '/images/cap-logo.png', alt: 'cap logo', description: 'This is the description for the Cap Logo image.' },
  { src: '/images/logo-main.png', alt: 'main logo', description: 'This is the description for the Main Logo image.' },
  { src: '/images/cat-code.png', alt: 'cat code', description: 'This is the description for the Cat Code image.' },
];

export default function ImageSlider() {
  const [selectedDescription, setSelectedDescription] = useState<string | null>(null);
  const sliderRef = useRef<Slider | null>(null);

  const handleImageClick = (description: string, index: number) => {
    setSelectedDescription(description);
    sliderRef.current?.slickGoTo(index); // クリックした画像のスライドに移動
  };

  // react-slick の設定
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px', // スライドの間隔をゼロに設定
    afterChange: (current: number) => {
      const description = images[current]?.description || '';
      setSelectedDescription(description);
    },
  };

  return (
  <div className="relative bg-black h-[392px] overflow-hidden">
    <Slider {...settings} ref={sliderRef}>
      {images.map((image, index) => (
        <div key={index} className="relative">
          <Image
            src={image.src}
            width={500}
            height={333}
            alt={image.alt}
            className="cursor-pointer"
            onClick={() => handleImageClick(image.description, index)}
          />
          {/* {selectedDescription === image.description && (
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#fdf22b] text-black p-4 rounded transition-all duration-500 ease-in-out z-10"
            >
              {selectedDescription}
            </div>
          )} */}
        </div>
      ))}
    </Slider>
  </div>

  );
}
