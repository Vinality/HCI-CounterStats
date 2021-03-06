import React from 'react';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import {
  ListContainer, 
  Title,
  MList,
  MListItem,
  MListItemText
} from './styles';

const LatestMatch = ({data}) => {
  return (
    <ListContainer>
      <MList classes={{ root: 'my-root-class' }}>

        <MListItem>
          <MListItemText primary="Score"/>
          <ListItemSecondaryAction>
            <Title>{data.wins}-{data.rounds-data.wins}</Title>
          </ListItemSecondaryAction>
        </MListItem>

        <Divider />

        <MListItem>
          <MListItemText primary="Kills"/>
          <ListItemSecondaryAction>
            <Title>{data.kills}</Title>
          </ListItemSecondaryAction>
        </MListItem>

        <Divider />
      
        <MListItem>
          <MListItemText primary="Deaths"/>
          <ListItemSecondaryAction>
            <Title>{data.deaths}</Title>
          </ListItemSecondaryAction>
        </MListItem>

        <Divider />

        <MListItem>
          <MListItemText primary="MVPs"/>
          <ListItemSecondaryAction>
            <Title>{data.mvps}</Title>
          </ListItemSecondaryAction>
        </MListItem>

        <Divider />

        <MListItem>
          <MListItemText primary="Money Spent"/>
          <ListItemSecondaryAction>
            <Title>{data.money}</Title>
          </ListItemSecondaryAction>
        </MListItem>

      </MList>
    </ListContainer>
  )
};

export default LatestMatch;
