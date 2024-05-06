import sushi from "../../assets/sushi-02-gunkanmaki-ikura-svgrepo-com.svg";

export default function SpecialiesCard() {
  return (
    <div className="border-2 border-blue-500 rounded-tl-[4rem] rounded-br-[4rem] flex flex-col gap-6 p-6">
      <div className=" h-48 w-auto flex justify-center items-center">
        <img src={sushi} alt="" className="w-auto h-4/5 object-contain" />
      </div>
      <div className="flex justify-between">
        <p className="text-3xl">Sushi</p>
        <p className="self-end">12 Variables</p>
      </div>
      <div className="flex">
        <button className="border-2 border-orange-600  w-11/12 self-center m-auto py-4 rounded-tl-[2rem] rounded-br-[2rem]">
          Order Now
        </button>
      </div>
    </div>
  );
}
