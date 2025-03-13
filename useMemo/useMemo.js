const useMemoStore = [];

function useMemo(callback, dependencies) {
  const currentIndex = stateStore.stateIndex;
  stateStore.stateIndex++;

  if (!useMemoStore[currentIndex]) {
    useMemoStore[currentIndex] = { dependencies: undefined, value: undefined };
  }

  console.log(useMemoStore[currentIndex], currentIndex);

  return currentIndex;
}
