import { useState } from 'react';
import data from './data';
import { nanoid } from 'nanoid';
const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newText = data.slice(0, count);
    setText(newText);
  };
  return (
    <section className='section-center'>
      <h4>Tired of boring lorem ipsum?</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          min='1'
          max='8'
          step='1'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className='btn' type='submit'>
          Generate
        </button>
      </form>
      <div className='lorem-text'>
        {text.map((t) => {
          return (
            <p className='lorem-text' key={nanoid()}>
              {t}
            </p>
          );
        })}
      </div>
    </section>
  );
};
export default App;
