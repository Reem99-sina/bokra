"use client";
import DetailLona from "@/components/account/personal-loan/detail-lona";
// import { dataLoans } from "@/utils/data.util";
// import { useParams } from "next/navigation";
// import { useMemo } from "react";

const DetailPage = () => {
//   const { id } = useParams();
//   const detailId = useMemo(() => {

//     return dataLoans.find((ele, index) => index + 1 == Number(id));
//   }, [id, dataLoans]);
  
  return (
    <div className="container mb-8 mt-3 mx-auto flex flex-col gap-y-5 ">
      <DetailLona />
    </div>
  );
};

export default DetailPage;
