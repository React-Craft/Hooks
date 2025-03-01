const useRefStore = [];

function useRef(initialValue) {
  const refIndex = stateStore.stateIndex;

  if (useRefStore[refIndex] === undefined) {
    useRefStore[refIndex] = { current: initialValue };
  }

  return useRefStore[refIndex];
}
