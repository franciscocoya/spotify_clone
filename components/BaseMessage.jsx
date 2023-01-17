import variables from '@styles/variables.module.scss';

const msgTypes = {
  success: variables.primaryColor,
  error: variables.errorColor,
  warning: variables.warningColor,
};

function BaseMessage({ ...props }) {
  return (
    <>
      <div className="msg-container">
        <p>{props.content}</p>
      </div>
      <style jsx>
        {`
          .msg-container {
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 10px 0;
            background-color: ${msgTypes[props.type ?? 'error']};
            margin: 10px 0;
          }

          msg > p {
            text-align: center;
          }
        `}
      </style>
    </>
  );
}

export default BaseMessage;
