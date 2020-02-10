import React from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Card,
  Button,
  Row,
  Col,
  InputGroup,
  FormControl
} from "react-bootstrap";
import ModalMessage from "../modal/Modal";
import "./CardFilm.scss";
import * as action from '../../redux/action/FilmsAction'

const IMAGE_URL = "https://image.tmdb.org/t/p/w185_and_h278_bestv2"

class CardFilm extends React.Component {
  state = {
    show: false,
    searchFilm: "",
    filterListFilms: null,
    idFilm: ""
  };

  onHide = _ => {
    this.setState({ show: false });
  };

  filterFilms = text => {
    const { results } = this.props.films;
    let filmsFilter = [];
    results.map(item => {
      let filter = item.original_title
        .toLowerCase()
        .includes(text.toLowerCase());
      filter && filmsFilter.push(item);
    });
    this.setState({ searchFilm: text, filterListFilms: filmsFilter }); 
  };

  handleChange = attr => {
    let text = attr.target.value === "";
    text
      ? this.setState({ searchFilm: "", filterListFilms: null })
      : this.filterFilms(attr.target.value);
  };

  changeVideo = idFilm => {
    this.props.getVideoFilms(idFilm);
    this.setState({ show: true })
  }

  renderData(data) {
    const { filterListFilms } = this.state
    var result = filterListFilms ? filterListFilms : data
    return (
      result.map((item, key) => (
        <Col key={`div-${key}`} md="3">
          <Card className={"card-content"}>
            <Card.Img
              variant="top"
              src={`${IMAGE_URL}${item.poster_path}`}
            />
            <Card.Body className={"body"}>
              <Card.Title className="mt-3">
                {item.original_title}
              </Card.Title>
              <Card.Text>{item.overview}</Card.Text>
            </Card.Body>
            <Button
              variant="primary"
              onClick={() => this.changeVideo(item.id)}
            >
              Ver detalle
            </Button>
          </Card>
        </Col>
      ))
    )
  }

  render() {
    const { films } = this.props;
    return (
      <>
        <Row className="mt-3 justify-content-md-center">
          <ModalMessage show={this.state.show} onHide={this.onHide} />
          <Col md="6">
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">
                  ¿Cuál película buscas?
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                value={this.state.searchFilm}
                onChange={this.handleChange}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="mt-3">{films && this.renderData(films.results)}</Row>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    videoFilm: state.videoFilm
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...action }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CardFilm);
