import {useEffect, useState} from "react";
import {getApi} from "../helpers/ConsumeApi.js";
import ImageItem from "./ImageItem.jsx";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 90%;
  margin: 0 auto;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (min-width: 1280px) {
    width: 1280px;
    grid-template-columns: repeat(5, 1fr);
  }
`;
const PintadoImg = ({valor}) => {
    const [infoApi, setInfoApi] = useState([]);

    useEffect(() => {
        getApi(valor).then((value) => {
            setInfoApi(value.hits);
            console.log(valor)
            console.log(value);
        });
    }, [valor]);

    return (
        <GridContainer className='grid'>
            {infoApi.map((img) => (
                <ImageItem key={img.id} {...img}/>
            ))}
        </GridContainer>
    );
}

export default PintadoImg;