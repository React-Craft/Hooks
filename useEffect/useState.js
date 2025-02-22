const useStateStore = [];
let stateIndex = 0;

function useState(initialValue) {
  const currentIndex = stateIndex;

  if (useStateStore[currentIndex] === undefined) {
    useStateStore[currentIndex] = initialValue;
  }

  function getState() {
    return useStateStore[currentIndex];
  }

  function setState(newValue) {
    useStateStore[currentIndex] = newValue;
    App();
  }

  stateIndex++;
  return [getState, setState];
}

function resetStateIndex() {
  stateIndex = 0;
}
