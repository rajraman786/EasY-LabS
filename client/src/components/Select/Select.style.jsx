import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { styled } from "@mui/system";

export const StyledSelect = styled(Select)((theme) => ({
    height: "35px",
    fontSize: (props) => props.fontSize,
    width: "150px",
}));

export const StyledOption = styled(MenuItem)((theme) => ({}));

export const StyledInputLabel = styled(InputLabel)((theme) => ({}));
