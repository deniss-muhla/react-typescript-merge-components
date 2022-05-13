import { BaseButtonProps, BaseButton } from "./BaseButton";
import { IconButtonProps, IconButton } from "./IconButton";
import { CheckButtonProps, CheckButton } from "./CheckButton";
import { ReactElement } from "react";

type PartialOmit<B, O> = {
  [key in keyof Omit<O, keyof B>]?: undefined;
};

type CombineAndPartialOmit<B, O> = B & PartialOmit<B, O>;

type ExBaseButtonProps = CombineAndPartialOmit<
  BaseButtonProps,
  IconButtonProps & CheckButtonProps
>;

type ExIconButtonProps = CombineAndPartialOmit<
  IconButtonProps,
  CheckButtonProps
>;

type ExCheckButtonProps = CombineAndPartialOmit<
  CheckButtonProps,
  IconButtonProps
>;

type ButtonProps = ExBaseButtonProps | ExIconButtonProps | ExCheckButtonProps;

// 01. Create type gurads
function isIconButtonProps(props: ButtonProps): props is IconButtonProps {
  return (props as IconButtonProps).iconPath !== undefined;
}

function isCheckButtonProps(props: ButtonProps): props is CheckButtonProps {
  return (props as CheckButtonProps).defaultChecked !== undefined;
}

// 02. Refactor component
// Tip. Type guards can be moved to coresponding components
// Tip. Wont work with HOC's
function Button(props: ButtonProps): ReactElement {
  if (isIconButtonProps(props)) {
    // Is IconButton
    const { value, iconPath, onClick } = props;

    return <IconButton value={value} iconPath={iconPath} onClick={onClick} />;
  } else if (isCheckButtonProps(props)) {
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
