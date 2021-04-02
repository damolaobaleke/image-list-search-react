let initialState = {
    cards: [{
            id: 1,
            title: 'Alex',
            body: 'Lorem'
        },

        {
            id: 2,
            title: 'Roland',
            body: 'Lorem ipsum galor'
        },

        {
            id: 3,
            title: 'Mark',
            body: 'Facebook'
        }
    ],

    users: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_CARD':
            let newCard = state.cards.filter((card) => {
                return action.id !== card.id; //check if the card id ===(same as) the id in the action, if !equal return true
                //essentially filters (removes) out cards where the id in the action is not the same as the card id, and keeps the one that is the same in the new array so as to be deleted.
            })
            return {
                ...state, //this is to spread the current state, incase there are other properties, so whole state object isnt overwritten
                cards: newCard //would only contain card where id == id in action
            }
        case 'FETCH_USERS':
            return {
                ...state,
                users: action.payload
            }

        default:
            return state;
    }

}


export default rootReducer;