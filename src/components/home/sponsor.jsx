import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sponsor = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    axios.get('api-homebanner-single')
      .then((response) => {
        setBanners(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
<section className="sponsored1-area">
  <div className="container">
    <div className="row">
        <a href={banners.url}>
          <img
            alt=""
            src={`http://127.0.0.1:8000/public/uploads/slider/${banners.slider}`}
            className="img-fluid" // Use Bootstrap's img-fluid class for responsive images
          />
        </a>

    </div>
  </div>
</section>



  );
};

export default Sponsor;
