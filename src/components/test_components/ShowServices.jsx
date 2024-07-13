export const ShowServices=({data})=>{
    
function renderDataAsElements(data) {
    // Function to recursively render data
    const renderRecursive = (data) => {
      if (Array.isArray(data)) {
        // If data is an array, map over it and render each item
        return data.map((item, index) => (
          <li key={index}>{renderRecursive(item)}</li>
        ));
      } else if (typeof data === 'object' && data !== null) {
        // If data is an object, render each key-value pair
        return Object.entries(data).map(([key, value], index) => (
          <div key={index}>
            <strong>{key}:</strong> {renderRecursive(value)}
          </div>
        ));
      } else {
        // Base case: data is neither an array nor an object, so just return the data
        return (data?data.toString():"null");
      }
    };
  
    // Wrap the recursive rendering in a fragment or div
    return <>{renderRecursive(data)}</>;
  }
    console.log(data)
    return (
        <div>
        {renderDataAsElements(data)}
      </div>
    )
}