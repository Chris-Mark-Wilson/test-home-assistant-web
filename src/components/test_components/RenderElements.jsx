export const RenderElements=({data})=>{
    
function renderDataAsElements(data) {
    // Function to recursively render data
    const renderRecursive = (data) => {
      if (Array.isArray(data)) {
        // If data is an array, map over it and render each item
        return data.map((item, index) => (
          <div key={index}>{renderRecursive(item)}</div>
        ));
      } else if (typeof data === 'object' && data !== null) {
        // If data is an object, render each key-value pair
        return Object.entries(data).map(([key, value], index) => (
          <div key={index}> 
          {(key==='entity_id' || key==='domain') && < div ><hr/><br/></div>}
          <div>
            <strong>{key}:</strong> {renderRecursive(value)}
          </div>
          </div>
        ));
      } else {
        // Base case: data is neither an array nor an object, so just return the data
        return (data?data.toString():"null");
      }
    };
  
    // Wrap the recursive rendering in a fragment or div
    return <><hr/>{renderRecursive(data)}</>;
  }
    // console.log(data)
    return (
        <div className="data-list">
        {renderDataAsElements(data)}
      </div>
    )
}