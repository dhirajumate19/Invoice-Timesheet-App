export const createFailedResponse = (data, message) => {
  return {
    data,
    meta: {
      message,
    },
  };
};
