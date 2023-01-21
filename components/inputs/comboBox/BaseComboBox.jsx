import {
  bodyBgDarkColor,
  darkGrayColor,
  whiteColor,
} from '@styles/variables.module.scss';
import { useEffect, useRef, useState } from 'react';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import styles from './BaseComboBox.module.scss';

function BaseComboBox({ ...props }) {
  const [isSelected, setIsSelected] = useState(false);
  const [loadingData, setLoadingData] = useState(false);

  const selectRef = useRef(null);

  const groupData = () => {
    let result = '';
    if (!props.options || typeof document === 'undefined') {
      return;
    }
    setLoadingData(true);
    let globalGenres = Object.entries(props.options);
    globalGenres.forEach((baseGenre) => {
      const [key, value] = baseGenre;
      let optgroup = document.createElement('optgroup');
      optgroup.label = key;
      optgroup.style = {
        fontSize: '1rem',
      };

      value.forEach((genre) => {
        let genreOpt = document.createElement('option');
        genreOpt.value = genre;
        genreOpt.innerText = genre;
        genreOpt.className = 'genre-opt';

        optgroup.appendChild(genreOpt);
      });

      selectRef.current.appendChild(optgroup);
      setLoadingData(false);
    });
  };

  const handleChange = (e) => {
    setIsSelected(!isSelected);
  };

  useEffect(() => {
    const load = () => {
      if (!props.isGrouped) {
        return;
      }
      groupData();
    };
    load();
  }, [props?.options]);

  return (
    <>
      {loadingData ? (
        <p>Loading...</p>
      ) : (
        <div className="base-combobox">
          <label htmlFor={props.name}>{props.label}</label>
          <div className="combobox__wrapper">
            <select
              name={props.name}
              id=""
              ref={selectRef}
              onSelect={handleChange}
              onClick={handleChange}
              onChange={props.handleSelect}
            >
              <option value={props.placeholder} defaultChecked>
                {props.placeholder}
              </option>
            </select>
            {isSelected ? (
              <SlArrowUp size={16} className={styles.selectIcon} />
            ) : (
              <SlArrowDown size={16} className={styles.selectIcon} />
            )}
          </div>
        </div>
      )}

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
          background-color: ${bodyBgDarkColor};
          outline: none;
          font-size: 1rem;
          font-weight: 300;
          color: ${whiteColor};
          border: none;
          appearance: none;
          padding-right: 20px;
          border-radius: 4px;
          box-shadow: inset 0 0 0 1px ${darkGrayColor};
          z-index: 2;
        }

        select::-ms-expand {
          display: none;
        }

        .genre-opt {
          padding: 10px 0;
        }
      `}</style>
    </>
  );
}

export default BaseComboBox;
