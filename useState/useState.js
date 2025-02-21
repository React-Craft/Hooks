state = [];
stateIndex = 0;

function useState(initialValue) {
  function getState() {
    return getState;
  }

  function setState() {
    return setState;
  }

  return [getState, setState];
}
