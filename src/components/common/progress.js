
import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
function Progress() {
  
  const percentage = 73
  return (
    <div className="progressBar">
       <ProgressBar now={percentage} />
    </div>
  );
}
export default Progress;