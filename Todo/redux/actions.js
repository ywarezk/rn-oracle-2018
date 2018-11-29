
export function setTasks(jsonArray) {
    return {
        type: 'SET_TASKS',
        payload: jsonArray
    }
}

export function requestTasks() {
    return function(dispatch) {
        fetch('https://nztodo.herokuapp.com/api/task/?format=json')
            .then((res) => {
                res.json().then((jsonArray) => {
                    
                    dispatch(setTasks(jsonArray));              

                })
            })    
    }
}