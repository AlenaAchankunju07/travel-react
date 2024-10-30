import React from 'react';
import { Button, Card } from 'react-bootstrap';
import img1 from '../assets/img-1.jpg';
import img2 from '../assets/img-2.jpg';
import img3 from '../assets/img-3.jpg';
import img4 from '../assets/img-4.jpg';
import img5 from '../assets/img-5.jpg';

const PlaceCard = () => {
  return (
    <div className="my-5">
      <div className="text-center">
        <h1 className='fw-bold'>Features</h1>
        <div className="row mt-5 g-4">
          {/* First Row */}
          <div className="col-lg-6 col-md-12 d-flex justify-content-center">
            <Card className="p-2 d-flex flex-column align-items-center" style={{ width: '100%', maxWidth: '40rem' }}>
              <Card.Img height="380px" variant="top" src={img1} />
              <Card.Body className="text-center">
                <Card.Title>Categories Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Explore Categories</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-6 col-md-12 d-flex justify-content-center">
            <Card className="p-2 d-flex flex-column align-items-center" style={{ width: '100%', maxWidth: '40rem' }}>
              <Card.Img height="380px" variant="top" src={img2} />
              <Card.Body className="text-center">
                <Card.Title>Categories Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Explore Categories</Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* Second Row */}
        <div className="row mt-5 g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <Card className="p-2 d-flex flex-column align-items-center" style={{ width: '100%', maxWidth: '20rem' }}>
              <Card.Img height="280px" variant="top" src={img3} />
              <Card.Body className="text-center">
                <Card.Title>Categories Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Explore Categories</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <Card className="p-2 d-flex flex-column align-items-center" style={{ width: '100%', maxWidth: '20rem' }}>
              <Card.Img height="280px" variant="top" src={img4} />
              <Card.Body className="text-center">
                <Card.Title>Categories Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Explore Categories</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <Card className="p-2 d-flex flex-column align-items-center" style={{ width: '100%', maxWidth: '20rem' }}>
              <Card.Img height="280px" variant="top" src={img5} />
              <Card.Body className="text-center">
                <Card.Title>Categories Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Explore Categories</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default PlaceCard;
