const useEffectStore = [];
let firstRender = false;

function useEffect(callback, dependencies) {
  const prevDependencies = useEffectStore[stateStore.stateIndex] || [];

  if (dependencies === undefined) {
    setTimeout(callback, 0);
    return;
  }

  if (dependencies.length === 0 && !firstRender) {
    setTimeout(callback, 0);

    firstRender = true;
  }

  let isChanged = false;

  if (dependencies) {
    for (let i = 0; i < dependencies.length; i++) {
      if (dependencies[i] !== prevDependencies[i]) {
        isChanged = true;
        break;
      }
    }
  }

  if (isChanged) {
    setTimeout(callback, 0);
    useEffectStore[stateStore.stateIndex] = dependencies;
  }
}
