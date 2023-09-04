import styled from "styled-components";

const row1 = [
    "https://i.ibb.co/vJchHzJ/logo-1.png",
    "https://i.ibb.co/BGWD1Vv/logo-2.png",
    "https://i.ibb.co/mRhS4Ds/logo-3.png",
    "https://i.ibb.co/qmwxvD3/logo-4.png",
    "https://i.ibb.co/t4NK2CR/logo-5.png",
    "https://i.ibb.co/C9s42C1/logo-6.png",
    "https://i.ibb.co/dr0gwFS/logo-7.png",
    "https://i.ibb.co/fGNq6Tv/logo-8.png",
    "https://i.ibb.co/XzNKXGG/logo-9.png",
    "https://i.ibb.co/9466YLp/logo-10.png"
];

const MarqueeElement = () => {
    return (
        <MarqueeGroup>
            {row1.map((el, idx) => (
                <ImageGroup key={idx}>
                    <Image src={el} />
                </ImageGroup>
            ))}
        </MarqueeGroup>
    );
};

export default MarqueeElement;

const MarqueeGroup = styled.div`
flex-shrink: 0;
display: flex;
align-items: center;
justify-content: space-between;
white-space: nowrap;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
`;

const Image = styled.img`
  object-fit: contain;
  background: #f1f5f9;
  width: 70%;
  height: 70%;
  border-radius: 0.5rem;
  padding: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;