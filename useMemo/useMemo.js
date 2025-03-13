const useMemoStore = [];

function useMemo(callback, dependencies) {
  const currentIndex = stateStore.stateIndex;
  stateStore.stateIndex++;

  if (!useMemoStore[currentIndex]) {
    useMemoStore[currentIndex] = { dependencies: undefined, value: undefined };
  }

  // 이전 의존성 가져옴
  const { dependencies: prevDependencies, value: prevValue } =
    useMemoStore[currentIndex];

  let hasChanged = !prevDependencies;
  if (!hasChanged) {
    for (let i = 0; i < dependencies.length; i++) {
      if (dependencies[i] !== prevDependencies[i]) {
        // 의존성 달라진거 있는지 비교
        hasChanged = true;
        break;
      }
    }
  }

  // 재실행
  if (hasChanged) {
    const newValue = callback();
    useMemoStore[currentIndex] = { dependencies, value: newValue };
    return newValue;
  }

  return prevValue;
}
