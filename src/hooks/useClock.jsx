import { addMinutes } from "date-fns";
import { useEffect, useState } from "react";


const init = {
    id: '',
    title: '',
    timezone: {
        type: '',
        offset: '',
    dateUtc: null,
    date: null,
    }
}

const TIMEZONE_OFFSET = {
    PST: 7,
    EST: 4,
}

const useClock = (label, timezone, offset = 0)=> {
    const [state, setState] = useState({...init});

    useEffect(()=> {
        let utc = new Date();
        if(timezone){
            if(timezone == 'PST' || timezone == 'EST'){
                offset = TIMEZONE_OFFSET[timezone]
            }
            
        } else {
            offset = utc.getTimezoneOffset();
        }
      addMinutes (utc, offset)
        console.log (label, utc.toLocaleString())
    }, [])


    return {
        clock: state,
    }

}

export default useClock;