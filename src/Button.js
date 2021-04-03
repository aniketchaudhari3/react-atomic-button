import React from "react";
import "./style.css";

const getIcon = (iconName) => {
  switch (iconName) {
    case 'google':
      return '/icons/google.png';
    case 'microsoft':
      return '/icons/microsoft.png';
    case 'facebook':
      return '/icons/facebook.png';
    case 'instagram':
      return '/icons/instagram.png';
    case 'github':
      return '/icons/github.png';
    default: return ''
  }
}

export default function Button({
  size,
  type,
  icon,
  disabled,
  className,
  alignIcon,
  children,
  ...props
}) {

  className = size
    ? `${size} ${className ? `${className}` : ``}`
    : `${className ? `${className}` : ``}`

  return (
    <button
      className={
        disabled && type === 'ghost'
          ? `ghost-disabled ${className}`
          : disabled ? `disabled ${className}`
            : type ? `${type} ${className}`
              : `primary ${className}`
      }
      {...props}
    >
      <div className="flex">
        {alignIcon === "right" ?
          <React.Fragment>
            {children}
            {icon && <Icon alignIcon={alignIcon} icon={icon} buttonSize={size || "md"} />}
          </React.Fragment>
          :
          <React.Fragment>
            {icon && <Icon alignIcon={alignIcon} icon={icon} buttonSize={size || "md"} />}
            {children}
          </React.Fragment>}
      </div>
    </button>
  );
};

function Icon({
  alignIcon,
  icon,
  buttonSize
}) {
  return (
    <img className={
      alignIcon ?
        `icon icon-${alignIcon} icon-${buttonSize}`
        : `icon icon-${buttonSize} icon-left`
    } src={`${getIcon(icon)}`} />
  )
}