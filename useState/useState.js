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
    if (typeof newValue === "function") {
      const existingItem = stateStore.updateQueue.find(
        (item) => item.index === currentIndex
      );

      let prevValue;
      if (existingItem) {
        prevValue = existingItem.value; // 큐에 값이 있으면 기존 값 사용
      } else {
        prevValue = stateStore.state[currentIndex]; // 없으면 현재 상태값 사용
      }
      newValue = newValue(prevValue);
    }

    stateStore.updateQueue = stateStore.updateQueue.filter(
      (item) => item.index !== currentIndex
    );
    stateStore.updateQueue.push({ index: currentIndex, value: newValue });

    if (!stateStore.isUpdating) {
      stateStore.isUpdating = true;
      setTimeout(() => {
        console.log("setState 변경");

        stateStore.updateQueue.forEach(({ index, value }) => {
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
