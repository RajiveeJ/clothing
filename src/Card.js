import { Card, CardBody, CardSubtitle, CardTitle, Button } from "reactstrap";
export default function CardComponent({
  data,
  addCart,
  removeCart,
  cartCount
}) {
  let { price, image, name } = data;
  return (
    <Card
      style={{
        width: "18rem"
      }}
    >
      <img alt="Sample" src={image} />
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {price}
        </CardSubtitle>
        <Button onClick={addCart}>Add to Cart</Button>
        <Button disabled={cartCount === 0 ? true : false} onClick={removeCart}>
          Remove from Cart
        </Button>
      </CardBody>
    </Card>
  );
}
