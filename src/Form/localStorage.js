export const getItem = (key) => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };
  
  export const setItem = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  