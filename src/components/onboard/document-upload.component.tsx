import { FaUpload } from "react-icons/fa";
import { Button } from "../shared/button.component";
import { useRef, useState } from "react";
import clsx from "clsx";
import { Progress } from "@material-tailwind/react";
import { BsFileText } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { useForm } from "react-hook-form";

const DocumentUploadComponent = ({ onNext }: { onNext: () => void }) => {
  const docRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const formDate=useForm()
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>(
    {}
  );
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const simulateUpload = (file: File) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress((prev) => ({
        ...prev,
        [file.name]: progress,
      }));
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 500);
  };

  const handleFiles = (newFiles: File[]) => {
    setFiles((prev) => [...prev, ...newFiles]);
    // Simulate upload progress
    newFiles.forEach((file) => {
      simulateUpload(file);
    });
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      handleFiles(selectedFiles);
    }
  };

  const removeFile = (fileName: string) => {
    setFiles((prev) => prev.filter((file) => file.name !== fileName));
    setUploadProgress((prev) => {
      const newProgress = { ...prev };
      delete newProgress[fileName];
      
      return newProgress;
    });
  };

  return (
    <div className="flex flex-col w-full justify-around gap-5">
      <div
        className={clsx(
          "flex flex-col items-center justify-center w-full",
          isDragging ? "border-primary bg-primary/5" : "border-gray-300"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <FaUpload className="mx-auto h-12 w-12 text-gray-400" />
        <div className="mt-4 flex items-center flex-col">
          <p className="text-sm text-gray-600">
            Drag and drop your files here, or
          </p>

          <Button
            text="browse to choose a file"
            className="text-primary hover:underline !bg-transparent"
            onClick={() => docRef?.current?.click()}
          />
          <input
            ref={docRef}
            type="file"
            className="hidden"
            multiple
            onChange={handleFileInput}
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Maximum file size: 10MB. Supported formats: PDF, DOC, DOCX
        </p>
      </div>
      {files.length > 0 && (
        <div className="mt-8 space-y-4">
          {files.map((file, index) => (
            <div
              key={file.name + index}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-4 flex-1">
                <BsFileText className="h-6 w-6 text-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-black">{file.name}</p>
                  <Progress
                    value={uploadProgress[file.name] || 0}
                    className="h-2 mt-2 "
                  />
                </div>
                <Button
                  text=""
                  startIcon={<GrClose />}
                  className="!w-auto !bg-red-500 !text-white !px-3 !py-2 mx-2"
                  onClick={() => removeFile(file.name)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-end items-center">
        <Button
          text="finish"
          className="!w-auto  !text-white !px-3 !py-2 mx-2 "
          onClick={onNext}
        />
      </div>
    </div>
  );
};

export default DocumentUploadComponent;
