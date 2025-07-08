import "../styles/components/_card-ia.scss";
import { useState, type ReactNode } from "react";
import { FaClipboard } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

type CardIAProps = {
  text?: string;
  children?: ReactNode;
  showCopyButton?: boolean;
};

export const CardIA = ({
  text,
  children,

  showCopyButton,
}: CardIAProps) => {
  const [isCheck, setIsCheck] = useState(false);

  const handleCopy = () => {
    if (text) {
      setIsCheck(true);
      navigator.clipboard.writeText(text);
      setTimeout(() => setIsCheck(false), 2500);
    }
  };

  return (
    <section className={"card-ia"}>
      {showCopyButton && (
        <button onClick={handleCopy} className="copy-button">
          {isCheck ? <FaCheck /> : <FaClipboard />}
        </button>
      )}
      {text && <div>{text}</div>}
      {children && <div>{children}</div>}
    </section>
  );
};
