import React from 'react'
import Title from './Title'
import SubTitle from './SubTitle'
import SubTitleWithIcon from './SubTitleWithIcon'
import Description from './Description'
import {Row, Col} from 'react-bootstrap'
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function MovieInfo(props){
  const style = {
    paddingLeft: '15px'
  };
  


    return(
      <div style={style}>
        <Row>
          <Title title={props.movie.title} />
        </Row>
        <Row className="d-flex justify-content-between">
          <Col xs={4}>
          <FontAwesomeIcon icon={faStar} />{props.movie.vote_average}
            {/* <SubTitleWithIcon icon={'star'} title= /> */}
          </Col>
          <Col xs={4}>
          <FontAwesomeIcon icon={faHeart} /> {props.movie.vote_count} 
            {/* <SubTitleWithIcon  icon={'heart'} title=/> */}
          </Col>
          <Col xs={4}>
            <SubTitle title={props.movie.release_date.substring(0,4)} />
          </Col>
        </Row>
        <Row>
          <Description category={'Overview'} description={props.movie.overview} />
        </Row>
      </div>
    );
}
