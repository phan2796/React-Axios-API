import * as Types from './../constants/ActionType';

var initialState = [
];
function findID(products, id) {
    for (let index = 0; index < products.length; index++) {
        if (id === products[index].id) {
            return index;
        }
    }
    return -1;
}
const products = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case Types.DELETE_PRODUCT:
            index = findID(state, action.id);
            if (index !== -1) {
                state.splice(index, 1);
            }
            return [...state];
        case Types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        case Types.UPDATE_PRODUCT:
            index = findID(state, action.product.id);
            if (index !== -1) {
                state[index] = action.product;
            }
            return [...state];

        default: return [...state];
    }
}
export default products;