import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardData({productName,image}) {

  return (
    <div className=''>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{productName}</Card.Title>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardData;
