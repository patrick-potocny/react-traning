import React, { useState } from "react";

type Option = {
  label: string;
  value: number;
};

type Props = {
  options: Option[];
  value: number | undefined;
  setValue: React.Dispatch<React.SetStateAction<number | undefined>>;
};

function Select({ options, value, setValue }: Props): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      tabIndex={0}
      className="select-box"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <p className="current">{options.find((o) => o.value === value)?.label}</p>
      <div className="controls">
        <button
          className="remove"
          onClick={(e) => {
            setValue(undefined);
            e.stopPropagation();
          }}
        >
          &times;
        </button>
        <div className="divider"></div>
        <div className="caret"></div>
      </div>
      <ul className={`options ${isOpen ? "open" : "closed"}`}>
        {options.map((option) => (
          <li
            key={option.value}
            onClick={(e) => {
              setValue(option.value);
              setIsOpen((prev) => !prev);
              e.stopPropagation();
            }}
            className="option"
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Select;
