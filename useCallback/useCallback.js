const useCallbackStore = [];

function useCallback(callback, dependencies) {
  const currentIndex = stateStore.stateIndex;
  stateStore.stateIndex++;

  if (!useCallbackStore[currentIndex]) {
    useCallbackStore[currentIndex] = {
      dependencies: undefined,
      callback: undefined,
    };
  }

  const { dependencies: prevDependencies, callback: prevCallback } =
    useCallbackStore[currentIndex];

  let hasChanged = !prevDependencies;
  if (!hasChanged) {
    for (let i = 0; i < dependencies.length; i++) {
      if (dependencies[i] !== prevDependencies[i]) {
        hasChanged = true;
        break;
      }
    }
  }

  if (hasChanged) {
    useCallbackStore[currentIndex] = { dependencies, callback };
    return callback;
  }

  return prevCallback;
}
