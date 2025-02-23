const stateStore = {
  state: [],
  stateIndex: 0,
  updateQueue: new Map(),
  isUpdating: false,
  resetStateIndex() {
    this.stateIndex = 0;
  },
};
