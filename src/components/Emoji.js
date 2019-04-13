import React from 'react';

const Emoji = (props) => {
  const { title, symbol } = props.emoji;
  return (
    <div key={title} className="emoji">
      <span aria-label={`${title} emoji`} role="img">
        {symbol}
      </span>
    </div>
  );
};

export default Emoji;
