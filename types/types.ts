import { ChangeEvent, FocusEvent } from "react";

export type ChildrenType = Readonly<{
  children: React.ReactNode;
}>;

export type TextPassInputType = {
  title: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<any>) => void;
  onBlur: (e: FocusEvent<any>) => void;
  error?: string;
  blur?: boolean;
  placeholder?: string;
};
