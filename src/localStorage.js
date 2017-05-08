export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    console.log('loading from localstorage');
    return JSON.parse(serializedState);
  } catch (err) {
    console.log('prob loading from localstorage');
    return undefined
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log('problem saving state to local storage');
  }
}
