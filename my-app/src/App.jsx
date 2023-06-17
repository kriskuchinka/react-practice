// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Hero1 from '../components/Hero1'
import Hero2 from '../components/Hero2'
import Hero3 from '../components/Hero3'
import Hero4 from '../components/Hero4'
import Hero5 from '../components/Hero5'
import MainContent1 from '../components/MainContent1'
import MainContent2 from '../components/MainContent2'
import MainContent3 from '../components/MainContent3'
import MainContent4 from '../components/MainContent4'
import Footer from '../components/Footer'

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
      <ParallaxProvider>  
        <Parallax speed={[10]}>
          <Header />
          <Nav />
          <Hero1 />
          <MainContent1 />
          <Hero2 />  
          <MainContent2 />
          <Hero3 /> 
          <MainContent3 />
          <Hero4 /> 
          <MainContent4 />
          <Hero5 /> 
          <Footer />
        </Parallax>
      </ParallaxProvider>
  )
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
