const useEffectStore = [];

function useEffect(callback, dependencies) {
  const prevDependencies = useEffectStore[stateIndex] || [];

  console.log(callback, dependencies);

  // 의존성 없으면 바로 실행
  if (dependencies === undefined) {
    setTimeout(callback, 0);
    return;
  }

  let isChanged = false;

  if (dependencies) {
    for (let i = 0; i < dependencies.length; i++) {
      if (dependencies[i] !== prevDependencies[i]) {
        console.log("없음, 지금", i);
        isChanged = true;
        break;
      }
    }
  }

  console.log(isChanged);
}
