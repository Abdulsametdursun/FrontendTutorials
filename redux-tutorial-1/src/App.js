import {Provider} from 'react-redux'
//import {createStore} from 'redux'
//import reducer from './reducers'

import {store} from './store'

import Index from './pages/Index'

//const store = createStore(reducer)

function App() {
  store.subscribe(() => {
    console.log('>> STORE STATE UPDATED', store.getState())
  })

  return <Provider store={store}>
    <Index />
  </Provider>
}

export default App
