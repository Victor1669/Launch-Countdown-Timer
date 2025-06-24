export default function Timer(props) {
  const tempo = props.tempo;
  const segAnt = tempo - 1 == -1 ? 59 : tempo - 1;
  return (
    <>
      <div className="timer">
        <div className="background"></div>
        <div className="timerCont um">
          <div className="timerText">{tempo < 10 ? "0" + tempo : tempo}</div>
        </div>
        <div className="timerCont dois">
          <div className="timerText">{tempo < 10 ? "0" + tempo : tempo}</div>
        </div>
        <p>{props.tipo}</p>
      </div>
    </>
  );
}
