export default function Button({ ...props }) {
  return <button onClick={console.log('click')}>{props.text}</button>;
}
