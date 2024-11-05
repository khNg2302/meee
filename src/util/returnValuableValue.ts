const returnValuableValue = (value: unknown) => {
  if (value) return value;
};

const returnValuableArray = (values: Array<unknown>) => {
  return values.map((value) => returnValuableValue(value));
};
