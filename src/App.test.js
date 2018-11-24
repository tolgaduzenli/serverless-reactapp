import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import enzyme from 'enzyme'
import NoteDashboard from './components/note/NoteDashboard'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('should render a <NoteDashboard /> ', () => {
  const wrapper = enzyme.shallow(<App />)
  expect(wrapper.containsMatchingElement(
    <NoteDashboard />
  )).toEqual(true)
})
