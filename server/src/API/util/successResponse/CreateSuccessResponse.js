export const createSuccessResponse = (data, message) => {
  return {
    data,
    meta: {
      message,
    },
  };
};
