import Main from './main'
import Model from './model'
import Routes from './routes'
const RestGin = () => {
    return (
        <div className="container">
            <h3>Let's build Rest API with Gin Framework...</h3>
            <p>Gin is a web framework written in Go (Golang). It features a martini-like API with performance that is up to 40 times faster thanks to httprouter. If you need performance and good productivity, you will love Gin</p>
            <p>Link to gin framework <a href="https://github.com/gin-gonic/gin"> here</a></p>
            <Model/>
            <Routes/>
            <Main/>
        </div>
    )
}

export default RestGin