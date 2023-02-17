export const crossPlatformDate = (dateFormat?: string) => {
  if (!dateFormat) return "Invaild Date Format";
  return new Date(
    dateFormat?.replace(/-/g, "/")?.split(".")[0]
  ).toLocaleString();
};
