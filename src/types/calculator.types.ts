export interface Function {
  id: number;
  type?: "INPUT" | "OUTPUT";
  target?: number | null;
  equation?: string;
}

export interface Config {
  initialValue: number;
  result?: number;
  functions: Function[];
}

export interface LineRef {
  IN?: HTMLElement | null;
  OUT?: HTMLElement | null;
  target?: number;
}

export interface EquationMap {
  [key: string | number]: string;
}

export interface Lines {
  [key: string]: LineRef;
}

export interface CalculatorState {
  valuesConfig: Config;
  lines: Lines;
  equation: EquationMap;
  inputValue: number | string;
  outputValue: number;
}

export interface CalculatorActions {
  setValuesConfig: React.Dispatch<React.SetStateAction<Config>>;
  setLines: React.Dispatch<React.SetStateAction<Lines>>;
  updateEquation: (id: string | number, value: string) => void;
  updateInitialValue: (value: string) => void;
}

export interface CalculatorContextType extends CalculatorState, CalculatorActions {
  cards: React.ReactNode[];
}
