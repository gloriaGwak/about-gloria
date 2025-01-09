import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

export default function App() {
  return (
    <>
      <div className='
        flex 
        lg:justify-between lg:gap-4 lg:flex-row lg:px-6
        md:px-12
        sm:px-6
        flex-col
        max-w-screen-xl mx-auto md:px-16
      '>
        <Header />
        <div className='lg:w-[calc(60%-1rem)] w-full'>
          <Main />
          <Footer />
        </div>
      </div>
    </>
  );
}