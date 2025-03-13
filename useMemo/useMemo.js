const useMemoStore = [];

function useMemo(callback, dependencies) {
  const currentIndex = stateStore.stateIndex;
  stateStore.stateIndex++;

  if (!useMemoStore[currentIndex]) {
    useMemoStore[currentIndex] = { dependencies: undefined, value: undefined };
  }

  console.log(useMemoStore[currentIndex], currentIndex);

  //   const temp = useMemoStore[currentIndex];
  //   console.log(temp.dependencies, temp.value);

  const { dependencies: prevDependencies, value: prevValue } =
    useMemoStore[currentIndex];

  let hasChanged = !prevDependencies;
  console.log(hasChanged);
  if (hasChanged) {
    const newValue = callback();
    useMemoStore[currentIndex] = { dependencies, value: newValue };
    return newValue;
  }

  console.log({ dependencies: prevDependencies, value: prevValue });

  return currentIndex;
}
