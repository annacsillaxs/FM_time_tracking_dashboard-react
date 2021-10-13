import { useState } from 'react';
import data from './data.json';
import Card from './components/Card';
import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
  const [details, setDetails] = useState(data);
  const [report, setReport] = useState('weekly');
  const [active, setActive] = useState('weekly');


  const changeReportHandler = (e) => {
    setReport(e.target.innerText.toLowerCase());
    setActive(e.target.innerText.toLowerCase())
    
  }
  console.log(active)
  console.log(report)
  
  return (
    <main className="app">
      <section className="container">
        <ProfileCard details={details} report={report} active={active} onChangeHandler={changeReportHandler}/>
        {details.map((detail => {
          return (
            <Card key={detail.title} {...detail} report={report}/>
          )
        }))}
      </section>
    </main>
  );
}

export default App;
