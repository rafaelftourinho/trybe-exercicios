import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Image from './Image';
import staringCat from './staringCat.jpg'

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
      <Image source={staringCat} alternativeText="Cute Cat starging" />
    </>
  );
}

export default App;
