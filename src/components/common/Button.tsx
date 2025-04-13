import React, { ButtonHTMLAttributes, ElementType } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "small" | "medium" | "large";
  rounded?: "default" | "full" | "none";
  textColor?: string;
  bgColor?: string;
  hoverBgColor?: string;
  borderColor?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  withAnimation?: boolean;
  className?: string;
  children: React.ReactNode;
  as?: ElementType;
  to?: string; // For React Router Link compatibility
  [key: string]: any; // Allow any other props for different component types
}

const Button = ({
  variant = "primary",
  size = "medium",
  rounded = "default",
  textColor,
  bgColor,
  hoverBgColor,
  borderColor,
  icon,
  iconPosition = "right",
  fullWidth = false,
  withAnimation = true,
  className = "",
  children,
  as: Component = "button",
  ...props
}: ButtonProps) => {
  // Base styles
  let baseStyles =
    "font-medium transition-all focus:outline-none inline-flex items-center justify-center hover:cursor-pointer";

  // Size styles
  const sizeStyles = {
    small: "py-2 px-3 text-sm",
    medium: "py-3 px-5",
    large: "py-4 px-6 text-lg",
  };

  // Rounded styles
  const roundedStyles = {
    none: "rounded-none",
    default: "rounded-lg",
    full: "rounded-full",
  };

  // Variant styles
  const variantStyles = {
    primary: `bg-indigo-600 text-white shadow-md hover:bg-indigo-700 ${
      borderColor ? "" : "border border-transparent"
    }`,
    secondary: `bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50`,
    outline: `bg-transparent border ${
      borderColor ? `border-${borderColor}` : "border-gray-300"
    } hover:bg-gray-50`,
    text: "bg-transparent hover:bg-gray-100",
  };

  // Custom styles
  const customStyles = `
    ${textColor ? `text-${textColor}` : ""}
    ${bgColor ? `bg-${bgColor}` : ""}
    ${hoverBgColor ? `hover:bg-${hoverBgColor}` : ""}
    ${borderColor ? `border border-${borderColor}` : ""}
    ${fullWidth ? "w-full" : ""}
  `;

  // Combine all styles
  const buttonStyles = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${roundedStyles[rounded]}
    ${variantStyles[variant]}
    ${customStyles}
    ${className}
  `;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="mr-2 flex-shrink-0">{icon}</span>
      )}
      <span className="flex-shrink-0">{children}</span>
      {icon && iconPosition === "right" && (
        <span className="ml-2 flex-shrink-0">{icon}</span>
      )}
    </>
  );

  // If using a custom component like Link
  if (Component !== "button") {
    return (
      <Component className={buttonStyles} {...props}>
        {content}
      </Component>
    );
  }

  // Return either a motion button or a regular button
  if (withAnimation) {
    // Handle proper typing for motion.button
    const motionProps: HTMLMotionProps<"button"> = {
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.98 },
      className: buttonStyles,
      ...(props as any), // Type assertion to handle the type mismatch
    };

    return <motion.button {...motionProps}>{content}</motion.button>;
  }

  return (
    <button className={buttonStyles} {...props}>
      {content}
    </button>
  );
};

export default Button;
