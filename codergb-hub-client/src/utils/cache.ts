class LocalCache {
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  getCache(key: string) {
    const data = window.localStorage.getItem(key);

    if (data) {
      return JSON.parse(data);
    }
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key);
  }

  clearCache() {
    window.localStorage.clear();
  }
}
export default new LocalCache();
