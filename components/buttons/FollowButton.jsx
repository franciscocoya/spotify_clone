import variables from '@styles/variables.module.scss';
import { useIntl } from 'react-intl';
function FollowButton({ ...props }) {
  const intl = useIntl();

  return (
    <>
      <button onClick={props.action} role="button">
        {intl.formatMessage({ id: 'components.buttons.follow' })}
      </button>
      <style jsx>{`
        button {
          width: 100%;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          color: ${variables.whiteColor};
          background: transparent;
          border: 1px solid ${variables.whiteColorTransparent};
          border-radius: 5px;
          padding: 8px 20px;
        }

        button:hover {
          border-color: ${variables.whiteColor};
        }
      `}</style>
    </>
  );
}

export default FollowButton;
