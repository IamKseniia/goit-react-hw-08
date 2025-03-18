import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter, setNameFilter } from '../../redux/filtersSlice';
import s from './SearchBox.module.css';

const SearchBox = () => {
  const filters = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.searchBox}>
      <label>
        Find contacts by name
        <input
          name="search"
          className={s.input}
          type="text"
          value={filters}
          onChange={event => {
            dispatch(setNameFilter(event.target.value));
          }}
        />
      </label>
    </div>
  );
};

export default SearchBox;
