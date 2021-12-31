import './fallback.css'
import { Spinner } from 'reactstrap'

function fallback() {
    return (
        <div className='wrapper'>
            <Spinner/>
        </div>
    )
}

export default fallback
