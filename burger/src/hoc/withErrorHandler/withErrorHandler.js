import React, { Component } from 'react'
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrapperClass, axios) => {
    return class extends Component {
        state = {
            error: null
        };

        // will mount  constructor, set the interceptor before child
        // did mount not work for child, because child is rendered before parent did mount
        componentWillMount() {  
            this.reqInterceptor = axios.interceptors.request.use(request => {
                this.setState({ error: null });
                return request;
            })

            this.resInterceptor = axios.interceptors.response.use(response => response
                , error => {
                    this.setState({ error: error });
                })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorCloseHandler = () => {
            this.setState({ error: null });
        }
        render() {
            return (
                <>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorCloseHandler}>
                        {this.state.error  ? this.state.error.message: null}
                    </Modal>
                    <WrapperClass {... this.props}></WrapperClass>
                </>
            )
        }
    }
}

export default withErrorHandler;
