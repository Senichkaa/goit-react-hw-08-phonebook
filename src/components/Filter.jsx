import { changeFilter } from 'redux/contacts/filterSlice';
import { InputList, Label, FilterDivWrap } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
const Filter = () => {
  const dispatch = useDispatch();
  const filterSelector = useSelector(state => state.filter);

  const onChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <FilterDivWrap>
      <Label htmlFor="filter">Find your contacts by name</Label>
      <InputList
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={filterSelector}
        onChange={onChangeFilter}
        placeholder="Find your contact"
      />
    </FilterDivWrap>
  );
};

export { Filter };
