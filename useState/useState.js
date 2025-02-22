// 외부저장소 역할
state = [];
stateIndex = 0;

// 이까지가 useState
function useState(initialValue) {
  const currentIndex = stateIndex;

  // console.log(1, state[currentIndex]);
  if (state[currentIndex] === undefined) {
    // console.log(2, state[currentIndex]);
    state[currentIndex] = initialValue;
    // console.log("최초 init", state[currentIndex]);
  }

  function getState() {
    return state[currentIndex];
  }

  function setState(newValue) {
    // console.log("방금 들어옴", newValue);

    state[currentIndex] = newValue;
    console.log(
      "현재 index",
      currentIndex,
      "현재 전체 state",
      state,
      "그리고 그 index에 대한 값",
      state[currentIndex]
    );
    // console.log("방금 바뀜", state);
    // 재렌더링
    App();
  }

  //useState 갯수만큼 중가함
  stateIndex++;

  console.log("useState호출시, 현재 상태", state);
  return [getState, setState];
}

function resetStateIndex() {
  stateIndex = 0;
}
