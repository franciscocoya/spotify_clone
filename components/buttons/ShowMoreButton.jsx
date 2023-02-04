import variables from '@styles/variables.module.scss';

function ShowMoreButton({ children, ...props }) {
  return (
    <>
      <button onClick={props.action} className="show-more-button">
        {children}
      </button>
      <style jsx>{`
        .show-more-button {
          font-size: 1rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${variables.primaryColor};
          background-color: transparent;
          text-decoration: underline;
        }

        .show-more-button:hover {
          color: ${variables.primaryColorEmphasis};
        }
      `}</style>
    </>
  );
}

export default ShowMoreButton;
