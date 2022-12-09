import './index.css'

const ImageItem = props => {
  const {imagesList, getImg} = props
  const {id, thumbnailUrl, imageUrl} = imagesList

  const giveImg = () => {
    getImg(id)
  }

  return (
    <button type="button" className="img-button" onClick={giveImg}>
      <img src={thumbnailUrl} className="img-item" alt="thumbnail" />
    </button>
  )
}
export default ImageItem
