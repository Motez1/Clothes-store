import CarrouselElement from '../Components/CarouselElement';
import Article from '../Components/Article';
import img from "../images/male-models-noah.jpg"  

export default function Home() {

    return (
        <div>
            <CarrouselElement />
            <div className="clothes">
                <Article name="first clothing" source={img} 
                        description="Latest fashion clothes" />
                <Article name="first clothing" source={img} 
                        description="Latest fashion clothes" />
                <Article name="first clothing" source={img} 
                        description="Latest fashion clothes" />
            </div>
        </div>
        
        
        
    )
}