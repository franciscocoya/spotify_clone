import useUploadTrack from '@/hooks/tracks/useUploadTrack';
import {
  bodyBgDarkColor,
  darkBlackColor,
  darkGrayColor,
  darkMidGrayColor,
  primaryColorCompSeparationTransparent,
  whiteColor,
} from '@/styles/variables.module.scss';
import { useEffect, useRef, useState } from 'react';

export default function AutoCompleteTextInput({ ...props }) {
  const { handleSelectGenre } = useUploadTrack();

  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState({
    activeSuggestion: '',
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: '',
  });

  const inputRef = useRef(null); // input container
  const suggestionModalRef = useRef(null); // suggestions modal container

  const handleInput = (e) => {
    handleFocus(true);

    const value = e.target.value;

    if (
      !value ||
      value === '' ||
      !props.suggestions ||
      props.suggestions.length === 0
    ) {
      setSuggestions({
        showSuggestions: false,
      });
      if (suggestionModalRef) {
        suggestionModalRef.current.style.display = 'none';
      }

      return;
    }

    let suggestionsCopy = props.suggestions.filter((s) =>
      s.match(new RegExp(value, 'gi'))
    );

    setSuggestions({
      userInput: value,
      showSuggestions: suggestionsCopy.length > 0,
      filteredSuggestions: suggestionsCopy,
    });

    if (suggestionsCopy.length > 0 && suggestionModalRef?.current) {
      suggestionModalRef.current.style.height =
        suggestionsCopy.length > 4
          ? '200px'
          : 50 * suggestionsCopy.length + 'px';
      suggestionModalRef.current.style.bottom =
        suggestionsCopy.length > 4
          ? '-205px'
          : -(
              Number(suggestionModalRef.current.style.height.slice(0, -2)) + 5
            ) + 'px';
      suggestionModalRef.current.style.display = 'block';
    }
  };

  // Show or hide gradient border on input
  const handleFocus = (isFocus) => {
    if (!inputRef) {
      return;
    }
    setIsFocused(isFocus);

    isFocus
      ? inputRef?.current?.classList.add('input-container-highlight')
      : inputRef?.current?.classList.remove('input-container-highlight');
  };

  // Handle click on suggestion list item.
  const handleSelectedOption = (e, value) => {
    e.preventDefault();
    if (!value) {
      return;
    }

    setSuggestions({
      activeSuggestion: value,
      showSuggestions: false,
    });

    handleSelectGenre(value);
  };

  // Handle key event
  const handleKeyDown = (e) => {
    // When user press escape(ESC) key then close the suggestion modal
    if (e.keyCode === 27) {
      setSuggestions({
        showSuggestions: false,
      });
    } else if (e.keyCode === 13) {
      // When user press ENTER key then close the modal and choose first suggestion.
      setSuggestions({
        showSuggestions: false,
      });
      e.preventDefault();
    }
  };

  // Show different emojis for user choose.
  const selectMusicGenreEmoji = () => {
    if (suggestions?.activeSuggestion.includes('pop')) {
      return '🎤🎧🎶🎸';
    } else if (suggestions?.activeSuggestion.includes('country')) {
      return '🎶🎸🤠';
    } else if (suggestions?.activeSuggestion.includes('latino')) {
      return '🇲🇽🎶';
    } else if (
      suggestions?.activeSuggestion.includes('classical') ||
      suggestions?.activeSuggestion.includes('opera')
    ) {
      return '🎶🎻🥁';
    } else if (
      suggestions?.activeSuggestion.includes('rock') ||
      suggestions?.activeSuggestion.includes('heavy')
    ) {
      return '🎸🤘';
    } else if (
      suggestions?.activeSuggestion.includes('dance') ||
      suggestions?.activeSuggestion.includes('disco')
    ) {
      return '💃🏼';
    } else if (
      suggestions?.activeSuggestion.includes('electro') ||
      suggestions?.activeSuggestion.includes('tekno') ||
      suggestions?.activeSuggestion.includes('house')
    ) {
      return '💽🎧🎶🎹';
    } else if (
      suggestions?.activeSuggestion.includes('jazz') ||
      suggestions?.activeSuggestion.includes('progressive') ||
      suggestions?.activeSuggestion.includes('swing')
    ) {
      return '🎻🎷🎺♪';
    }
  };

  useEffect(() => {
    if (!suggestionModalRef) {
      return;
    }
    suggestionModalRef.current.style.display = suggestions?.showSuggestions
      ? 'block'
      : 'none';
  }, [suggestions?.showSuggestions]);

  return (
    <>
      <div className="autocomplete-input">
        <label htmlFor={props.name}>{props.label}</label>
        <div className="input-container" ref={inputRef}>
          <input
            autoCapitalize="false"
            autoFocus={props.autoFocus ?? false}
            type="text"
            name={props.name}
            placeholder={props.placeholder}
            required={props.required ?? false}
            onInput={handleInput}
            maxLength={props.maxLength}
            onFocus={(e) => handleFocus(true)}
            onBlur={(e) => handleFocus(false)}
            onKeyDown={handleKeyDown}
            value={suggestions?.activeSuggestion || suggestions?.userInput}
          />
        </div>

        <div
          className="autocomplete-suggestions-modal"
          ref={suggestionModalRef}
        >
          {suggestions?.showSuggestions && (
            <ul>
              {suggestions?.filteredSuggestions.map((suggestion, index) => {
                return (
                  <li
                    key={index}
                    onClick={(e) => handleSelectedOption(e, suggestion)}
                  >
                    {suggestion}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        {suggestions?.filteredSuggestions?.length > 0 && (
          <span className="suggestions-count">
            {suggestions?.filteredSuggestions.length}
          </span>
        )}
        {suggestions?.activeSuggestion && (
          <span className="suggestions-active">{selectMusicGenreEmoji()}</span>
        )}
        {suggestions?.showSuggestions && (
          <span
            className="suggestions-clear"
            onClick={() =>
              setSuggestions({ showSuggestions: false, activeSuggestion: '' })
            }
          >
            clear
          </span>
        )}
      </div>
      <style jsx>{`
        .autocomplete-input{
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
        }

        label {
          color: ${whiteColor}
          margin-bottom: 5px;
        }

        .input-container{
          width: 100%;
        }

        .input-container-highlight{
          width: 100%;
          position: relative;
          color: #FFF;
          background: ${bodyBgDarkColor};
          background-clip: padding-box; 
          border: 2px solid transparent;
          border-radius: 4px;
        }

        .input-container-highlight:before{
          content: '';
          position: absolute;
          top: 0; 
          right: 0; 
          bottom: 0; 
          left: 0;
          z-index: -1;
          margin: -3px;
          border-radius: inherit;
          background: linear-gradient(107deg, #E95F33, #CC18C6, #4698FF, #2565F4);
        }

        input {
          width: 100%;
          font-size: 1rem;
          background: transparent;
          border: none;
          border-radius: 4px;
          padding: 14px;
          box-shadow: inset 0 0 0 1px ${darkGrayColor};
          outline: none;
        }

        input:focus{
          box-shadow: none;
        }

        .autocomplete-suggestions-modal{
          position: absolute;
          width: 100%;
          max-height: 200px;
          background-color: ${darkBlackColor};
          left: 0;
          z-index: 4;
          border-radius: 4px;
          overflow: hidden;
        }

        .autocomplete-suggestions-modal > ul{
          max-height: 200px;
          list-style-type: none;
          padding-left: 0;
          overflow: auto;
        }

        .autocomplete-suggestions-modal > ul > li{
          padding: 10px;
        }

        .autocomplete-suggestions-modal > ul > li:hover{
          background-color: ${darkMidGrayColor};
        }

        .suggestions-count, 
        .suggestions-active, 
        .suggestions-clear{
          height: 30px;
          top: calc(50% - 3px);
          position: absolute;
          padding: 2px 10px;
          border-radius: 5px;
          z-index: 5;
        }

        .suggestions-count{
          right: 10px;
          background-color: ${primaryColorCompSeparationTransparent};
        }

        .suggestions-active{
          right: 0;
          top: calc(50% - 8px);
          background-color: transparent;
          font-size: 1.4rem;
        }

        .suggestions-clear{
          cursor: pointer;
          right: 70px;
          background-color: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(30px);
          font-size: .9rem;
          font-weight: 300;
          letter-spacing: 2px;
          cursor: pointer;
          text-transform: uppercase;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        .suggestions-clear:active{
          transform: scale(.95);
        }
    `}</style>
    </>
  );
}
