import './index.css'

const ImageItem = props => {
  const {imagesList, getImg} = props
  const {id, thumbnailUrl, imageUrl} = imagesList

  const giveImg = () => {
    getImg(id)
  }

  return (
    <li>
      <button type="button" className="img-button" onClick={giveImg}>
        <li className="li-items">
          <img src={thumbnailUrl} className="img-item" alt="thumbnail" />
        </li>
      </button>
    </li>
  )
}
export default ImageItem
