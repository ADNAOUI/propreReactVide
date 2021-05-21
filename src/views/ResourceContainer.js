//----- MODULES -----//
import React, { Component } from 'react';

//----- COMPOSANTS -----//
import MediaContent from '../ClassComponents/MediaContent';
import ResourceInfo from '../ClassComponents/ResourceInfo.js';
import ResourceIconBar from '../ClassComponents/ResourceIconBar.js';
import ShareModal from '../ClassComponents/ShareModal.js';
import CommentsContainer from '../ClassComponents/CommentsContainer.js';

//----- STYLES -----//
import '../assets/css/view/ResourceContainer.css';

class ResourceContainer extends Component {
  render() {
    return (
      <div className="perimetreResourceContainer">
        <div className="ligne">
          <input
            className="backButton"
            type="button"
            value="retour"
            onClick={History}
          />
        </div>

        <div className="ligne">
          <MediaContent />
          <ResourceInfo />
        </div>
        <div className="ligne">
          <ResourceIconBar />

        </div>
        <div className="ligne">
          <CommentsContainer />
        </div>
        <div>
        <ShareModal />
        </div>


      </div>
    );
  }
}

export default ResourceContainer;