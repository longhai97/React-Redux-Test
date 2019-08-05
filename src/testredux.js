import { connect } from 'react-redux'
import { addTodo, myPenta, NhinQuan } from './actions'
import Test from './test.js'

const mapStateToProps = (state/*, ownProps*/) => {
    return {
        counter: state.todos
    }
};

const mapDispatchToProps = { addTodo, myPenta, NhinQuan };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)
(
    Test
)
