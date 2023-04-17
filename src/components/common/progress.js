import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import '../../assets/css/common/progress.css'
function Progress() {

  const percentage = 75;
  return (
    <div className="progressBar">
      <ProgressBar now={percentage} animated/>
    </div>
  );
}
export default Progress;