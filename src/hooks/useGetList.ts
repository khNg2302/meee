export const useGetList = () => {
  const getList = async (call: any, setList: any) => {
    const res = await call();

    setList(res);
  };

  return { getList };
};
