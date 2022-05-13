import { ReactElement, useState } from "react";
import { IconButton } from "./IconButton";
import { BaseButtonProps } from "./BaseButton";

const nullIcon =
  "M22.11 21.46L2.39 1.73L1.11 3L3 4.9V19C3 20.11 3.9 21 5 21H19.1L20.84 22.73L22.11 21.46M5 19V6.89L17.11 19H5M8.2 5L6.2 3H19C20.1 3 21 3.89 21 5V17.8L19 15.8V5H8.2Z";
const checkIcon =
  "M19,19H5V5H15V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11H19M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z";
const uncheckIcon =
  "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z";

interface CheckButtonProps extends BaseButtonProps {
  defaultChecked: boolean | null;
}

function CheckButton({
  value,
  defaultChecked
}: CheckButtonProps): ReactElement {
  const [state, setState] = useState<boolean | null>(defaultChecked);

  return state === null ? (
    <IconButton
      value={value}
      iconPath={nullIcon}
      onClick={() => setState(true)}
    />
  ) : state ? (
    <IconButton
      value={value}
      iconPath={checkIcon}
      onClick={() => setState(false)}
    />
  ) : (
    <IconButton
      value={value}
      iconPath={uncheckIcon}
      onClick={() => setState(null)}
    />
  );
}

export { CheckButtonProps, CheckButton };
