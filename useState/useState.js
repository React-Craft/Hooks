// // 외부저장소 역할
// state = [];
// stateIndex = 0;

// 이까지가 useState
function useState(initialValue) {
  const currentIndex = stateStore.stateIndex;

  // console.log(1, state[currentIndex]);
  if (stateStore.state[currentIndex] === undefined) {
    // console.log(2, state[currentIndex]);
    stateStore.state[currentIndex] = initialValue;
    // console.log("최초 init", state[currentIndex]);
  }

  function getState() {
    return stateStore.state[currentIndex];
  }

  function setState(newValue) {
    // console.log("방금 들어옴", newValue);

    stateStore.state[currentIndex] = newValue;
    console.log(
      "현재 index",
      currentIndex,
      "현재 전체 state",
      stateStore.state,
      "그리고 그 index에 대한 값",
      stateStore.state[currentIndex]
    );
    // console.log("방금 바뀜", state);
    // 재렌더링
    App();
    stateStore.resetStateIndex();
  }

  //useState 갯수만큼 중가함
  stateStore.stateIndex++;

  console.log("useState호출시, 현재 상태", stateStore.state);
  return [getState, setState];
}
