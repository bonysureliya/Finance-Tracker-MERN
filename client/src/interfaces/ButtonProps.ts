import ButtonBorderColor from "../enums/ButtonBorderColor"
import ButtonColor from "../enums/ButtonColor"

export interface ButtonProps {
  variant: "contained" | "outlined" | "link"
  text: string
  onClick?: () => void
  color: ButtonColor
  border?: ButtonBorderColor; // Only valid for 'outlined' variant
}
