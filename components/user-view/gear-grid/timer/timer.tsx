

type TimerProps = {
    startTime: number,
    endTime: number
}

const Timer:React.FC<TimerProps> = ({startTime, endTime}) => {

    const difference = endTime-startTime

    return (
        <h2></h2>
    )
}

export default Timer