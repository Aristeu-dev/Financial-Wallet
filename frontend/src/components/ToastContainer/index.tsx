import React from "react";
import { Container } from "./styles";
import { ToastMessage } from "../../hooks/toast";
import Toast from "./Toast";
import { useTransition } from "react-spring";
interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(messages, {
    keys: (message) => message.id,
    from: { right: "-120%" },
    enter: { right: "0%" },
    leave: { right: "-120%" },
  });

  return (
    <Container>
      {messagesWithTransitions((style, item, t) => (
        <Toast key={t.key} style={style} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
