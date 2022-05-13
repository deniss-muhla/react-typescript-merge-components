import { ReactElement } from "react";
import { BaseButtonProps, BaseButton } from "./BaseButton";

interface IconButtonProps extends BaseButtonProps {
  iconPath: string;
}

function IconButton({
  value,
  iconPath,
  onClick
}: IconButtonProps): ReactElement {
  return (
    <div className="iconButton">
      <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
        <path fill="currentColor" d={iconPath} />
      </svg>
      <BaseButton value={value} onClick={onClick} />
    </div>
  );
}

export { IconButtonProps, IconButton };
