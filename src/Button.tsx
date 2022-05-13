import { BaseButtonProps, BaseButton } from "./BaseButton";
import { IconButtonProps, IconButton } from "./IconButton";
import { CheckButtonProps, CheckButton } from "./CheckButton";
import { ReactElement } from "react";

// Add stubs for alien props
type ExBaseButtonProps = BaseButtonProps & {
  iconPath?: undefined;
  defaultChecked?: undefined; // Use null as prop value in CheckButton comp instead undefined for this
};

type ExIconButtonProps = IconButtonProps & {
  defaultChecked?: undefined;
};

type ExCheckButtonProps = CheckButtonProps & {
  iconPath?: undefined;
};

// Advanced Typejitsu technique
type ButtonProps = ExBaseButtonProps | ExIconButtonProps | ExCheckButtonProps;

// ButtonProps = show as all props union
function Button({
  value,
  iconPath,
  defaultChecked,
  onClick
}: ButtonProps): ReactElement {
  return defaultChecked !== undefined ? (
    <CheckButton
      value={value}
      defaultChecked={defaultChecked}
      onClick={onClick}
    />
  ) : iconPath !== undefined ? (
    <IconButton value={value} iconPath={iconPath} onClick={onClick} />
  ) : (
    <BaseButton value={value} onClick={onClick} />
  );
}

export { ButtonProps, Button };
