import React from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import VideoPlayer from "../videoPlayer/VideoPlayer";

class ModalMessage extends React.Component {
  renderBody() {
    const { videoFilm } = this.props;
    if (videoFilm.results.length) {
      let keyVideo = videoFilm.results[0].key;
      return <VideoPlayer keyVideo={keyVideo} />;
    } else {
      return <p>¡Trailer proximamente!</p>;
    }
  }

  render() {
    const { show, onHide, videoFilm } = this.props;
    if (!videoFilm) return null;
    return (
      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Trailer</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ margin: "0 auto" }}>
          {this.renderBody()}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => onHide()}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    videoFilm: state.videoFilm
  };
}

export default connect(mapStateToProps)(ModalMessage);
