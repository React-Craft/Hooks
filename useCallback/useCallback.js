const useCallbackStore = [];

function useCallback(callback, dependencies) {
  const currentIndex = stateStore.stateIndex;
  stateStore.stateIndex++;

  if (!useCallbackStore[currentIndex]) {
    console.log("마운트");

    useCallbackStore[currentIndex] = {
      dependencies: undefined,
      callback: undefined,
      cleanup: undefined,
    };
  }

  const {
    dependencies: prevDependencies,
    callback: prevCallback,
    cleanup: prevCleanup,
  } = useCallbackStore[currentIndex];

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
    if (prevDependencies) {
      console.log("업데이트");
    }

    if (prevCleanup) prevCleanup();

    const cleanup = callback();
    useCallbackStore[currentIndex] = { dependencies, callback, cleanup };

    return callback;
  }

  console.log("메모");
  return prevCallback;
}
