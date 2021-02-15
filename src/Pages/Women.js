import Article from '../Components/Article';
import img from "../images/women.jpg"  

export default function Women(){

    return (
        <div>
            <h1 className="my-5">Women Clothing</h1>
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