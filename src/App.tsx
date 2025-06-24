import Brand from './components/Brand';
import Features from './components/Features ';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Process from './components/Process';
const App = () => {
  return (
    <div className='relative isolate overflow-hidden'>
      <Header></Header>
      <main>
        <Hero></Hero>
        <Brand></Brand>
        <Features></Features>
        <Process></Process>
        <Overview></Overview>
      </main>
    </div>
  );
};

export default App;
