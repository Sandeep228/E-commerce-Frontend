import React from 'react';
import { API } from '../config';

const ShowImage = ({ item, url }) => (
  <div className='product-img' style={{height: '250px'}}>
    <img
      // src={`${API}/${url}/photo/${item._id}`}
      src="https://ih1.redbubble.net/image.2930116890.9929/ssrco,classic_tee,mens,fafafa:ca443f4786,front_alt,square_product,600x600.jpg"
      alt={item.name}
      className='mb-3'
      style={{ objectFit: 'contain', height: '100%', width: '100%', display: 'flex', marginLeft: 'auto', marginRight: 'auto' }}
    />
  </div>
);

export default ShowImage;
