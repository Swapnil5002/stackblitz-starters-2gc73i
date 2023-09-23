import React, { useEffect, useId } from 'react';

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  disabled: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  classes: string;
}

export const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  inputRef,
  disabled,
  onChange,
  classes,
}) => {
  const id = useId();
  return (
    <input
      id={id + 'input'}
      className={classes}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      ref={inputRef}
    />
  );
};
