import  { useState } from 'react'
import DynamicLayout from './layouts/DynamicLayout'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function Carousel() {
      const review: {name: string; review: string }[] = [
        {name: "Jose",review:"EIMI Sushi adalah surga bagi para penggemar sushi! Saya baru-baru ini mengunjungi restoran ini dengan teman-teman dan kami semua terkesan dengan kualitas dan rasa sushi mereka. Setiap gigitan membawa kelezatan yang luar biasa, dan presentasi hidangan mereka sangat menarik. Stafnya sangat ramah dan membantu, menambahkan sentuhan hangat pada pengalaman makan kami. Pasti akan kembali lagi!"},
        {name: "Jevon",review:"EIMI Sushi adalah pilihan terbaik untuk sushi di kota ini. Sushi mereka selalu segar, dan variasi menu mereka sangat mengesankan. Saya sangat merekomendasikan mencoba beberapa roll spesial mereka, seperti Dragon Roll dan Volcano Roll - mereka benar-benar luar biasa! Layanan di restoran ini juga sangat baik, dengan staf yang selalu siap membantu dan ramah."},
        {name: "Kevin",review:"Saya adalah penggemar sushi sejati, dan EIMI Sushi tidak mengecewakan! Saya sering makan di sini dan belum pernah kecewa dengan pengalaman makan saya. Sushi mereka selalu segar dan disajikan dengan indah. Saya juga ingin menyebutkan bahwa harga mereka sangat masuk akal untuk kualitas yang Anda dapatkan. Suasana restoran juga sangat nyaman, sempurna untuk makan malam santai atau pertemuan bisnis. Jangan lewatkan tempat ini jika Anda mencari sushi yang luar biasa!"},
      ]
      const [currentSlide, setCurrentSlide] = useState<number>(0);
    
      const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
          prevSlide === review.length - 1 ? 0 : prevSlide + 1
        );
      };
    
      const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
          prevSlide === 0 ? review.length - 1 : prevSlide - 1
        );
      };

  return (
    <div className="flex w-full justify-center items-center bg-cover bg-center bg-no-repeat bg-fixed bg-sushi relative ">
        <DynamicLayout border={false}>
          <div className="flex justify-center items-center md:mb-16 z-50 text-white md:py-24 py-12">
            <div className="lg:w-6/12 md:w-8/12 w-10/12  flex flex-col items-center">
              <div className="flex gap-8">
                <div className="self-center text-2xl z-50">
                  <FaChevronLeft onClick={prevSlide}/>
                </div>
                <div className="min-h-40 flex items-center justify-center text-center xl:text-xl lg:text-lg md:text-base text-sm">
                  {review[currentSlide].review}
                </div>
                <div className="self-center text-2xl z-50">
                  <FaChevronRight onClick={nextSlide}/>
                </div>
              </div>
              <div className="min-h-10 text-center font-bold md:text-xl text-lg mt-3">
              {review[currentSlide].name}
              </div>
            </div>
          </div>
        </DynamicLayout>
      </div>
  )
}
