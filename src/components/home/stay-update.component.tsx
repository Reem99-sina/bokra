import { useTranslation } from "@/translations/clients";
import { Button } from "../shared/button.component";
import { TextInput } from "../shared/form/text-input.component";

const StayUpdateComponent = () => {
  const { t } = useTranslation();

  return (
    // <div className=" text-black flex flex-col gap-5  rounded   p-23">
    //   <TitleComponent title="Contact us"/>
    //   <div className=" my-0 mx-auto flex  container">
    //     <div className=" p-5  rounded-md flex-1">
    //       <TextInput   className="my-3" inputProps={{placeholder:t("name")}}/>

    //       <TextInput  className="my-3"inputProps={{placeholder:"email"}}/>
    //       <Textarea id="message" name="message" className="bg-white rounded-md my-3" placeholder="message">

    //       </Textarea>
    //       <Button text="Send Message" className="!bg-black !text-white" />
    //     </div>
    //     <div className="text-white p-5 flex flex-col gap-4 bg-black rounded-md ">
    //       <div className="flex items-center gap-4">
    //         <BsPhone /> <p>+123 456 7890</p>
    //       </div>
    //       <div className="flex items-center gap-4">
    //         <MdEmail /> <p>info@bokra.com</p>
    //       </div>
    //       <div className="flex items-center gap-4">
    //         <FaAddressCard /> <p>123 Main St, City</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className=" text-black flex flex-col gap-5 items-center justify-center container mx-auto">
      <h1 className="sm:text-[3rem] text-xl font-black">{t("stay_updated")}</h1>
      <p className="">{t("desc_stay")}</p>
      <div className="flex gap-x-4 justify-center items-center my-5">
        <TextInput inputProps={{ placeholder: "Email" }} className="py-3 !rounded-full !px-3" />
        <Button
          text={t("register")}
          className=" !bg-black !w-auto !text-xs rounded-full !px-7 !py-4"
        />
      </div>
    </div>
  );
};

export default StayUpdateComponent;
