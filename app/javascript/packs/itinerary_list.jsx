import React, {Component} from 'react';

export default class ItineraryList extends Component {
  render() {
    itinerary = this.props.itinerary;
    itinerary.map(itinerary => {
    return (
      <div class="tab-pane" id="{itinerary.id}" role="tabpanel">
          <div class="itinerary-header-container">
            <div class="d-flex justify-content-between align-items-baseline">
              <h2>{itinerary.name}</h2>
              <h3 class="text-primary">{itinerary.date.to_formatted_s(:long)}</h3>
            </div>
          </div>
          <ul class="itinerary-item-append">
            { itinerary.items_by_start_time.map(itinerary_item =>{
              return(              <div class="card card-plain card-blog border-bottom">
              <div class="row">
                { if itinerary_item.attraction_id }
                  <div class="col-md-5">
                    <div class="card-image itinerary-image">
                      { image_tag image_path(itinerary_item.attraction.image, alt: itinerary_item.attraction.name, class: "img img-raised rounded") }
                    </div>
                  </div>
              <div class="col-md-7">
                <h6 class="category text-info"><i class="far fa-clock"></i> { itinerary_item.start_time.strftime("%I:%M%p") } - { itinerary_item.end_time.strftime("%I:%M%p") }
                </h6>
                  <h3 class="card-title">
                    <a href="#pablo">{= itinerary_item.attraction.name }</a>
                  </h3>
                  <p class="card-description">
                    { itinerary_item.attraction.description }
                  </p>
              </div>)
            } else {}
                    <div class="col-md-7">
                      <h6 class="category text-info"><i class="far fa-clock"></i> { itinerary_item.start_time.strftime("%I:%M%p") } - { itinerary_item.end_time.strftime("%I:%M%p") }
                      </h6>
                      <h3 class="card-title">
                        <a href="#pablo">{ itinerary_item.name }</a>
                      </h3>
                      <p class="card-description">
                        { itinerary_item.notes }
                      </p>
                    </div>
                  { end }
                </div>
              </div>
            { end }
          </ul>
        </div>
      { end }
      }
        
    )
  }
}