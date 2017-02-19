import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App/App';

it('renders without crashing', () => {
  const tags = [
      "Санкт-Петербург", "Москва", "Новосибирск"
  ];
  const div = document.createElement('div');
  ReactDOM.render(<App data={tags}/>, div);
});
