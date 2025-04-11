import {Fragment} from 'react'
import {connect} from 'react-redux'

function Counter(props) {
  console.log('>> PROPS', props)

  return <Fragment>
    {props.counter}
  </Fragment>
}

const mapStateToProps = state => {
  return {
    counter: state.counter.counter,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
