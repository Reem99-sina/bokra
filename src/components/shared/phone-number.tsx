import { useTranslation } from "@/translations/clients";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import ErrorInputComponent from "./form/error-input.component";

const PhoneNumber = ({
  value,
  onChange,
  errorMessage,
}: {
  value: string;
  onChange: (value: string) => void;
  errorMessage?: string;
}) => {
  const { t, lang } = useTranslation();
  const [isFocused, setIsFocused] = useState(false);

  const showCountry = isFocused || value?.length;

  return (
    <div>
      <PhoneInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        country={showCountry ? "eg" : undefined}
        onlyCountries={showCountry ? ["eg"] : []}
        countryCodeEditable={false}
        defaultMask=".............."
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
          border: !!errorMessage ? "1px solid #ff0000" : "1px solid #E2E2E2",
        }}
        inputClass="placeholder:!text-xs placeholder:!font-normal"
      />

      {errorMessage && <ErrorInputComponent errorMessage={errorMessage} />}
    </div>
  );
};

export default PhoneNumber;
