import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import { logOut } from '../ducks/login';

const mapStateToProps = (state, props) => {
    return {
        props: state
    }
}

const mapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(logOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
