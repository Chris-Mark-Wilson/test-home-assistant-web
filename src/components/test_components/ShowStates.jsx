

export const ShowStates=({data})=>{

return(
<ol className="data-list">
{data.map((item, index) => {
  const headers = Object.keys(item);
  const values = Object.values(item);
  //   console.log('headers: ',headers);
  //   console.log('values: ',values)
  return (
    <div key={`${index}top`}>
      
      <div key={`${index}header`}><hr />
      <br />State Object: {index}</div>
      <ul className="data-list-item" key={`${index}main`}>
        {headers.map((header, index2) => {
          if (typeof values[index2] == "object") {
          
            return (
              <ol className="sub-data-list-item" key={`${index2}object`}>
                {Object.values(values[index2]).map((value, index3) => {
                  return (
                    <li key={`${index3}key`}>
                      <div>
                        {Object.keys(values[index2])[index3].toUpperCase()}
                        :
                      </div>{" "}
                      <div>{value ? value : "Null"}</div>
                    </li>
                  );
                })}
              </ol>
            );
          } else
            return (
              <li key={`${index2}item`}>
                <div>{header.toUpperCase()}:</div>{" "}
                <div>{values[index2] ? values[index2]:"Null"}</div>
              </li>
            );
        })}
      </ul>
    </div>
  );
})}
</ol>
)
}