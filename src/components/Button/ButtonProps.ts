
export interface ButtonProps {
  id: string;
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  value: string | React.ReactNode;
}
