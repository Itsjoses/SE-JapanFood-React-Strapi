import DynamicLayout from "./DynamicLayout";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


export default function Footer() {
  return (
    <div className="bg-blue-900 min-h-48 py-8">
      <DynamicLayout border={false}>
        <div className="flex flex-col text-white mb-14">
          <div className="flex md:flex-row flex-col md:gap-0 gap-8">
            <p className="lg:w-4/12 md:w-3/12 font-Merienda xl:text-3xl lg:text-2xl text-xl">Eimi House</p>
            <div className="flex xl:gap-20 lg:gap-12 gap-4 xl:w-8/12 lg:w-9/12 w-full justify-between lg:justify-normal ">
              <div className="gap-4 flex flex-col w-full ">
                <p className="font-Merienda lg:text-xl md:text-lg text-base md:h-auto h-10 ">DINNER HOURS</p>
                <div className="lg:text-base md:text-sm text-xs">
                  <p>Sunday : 4:30 PM - 9:30 PM </p>
                  <p>Monday ~ Thursday : 5:00 P.M. TO 9:30 P.M</p>
                  <p>Friday ~ Saturday : 5:00 P.M. TO 10:00 P.M</p>
                </div>
              </div>
              <div className="gap-4 flex flex-col w-full">
                <p className="font-Merienda lg:text-xl md:text-lg text-base md:h-auto h-10">LUNCH HOURS</p>
                <div className="lg:text-base md:text-sm text-xs">
                  <p>Monday ~ Friday : 11:30 A.M. TO 2:30 P.M</p>
                  <p>Thursday : 10:00 A.M. TO TO 3:00 P.M</p>
                </div>
              </div>
              <div className="gap-4 flex flex-col w-full">
                <p className="font-Merienda lg:text-xl md:text-lg text-base md:h-auto h-10">SOCIAL</p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <CiInstagram className="lg:text-2xl text-xl" />
                    <span className="lg:text-base md:text-sm text-xs">Instagram</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CiFacebook className="lg:text-2xl text-xl" />
                    <span className="lg:text-base md:text-sm text-xs">Facebook</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaGithub className="lg:text-2xl text-xl" />
                    <span className="lg:text-base md:text-sm text-xs">Github</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CiLinkedin className="lg:text-2xl text-xl" />
                    <span className="lg:text-base md:text-sm text-xs">Linkedin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-8" />
        <div className="text-white md:text-base text-sm">
          <p>Made with ❤ by @itssejo.s</p>
          <p>Copyright © 2024 All Rights Reserved</p>
        </div>
      </DynamicLayout>
    </div>
  );
}
