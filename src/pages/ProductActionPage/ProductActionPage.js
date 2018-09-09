import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddProductRequest, actEditProductRequest,actUpdateProductRequest } from './../../actions/index';

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            ckbstatus: ''
        }
    }
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.getEditProduct(id);
            console.log(id);

        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.editItem) {
            var {editItem} =  nextProps;
            this.setState({
                id : editItem.id,
                txtName: editItem.name,
                txtPrice: editItem.price,
                ckbstatus: editItem.status
            })
        }

    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }
    onSave = (e) => {
        e.preventDefault();

        var { id, txtName, txtPrice, ckbstatus } = this.state;
        var { history } = this.props;
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: ckbstatus
        }
        console.log(this.state);

        if (id) {
            console.log('update....')
            this.props.onUpdateProduct(product);
            history.goBack();
        } else {
            this.props.onAddProduct(product);
            history.goBack();

        }

    }
    render() {
        var { txtName, txtPrice, ckbstatus } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">

                <form onSubmit={this.onSave}>

                    <div className="form-group">
                        <label>Tên sản phẩm</label>
                        <input type="text"
                            className="form-control"
                            value={txtName}
                            name='txtName'
                            onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Giá</label>
                        <input type="text"
                            className="form-control"
                            value={txtPrice}
                            name='txtPrice'
                            onChange={this.onChange} />
                    </div>

                    <div className="checkbox">
                        <label>
                            <input type="checkbox"
                                value={ckbstatus}
                                name='ckbstatus'
                                onChange={this.onChange}
                                checked={ckbstatus} />
                            Còn hàng
                        </label>
                    </div>
                    <Link to='/product-list' className="btn btn-danger mr-10">
                        Trở lại
                    </Link>

                    <button className="btn btn-primary">Lưu</button>
                </form>

            </div>
        );
    }


}
const mapStateToProps = (state) => {
    return {
        editItem: state.editItem
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product))
        },
        getEditProduct: (id) => {
            dispatch(actEditProductRequest(id));
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product))
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage)

