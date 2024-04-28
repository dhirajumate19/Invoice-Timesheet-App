export const uuidToIt = (data) => {
  const id = parseInt(data, 10);
  let Id;
  if (!Number.isNaN(id)) {
    // Handle valid integer
    Id = id.toFixed();
    return (Id = Math.floor(Math.random() * 1000).toFixed());
  } else {
    // Handle case where `uuid()` did not generate a valid integer
    console.error(
      "uuid() did not generate a valid UUID. Generating fallback ID..."
    );
    // Generate a fallback ID using a different method, for example:
  }
};
