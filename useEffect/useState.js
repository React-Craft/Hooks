const stateStore = [];
let stateIndex = 0;

function useState(initialValue) {
  const currentIndex = stateIndex;

  if (stateStore[currentIndex] === undefined) {
    stateStore[currentIndex] = initialValue;
  }

  function getState() {
    return stateStore[currentIndex];
  }

  function setState(newValue) {
    stateStore[currentIndex] = newValue;
    App();
  }

  stateIndex++;
  return [getState, setState];
}

function resetStateIndex() {
  stateIndex = 0;
}
