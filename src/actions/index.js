import * as Types from './../constants/ActionType';
import callApi from './../utils/apiCaller';

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data))
        })
    }
}
export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}
export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id))
        })
    }
}
export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}
export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return callApi(`products`, 'POST', {
            name: product.name,
            price: product.price,
            status: product.status
        }).then(res => {
            dispatch(actAddProduct(res.data))
            console.log(res.data);
        })
    }
}
export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

export const actEditProductRequest = (id) => {
    console.log('actEditProductRequest');
    return (dispatch) => {
        return callApi(`products/${id}`, 'GET',null).then(res => {
            dispatch(actEditProduct(res.data))
            console.log(res.data);
        })
    }
}
export const actEditProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = (product) => {
    return (dispatch) => {
        return callApi(`products/${product.id}`, 'PUT', {
            name: product.name,
            price: product.price,
            status: product.status
        }).then(res => {
            dispatch(actUpdateProduct(res.data))
            console.log(res.data);
        })
    }
}
export const actUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}
