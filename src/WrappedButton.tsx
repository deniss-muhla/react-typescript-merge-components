import { Button } from "./Button";
import React from "react";

function WithSomething<T>(WrappedComponent: React.ComponentType<T>) {
  return (props: T) => {
    return <WrappedComponent {...(props as T)} />;
  };
}

const WrappedButton = WithSomething(Button);

export { WrappedButton };
