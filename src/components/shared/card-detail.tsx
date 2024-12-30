import clsx from "clsx";
import { ReactNode } from "react";


const CardDetail = ({children,className}:{children:ReactNode,className?:string}) => {
    return (
        <div className={clsx("border border-grayInput p-2 bg-white flex flex-col gap-2",className)}>
            {children}
        </div>
    );
}

export default CardDetail;
