export function getBlackListFromLocalStorage() {
    return JSON.parse(localStorage.getItem('list')) ?? []
}

export function setOrRemoveItemFromBlackList  (ticker) {
    const blackList = getBlackListFromLocalStorage()
    if (blackList.find(item => item === ticker)) {
      const filderedList = blackList.filter(item => item !== ticker)
      return localStorage.setItem('list', JSON.stringify(filderedList)) 
    }
    blackList.push(ticker)
    localStorage.setItem('list', JSON.stringify(blackList))
}