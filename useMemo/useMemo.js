const useMemoStore = [];

function useMemo(callback, dependencies) {
  const currentIndex = stateStore.stateIndex;
  stateStore.stateIndex++;

  return currentIndex;
}
