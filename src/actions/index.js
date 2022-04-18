export const fetchHeroes = (request) => (dispatch) => {
    dispatch(heroesFetching());
        request("http://localhost:3001/heroes")
            .then(data => dispatch(heroesFetched(data)))
            .catch(() => dispatch(heroesFetchingError()))
}

export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const heroesAdd = (hero) => {
    return {
        type: 'HEROES_ADD',
        payload: hero
    }
}
export const heroesDelete = (id) => {
    return {
        type: 'HEROES_DELETE',
        payload: id
    }
}

export const filtersFetching = () => {
    return {
        type: 'FILTERS_FETCHING',
    }
}

export const filtersFetched = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}

export const filtersFetchingError = () => {
    return {
        type: 'FILTERS_FETCHING_ERROR'
    }
}

export const filtersChange = (filter) => {
    return {
        type: 'FILTERS_CHANGE',
        payload: filter
    }
}


// export const filtersChange = (filter) => (dispatch) => {
//     setTimeout(() => {
//         dispatch({
//             type: 'FILTERS_CHANGE',
//             payload: filter
//         })
//     }, 1000)
// }