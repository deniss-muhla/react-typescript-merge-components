import { ReactElement } from "react";

interface BaseButtonProps {
  value: string;
  onClick?: () => void;
}

function BaseButton({ value, onClick }: BaseButtonProps): ReactElement {
  return <input type="button" value={value} onClick={onClick} />;
}

export { BaseButtonProps, BaseButton };
