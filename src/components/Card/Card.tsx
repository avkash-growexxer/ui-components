import React, { ReactNode, HTMLAttributes } from "react";
import styles from "./Card.module.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "outlined" | "shadow";
  className?: string;
}

const Card: React.FC<CardProps> & {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
} = ({ children, variant = "default", className = "", ...props }) => {
  const variantClass = styles[variant] || "";
  const combinedClass = `${styles.card} ${variantClass} ${className}`.trim();

  return (
    <div className={combinedClass} {...props}>
      {children}
    </div>
  );
};

const CardHeader: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = "",
}) => <div className={`${styles.header} ${className}`.trim()}>{children}</div>;

const CardBody: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = "",
}) => <div className={`${styles.body} ${className}`.trim()}>{children}</div>;

const CardFooter: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = "",
}) => <div className={`${styles.footer} ${className}`.trim()}>{children}</div>;

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
