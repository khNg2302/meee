export const useGetUploadFiles = <FileType>() => {
  const getUploadFiles = (
    fileList: FileList | null,
    defineFile?: (file: File) => FileType
  ) => {
    if (!fileList) return [];

    if (!fileList.length) return [];

    return Object.keys(fileList).map((indexFile) =>
      defineFile ? defineFile(fileList[+indexFile]) : fileList[+indexFile] as File
    );
  };

  return { getUploadFiles };
};
