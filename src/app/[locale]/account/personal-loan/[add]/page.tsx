"use client"
import AddLoan from "@/components/account/personal-loan/add-loan";
import { useParams } from "next/navigation";


const AddorEdit = () => {
    const params=useParams()
    
    return (
        <div className="container my-5 flex flex-col gap-y-5 ">
            <AddLoan type={String(params.add)}/>
        </div>
    );
}

export default AddorEdit;
