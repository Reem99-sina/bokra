import clsx from "clsx";
import { toast } from "react-hot-toast";
import { formatFileSize } from "@/utils/file.util";
import { BsImage } from "react-icons/bs";
import { RiCloseLine } from "react-icons/ri";
import { DragEvent, FC, useState } from "react";
import { RiVideoAddLine } from "react-icons/ri";
import { Spinner } from "./spinner.component";
import { IoDocumentAttach } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { useTranslation } from "@/translations/clients";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

const allowedFileTypesRegex = /^(image\/|application\/pdf|video\/)/;

interface Props {
  value: File[];
  onChange: (files: File[]) => void;
  placeholder?: string;
  id: string;
  className?: string;
  isSubmitClicked: boolean;
  progress: number;
}

export const UploadFilesInputRectangular: FC<Props> = ({
  value,
  onChange,
  placeholder,
  id,
  isSubmitClicked,
  progress,
}) => {
  const { t } = useTranslation();
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const removeFiles = () => {
    onChange([]);
  };

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

      if (file.type.startsWith("video")) {
        const videoFound = [...value, ...validFiles].find((file) =>
          file.type.startsWith("video")
        );

        if (videoFound) {
          toast.error("لا يمكنك إضافة اكثر من ملف فيديو");

          continue;
        }
      }

      validFiles.push(file);
    }

    onChange([...value, ...validFiles]);
  };

  const acceptType =
    id === "images"
      ? "image/*"
      : id === "videos"
      ? "video/*"
      : "image/*, .pdf, video/*";

  const supportingFilesText =
    id === "images" ? " Image" : id === "videos" ? " Video" : " Pdf, Docx";

  const getAddFileIcon = () => {
    if (id === "images") return <BsImage size={"100"} />;

    if (id === "videos") return <RiVideoAddLine size={"100"} />;

    return <IoDocumentAttach size={"100"} />;
  };

  const totalSize = value.reduce((acc, file) => acc + file.size, 0);

  const openFileInNewTab = (file: File) => {
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL, "_blank");
  };

  const renderFilePreview = (file: File, index: number) => {
    const fileURL = URL.createObjectURL(file);

    return (
      <div className="relative">
        {file.type.startsWith("image/") && (
          <div className="absolute left-1 top-1 rounded bg-white px-2 py-1">
            <FaTrashAlt
              className="text-red-500  cursor-pointer"
              onClick={() => removeFile(index)}
            />
          </div>
        )}
        {file.type.startsWith("video/") && (
          <div className="absolute left-1 top-1 rounded bg-white px-2 py-1  ">
            <FaTrashAlt
              className="text-red-500 cursor-pointer"
              onClick={() => removeFile(index)}
            />
          </div>
        )}
        {file.type.startsWith("image/") ? (
          <img
            src={fileURL}
            alt={file.name}
            className="max-h-[116px] min-h-[116px] w-full min-w-[322px] rounded object-cover"
          />
        ) : file.type.startsWith("video/") ? (
          <video
            src={fileURL}
            controls
            className="max-h-[116px] min-h-[116px] w-full min-w-[322px] rounded"
          />
        ) : (
          <div className="flex gap-44">
            <span>
              {" "}
              {file.name.length > 15
                ? file.name.substring(0, 15) + "..."
                : file.name}
            </span>
            <div className="flex items-center  gap-2">
              <FaRegEye
                className="cursor-pointer self-center"
                onClick={() => openFileInNewTab(file)}
              />
              <FaTrashAlt
                className="text-red-500 cursor-pointer self-center"
                onClick={() => removeFile(index)}
              />{" "}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <input
        type="file"
        id={id}
        hidden
        multiple
        onChange={(e) => {
          e.target.files ? onAddingFiles(e.target.files) : null;
        }}
        accept={acceptType}
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
        <div
          className={clsx(
            "flex min-h-[179px] cursor-pointer flex-col items-center justify-center gap-3 rounded border-2 border-dashed border-gray-500",
            "px-4 py-2 text-sm font-normal text-gray-400",
            isDraggingOver && "border-solid border-primary"
          )}
        >
          {getAddFileIcon()}
          <span className="text-gray-400 text-xs">
            {placeholder ? placeholder : t("addFiles")}
          </span>

          <div className="flex flex-row justify-between gap-1 text-[10px] font-normal text-gray-400">
            <span>
              {t("filesSupport")} : {supportingFilesText} -
            </span>
            <span>{t("minSizefile")} : 2 MB</span>
          </div>

          {value.length > 0 && isSubmitClicked && (
            <div
              className={clsx(
                "flex h-[68.5px] max-w-[328px] flex-col justify-center rounded bg-bg1 px-2  pt-2 "
              )}
            >
              <div className={clsx("flex justify-between")}>
                <div className={clsx("flex max-w-[300px] gap-1 ")}>
                  <div className={clsx("me-4")}>{getAddFileIcon()}</div>
                  {value.slice(0, 2).map((file, index) => (
                    <div
                      key={file.name + index}
                      className={clsx(" text-xs font-bold text-gray-500 ")}
                    >
                      {file.name.length > 15
                        ? file.name.substring(0, 25) + "..."
                        : file.name}
                    </div>
                  ))}{" "}
                </div>
                <RiCloseLine
                  className="-mb-4 cursor-pointer self-center text-red-500"
                  onClick={removeFiles}
                />
              </div>

              <div className="mb-1 flex justify-between">
                {progress && (
                  <div className=" -mt-2 ms-12  flex w-full gap-1 text-[#A9ACB4]">
                    <Spinner /> {t("download")} ({t("number")} {value.length} ){" "}
                    {formatFileSize(totalSize)}
                  </div>
                )}
              </div>
              <div className="dark:bg-gray-700 mb-2 h-1.5 w-full rounded-full bg-[#CBD0DC] ">
                <div
                  className="h-1.5 rounded-full bg-sec2"
                  style={{ width: `${Math.round(progress * 100)}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </label>
      {value.length > 0 && (
        <div
          className={clsx(
            " mt-4 rounded border-2 border-dashed border-[#E2E2E2] py-2 ps-2"
          )}
        >
          {value.map((file, index) => (
            <div
              key={file.name + index}
              className={clsx(
                "mb-2 me-1 flex flex-row  border-b-2   border-strokeDark pb-2 text-xs font-bold text-head",
                index === value.length - 1 && "border-b-0"
              )}
            >
              <div className="my-1 flex flex-1 flex-row justify-between">
                <div className="flex w-full flex-row items-center">
                  <div className="me-2">{renderFilePreview(file, index)}</div>
                </div>
                {file.type === "file" && (
                  <div className="flex items-center  gap-2">
                    <FaRegEye
                      className="cursor-pointer self-center"
                      onClick={() => openFileInNewTab(file)}
                    />
                    <FaTrashAlt
                      className="text-red-500 cursor-pointer self-center"
                      onClick={() => removeFile(index)}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
          <div
            className={clsx(
              "flex h-[68.5px] max-w-[328px] flex-col justify-center rounded bg-bg1 px-2  pt-2 text-xs "
            )}
          >
            <div className={clsx("flex justify-between")}>
              <div className={clsx("flex max-w-[300px] gap-1 ")}>
                <div className={clsx("me-4")}>{getAddFileIcon()}</div>
                {value.slice(0, 2).map((file, index) => (
                  <div
                    key={file.name + index}
                    className={clsx(
                      " max-w-[100px] text-xs font-bold text-head"
                    )}
                  >
                    {file.name.length > 15
                      ? file.name.substring(0, 15) + "..."
                      : file.name}
                  </div>
                ))}{" "}
              </div>
              <div className="flex flex-col items-center gap-y-4 text-SysFailed">
                <FaTrashAlt
                  className="text-red-500 -mb-4 cursor-pointer self-center  "
                  onClick={removeFiles}
                />
                <p className="cursor-pointer">{t("deleteAll")}</p>
              </div>
            </div>
            <div className=" -mt-2 ms-12  flex w-full items-center gap-1 text-[#A9ACB4]">
              {t("doneLoad")} ({t("number")} {value.length} ){" "}
              {formatFileSize(totalSize)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
