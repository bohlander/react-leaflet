import React from 'react';

import MapLayer from './MapLayer';

export default class PopupContainer extends MapLayer {
  componentDidMount() {
    super.componentDidMount();
    if(this.props.openPopup) {
      this.leafletElement.openPopup()
    }
  }

  render() {
    const children = this.getClonedChildrenWithMap({
      popupContainer: this.leafletElement
    });
    return <div style={{display: 'none'}}>{children}</div>;
  }
}
