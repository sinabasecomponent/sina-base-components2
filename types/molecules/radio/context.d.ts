/// <reference types="react" />
export type ValueType = string | number | undefined | null;
export type ModeType = "dark" | "light";
interface RadioContextProps {
    value: string | number | undefined | null;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string | undefined;
    mode: ModeType;
}
declare const RadioContext: import("react").Context<RadioContextProps>;
export { RadioContext };
