import React, {ButtonHTMLAttributes, FC} from 'react';

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement>{
    version?: "primary" | "secondary";
    isDisabled: boolean;
}
export const Button: FC<ButtonPropsType> = (props ) => {
    const { children, type, isDisabled, version, ...otherProps} = props
    return (
        <button
            type={type}
            disabled={isDisabled}
            className={`btn btn-${version}`}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    version: 'primary',
    type: "button",
    isDisabled: false
}

export default Button;
