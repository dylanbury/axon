import React, {useState, useEffect} from 'react';
import buildPathObject from '../../utils/buildPathObject';
import check from '../../../assets/folder-with-checkmark.png';

// create functional component to return import button and functionality for state change
const FileImport = (props:any) => {

  // function that sets current state when called onChange after imput functionality runs
  const onFileUpload = (e:any) :void => {
    // Attempt to build the PathObject from the Files in State
    buildPathObject(e.target.files)
    // When sucessfully built, update the state with the new pathObject
    .then(pathObject => {
      props.setFileState(pathObject, check)
    })
    // When unsucessfully built, attempt to update the state with the new pathObject
    .catch(pathObject => {
      props.setFileState(pathObject, check)
    })
  }

  return (
    <div id="hiddenImport">
      <input type="file" className="custom-file-input" accept='js/plain' multiple webkitdirectory="" id="fileURL" onChange={onFileUpload} />
    </div>
  )
};

export default FileImport;

