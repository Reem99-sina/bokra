import { ReactNode } from "react";

const PaymentLayout = ({children}:{children:ReactNode}) => {
    return (
        <div className="bg-beige  flex items-center justify-center min-h-screen h-auto">
            {children}
        </div>
    );
}

export default PaymentLayout;
