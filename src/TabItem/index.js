import './index.css'

const TabItem = props => {
  const {tabsList, getId, isActive} = props
  const {displayText, tabId} = tabsList
  const giveId = () => {
    getId(tabId)
  }

  return (
    <button
      type="button"
      className={isActive === tabId ? 'tabi-button underline' : 'tabi-button'}
      onClick={giveId}
    >
      {displayText}
    </button>
  )
}

export default TabItem
