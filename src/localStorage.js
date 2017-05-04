export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    console.log('loadwin');
    return JSON.parse(serializedState);
  } catch (err) {
    console.log('prob1');
    return undefined
  }
};

export const saveState = (state) => {
  try {
    console.log('win');
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log('prob2');
  }
}
