import logo from './logo.svg';
import './App.css';
import Card from './components/BigCard'
import MinCard from './components/SmallCards'

import Data from './components/Data/data'
import subData from './components/Data/SubData'


import Mode from './components/modes/Darkmode'

function App() {


  const Cards = Data.map(item => {
    return <Card
      key={item.id}
      item={item}
    />
  })

  const miniCards = subData.map(dado => {
    return <MinCard
      key={dado.id}
      item={dado}
    />
  })



  return (
    <main className='container'>
    <div id='header-bg'></div>
      <div className='header'>
     
      <div className='d-flex'>
      <h1>Social Media Dashboard <br />  <span className='subtxt gray'>Total Followers: 23,004</span> </h1>
       <span className="line"></span>
        <Mode></Mode>
        </div>
  
       
        <section className='grid'>
        <div className='row-col'>{Cards}</div>
        </section>
      </div>

      <div className='header'>
        <div className='d-flex'>
        <h2 className='sub-title'>  Overview - Today</h2>
        </div>
        <section className='grid'>
        <div className='row-col'>
          {miniCards}
          </div>
        </section>
      </div>

    </main>
  );
}

export default App;
