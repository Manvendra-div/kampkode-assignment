import './App.css'
import { FloatingNav } from './components/ui/floating-navbar';
import Hero from './components/Hero';
import { StickyScrollRevealDemo } from './components/ScrollReveal';

function App() {
 
  return (
    <div className='min-w-screen min-h-screen relative bg-white'>
      <FloatingNav />
      <Hero/>
      <StickyScrollRevealDemo/>
    </div>
  )
}

export default App
