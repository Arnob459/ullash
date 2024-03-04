import React, { Component } from 'react'
import Best from './home/best';
import Category from './home/category';
import Banner from './home/banner';
import Sponsor from './home/sponsor';
import Featured from './home/featured';
import Tranding from './home/tranding';
import Catwise from './home/catwise';



export class home extends Component {
  render() {
    return (
      <div>
        <Category />
        <Banner />
        <Best />
        <Sponsor />
        <Featured />
        <Catwise />
        <Tranding />


      </div>
    )
  }
}

export default home