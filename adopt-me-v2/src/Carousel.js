import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0
  }

  // by adding state infront of defaultProps, we are making this a class method, not an instance method.
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"]
  }

  handleIndexClick = (event) => {
    this.setState({
      // the + in front of event turns the returned string into a #
      active: +event.target.dataset.index,
    })
  }

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              data-index={index}
              onClick={this.handleIndexClick}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Carousel
