let TimePara = () => {

 let time = new Date();

  return (
  <h4>
    This is the current-date : <b>{time.toLocaleDateString()}</b>  current-time : <b>{time.toLocaleTimeString()}</b>
  </h4>
  );
}  

export default TimePara;