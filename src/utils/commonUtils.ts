// TIME AND DAY JS
 
import dayjs, { Dayjs, ManipulateType  } from 'dayjs';
import isSameOrAfter  from 'dayjs/plugin/isSameOrAfter'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(isSameOrAfter)
dayjs.extend(duration)
dayjs.extend(relativeTime)
export const addTime = (duration: number, type: ManipulateType  = 'hour', currentDate:Dayjs = dayjs()): string => {
  const newDate = currentDate.add(duration, type).toString();
  return newDate;
}

export const timeDiff=(beforeDate:Dayjs, afterDate:Dayjs, type: ManipulateType  = 'seconds')=>{
  return beforeDate.diff(afterDate, type)
}

export const hasPassed=(beforeDate:Dayjs|string, currentDate:Dayjs = dayjs())=>{
  if(typeof beforeDate === 'string'){
    return dayjs(beforeDate).isSameOrAfter(currentDate)
  }else{
    return beforeDate.isSameOrAfter(currentDate)
  }
  
}

 