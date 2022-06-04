import RestCmd from "./cmd"
import RestModel from "./model"
import RestRoutes from "./routes"
import RestTest from "./test"

const RestInGo = () => {
    return (
        <div className='container'>
            <h2>Build Rest API with Gorilla</h2>
            <RestModel/>
            <RestRoutes/>
            <RestCmd/>
            <RestTest/>
        </div>
    )
}

export default RestInGo;