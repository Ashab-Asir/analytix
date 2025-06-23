import Header from './components/Header';
import Hero from './components/Hero';
const App = () => {
  return (
    <div className='relative isolate overflow-hidden'>
      <Header></Header>
      <main>
        <Hero></Hero>
      </main>
    </div>
  );
};

export default App;
