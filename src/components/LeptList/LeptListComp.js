import React from 'react';

export default function LeptListComp({ lept }) {
  return (
    <div>
      <img src={lept.taxon.default_photo.square_url} />
    </div>
  );
}
