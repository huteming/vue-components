// localStorage
export function getLocal (key) {
    let value = localStorage.getItem(key)

    try {
        value = JSON.parse(value)
    } catch (err) {
        // console.log(err)
    }

    return value
}

export function setLocal (key, value) {
    if (typeof value === 'object') {
        value = JSON.stringify(value)
    }

    localStorage.setItem(key, value)
}

export function removeLocal (key) {
    localStorage.removeItem(key)
}

// sessionStorage
export function getSession (key) {
    let value = sessionStorage.getItem(key)

    try {
        value = JSON.parse(value)
    } catch (err) {
        // console.log(err)
    }

    return value
}

export function setSession (key, value) {
    if (typeof value === 'object') {
        value = JSON.stringify(value)
    }

    sessionStorage.setItem(key, value)
}

export function removeSession (key) {
    sessionStorage.removeItem(key)
}
