import { StyledSelect, StyledOption, StyledInputLabel } from "./Select.style";

const Select = (props) => {
    return (
        <>
            <StyledSelect {...props}>{props.children}</StyledSelect>
        </>
    );
};

const Option = (props) => {
    return (
        <>
            <StyledOption height="30px" fontSize="10px" {...props}>{props.children}</StyledOption>
        </>
    );
};

const Label = (props) => {
    return (
        <>
            <StyledInputLabel {...props}>{props.children}</StyledInputLabel>
        </>
    );
};

export default Select;
export { Option, Label };
