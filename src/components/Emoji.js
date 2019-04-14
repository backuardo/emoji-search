import React from 'react';
import posed from 'react-pose';

const Container = posed.div({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.95 },
});

const Emoji = (props) => {
  const { title, symbol } = props.emoji;
  return (
    <Container key={title} className="emoji-container">
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
    </Container>
  );
};

export default Emoji;
