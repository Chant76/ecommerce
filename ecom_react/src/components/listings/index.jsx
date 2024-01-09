import { useEffect } from 'react'

function Listings() {


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://discord.com/channels/793135414746939432/1151130649051279520/1194290737899114618`
      );

      const data = await response.json();

      console.log(data);
    };
    // fetchData


    fetchData()

    // todo
    return (() => {

      // cleanup (pas obligatoire)
    })
  }, [])

  
  return (
    <div>Listings</div>
  )
}

export default Listings