import { useAtom } from 'jotai';
import { searchHistoryAtom } from '../store.js'; // adjust the path as needed

// Inside your AdvancedSearch component
function AdvancedSearch() {
  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);

  function submitForm(e) {
    e.preventDefault();
    // Your search logic here...
    const queryString = `title=true&q=${searchField}`;
    setSearchHistory(current => [...current, queryString]);
  }

  // Your component return statement here...
  // For example:
  return (
    <form onSubmit={submitForm}>
      {/* Your form fields here... */}
      <button type="submit">Search</button>
    </form>
  );
}

export default AdvancedSearch;
