import './Article.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

function Article(props){
    const {source , name , description} = props
    return (
        <div className="article-container">
            <img className='photo' src={source} alt = "clothing"  />
            <h2>{name}</h2>
            <p>{description}</p>
            <Button variant="primary">Buy now</Button>{' '}
        </div>
    )
}

export default Article