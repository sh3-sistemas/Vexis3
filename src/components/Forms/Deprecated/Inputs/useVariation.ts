import { twMerge } from "tailwind-merge";
import type { inputState } from "./constants";

const validateWithSuccess = (
  { normalState, errorState, successState }: inputState,
  valid: boolean,
) => {
  return valid
    ? twMerge(normalState, successState)
    : twMerge(normalState, errorState);
};

const validateWithoutSuccess = (
  { normalState, errorState }: inputState,
  valid: boolean,
) => {
  return valid ? normalState : twMerge(normalState, errorState);
};

const disableInput = ({ normalState, disabled }: inputState) => {
  return twMerge(normalState, disabled);
};

export default (
  inputStateStyle: inputState,
  meta: { valid: boolean; dirty: boolean; validated: boolean },
  props: { validateSuccess: boolean; disabled?: boolean },
) => {
  const { dirty, validated, valid } = meta;
  const { validateSuccess, disabled } = props;

  if (disabled) return disableInput(inputStateStyle);
  if (!dirty && !validated) return inputStateStyle.normalState;
  if (validateSuccess) return validateWithSuccess(inputStateStyle, valid);

  return validateWithoutSuccess(inputStateStyle, valid);
};
