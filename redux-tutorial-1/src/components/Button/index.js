import PropTypes from 'prop-types'
import {useStore} from 'react-redux'
import {CHANGE} from '../../reducers/counterReducer'

function Button(props) {
  const store = useStore()

  const onBtnClick = () => {
    if (props.button_type === CHANGE) {
      store.dispatch({
        type: props.button_type,
        payload: {
          counter: 555,
        },
      })
    } else {
      store.dispatch({
        type: props.button_type,
      })
    }
  }

  return <div className="d-grid gap-2">
    <button type="button" className="btn btn-primary btn-block" onClick={onBtnClick}>
      {props.button_type}
    </button>
  </div>
}

Button.propTypes = {
  button_type: PropTypes.string,
}

export default Button
