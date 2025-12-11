import Profilepic from './assets/profile.png'
function Card(){
    return(<div className="Card">
        <img src={Profilepic} alt="Profile pic" height={50} weight={200} borderradius={10}></img>
        <h2>Ruman Saiyed</h2>
        <p>I make software</p>
    </div>);
}
export default Card