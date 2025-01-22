"use client"
import AddLoan from "@/components/account/personal-loan/add-loan";
import { useParams } from "next/navigation";


const AddorEdit = () => {
    const params=useParams()
    
    return (
        <div className="container mb-6 mt-3 flex flex-col gap-y-5 mx-auto">
            <AddLoan type={String(params.add)}/>
        </div>
    );
}

export default AddorEdit;
