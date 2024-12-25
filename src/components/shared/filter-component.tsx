import { useFormContext } from "react-hook-form";
import { Select } from "./select.component";

const FilterComponent = ({
  title,
  options,
  type,
}: {
  title: string;
  options?: { label: string; value: string }[];
  type: string;
}) => {
  const formData = useFormContext();
  
  return (
    <div className="flex items-center gap-3">
      <p className="text-xs font-normal text-darkGray">{title}</p>
      {type == "select" && options && (
        <Select
          placeholder={title}
          options={options}
          onChange={(value) => formData.setValue("", value)}
          styleCustom={{
            width: "auto",
            backgroundColor: "#fff",
            minWidth: "200px",
          }}
        />
      )}
    </div>
  );
};

export default FilterComponent;
