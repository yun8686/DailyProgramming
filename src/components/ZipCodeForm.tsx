import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';

export default function ZipCodeForm() {
  const [zipCode, setZipCode] = useState('');
  const [address, setAddress] = useState('');
  useEffect(() => {
    if (zipCode) {
      fetch(`https://api.zipaddress.net/?zipcode=${zipCode}`, {
        mode: 'cors',
      })
        .then((result) => {
          return result.json();
        })
        .then((result) => {
          setAddress(result.data?.fullAddress || '');
        });
    }
  }, [zipCode]);
  return (
    <>
      <div style={{ padding: 10 }}>
        <TextField
          id="zipcode"
          label="郵便番号"
          variant="outlined"
          placeholder="XXX-XXXX"
          value={zipCode}
          onChange={(e) => {
            setZipCode(e.target.value);
          }}
        />
      </div>
      <div style={{ padding: 10 }}>
        <TextField
          id="address"
          label="住所"
          variant="outlined"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
      </div>
    </>
  );
}
