state = [];
stateIndex = 0;

function useState(initialValue) {
  const currentIndex = stateIndex;

  console.log(1, state[currentIndex]);
  if (state[currentIndex] === undefined) {
    console.log(2, state[currentIndex]);
    state[currentIndex] = initialValue;
    console.log("최초 init", state[currentIndex]);
  }

  function getState() {
    return state[currentIndex];
  }

  function setState(newValue) {
    console.log("방금 들어옴", newValue);

    state[currentIndex] = newValue;
    console.log("방금 바뀜", state);

    return "값 추가";
  }

  stateIndex++;

  console.log(state);
  return [getState, setState];
}
