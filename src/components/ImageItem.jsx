import styled from "styled-components";

const ImageContainer = styled.div`
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
  padding-bottom: 2rem;

  > div:nth-child(1) {
    width: 100%;
    aspect-ratio: 1/1;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      vertical-align: bottom;
    }
  }

  > div:nth-child(2) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2rem 2rem 0;
    row-gap: .5rem;
    
    .label {
      display: flex;
      gap: .2rem;
      color: #A0AB9D;
      font-weight: 700;
    }
    
    .value {
      color: #294E5C;
      font-weight: 600;
      justify-self: right;
    }

    a {
      margin-top: 1rem;
      grid-column: 1/-1;
      padding: 1rem 0;
      background-color: #67A8A1;
      border: none;
      border-radius: .2rem;
      color: #E6EFF0;
      cursor: pointer;
      transition: background-color .3s ease-in;
      font-weight: 700;
      text-decoration: none;
      text-align: center;

      &:hover {
        background-color: #294E5C;
      }
    }
  }
`;
const ImageItem = ({webformatURL, likes, comments, downloads, views, largeImageURL}) => {
    return (
        <ImageContainer>
            <div>
                <img src={webformatURL} alt=""/>
            </div>
            <div>
                <p className='label'><i className="fa-solid fa-download"></i>Downloads:</p>
                <p className='value'>{downloads}</p>
                <p className='label'><i className="fa-solid fa-thumbs-up"></i>Likes:</p>
                <p className='value'>{likes}</p>
                <p className='label'><i className="fa-solid fa-comment"></i>Comments:</p>
                <p className='value'>{comments}</p>
                <p className='label'><i className="fa-solid fa-eye"></i>Views:</p>
                <p className='value'>{views}</p>
                <a href={largeImageURL} target='_blank'>Show Image</a>
            </div>
        </ImageContainer>
    );
}

export default ImageItem;