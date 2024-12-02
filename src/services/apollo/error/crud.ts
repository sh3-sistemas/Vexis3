import { customToast as toast } from "@/services/toast/customToast";
import type { ErrorResponse } from "@apollo/client/link/error";

const validationComparable = (message: string) => {
  return message == "validation";
};

const defineErrorMessages = (error: ErrorResponse) => {
  const { graphQLErrors } = error;
  const crudError = graphQLErrors?.some(({ message }) =>
    validationComparable(message),
  );
  const errorMessages = graphQLErrors?.filter(({ message }) =>
    validationComparable(message),
  );

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
      toast.error(validation);
    });
  });
};
