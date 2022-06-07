import React from "react"
import ParallelSearch from "./parallel"
import ParallelWithTimeout from "./parallelwithtimeout"
import ReplicaSearch from "./replicas"
import SerialSearch from "./serial"

const Home = (props) => {
    const [colSer, setColSer] = React.useState(false)
    const [colPar, seColPar] = React.useState(false)
    const [colTim, seColTim] = React.useState(false)
    const [colRep, seColRep] = React.useState(false)

    return ( <div classNamae="row">
    <h3>SearchEngine</h3>
    <p>
        In this project we will write a search engine using go. This will be a mock
        search implementation. There are 4 variation of the implementation, we start
        with basic serial search, then parallel search, parallel with timeout and 
        finally with multiple replicas of services. Each phase is performance 
        improvement over the previous one.
    </p>
   
    <div>
        <h6>Serial Search</h6>
        <p>
            With this approach we will call 3 services (web, image , video) search
            one by one and then combine the results and send to caller.
        </p>
        {!colSer && 
            <a 
                className='footer-h3' 
                href="javascript:void(0)"
                onClick={() => setColSer(true)}>
                Show Code...
            </a>
        }
        {colSer && 
            <>
            <a 
                className='footer-h3' 
                href="javascript:void(0)"
                onClick={() => setColSer(false)}>
                Hide Code...
            </a>
                <SerialSearch/>
               
            </>
           
        }
        <p></p>
    </div>
    <div>
        <h6>Parallel Search</h6>
        <p>
        In the next section we will enable parallel search using go routines
        then combine the results. This will drastically improve the search time.
        </p>
        {!colPar && 
            <a 
                className='footer-h3' 
                href="javascript:void(0)"
                onClick={() => seColPar(true)}>
                Show Code...
            </a>
        }
        {colPar && 
            <>
            <a 
                className='footer-h3' 
                href="javascript:void(0)"
                onClick={() => seColPar(false)}>
                Hide Code...
            </a>
                <ParallelSearch/>
            </>
           
        }
        <p></p>
    </div>
    <div>
        <h6>Parallel Search With Timeout</h6>
        <p>
        In the case we have the SLA that users should not wait for more than 80
        milliseconds and hence we will timeout if any of the service(web, image, video)
        takes more than 80 milliseconds and return what we got.
        </p>
        {!colTim && 
            <a 
                className='footer-h3' 
                href="javascript:void(0)"
                onClick={() => seColTim(true)}>
                Show Code...
            </a>
        }
        {colTim && 
            <>
            <a 
                className='footer-h3' 
                href="javascript:void(0)"
                onClick={() => seColTim(false)}>
                Hide Code...
            </a>
                <ParallelWithTimeout/>
            </>
           
        }
        <p></p>
    </div>
    <div>
        <h6>Replica Search</h6>
        <p>
       In this case we will create multiple replicas of each service and in parallel
       call each one of them. This will ensure at least of the service replica will 
       respond within 80 milliseconds. With this implementation there is going to be
       100% chance of users gettig all service response within the SLA.
        </p>
        {!colRep && 
            <a 
                className='footer-h3' 
                href="javascript:void(0)"
                onClick={() => seColRep(true)}>
                Show Code...
            </a>
        }
        {colRep && 
            <>
            <a 
                className='footer-h3' 
                href="javascript:void(0)"
                onClick={() => seColRep(false)}>
                Hide Code...
            </a>
                <ReplicaSearch/>
            </>
           
        }
    </div>
</div>)
}
export default Home