const useEffectStore = [];
let firstRender = false;

function useEffect(callback, dependencies) {
  const prevDependencies = useEffectStore[stateIndex] || [];

  // 의존성 없으면 바로 실행
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
        // console.log("없음, 지금", i);
        isChanged = true;
        break;
      }
    }
  }

  // console.log(useEffectStore);
  // console.log(useEffectStore[stateIndex]);
  // console.log(dependencies);
  // console.log("바뀌었는지", isChanged);

  if (isChanged) {
    setTimeout(callback, 0);
    useEffectStore[stateIndex] = dependencies;
  }
}
