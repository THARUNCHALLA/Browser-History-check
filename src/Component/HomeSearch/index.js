import './index.css'

const HomeSearch = props => {
  const {user, deleteUser} = props
  const {title, timeAccessed, domainUrl, logoUrl, id} = user
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="list">
      <div className="listContainer">
        <p className="first">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="img123" />
        <p className="second">{title}</p>
        <p className="third ">{domainUrl}</p>
      </div>
      <button
        data-testid="delete"
        onClick={onDelete}
        type="button"
        className="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HomeSearch
