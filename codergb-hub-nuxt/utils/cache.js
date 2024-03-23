class LocalCache {
  setCache(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  getCache(key) {
    const data = window.localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
  }

  deleteCache(key) {
    window.localStorage.removeItem(key);
  }

  clearCache() {
    window.localStorage.clear();
  }
}
export default new LocalCache();
