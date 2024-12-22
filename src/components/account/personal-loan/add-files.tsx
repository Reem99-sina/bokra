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
  const { register, control } = useFormContext();

  return (
    <div className="flex flex-col my-2">
      <Controller
        control={control}
        name={formName}
        rules={{
          validate: {
            fileType: (files: File[]) => {
              const invalidFile = Array?.from(files)?.find(
                (file) =>
                  ![
                    "application/pdf",
                    "image/png",
                    "image/jpeg",
                    "image/jpg",
                  ].includes(file?.type)
              );

              return invalidFile ? t("fileType") : true;
            },
            fileSize: (files: File[]) =>
              Array?.from(files)?.find((ele) => ele?.size <= 10 * 1024 * 1024)
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
                  multiple: true,
                  ...register(formName),
                  onClick: () => refImage?.current?.click(),
                }}
                className="!py-0 !min-h-[40px]"
                label={label}
                leftIcon={<IoDocumentAttach />}
              />
              <input
                type="file"
                hidden
                multiple={true}
                ref={refImage}
                onChange={(event) => onChange(event.target.files)}
                accept={"application/pdf,image/png,image/jpeg,image/jpg"}
                className="placeholder:text-xs placeholder:font-light"
              />
              <p className="text-gray-400 text-[12px] mb-1">{desc}</p>
              <div className="flex w-full justify-between text-[10px] ">
                <p>{t("filesSupport")} : PDF, JPEG, or PNG</p>
                <p>{t("minSizefile")} : 10 MB</p>
              </div>
            </>
          );
        }}
      />
      {errorMessage && (
        <p className="mb-2 h-2 text-xs text-red-600 dark:text-red-500">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default AddFiles;
