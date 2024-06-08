import { Link } from 'react-router-dom';
import './customlink.css';

export default function CustomLink({ href, name, selected = '' }) {
  return (
    <li className={`CustomLink ${selected}`}>
      <Link to={href}>{name}</Link>
    </li>
  );
}
