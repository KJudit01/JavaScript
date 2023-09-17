//export const calculateTotalDuration = (durations) => {
    //let totalDuration = 0;
   // durations.foreach(duration => totalDuration += duration);

  //  return totalDuration;
//}

export const calculateTotalDuration = (durations) => 
    durations.reduce((acc, duration) => acc += duration, 0)
    