import "./styles.css";

export default function App() {
  return <Greeting name='Mahmoud'/>;
}

function Greeting({name}) {
  return (
    <h1>hello { name }</h1>
  )
}