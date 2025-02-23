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

    // 같은 인덱스의 setState 호출 시, 마지막 값으로 덮어쓰기
    stateStore.updateQueue.set(currentIndex, newValue);

    if (!stateStore.isUpdating) {
      stateStore.isUpdating = true;
      setTimeout(() => {
        stateStore.updateQueue.forEach((value, index) => {
          stateStore.state[index] = value; // 마지막 값만 적용
        });
        stateStore.updateQueue.clear();
        stateStore.isUpdating = false;
        App();
      }, 0);
    }
  }

  stateStore.stateIndex++;
  return [getState, setState];
}
