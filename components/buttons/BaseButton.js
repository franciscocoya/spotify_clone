import { generateColorShades, getContrastColor } from '@utils/colorUtil';

export default function Button({ ...props }) {
  return (
    <>
      <button type={props.type ?? 'button'}>{props.text}</button>
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
          color: ${props.color ? getContrastColor(props.color) : 'none'};
        }

        button:hover {
          background-color: ${generateColorShades(props.color)};
        }
      `}</style>
    </>
  );
}
