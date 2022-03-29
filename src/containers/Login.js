import { connect } from 'react-redux';
import Login from '../components/Login';
import { validateData, getUserStatus } from '../ducks/login';

const mapStateToProps = (state, props) => {
    return {
        props: state,
        logged: getUserStatus(state,props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    validateData: (user, password) => dispatch(validateData(user,password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
