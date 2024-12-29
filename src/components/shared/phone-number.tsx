import { useTranslation } from "@/translations/clients";
import PhoneInput from "react-phone-input-2";

const PhoneNumber = ({
  value,
  onChange,
  error,
}: {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}) => {
  const { t, lang } = useTranslation();
  
  return (
    <PhoneInput
      country={""}
      value={value}
      onChange={(phone) => onChange(phone)}
      specialLabel={""}
      placeholder={t("phoneNum")}
      inputStyle={{
        width: "100%",
        padding: "7px 10px",
        borderRadius: "0.375rem",
        margin: "0px 0px",
        color: "black",
        fontSize: "14px",
        direction: lang == "ar" ? "rtl" : "ltr",
        border: error ? "1px solid #ff0000" : "1px solid #d1d5db",
      }}
    />
  );
};

export default PhoneNumber;
