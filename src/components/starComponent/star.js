import React from 'react'
import StarRatingComponent from 'react-star-rating-component'
 
class Star extends React.Component {
  render() {
    const rating = this.props.stars
 
    return (                
      <div>
        <StarRatingComponent 
          name="rate2" 
          editing={false}
          renderStarIcon={() => <i className="fas fa-star"></i> }
          starCount={5}
          value={rating}
        />
      </div>
    )
  }
}
 
export default Star