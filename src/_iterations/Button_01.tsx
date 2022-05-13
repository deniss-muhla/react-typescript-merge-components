import { BaseButtonProps, BaseButton } from "./BaseButton";
import { IconButtonProps, IconButton } from "./IconButton";
import { CheckButtonProps, CheckButton } from "./CheckButton";
import { ReactElement } from "react";

// 01. Add stubs for alien props
// Tip. Use null as prop value in CheckButton comp instead undefined for this
type ExBaseButtonProps = BaseButtonProps & {
  iconPath?: undefined;
  defaultChecked?: undefined;
};

type ExIconButtonProps = IconButtonProps & {
  defaultChecked?: undefined;
};

type ExCheckButtonProps = CheckButtonProps & {
  iconPath?: undefined;
};

type ButtonProps = ExBaseButtonProps | ExIconButtonProps | ExCheckButtonProps;

// 02. ButtonProps = show as all props union
function Button(props: ButtonProps): ReactElement {
  if (props.iconPath !== undefined) {
    // Is IconButton
    const { value, iconPath, onClick } = props;

    return <IconButton value={value} iconPath={iconPath} onClick={onClick} />;
  } else if (props.defaultChecked !== undefined) {
    // Is CheckButton
    const { value, defaultChecked, onClick } = props;

    return (
      <CheckButton
        value={value}
        defaultChecked={defaultChecked}
        onClick={onClick}
      />
    );
  } else {
    // Is BaseButton
    const { value, onClick } = props;

    return <BaseButton value={value} onClick={onClick} />;
  }
}

export { ButtonProps, Button };
