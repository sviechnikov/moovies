import React from 'react';
import ReactOnRails from 'react-on-rails';

import Index from '../containers/Index';

const MoviesApp = (props) => (
  <Index {...props} />
);

ReactOnRails.register({ MoviesApp });
