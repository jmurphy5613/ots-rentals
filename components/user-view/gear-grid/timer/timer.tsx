import { useEffect, useState } from "react"


type TimerProps = {
    endTime: number
}

const Timer:React.FC<TimerProps> = ({ endTime }) => {

    const [numberOfWeeks, setNumberOfWeeks] = useState<number>()
    const [numberOfDays, setNumberOfDays] = useState<number>()
    const [numberOfHours, setNumberOfHours] = useState<number>()
    const [numberOfMinutes, setNumberOfMinutes] = useState<number>()
    const [numberOfSeconds, setNumberOfSeconds] = useState<number>()


    useEffect(() => {
        const difference = endTime-Date.now()
        setTimeout(() => {
            let current = difference
            let weeks = difference / 604800000;
            current -= weeks * 604800000;

            let days = current / 86400000;
            current -= days * 86400000;

            let hours = current / 3600000;
            current -= hours * 3600000;

            let minutes = current / 60000;
            current -= minutes*60000;

            let seconds = current / 1000;
            
            setNumberOfWeeks(weeks)
            setNumberOfDays(days)
            setNumberOfHours(hours)
            setNumberOfMinutes(minutes)
            setNumberOfSeconds(seconds)
        }, 1000)
    }, [])

    return (
        <h2>{numberOfWeeks} weeks {numberOfDays} days {numberOfHours} hours {numberOfMinutes} minutes</h2>
    )
}

export default Timer