export const capitalize = (string: string) => {
  return string && string[0].toUpperCase() + string.slice(1);
};

export const titleCase = (string?: string) => {
  return (
    string &&
    string
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  );
};
