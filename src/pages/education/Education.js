import React, { Component } from 'react';
import Avatar from 'react-toolbox/lib/avatar/Avatar';
import Me from '../../assets/images/me.jpg';
import './styles.scss';

class Education extends Component {
  render() {
    return (
      <Avatar className="profile" image={Me}/>
    );
  }
}

export default Education;