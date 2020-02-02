import React, {Component} from 'react';
import Tags from './Tags';
import Canvas from './Canvas';
import LocalApi from '../apis/LocalApi'

class ImageAnnotation extends Component{
    state = {
      selectedTag: null
    };

    // update state with the coordinates
    handleNewCoordinate = (coordinates) => {
      const { selectedTag } = this.state;
      const { marks } = this.props;
      if (!selectedTag) {
        console.log("No tag selected.");
        return;
      };
      let newMarks = [...marks];
      // Erase tag and coordinate info so we send only what API requires.
      for (let i in newMarks) {
        const tag_id = newMarks[i].tag_id._id;
        newMarks[i].tag_id = tag_id;
        delete newMarks[i]._id;
        for (let j in newMarks[i].coordinates) {
          delete newMarks[i].coordinates[j]._id;
        }
      }
      let selectedMark = null;
      // Find selected tag in the marks and put its reference to
      // selectedMark.
      for (let i in newMarks) {
        if (newMarks[i].tag_id === selectedTag._id ||
            newMarks[i].tag_id._id === selectedTag._id) {
          selectedMark = newMarks[i];
          break;
        }
      }
      if(selectedMark === null){
        selectedMark = {
          tag_id: selectedTag._id,
          coordinates: []
        };
        newMarks.push(selectedMark);
      }
      selectedMark.coordinates.push(coordinates);
      const path = "annotations/"+ this.props.id + "/marks";
      LocalApi.put(path, {marks: newMarks})
        .then(res => this.props.handleNewMarks(res.data))
        .catch(err => console.log(err));
    };

    render() {
      const data = {
        image: this.props.imageSrc,
        marks: this.props.marks
      };
      console.log("Image URL: " + this.props.imageSrc);
      return(
        <>
        <div>
          <Tags
            handleSelect={(t) => this.setState({selectedTag: t})}
            selectedTag={this.state.selectedTag}
          />
          <Canvas
            marks={this.props.marks}
            handleNewCoordinate={this.handleNewCoordinate}
            imageSrc = {this.props.imageSrc}
          />
        </div>
        <div>
          <h4>Data</h4>
           <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
        </>
      )
    }
}

export default ImageAnnotation;