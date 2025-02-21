state = [];
stateIndex = 0;

function useState(initialValue) {
  const currentIndex = stateIndex;

  console.log(1, state[currentIndex]);
  if (state[currentIndex] === undefined) {
    console.log(2, state[currentIndex]);
    state[currentIndex] = initialValue;
  }

  function getState() {
    return state[currentIndex];
  }

  function setState() {
    return "setState";
  }

  return [getState, setState];
}
