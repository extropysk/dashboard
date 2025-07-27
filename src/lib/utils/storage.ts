function parseJSON<T>(value: string | null, initialValue: T | null) {
  try {
    return value === "undefined" ? initialValue : (JSON.parse(value ?? "") as T)
  } catch {
    console.log("parsing error on", { value })
    return initialValue
  }
}

export const getItem = <T>(key: string, initialValue: T | null = null) => {
  const item = sessionStorage.getItem(key)
  return item ? (parseJSON(item, initialValue) as T) : initialValue
}

export const setItem = <T>(key: string, value: T | null) => {
  if (value) {
    sessionStorage.setItem(key, JSON.stringify(value))
  } else {
    sessionStorage.removeItem(key)
  }
}

export const removeItem = (key: string) => {
  sessionStorage.removeItem(key)
}
