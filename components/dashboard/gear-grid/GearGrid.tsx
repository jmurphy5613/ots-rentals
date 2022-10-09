import { useEffect } from "react"
import axios from 'axios'


const GearGrid = () => {

    useEffect(() => {
        axios.get('http://localhost:3002/gear/get-all').then((e) => {
            
        })
    }, [])

    return (
        <div>

        </div>
    )
}

export default GearGrid