import './App.css';
import Joyride from 'react-joyride';
import { useState } from 'react';

function App() {

  const [{ run, steps }, setState] = useState({
    run: true,
    steps: [
      {
        target: 'body',
        content: <h2>Let's begin to explore features?</h2>,
        locale: { skip: <strong aria-label="skip">SKIP</strong> },
        placement: 'center'
      },
      {
        target: '#step-1',
        content: <h2>Here is your first step</h2>,
        placement: 'bottom',
        title: 'First step'
      },
      {
        target: '#step-2',
        content: <h2>Here is your second step</h2>,
        placement: 'bottom',
        title: 'Second step'
      },
      {
        target: '#step-3',
        content: <h2>Here is your third step</h2>,
        placement: 'bottom',
        title: 'Third step'
      },
      {
        target: '#step-4',
        content: <h2>Here is your fourth step</h2>,
        placement: 'bottom',
        title: 'Fourth step'
      },
      {
        target: '#step-5',
        content: <h2>Here is your fifth step</h2>,
        placement: 'bottom',
        title: 'Fifth step'
      },
    ]
  })

  return (
    <div className="App">
      <Joyride
        continuous
        steps={steps}
        callback={() => { }}
        run={run}
        hideCloseButton
        scrollToFirstStep
        showSkipButton
        showProgress
      />
      {
        [1, 2, 3, 4, 5]?.map((item, index) => {
          return (
            <div className='box' key={index} id={`step-${index + 1}`}>
              {item}
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
