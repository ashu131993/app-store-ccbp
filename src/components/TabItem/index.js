// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsObj, changeTab, isActive} = props
  const {displayText, tabId} = tabsObj

  const trackTab = () => {
    changeTab(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ' '

  return (
    <button
      className={`tab-btn ${activeTabClassName}`}
      type="button"
      onClick={trackTab}
    >
      {displayText}
    </button>
  )
}

export default TabItem
