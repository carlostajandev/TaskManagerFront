

export const findErrorMessage = (errors, fieldName) => {
    const error = errors.find((item) => item.path === fieldName);
    return error ? error.msg : "";
};