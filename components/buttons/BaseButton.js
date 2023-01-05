export default function Button({ ...props }) {
  return (
    <>
      <button>{props.text}</button>
      <style jsx>{`
        button {
          background-color: ${props.style === 'solid' ? '' : 'none'};
        }
      `}</style>
    </>
  );
}
