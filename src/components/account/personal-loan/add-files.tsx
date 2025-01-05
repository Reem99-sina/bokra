"use client";
import { TextInput } from "@/components/shared/form/text-input.component";
import { useTranslation } from "@/translations/clients";
import { useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { IoDocumentAttach } from "react-icons/io5";

const AddFiles = ({
  placeholder,
  label,
  formName,
  desc,
  errorMessage,
}: {
  placeholder: string;
  label: string;
  formName: string;
  desc?: string;
  errorMessage?: string;
}) => {
  const refImage = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col ">
      <Controller
        control={control}
        name={formName}
        rules={{
          validate: {
            fileType: (files: File[]) => {
              const invalidFile =
                files &&
                Array?.from(files)?.every((file) =>
                  [
                    "application/pdf",
                    "image/png",
                    "image/jpeg",
                    "image/jpg",
                  ].includes(file?.type)
                );

              return invalidFile ? true : errorMessage;
            },
            fileSize: (files: File[]) =>
              Array?.from(files)?.every((ele) => ele?.size <= 10 * 1024 * 1024)
                ? true
                : t("fileSize"),
          },
        }}
        render={({ field: { onChange } }) => {
          return (
            <>
              <TextInput
                inputProps={{
                  placeholder: placeholder,
                  className: "!text-sm ",
                  onClick: () => refImage?.current?.click(),
                }}
                className="!py-0 !min-h-[40px] "
                label={label}
                errorMessage={
                  errors[formName]?.message
                    ? String(errors[formName]?.message)
                    : ""
                }
                leftIcon={
                  <div className="p-2">
                    <IoDocumentAttach />
                  </div>
                }
              />
              <input
                type="file"
                hidden
                multiple={true}
                {...register(formName)}
                ref={refImage}
                onChange={(event) => onChange(event?.target?.files)}
                accept={"application/pdf,image/png,image/jpeg,image/jpg"}
                className="placeholder:text-xs placeholder:font-light"
              />
              {desc && <p className="text-gray-400 text-[12px] mb-1">{desc}</p>}
              <div className="flex w-full justify-between text-[10px] text-gray-400 mt-1">
                <p>{t("filesSupport")} : PDF, JPEG, or PNG</p>
                <p>{t("minSizefile")} : 10 MB</p>
              </div>
            </>
          );
        }}
      />
    </div>
  );
};

export default AddFiles;
