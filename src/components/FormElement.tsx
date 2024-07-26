import {
  FormElementLabelAlign,
  FormElementLabelPosition,
} from "@/types/components";
import { ReactNode } from "react";

enum FormElementMessageType {
  ERROR = "ERROR",
}

interface FormElementI {
  label?: string;
  labelPosition?: FormElementLabelPosition;
  labelAlign?: FormElementLabelAlign;
  labelColumn?: number;
  elementIcon?: ReactNode;
  children: ReactNode;
  message?: {
    content: string;
    type: FormElementMessageType;
  };
}

export const FormElement = ({
  label,
  children,
  labelPosition = "top",
  labelAlign = "left",
  labelColumn = 2,
  elementIcon,
  message,
}: FormElementI) => {
  return (
    <div>
      <label
        className={`w-full flex gap-2 ${
          labelPosition === "left" ? "" : "flex-col"
        }`}
      >
        {label && (
          <span
            className="outside-m-cont"
            style={{
              flex: labelColumn,
              textAlign: labelAlign,
            }}
          >
            {label}
          </span>
        )}

        <span
          style={{
            flex: 12 - labelColumn,
          }}
        >
          <div className="flex gap-[2px] inside-p-cont !py-[4px] border rounded-[4px] overflow-hidden">
            {elementIcon && <div>{elementIcon}</div>}
            {children}
          </div>
        </span>
      </label>
      <p>{message?.content}</p>
    </div>
  );
};
