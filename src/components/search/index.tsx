import "./search.css";

type AppProps = {
    searchQuery: any;
    handleSearchChange: any;
  };

function Search({ searchQuery, handleSearchChange }: AppProps) {
    return (
        <div className="search-container">
            <input
                type="text"
                className="search-input"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Type to start searching"
            />
        </div>
    );    
}
export default Search;