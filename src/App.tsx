import Blog from './components/Blog';
import Brand from './components/Brand';
import Cta from './components/Cta';
import Features from './components/Features ';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Process from './components/Process';
import Review from './components/Review';
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
        <Review></Review>
        <Blog></Blog>
        <Cta></Cta>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default App;
