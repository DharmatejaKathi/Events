// Write your code here
import './index.css'

const EventItem = props => {
  const {itemDetails, setActiveId, isActive} = props
  const {imageUrl, id, name, location} = itemDetails

  const selectedBorderColor = isActive ? 'active-border-color' : 'image'

  const onClickActive = () => {
    setActiveId(id)
  }

  return (
    <li className="item-container">
      <button type="button" className="img-button" onClick={onClickActive}>
        <img className={selectedBorderColor} src={imageUrl} alt="event" />
      </button>

      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
