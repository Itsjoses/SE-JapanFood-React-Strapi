import Header from "../components/layouts/Header";
import ramen from "../assets/ramen.png";
import DynamicLayout from "../components/layouts/DynamicLayout";
import { SiGmail } from "react-icons/si";
import Footer from "../components/layouts/Footer";
import { GiSushis } from "react-icons/gi";
import { GiCampCookingPot } from "react-icons/gi";
import { MdRoomService } from "react-icons/md";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaMap } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import "./map.css";
import "leaflet/dist/leaflet.css";
import MenuCard from "../components/cards/MenuCard";
import HomeTrust from "../components/cards/HomeTrust";
import Middleware from "../libs/middleware";
import Carousel from "../components/Carousel";
export default function Home() {
  return (
    <Middleware.Public>
    <div>
      <Header menu="Home"/>
      {/* <HeaderMobile menu="Home"/> */}
      <DynamicLayout border={false}>
        <div className="py-8 flex-col-reverse md:flex-row flex items-center">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <span className="font-bold border-b-2 w-fit py-4 xl:text-7xl lg:text-6xl text-5xl">
              えいみ寿司
            </span>
            <p className="md:w-3/5 w-4/5 font-Merienda text-custom-orange xl:text-4xl lg:text-3xl md:text-2xl text-lg">
              A PASSION OF SUSHI FROM JAPANESE RESTOURANT FOR YOU
            </p>
            <p className="xl:text-lg lg:text-sm text-xs">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              iure nisi reprehenderit id error excepturi repudiandae, similique
              voluptas deleniti assumenda corrupti harum repellat, labore
              quaerat facere perferendis quidem esse maiores, porro est enim!
              Tempore officia doloribus omnis iusto reiciendis fugiat!
            </p>
            <button className="text-white relative w-fit bg-red-600 before:md:top-1 before:md:left-1 before:lg:top-2 before:lg:left-2 before:top-2 before:left-2 before:w-full before:h-full before:absolute before:border before:-z-50 before:border-red-500 lg:px-8 lg:py-2 md:px-6 md:py-1 px-6 py-2">
              Order Now
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center ">
            <img src={ramen} alt="" className="object-contain xl:w-8/12 xl:h-8/12 md:w-9/12 md:h-9/12 w-5/12 h-5/12"  />
          </div>
        </div>
      </DynamicLayout>

      <DynamicLayout border={false}>
        <div className="mb-12 ">
          <p className="flex justify-center mt-12 mb-24 font-Merienda lg:text-5xl text-4xl" >
            OUR MENU
          </p>
          <div className="w-full">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center w-11/12 mx-auto">
              <MenuCard title={"Sushi"} background={"bg-sushi-menu"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                laudantium fugiat et consequatur magni eius iure, amet quae a
                recusandae officia quam tempora sed voluptate nesciunt accusamus
                molestias harum deleniti?
              </MenuCard>
              <MenuCard title={"Ramen"} background={"bg-ramen-menu"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                laudantium fugiat et consequatur magni eius iure, amet quae a
                recusandae officia quam tempora sed voluptate nesciunt accusamus
                molestias harum deleniti?
              </MenuCard>
              <MenuCard title={"Appetizer"} background={"bg-appetizer-menu"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                laudantium fugiat et consequatur magni eius iure, amet quae a
                recusandae officia quam tempora sed voluptate nesciunt accusamus
                molestias harum deleniti?
              </MenuCard>
              <MenuCard title={"Drink & Sake"} background={"bg-sake-menu"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                laudantium fugiat et consequatur magni eius iure, amet quae a
                recusandae officia quam tempora sed voluptate nesciunt accusamus
                molestias harum deleniti?
              </MenuCard>
            </div>
          </div>
        </div>
      </DynamicLayout>

      <div className="flex justify-center items-center bg-cover bg-center md:bg-fixed bg-no-repeat bg-chef relative before:bg-gradient-to-l before:from-transparent before:to-black before:from-40% before:to-60% before:w-full before:absolute before:h-full before:-z-10 -z-10">
        <div className="flex w-full xl:py-72 lg:py-60 md:py-52 py-16">
          <div className="md:w-[40%] w-full text-white flex justify-center ">
            <div className="gap-4 text-center flex flex-col">
              <p className="font-Merienda text-custom-orange xl:text-5xl lg:text-4xl md:text-3xl text-xl">
                BEST OF TASTE
              </p>
              <p className="lg:text-base text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                expedita!
              </p>
            </div>
          </div>
          <div className="w-[60%] md:inline-block hidden"></div>
        </div>
      </div>

      <DynamicLayout border={false}>
        <div className="mb-12 my-20 flex flex-col md:gap-28 gap-16">
          <p className="flex justify-center font-Merienda lg:text-5xl md:text-4xl text-3xl">
            REASON TO TRUST OUR RESTAURANT
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-14 gap-12">
            <HomeTrust Icon={GiSushis} title={"Fresh ingredients"}>
              Experience the essence of authenticity with every bite at our
              Japanese restaurant, where we uphold the sacred tradition of using
              fresh ingredients daily. Our commitment to excellence begins each
              morning as we source the finest local produce and select the
              highest quality seafood straight from the docks.
            </HomeTrust>
            <HomeTrust Icon={GiCampCookingPot} title={"Professional Chef"}>
              Step into our culinary realm, where mastery meets creativity with
              our team of seasoned chefs. Each wielding years of experience
              honed in the kitchens of Japan, our chefs bring forth a symphony
              of flavors, crafting authentic Japanese delicacies with precision
              and passion. From traditional sushi techniques passed down through
              generations to innovative culinary interpretations, our chefs
              infuse every dish with an unwavering commitment to excellence,
              ensuring each bite is a journey of unparalleled taste and
              artistry.
            </HomeTrust>
            <HomeTrust Icon={MdRoomService} title={"Best Services"}>
              At our Japanese restaurant, exceptional service is woven into the
              fabric of every dining experience. From the warm welcome at the
              door to the attentive care throughout your meal, our dedicated
              staff is committed to exceeding your expectations. With a deep
              understanding of Japanese hospitality, each member of our team
              anticipates your needs with grace and professionalism, ensuring
              every visit leaves you feeling not just satisfied, but truly
              cherished. Come and experience hospitality redefined at our
              restaurant, where every guest is treated like family
            </HomeTrust>
          </div>
        </div>
      </DynamicLayout>

      <Carousel/>
      
      <div className="overflow-hidden w-full h-full flex md:flex-row flex-col">
        <div className="md:w-6/12 w-full h-full justify-center py-24 ">
          <div className=" flex justify-center">

          <div className="flex flex-col gap-12 lg:w-2/5 md:w-3/5 w-4/5">
            <p className="lg:text-4xl md:text-3xl text-2xl font-Merienda font-bold">
              VISIT EIMI RESTAURANT TODAY
            </p>
            <p className="lg:text-lg text-base text-custom-orange">OPEN 7 DAYS A WEEK</p>
            <div className="gap-8 flex flex-col">
              <div className="flex md:gap-8 gap-4">
                <div className="lg:w-16 md:w-10">
                  <FaMap className="lg:text-6xl md:text-5xl text-4xl max-w-xl" />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="xl:text-2xl lg:text-xl md:text-lg">ADRRESS</p>
                  <p className="xl:text-xl lg:text-base md:text-xs">Jl. Bambang satu dua tiga haha hihi anjay</p>
                </div>
              </div>
              <div className="flex md:gap-8 gap-4">
                <div className="lg:w-16 md:w-10">
                  <SiGmail className="lg:text-6xl md:text-5xl text-4xl max-w-xl" />
                </div>
                <div className="flex flex-col gap-4 ">
                  <p className="xl:text-2xl lg:text-xl md:text-lg">EMAIL</p>
                  <p className="xl:text-xl lg:text-base md:text-xs break-words whitespace-normal">josesusanto147@gmail.com</p>
                </div>
              </div>
              <div className="flex md:gap-8 gap-4">
                <div className="lg:w-16 md:w-10">
                  <FaPhoneAlt className="lg:text-6xl md:text-5xl text-4xl max-w-xl" />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="xl:text-2xl lg:text-xl md:text-lg">Phone</p>
                  <p className="xl:text-xl lg:text-base md:text-xs">+62 847590384673</p>
                </div>
              </div>
            </div>
            <div>
              <button className="bg-red-600 text-white lg:text-lg md:text-base font-bold xl:py-4 xl:px-4 md:py-3 md:px-3 md:w-fit w-full py-3">
                MAKE A RESERVATION
              </button>
            </div>
          </div>
          </div>

        </div>
        <div className="md:w-6/12 md:h-auto h-96 w-full">
          <MapContainer
          // @ts-ignore comment
            center={[-6.2018, 106.7823]}
            zoom={100}
            className="map-container"
          >
            <TileLayer
            // @ts-ignore comment
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-6.2018, 106.7823]}>
              <Popup>This is Our Restaurant!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Footer />
    </div>
    </Middleware.Public>
  );
}
