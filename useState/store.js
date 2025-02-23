const stateStore = {
  state: [],
  stateIndex: 0,
  updateQueue: [],
  isUpdating: false,
  resetStateIndex() {
    this.stateIndex = 0;
  },
};
