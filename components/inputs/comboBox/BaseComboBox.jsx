import variables from '@styles/variables.module.scss';
import { SlArrowDown } from 'react-icons/sl';
import styles from './BaseComboBox.module.scss';

function BaseComboBox({ ...props }) {
  return (
    <>
      <div className="base-combobox">
        <label htmlFor="">{props.label}</label>
        <div className="combobox__wrapper">
          <select name="" id="">
            <option value="" className="combobox-option">
              adsfasfd
            </option>
            <option value="">adsfasfd</option>
            <option value="">adsfasfd</option>
            <option value="">adsfasfd</option>
            <option value="">adsfasfd</option>
          </select>
          <SlArrowDown size={16} className={styles.selectIcon} />
        </div>
      </div>

      <style jsx>{`
        .base-combobox {
          font-size: 1rem;
          background: transparent;

          overflow: hidden;
        }

        .combobox__wrapper {
          position: relative;
        }

        select {
          width: 100%;
          height: 46px;
          padding: 14px;
          background-color: transparent;
          outline: none;
          border: none;
          appearance: none;
          padding-right: 20px;
          border-radius: 4px;
          box-shadow: inset 0 0 0 1px ${variables.darkGrayColor};
          z-index: 2;
        }

        select::-ms-expand {
          display: none;
        }

        select > .combobox-option {
          padding: 10px 0;
        }
      `}</style>
    </>
  );
}

export default BaseComboBox;
