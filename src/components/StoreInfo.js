import React, { Component, Fragment } from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'

import styled from 'styled-components';

export default ({ data }) => (
  <Fragment>
    <Header as='h1'>{data.name}</Header>

  </Fragment>
)
