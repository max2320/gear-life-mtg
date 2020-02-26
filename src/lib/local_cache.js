export const setCache = (key, object) => {
  if(JSON.stringify(localStorage.getItem(key)) !== JSON.stringify(object)) {
    localStorage.setItem(key, JSON.stringify(object));
    return true;
  }

  return false;
}

export const getCache = (key) => {
  return localStorage.getItem(key) && JSON.parse(localStorage.getItem(key))
}
