const defaultState = {
    persons: []
};
const reduce = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ... state,
                persons: [...state.persons, action.value]
            }
        case 'DELETE': 
            return {
                ... state,
                persons: state.persons.filter(person => person.id !== action.value)
            }
        default: return state;
    }
}

export default reduce;