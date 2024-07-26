import { ReactNode, useCallback } from "react";
import { FormElement } from "./FormElement";
import { FormElementLabelPosition, FormFlexDirection } from "@/types/components";

interface FormPublicProps {
  labelPosition?: FormElementLabelPosition;
}

interface FormI {
  children: (props: FormPublicProps) => ReactNode;
  labelPosition?: FormElementLabelPosition;
  direction?: FormFlexDirection;
}

export const Form = ({ children, labelPosition, direction = "column" }: FormI) => {
  return (
    <form className={`flex gap-4 ${direction === "column" ? "flex-col" : ""}`}>
      {children({ labelPosition })}
    </form>
  );
};
