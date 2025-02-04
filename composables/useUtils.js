export const useUtils = () => {
  const sayHello = (path) => console.log("Hello..." + path);
  return {
    sayHello,
  };
};
