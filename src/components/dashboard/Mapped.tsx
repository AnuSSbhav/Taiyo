import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Loader from '../loader';
const Mapped = () => {

    const customIcon = L.icon({
        iconUrl: './location.png', // Replace with your image path
        iconSize: [32, 32], // Adjust the size as needed
        iconAnchor: [16, 32], // Adjust the anchor point
        popupAnchor: [0, -32], // Adjust the popup anchor
      });
    

  const { data, isLoading, isError } = useQuery(['map'], async () => {
    const response = await axios.get(
      'https://disease.sh/v3/covid-19/countries'
    );
    return response.data;
  });

  if (isLoading) {
    return <Loader/>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }
  console.log(data)
  return (
    <div>
        <h2 className="text-2xl capitalize font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight flex text-center justify-center items-center my-2">
       country specific data
      </h2>
      <div className="bg-white mx-2 shadow-md xs:w-full md:w-auto rounded p-2 mb-4">
    <MapContainer center={[0, 0]} zoom={2} className='h-[50vh] w-full' >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {data.map((item:any) => (
      <Marker icon={customIcon} key={item?.country} position={[item.countryInfo?.lat, item.countryInfo.long]}>
        <Popup>
          <div>
            <p className='text-center font-bold'>{item.country}</p>
            <p>Active: {item?.active}</p>
            <p>Cases: {item?.cases}</p>
            <p>Deaths: {item?.deaths}</p>
          </div>
        </Popup>
      </Marker>
    ))}
  </MapContainer>
  </div>
  </div>
  
  )
}

export default Mapped