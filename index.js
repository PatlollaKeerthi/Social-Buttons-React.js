const Button = props => {
  const {name, buttontext} = props
  return <button className={name}>{buttontext}</button>
}

const element = (
  <div className='bg-container'>
    <h1 className='main-heading'>Social Buttons</h1>
    <div className='d-flex flex-row'>
      <Button name='like-button' buttontext='Like' />
      <Button name='comment-button' buttontext='Comment' />
      <Button name='share-button' buttontext='Share' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
