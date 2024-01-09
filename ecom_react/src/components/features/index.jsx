

function Features() {

    const features = [
        {
        icon:"XXX",
        title:"Next day as standard",
        content:"Order before 3pm and get your order the next day as standard"
       },
        {
            icon:"",
            title:"Made by true artisans",
            content:"Handmade crafted goods made with real passion and craftmanship"
        },
        {
            icon:"",
            title:"Unbeatable prices",
            content:"For our materials and quality you won’t find better prices anywhere"
        },
        {
            icon:"",
            title:"Recycled packaging",
            content:"We use 100% recycled packaging to ensure our footprint is manageable"
        }
    ]

  return (
        <div>
            <ul className='md: flex flex-row align-center justify-center'>
            {
            features.map(<li key={features}>{features.icon}</li>
            )
            }  
            </ul>
            
        </div>
   )
}

export default Features