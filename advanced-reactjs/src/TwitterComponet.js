import React, { Component } from 'react';

class Twitter extends Component {

    componentDidMount () {
        const { posts } = this.props;
        console.log('componentDidMount', posts);
    }

    componentWillUnmount () {
        console.log('componentWillUnmount: fui removido.');
    }
  render () {

    const posts = [
      {
        title: 'xpto',
        description: 'foo'
      },
      {
        title: 'xpto',
        description: 'foo'
      }
    ]
    return (
      <div>
        teste
      </div>
    )
  }
}

export default Twitter;