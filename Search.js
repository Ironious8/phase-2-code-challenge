import React from "react";

function Search({searchFn}) {


  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={searchFn}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
