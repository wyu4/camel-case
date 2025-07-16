import cababasImage from "../assets/Cababas.png";

const CababasEmblem = () => {
    return <img src={cababasImage} className="cababas" draggable={false}></img>
};

CababasEmblem.displayName = "cababas-emblem";

export default CababasEmblem;