export const slicerFactory =
  (size, start = 0) =>
  (string) =>
    string.slice(start, size);
