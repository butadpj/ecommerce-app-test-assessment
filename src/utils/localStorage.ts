export const getLocalStorageItem = (key = "") => {
  if (key) {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
};

export const setLocalStorageItem = (key = "", value: unknown) => {
  if (key && value) {
    if (typeof value === "object")
      return window.localStorage.setItem(key, JSON.stringify(value));
  }
};
