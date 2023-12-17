
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

   sas





           <div className='grid-container'>
          <div className='row-col'>{Cards}</div>
          <>
          <h3 className='subtitle'>overview - Today</h3>
          <div className='row-col'>
          {miniCards}
          </div>
          </>
         
          
          
        </div>