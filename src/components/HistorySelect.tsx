import { useState } from 'react'
import { BrowserRouter as Router, useHistory} from 'react-router-dom'

const HistorySelect = () => {
    const [startDate, setStartDate] = useState<string | null>(null)
    const [endDate, setEndDate] = useState<string | null>(null)
    let history = useHistory()

    const getData = () => {
        let start = null
        let end = null

        if (startDate != null)
            start = new Date(startDate)
        if (endDate != null)
            end = new Date(endDate)


        if (startDate === null || endDate === null) {
            alert('Please select start date and end date correctly')
            // console.log('empty')
        }
        else if (start != null && end != null && start?.getTime() > end?.getTime()) {
            alert('Please select start date and end date correctly')
        }
        else{
            history.push(`/history/result?start=${startDate}&end=${endDate}`)
        }
    }

    return (
            <div className='my-5'>
                <div className='text-center space-y-3 space-x-3'>
                    <p className='text-2xl font-semibold'>Select historical range</p>
                    <span>From date</span>
                    <input type='date' onChange={e => {setStartDate(e.target.value)}}></input>
                    <span>To date</span>
                    <input type='date' onChange={e => {setEndDate(e.target.value)}}></input>
                    <br />
                    <button onClick={getData}>Get data</button>

                </div>
            </div>

    )
}

export default HistorySelect