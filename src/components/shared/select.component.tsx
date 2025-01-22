import clsx from "clsx";
import React from "react";
import ReactSelect, { PropsValue, SingleValue } from "react-select";
import ErrorInputComponent from "./form/error-input.component";

interface Option {
  label: string;
  value: string;
}

interface Props {
  placeholder?: string;
  options: Option[];
  onChange: (value: string) => void;
  defaultValue?: PropsValue<Option>;
  label?: string;
  styleCustom?: { [key: string]: string };
  icon?: JSX.Element;
  errorMessage?: string;
}

export const Select: React.FC<Props> = ({
  placeholder,
  options,
  onChange,
  defaultValue,
  label,
  styleCustom,
  icon,
  errorMessage,
}) => {
  const handleOnChange = (selectedOption: SingleValue<Option>) => {
    if (selectedOption?.value) {
      onChange(selectedOption.value);
    }
  };

  return (
    <div>
      {label ? (
        <>
          <div className="flex w-full flex-row items-center justify-between">
            <p
              className={clsx(
                "text-sm font-bold ",
                !!errorMessage ? "text-red-600" : "text-black"
              )}
            >
              {label}
            </p>
            {icon ? <span>{icon}</span> : null}
          </div>
          <div className="mt-2" />
        </>
      ) : null}

      <ReactSelect
        placeholder={placeholder ?? ""}
        options={options}
        onChange={handleOnChange}
        defaultValue={defaultValue}
        styles={{
          control: (styles) => ({
            ...styles,
            borderColor: !!errorMessage ? "#ff0000" : "#E2E2E2",
            borderRadius: "6px",
            width: "347px",
            height: "40px",
            color: "black",
            boxShadow: "none",
            "&:hover": {},
            ...styleCustom,
          }),
          placeholder: (styles) => ({
            ...styles,
            color: "rgb(156 163 175 / 400)",
            fontSize: "14px",
          }),
          option: (styles) => ({
            ...styles,
            borderColor: "#E2E2E2",
            borderTopWidth: 1,
            color: "#000",
            fontSize: "14px",
          }),
        }}
        components={{ IndicatorSeparator: null }}
        className="placeholder:!text-xs placeholder:!font-normal"
      />

      {errorMessage && <ErrorInputComponent errorMessage={errorMessage} />}
    </div>
  );
};
