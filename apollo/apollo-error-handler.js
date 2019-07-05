export default (error, context) => {
  // eslint-disable-next-line no-console
  console.log(error);
  // context.error({ statusCode: 304, message: 'Server error' })
  // eslint-disable-next-line no-console
  console.error({ error });
};
