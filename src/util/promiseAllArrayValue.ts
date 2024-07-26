export const promiseAllArrayValue = <ValueType, ValueReturn>(
  values: ValueType[],
  promise: (value: ValueType) => Promise<ValueReturn>
) => {
  const promises = values.map((value) => promise(value));

  return Promise.all(promises);
};
