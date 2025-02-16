import { Function } from './calculator.types';

export interface InputProps {
  value?: string | number;
  onChange?: (value: string) => void;
  className?: string;
  classNameInput?: string;
  label?: string;
  disabled?: boolean;
  type?: "IN" | "OUT";
  id?: string | number;
  target?: number;
  formatter?: (value: string) => boolean;
  placeholder?: string;
}

export interface CardProps {
  children: React.ReactNode;
  title?: string;
  id?: number;
  target?: number;
  className?: string;
}

export interface FunctionCardProps {
  func: Function;
}

export interface CardRadioProps {
  variant?: "input" | "output";
  className?: string;
}

export interface CurvedLineProps {
  input: HTMLElement;
  output: HTMLElement;
  id: string | number;
}
