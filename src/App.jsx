import Card from './components/Card'
import  jobOpenings  from './components/cardData.json'

function App() {

  return (
    <div className='parent'>
      {jobOpenings.map((element, index) => {
        return <div key={index}>
        <Card brandLogo={element.brandLogo} company={element.companyName} datePosted={element.datePosted} post={element.post} tag1={element.tag1} tag2={element.tag2} pay={element.pay} location={element.location} /> ;
        </div>
      })}
    </div>
  )
}

export default App
