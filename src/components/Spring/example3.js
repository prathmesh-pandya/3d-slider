import React from 'react'
const slides = [
  {
    key: 1,
    content: (
      <Image
        src="https://mcprod.hnak.com/media/mobilesuite/categoryslider/Adidas_-_Web.jpg"
        alt="1"
        width={200}
        height={400}
      />
    ),
  },
  {
    key: 2,
    content: (
      <Image
        src="https://mcprod.hnak.com/media/mobilesuite/categoryslider/Nike_-_Web.jpg"
        alt="2"
        width={200}
        height={400}
      />
    ),
  },
  {
    key: 3,
    content: (
      <Image
        src="https://mcprod.hnak.com/media/mobilesuite/categoryslider/Under_Armour_-_Web3.jpg"
        alt="3"
        width={200}
        height={400}
      />
    ),
  },
  {
    key: 4,
    content: (
      <Image
        src="https://mcprod.hnak.com/media/mobilesuite/categoryslider/Austin_Reed_-_Web3.jpg"
        alt="4"
        width={200}
        height={400}
      />
    ),
  },
];
const Example3 = () => {
  const [index, setIndex] = useState(1);
  
}

export default Example3