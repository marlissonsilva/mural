import {colors} from "@/data/colors";
import {useState} from "react";
interface SelectProps {
  onChange: (event: any) => void;
}

export default function Select(props: SelectProps) {
  return (
    <>
      <select
        name="colors"
        id="colors"
        onChange={props.onChange}
        className={` border border-purple-800 rounded-lg focus:outline-none bg-gray-100 px-4 py-2 w-full `}
        required
      >
        {colors.map((color, index) => (
          <option
            key={index}
            value={color.value}
            className={`bg-${color.value}`}
          >
            {color.label}
          </option>
        ))}
      </select>
    </>
  );
}
