import { customToast as toast } from "@/services/toast/customToast";
import type { ErrorResponse } from "@apollo/client/link/error";
import type { GraphQLFormattedError } from "graphql";

const validationComparable = (error: GraphQLFormattedError) =>
  error.extensions?.validation;

const defineErrorMessages = (error: ErrorResponse) => {
  const { graphQLErrors } = error;

  const crudError = graphQLErrors?.some(validationComparable);
  const errorMessages = graphQLErrors?.filter(validationComparable);

  return { crudError, errorMessages };
};

const getValidationErrors = (errors?: ErrorResponse | unknown) => {
  if (!errors) return;
  return Object.values(errors).flatMap((x) => x);
};

export const crudError = (error: ErrorResponse) => {
  if (!error.response) return;

  const { crudError, errorMessages } = defineErrorMessages(error);
  if (!crudError) return;

  errorMessages?.forEach((errorMessage) => {
    if (!errorMessage) return;

    const validations = getValidationErrors(
      errorMessage.extensions?.validation,
    );

    validations?.forEach((validation) => {
      if (validation.startsWith("[warning]")) {
        toast.warning(validation.replace("[warning]", "").trim());
      } else {
        toast.error(validation);
      }
    });
  });
};
