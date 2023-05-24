import "./App.css";

function CardComponent(props) {
  if(props.number > 50){
    return (
      <div>
        <h1>Big Number</h1>
        <p>The number is too big. It is {props.number}</p>
      </div>
    )
  } else if (props.number <10){
    return <></>
  } else {
    return (
      <div>
        <h3>{props.title}</h3>
        <h5>{props.subtitle}</h5>
        <p>{props.content}</p>
        <br />
        <button>{props.buttonText}</button>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <CardComponent 
        title={'Card Title'}
        subtitle={'Card Subtitle'}
        content={
          'Some filler paragraph that is here for no reason other that to be a filler. So you do not really have to read this, it is pointless. Why are you still reading?'
        }
        buttonText={'Press Me'}
        number={0}
      ></CardComponent>
      <CardComponent 
        title={'Card Title'}
        subtitle={'Card Subtitle'}
        content={
          'Some filler paragraph that is here for no reason other that to be a filler. So you do not really have to read this, it is pointless. Why are you still reading?'
        }
        buttonText={'Press Me'}
        number={12}
      ></CardComponent>
      <CardComponent 
        title={'Card Title'}
        subtitle={'Card Subtitle'}
        content={
          'Some filler paragraph that is here for no reason other that to be a filler. So you do not really have to read this, it is pointless. Why are you still reading?'
        }
        buttonText={'Press Me'}
        number={100}
      ></CardComponent>
    </div>
  );
}

export default App;
