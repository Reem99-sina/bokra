import { PersonalLoan } from "@/types/loan.type";
import { FaArrowRight } from "react-icons/fa";

const PersonalLoanComponent = ({ loan,onClick }: { loan: PersonalLoan ,onClick:()=>void}) => {
  return (
    <div
      className="border border-gray-400 rounded p-4  text-black  w-[250px] flex flex-col justify-between gap-y-3 hover:bg-gray-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col gap-y-3">
        <p className="text-[10px] text-gray-400">{loan.type}</p>
        <h3 className="font-black text-md capitalize">{loan.industry}</h3>
        <p className="text-xs font-bold w-[50%]">{loan.purpose}</p>
      </div>
      <div className="w-full h-[1px] bg-gray-300 " />
      <div className="flex items-end justify-between">
        <div className="flex flex-col flex-wrap">
          <p className="text-[10px] text-gray-400">{loan.duration}</p>
          <h3 className="font-black text-md capitalize">{loan.amount}</h3>
        </div>
        <div className="bg-black rounded-full p-2">
          <FaArrowRight color="#fff" />
        </div>
      </div>
    </div>
  );
};

export default PersonalLoanComponent;
