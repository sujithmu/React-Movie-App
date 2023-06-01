import Select from "react-select";
import "./sort.css";

type AppProps = {
    options: any;
    handlerSortChange: any;
  };

function Sort({ options, handlerSortChange }: AppProps) {
    return (
        <div className="sort-container">
            <Select
                className= "sort-input"
                placeholder= "SORT BY..."
                isClearable
                options={options}
                onChange={(e) => handlerSortChange(e)}
            />
        </div>
    );
}

export default Sort;