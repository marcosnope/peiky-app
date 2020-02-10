import React from "react";
import { Container, ButtonGroup, Button } from "react-bootstrap";
import CardFilm from "./cardFilm/CardFilm";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as action from '../redux/action/FilmsAction'
import './Home.scss'

class Home extends React.Component {
  state = {
    viewComponent: 1,
    title: 'PELÍCULAS POPULARES'
  };

  componentDidMount() {
    this.props.getPopularFilms()
    this.props.getTopRatedFilms()
    this.props.getUpcomingFilms()
  }

  renderComponentFilms() {
    const { viewComponent } = this.state;
    const { popularFilms, topRatedFilms, upcomingFilms } = this.props
    switch (viewComponent) {
      case 2:
        return topRatedFilms && <CardFilm films={topRatedFilms} />;
      case 3:
        return upcomingFilms && <CardFilm films={upcomingFilms} />;
      default:
        return popularFilms && <CardFilm films={popularFilms} />;
    }
  }

  render() {
    const { title }= this.state
    return (
      <Container className="mt-5 container">
        <h2>{title}</h2>
        <ButtonGroup aria-label="Basic example" className={'m-2'}>
          <Button
            variant="secondary"
            onClick={() => this.setState({ viewComponent: 1, title: 'PELÍCULAS POPULARES' })}
          >
            Populares
          </Button>
          <Button
            variant="secondary"
            onClick={() => this.setState({ viewComponent: 2, title: 'LAS PELÍCULAS MÁS VALORADAS'  })}
          >
            Las más valoradas
          </Button>
          <Button
            variant="secondary"
            onClick={() => this.setState({ viewComponent: 3 , title: 'PRÓXIMOS ESTRENOS' })}
          >
            Próximos estrenos
          </Button>
        </ButtonGroup>
        {this.renderComponentFilms()}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    popularFilms: state.popular,
    topRatedFilms: state.topRated,
    upcomingFilms: state.upcoming
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...action }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
