import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import DormButton from '../components/DormButton';
import '../css/ExploreSidebar.css';

export default class ExploreSidebar extends Component {
    render() {
      return (
      <div>
        <div className="filters">
          <div className="SchoolButton">Barnard</div>
          <div className="SchoolButton">Columbia</div>
        </div>
        <div className="dorms">
          <Link to="/carman" style={{ textDecoration: 'none' }}><DormButton school="Columbia" name="Carman Hall" image="https://housing.columbia.edu/files/housing/Carman.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus."/></Link>
          <Link to="/mcbain" style={{ textDecoration: 'none' }}><DormButton school="Columbia"name="McBain Hall" image="https://housing.columbia.edu/files/housing/McBain.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus."/></Link>
          <Link to="/ruggles" style={{ textDecoration: 'none' }}><DormButton school="Barnard" name="Sulzberger Tower" image="https://housing.columbia.edu/files/housing/Ruggles.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus."/></Link>
          <Link to="/ruggles" style={{ textDecoration: 'none' }}><DormButton school="Barnard" name="Sulzberger Tower" image="https://housing.columbia.edu/files/housing/Ruggles.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus."/></Link>
          <Link to="/ruggles" style={{ textDecoration: 'none' }}><DormButton school="Barnard" name="Sulzberger Tower" image="https://housing.columbia.edu/files/housing/Ruggles.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus."/></Link>
          <Link to="/ruggles" style={{ textDecoration: 'none' }}><DormButton school="Barnard" name="Sulzberger Tower" image="https://housing.columbia.edu/files/housing/Ruggles.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus."/></Link>
          <Link to="/ruggles" style={{ textDecoration: 'none' }}><DormButton school="Barnard" name="Sulzberger Tower" image="https://housing.columbia.edu/files/housing/Ruggles.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus."/></Link>
          <Link to="/ruggles" style={{ textDecoration: 'none' }}><DormButton school="Barnard" name="Sulzberger Tower" image="https://housing.columbia.edu/files/housing/Ruggles.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus."/></Link>
          <Link to="/ruggles" style={{ textDecoration: 'none' }}><DormButton school="Barnard" name="Sulzberger Tower" image="https://housing.columbia.edu/files/housing/Ruggles.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus."/></Link>
          <Link to="/ruggles" style={{ textDecoration: 'none' }}><DormButton school="Barnard" name="Sulzberger Tower" image="https://housing.columbia.edu/files/housing/Ruggles.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus."/></Link>
        </div>
      </div>
      );
    }
}
