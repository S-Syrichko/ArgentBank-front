
export interface ButtonProps {
  id: string;
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  style?: "login" | "edit" | "transaction";
  isDisabled?: boolean;
  value: string | React.ReactNode;
}
