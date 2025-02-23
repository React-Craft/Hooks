// // 외부저장소 역할
// state = [];
// stateIndex = 0;

// 이까지가 useState
function useState(initialValue) {
  const currentIndex = stateStore.stateIndex;
  if (stateStore.state[currentIndex] === undefined) {
    stateStore.state[currentIndex] = initialValue;
  }

  function getState() {
    return stateStore.state[currentIndex];
  }

  function setState(newValue) {
    // if (typeof newValue === "function") {
    //   newValue = newValue(stateStore.state[currentIndex]);
    // }

    //  기존 값을 남기지 않고 마지막 값만 유지

    console.log(stateStore.updateQueue);
    stateStore.updateQueue = stateStore.updateQueue.filter(
      (item) => item.index !== currentIndex
    );

    // 새로운 값 추가
    stateStore.updateQueue.push({ index: currentIndex, value: newValue });

    if (!stateStore.isUpdating) {
      stateStore.isUpdating = true;
      setTimeout(() => {
        stateStore.updateQueue.forEach(({ index, value }) => {
          console.log("실행");
          stateStore.state[index] = value;
        });

        stateStore.updateQueue = [];
        stateStore.isUpdating = false;
        App();
      }, 0);
    }
  }

  stateStore.stateIndex++;
  return [getState, setState];
}
