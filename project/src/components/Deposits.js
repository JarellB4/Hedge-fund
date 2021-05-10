import * as React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Job Images </Title>
      <br>
      
      </br>
       <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Upload Images Here
        </Link>
      </div>
    </React.Fragment>
  );
}
