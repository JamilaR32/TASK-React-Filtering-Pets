import { useState } from "react";

function PetItem({ pet }) {
  const [image, setImage] = useState(pet.image);
  const changeImage = () => {
    setImage(pet.image2);
  };

  const returnSameImage = () => {
    setImage(pet.image);
  };
  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={image} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button onClick={changeImage} type="button" className="btn btn-info">
            Pet
          </button>
          <button
            onClick={returnSameImage}
            type="button"
            className="btn btn-info"
          >
            un Pet
          </button>
          <button type="button" class="btn btn-info  m-2">
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
