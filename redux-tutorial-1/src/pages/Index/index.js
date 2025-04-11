import Button from '../../components/Button'
import {CHANGE, DECREASE, INCREASE} from '../../reducers/counterReducer'
import Counter from '../../components/Counter'

function Index() {
  return <div className="row justify-content-md-center">
    <div className="col-4 mt-3" style={{border: '1px solid black'}}>
      <div className="row">
        <div className="col-3">
          <Counter />
        </div>
        <div className="col-3">
          <Button button_type={INCREASE} />
        </div>
        <div className="col-3">
          <Button button_type={DECREASE} />
        </div>
        <div className="col-3">
          <Button button_type={CHANGE} />
        </div>
      </div>
    </div>
  </div>
}


export default Index

