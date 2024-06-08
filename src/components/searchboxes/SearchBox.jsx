import { useState } from 'react';
import './searchbox.css';

export default function SearchBox(props) {
  const [used, setUsed] = useState('unused');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('name');

  function handleSubmit(event) {
    setUsed('used');
    event.preventDefault();
    props.onClick(searchType, searchTerm);
  }

  return (
    <form className={`SearchForm ${used}`} onSubmit={handleSubmit}>
      <input
        onChange={(event) => setSearchTerm(event.target.value)}
        className="form-field"
        placeholder="query"
        name="query"
        value={searchTerm}
      />
      <select
        onChange={(event) => setSearchType(event.target.value)}
        className="form-field"
        name="search-type"
        id="search-type"
        value={searchType}
      >
        <option value="name">By Name</option>
        <option value="type">By Type</option>
      </select>
      <button type="submit">Find Pokemon!</button>
    </form>
  );
}
