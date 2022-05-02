import { StyledButton } from "./Button.style";

const Button = (props) => {
    return (
        <>
            <StyledButton {...props}>{props.children}</StyledButton>
        </>
    );
};

export default Button;
