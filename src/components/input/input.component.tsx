import React from 'react';

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  ref?: string;
  disabled: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  ref,
  disabled,
  onChange,
}) => {
  return (
    <input
      id="1"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      ref={ref}
    />
  );
};
