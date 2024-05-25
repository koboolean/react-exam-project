import propTypes from "prop-types";

CoreConcept.propTypes = {
    image:propTypes.string,
    title:propTypes.string,
    description:propTypes.string
}
export default function CoreConcept({image, title, description}){
    return(
        <li>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}