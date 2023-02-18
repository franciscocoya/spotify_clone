import LoadingIcon from '@/images/three-dots-animated.svg';
import {
  darkBlackColor,
  primaryColor,
  whiteColor,
} from '@styles/variables.module.scss';
import { generateColorShades, getContrastColor } from '@utils/colorUtil';

let textColor = primaryColor;

export default function Button({ ...props }) {
  if (props.style === 'solid') {
    textColor = getContrastColor(props.color);
  } else if (props.style === 'text') {
    textColor = primaryColor;
  } else if (props.style === 'outlined') {
    textColor = props.color;
  }

  const textHoverBackground =
    props.style === 'text' ? 'transparent' : generateColorShades(props.color);

  const textHoverColor =
    props.style === 'text' ? props.color : getContrastColor(props.color);

  return (
    <>
      <button
        type={props.type ?? 'button'}
        onClick={props.action}
        disabled={props.isLoading}
      >
        <div className="button-content">
          {props.isLoading && (
            <LoadingIcon
              width={32}
              height={32}
              fill={darkBlackColor}
              viewBox="0 0 120 30"
            />
          )}
          {props.text}
        </div>
        <div className="button-focus"></div>
      </button>
      <style jsx>{`
        button {
          background-color: ${props.style === 'solid'
            ? props.color
            : 'transparent'};
          padding: 14px 32px;
          border: ${props.style === 'outlined'
            ? '2px solid ' + props.color
            : 0};
          border-radius: ${props.rounded ? '100px' : props.borderRadius};
          color: ${textColor};
          text-transform: uppercase;
          outline: none;
          position: relative;
          cursor: ${props.isLoading ? 'not-allowed' : 'default'};
        }

        button:hover {
          background-color: ${textHoverBackground};
          color: ${textHoverColor};
        }

        .button-focus {
          position: absolute;
          width: calc(100% + 12px);
          height: calc(100% + 12px);
          top: -6px;
          left: -6px;
          border-radius: 100px;
          border: 3px solid ${whiteColor};
          display: none;
          transition: border-color 200ms ease-in 0s;
        }

        button:focus .button-focus {
          display: block;
        }

        .button-content {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }
      `}</style>
    </>
  );
}
