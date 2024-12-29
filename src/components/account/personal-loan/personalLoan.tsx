import { useTranslation } from "@/translations/clients";
import { PersonalLoan } from "@/types/loan.type";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PersonalLoanComponent = ({
  loan,
  onClick,
}: {
  loan: PersonalLoan;
  onClick: () => void;
}) => {
  const {lang}=useTranslation()
  
  return (
    <div
      className="border border-gray-400 rounded   text-black  sm:w-[250px] w-full flex flex-col  gap-y-3 hover:bg-gray-300 cursor-pointer hover:shadow-xl"
      onClick={onClick}
    >
      <div className="flex flex-col ">
        <Image
          src={"/business-loan.jpg"}
          width={250}
          height={100}
          alt="business-loan"
          className="max-h-[200px] w-full"
        />
        <div className="w-full h-[1px] bg-gray-300 " />
      </div>
      <div className="flex flex-col gap-y-3 max-h-[100px] px-4 py-2">
        <p className="text-[10px] text-gray-400">{loan.type}</p>
        <h3 className="font-black text-md capitalize">{loan.industry}</h3>
        <p className="text-xs font-bold ">{loan.purpose}</p>
      </div>
      <div className="flex flex-col mt-auto max-h-[100px] p-4">
        <div className="w-full h-[1px] bg-gray-300 my-3" />

        <div className="flex items-end justify-between">
          <div className="flex flex-col flex-wrap">
            <p className="text-[10px] text-[#555]">{loan.duration}</p>
            <h3 className="font-black text-md capitalize">{loan.amount}</h3>
          </div>
          <div className="bg-black rounded-full p-2">
            {lang=="ar"?<FaArrowLeft color="#fff"/>:<FaArrowRight color="#fff" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalLoanComponent;
