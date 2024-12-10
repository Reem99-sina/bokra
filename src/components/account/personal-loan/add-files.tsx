import { TextInput } from "@/components/shared/form/text-input.component";
import { useTranslation } from "@/translations/clients";
import { useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { IoDocumentAttach } from "react-icons/io5";

const AddFiles = () => {
  const refImage = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();
  const { register, control } = useFormContext();
  
  return (
    <div className="flex flex-col">
      <Controller
        control={control}
        name="files"
        rules={{
          required: t("requiredMessage"),
        }}
        render={({ field: { onChange } }) => {
          return (
            <>
              <TextInput
                inputProps={{
                  placeholder: t("addFilelegal"),
                  className: "!text-sm ",
                  ...register("files"),
                  onClick: () => refImage?.current?.click(),
                }}
                className="!py-0 !min-h-[40px]"
                label={t("addFilelegal")}
                leftIcon={<IoDocumentAttach />}
              />
              <input
                type="file"
                hidden
                multiple
                ref={refImage}
                onChange={(event) => onChange(event)}
                accept={"application/pdf"}
              />
              <div className="flex w-full justify-between text-[12px] ">
                <p>{t("filesSupport")} : Pdf, Docx</p>
                <p>{t("minSizefile")} : 2 MB</p>
              </div>
            </>
          );
        }}
      />
    </div>
  );
};

export default AddFiles;
