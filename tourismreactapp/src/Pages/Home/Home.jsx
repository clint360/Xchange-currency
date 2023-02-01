import React from 'react';
import DisplayCarousell from './DisplayCarousell';
import Navigator from './Navigator';
import SearchBar from '../Home/SearchBar/SearchBar';
import Card from './Cards/Card';
import Header from '../../Components/Header/Header';
import Logos from './Logos/Logos';
import Profiles from './Profiles/Profiles';
import Slider from './Slider/Slider';

export default function Home() {
  return (
    <div>
      <div className='intro'>
      <DisplayCarousell/>
      <div className="description">
      <h1>Experience the beauty of Rwanda with us</h1>
      <p>Discover the Land of a Thousand Hills</p>
      <Navigator/>
      </div>
      <SearchBar/>
      <Header
        title="Choose your Package"
        subtitle="Select your Best Package for your Travel"
      />
      <Card />
      <Header
        title="Popular Destinations"
        subtitle="Select Our Best Popular Destinations"
      />
      <Slider />
      <Header title="Why us?" subtitle="Why Travel with Africa wizzy Safari" />
      <Logos />
      <Header
        title="Our Traveller Say"
        subtitle="What our clients say about us"
      />
      <Profiles />
    </div>
    </div>
  )
}
