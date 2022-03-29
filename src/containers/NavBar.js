import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
// import { validateData, getUserStatus } from '../ducks/login';

const mapStateToProps = (state, props) => {
    return {
        props: state
    }
}

const mapDispatchToProps = (dispatch) => ({
    // validateData: (user, password) => dispatch(validateData(user,password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
