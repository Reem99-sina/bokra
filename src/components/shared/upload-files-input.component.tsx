"use client";

import clsx from "clsx";
import { toast } from "react-toastify";
import { formatFileSize } from "@/utils/file.util";
import { DragEvent, FC, useState } from "react";
import { UploadFilesVariants } from "@/types/file.type";
import { useTranslation } from "@/translations/clients";
import { IoDocumentAttach } from "react-icons/io5";
import { FaRegWindowClose } from "react-icons/fa";
import ErrorInputComponent from "./form/error-input.component";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

const allowedFileTypesRegex = /^(image\/|application\/pdf\/)/;

interface Props {
  value: File[];
  onChange: (files: File[]) => void;
  variant: UploadFilesVariants;
  text?: string;
  placeholder?: string;
  id: string;
  className?: string;
  isMultiple?: boolean;
  errorMessage?: string;
}

export const UploadFilesInput: FC<Props> = ({
  value,
  onChange,
  variant = UploadFilesVariants.INPUT,
  text,
  placeholder,
  id,
  className,
  isMultiple,
  errorMessage,
}) => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const { t } = useTranslation();

  const removeFile = (index: number) => {
    const newFiles = [...value];

    newFiles.splice(index, 1);

    onChange(newFiles);
  };

  const onAddingFiles = (files: FileList) => {
    const validFiles: File[] = [];

    for (const file of Array.from(files)) {
      if (!allowedFileTypesRegex.test(file.type)) {
        toast.error("ملف غير مسموح به");

        continue;
      }

      if (file.size > MAX_FILE_SIZE) {
        toast.error("الحجم المسموح به هو 2 ميجا بايت");

        continue;
      }

      validFiles.push(file);
    }

    onChange(isMultiple ? [...value, ...validFiles] : validFiles);
  };

  return (
    <div>
      {variant === UploadFilesVariants.INPUT ? (
        <label
          className={clsx(
            "mb-2 block text-xs font-bold text-black",
            errorMessage && "text-red-600",
            className
          )}
        >
          {text ? text : t("supportingAttachment")}
        </label>
      ) : null}

      <input
        type="file"
        id={id}
        hidden
        multiple={isMultiple}
        onChange={(e) => {
          e.target.files ? onAddingFiles(e.target.files) : null;
        }}
        accept="image/*, .pdf, video/*"
        key={text}
      />

      <label
        htmlFor={id}
        onDrop={(e: DragEvent<HTMLLabelElement>) => {
          e.preventDefault();

          onAddingFiles(e.dataTransfer.files);

          setIsDraggingOver(false);
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDraggingOver(true);
        }}
        onDragLeave={() => setIsDraggingOver(false)}
      >
        {variant === UploadFilesVariants.INPUT ? (
          <div
            className={clsx(
              "flex cursor-pointer flex-row justify-between rounded-lg border border-[#E2E2E2]  ",
              "px-4 py-2 text-xs font-normal text-gray-400",
              errorMessage && "border-red-600",
              isDraggingOver && "border-solid border-primary"
            )}
          >
            <span>{placeholder ? placeholder : t("supportFiles")}</span>

            <IoDocumentAttach color="black" />

            {/* <AttachmentIcon stroke='#E2E2E2' /> */}
          </div>
        ) : (
          <div
            className={clsx(
              "flex cursor-pointer flex-col items-center justify-center gap-3 rounded-lg",
              "border border-dashed border-[#E2E2E2] px-4 pb-4 pt-6 text-sm font-normal text-gray-400",
              isDraggingOver && "border-solid border-primary"
            )}
          >
            {/* <AddImageIcon /> */}

            <span className="text-sm font-bold text-[#595959]">
              {t("showesone")}
            </span>

            <span className="self-center text-center text-xs font-normal text-gray-400">
              {t("filesSupport")} : JPG,JIF, PNG - {t("minSizefile")} : 2 MB
            </span>

            <span className="border border-black p-3 text-xs font-bold text-black">
              {t("browseFiles")}
            </span>
          </div>
        )}
      </label>

      {variant === UploadFilesVariants.INPUT ? (
        <>
          <div className="mt-2" />
          <div
            className={clsx(
              "flex flex-row justify-between text-[10px] font-normal text-gray-400",
              errorMessage && "text-red-600"
            )}
          >
            <span>{t("filesSupport")} : Pdf, Image</span>
            <span>{t("minSizefile")} : 2 MB</span>
          </div>
        </>
      ) : null}

      {value?.map((file, index) => (
        <div
          key={file.name + index}
          className={clsx(
            "mb-2 me-1 flex flex-row border-b border-dashed border-[#E2E2E2] text-xs font-normal text-prim2",
            index === value.length - 1 && "border-b-0"
          )}
        >
          <div className="my-1 flex flex-1 flex-row justify-between">
            <div className="flex w-3/4 flex-row items-center">
              <div className="me-2">
                {file.name.length > 15
                  ? file.name.substring(0, 15) + "..."
                  : file.name}
              </div>
              <div dir="ltr" className="w-1/2">
                ({formatFileSize(file.size)})
              </div>
            </div>

            <FaRegWindowClose
              className="cursor-pointer self-center"
              onClick={() => removeFile(index)}
            />
          </div>
        </div>
      ))}
      {errorMessage && <ErrorInputComponent errorMessage={errorMessage} />}
    </div>
  );
};
