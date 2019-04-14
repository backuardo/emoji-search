import React from 'react';

const Emoji = (props) => {
  const { title, symbol } = props.emoji;
  return (
    <div key={title} className="emoji-container">
      <div className="emoji" data-clipboard-text={symbol}>
        <span aria-label={`${title} emoji`} role="img">
          {symbol}
        </span>
      </div>
      <span className="emoji-title">
        {title}
      </span>
      <span className="hint">
        Click to copy
      </span>
    </div>
  );
};

export default Emoji;
