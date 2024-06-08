import './custombg.css';
import img from '../../assets/pokeball.png';

export default function CustomBG() {
  return (
    <div className="background">
      <span>
        <img src={img} alt="pokeball" />
      </span>
      <span>
        <img src={img} alt="pokeball" />
      </span>
      <span>
        <img src={img} alt="pokeball" />
      </span>
      <span>
        <img src={img} alt="pokeball" />
      </span>
    </div>
  );
}
