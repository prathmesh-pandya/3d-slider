const transformFromSwitchCase = (direction) => {
  switch (direction) {
    case 'left':
      return `translateY(-50%) translateX(-25%)  scale(0.5) perspective(1000px) rotateY(-35deg)`;
    case 'right':
      return `translateY(-50%) translateX(-75%)  scale(0.5) perspective(1000px) rotateY(35deg)`;
    default:
      return `translateY(-50%) translateX(-50%)  scale(1) `;
  }
};

const transformToSwitchCase = (direction) => {
  switch (direction) {
    case 'right':
      return {
        transform: `translateY(-50%) translateX(-50%) scale(1)`,
        left: '50%',
      };
    case 'center':
      return {
        transform: `translateY(-50%) translateX(-25%)  scale(0.5) perspective(1000px) rotateY(-35deg)`,
        left: '-50%',
      };

    default:
      return {
        transform: `translateY(-50%) translateY(-50%)  scale(1) `,
        left: '0%',
      };
  }
};
