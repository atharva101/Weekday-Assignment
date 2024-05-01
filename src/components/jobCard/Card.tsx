import { data } from "./dummyData"

const Card = () => {
    return(
        <>
      {data?.jdList.map(item => (
        <h1>{item.jobRole.toLocaleUpperCase()}</h1>
      ))}
        
        </>
    )
}

export default Card