import Image from "next/image";
import Title from "./ui/Title";
import { MdShoppingCart } from "react-icons/md";
const CampaignsItem = () => {
  return (
    <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-10">
      <div className="relative md:w-44 md:h-44 w-36 h-36 after:content-[''] border-[5px] border-primary rounded-full overflow-hidden">
        <Image
          src="/images/food1.jpg"
          fill
          className="hover:scale-105 transition-all"
          alt="Campaigns"
        />
      </div>
      <div className="text-white">
        <Title addClass="text-2xl">Tasty Thursdays</Title>
        <div className="font-dancing my-1">
          <span className="text-[40px]">20%</span>
          <span className="text-sm inline-block ml-1">Off</span>
        </div>
        <button className="btn-primary flex items-center gap-x-2">
        <MdShoppingCart size={20} /> Order Now 
        </button>
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className="flex justify-between container mx-auto py-20 gap-10 flex-wrap">
      <CampaignsItem />
      <CampaignsItem />
    </div>
  );
};

export default Campaigns;
