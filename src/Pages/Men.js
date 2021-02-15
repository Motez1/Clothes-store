import Article from '../Components/Article';
import img from "../images/male-models-noah.jpg"  

export default function Men(){

    return (
        <div>
            <h1 className="my-5">Men Clothing</h1>
            <div className="clothes">
                <Article name="first clothing" source={img} 
                        description="Latest fashion clothes" />
                <Article name="first clothing" source={img} 
                        description="Latest fashion clothes" />
                <Article name="first clothing" source={img} 
                        description="Latest fashion clothes" />
            </div>
        </div>
    );
}