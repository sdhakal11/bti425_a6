import { useAtom } from 'jotai';
import { favouritesAtom } from '../store.js';
import { Row, Col, Card } from 'react-bootstrap';
import ArtworkCard from '@/components/ArtworkCard';
import passport from 'passport';

export default function handler(req, res) {
  passport.authenticate('jwt', { session: false }, function(err, user, info) {
    if (err) { return res.status(500).json({ message: err.message }); }
    if (!user) { return res.status(401).json({ message: 'Unauthorized' }); }

    // Handle the request depending on the method
    if (req.method === 'GET') {
      // Handle GET request
    } else if (req.method === 'PUT') {
      // Handle PUT request
    } else if (req.method === 'DELETE') {
      // Handle DELETE request
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  })(req, res);
}

export default function Favourites() {
  const [favouritesList] = useAtom(favouritesAtom);

  if (favouritesList.length === 0) {
    return (
      <Card>
        <Card.Body>
          <Card.Text>
            <h4>Nothing Here</h4>Try adding some new artwork to the list.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Row className="gy-4">
      {favouritesList.map(objectID => (
        <Col lg={3} key={objectID}>
          <ArtworkCard objectID={objectID} />
        </Col>
      ))}
    </Row>
  );
}
