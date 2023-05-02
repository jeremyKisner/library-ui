export const initialCartState = [];

export const CartTypes = {
    ADD: "ADD",
};

const findItem = (cart, library_id) => cart.find((item) => item.library_id === library_id);

export const cartReducer = (state, action) => {
    switch (action.type) {
        case CartTypes.ADD:
            console.log("Adding book: ", action)
            if (findItem(state, action.book.library_id)) {
                return state.map((item) => (item.library_id === action.book.library_id
                    ? {...item, quantity: item.quantity + 1}: item));
            }
            return [...state,
            {
                library_id: action.book.library_id,
                name: action.book.name,
                quantity: 1
            },]
        
            default:
                throw new Error("Invalid Action!")
    }
};
