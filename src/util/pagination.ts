export const pagination = <ListType,>(
  page: number,
  list: ListType[],
  perPage: number = 10
) => {
  return list.slice((page - 1) * perPage, perPage);
};
