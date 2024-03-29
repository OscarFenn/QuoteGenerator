import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';



const QuoteMachine = ({assignNewQuoteIndex, selectedQuote}) =>
(<Card>
  <CardContent>
    <Typography variant="h2" component="h2" align="center">
            Quote Generator
          </Typography>
    <Typography id="text" variant="h5" align="center">
      {selectedQuote.quote}
      -
      <span id="author">{selectedQuote.author}</span>
    </Typography>
  </CardContent>
  <CardActions>
  <Button id="new-quote" size="small" color="primary" onClick={assignNewQuoteIndex}>Next Quote</Button>

    <IconButton id="tweet-quote" target="_blank" href={`https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=GreatQuotes`}>
      <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
    </IconButton>
  </CardActions>
</Card>);

export default QuoteMachine
