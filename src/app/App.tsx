import * as React from 'react';
import * as ReactDOM from 'react-dom';

ReactDOM.render(<div>React</div>,
  document.getElementById('root'));

if ((module as any).hot) {
  (module as any).hot.accept();
}
