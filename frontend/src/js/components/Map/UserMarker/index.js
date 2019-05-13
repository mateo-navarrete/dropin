//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from "react";
import { EventMarker } from "../../EventMarker";
import userMarkerIcon from "../../../../assets/user_marker.png";
import { Marker } from "react-google-maps";
import  Spiderfy from "../Spiderfy/Spiderfy"
import { withAuth } from '../../../containers';
import { EventDraft } from '../../EventDraft';
import { LogInForm } from '../../LogIn/LogInForm';
import { Modal } from '../../Modal';



// export const UserMarker = ({ isMarkerShown, ...props }) => {
//   const renderView =
//     isMarkerShown && props.position.lat ? (
//       <EventMarker {...props} isUserMarker />
//     ) : (
//       ''
//     );
//   return <F>{renderView}</F>;
// };

export class UserMarkerComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  // setShowModal = (open, id) => {
  //     this.setState({ showModal: open });
  // };

  render(){
  console.log("user marker!!", this.props)
  const { lat, lng } = this.props.position;
  // const image = {
  //   url: userMarkerIcon,
  //   scaledSize: new google.maps.Size(60, 60)
  //   size: (60, 60)
  // };

  const renderLogin = this.props.user ? (
    <EventDraft handleClose={() => this.props.handleClick(false)} />
  ) : (
    <LogInForm handleClose={() => this.props.handleClick(false)} />
  );

  const renderView =
    this.props.isMarkerShown && this.props.position.lat ? (
      <Marker
        onClick={() => this.props.handleClick(true)}
        position={{ lat: lat, lng: lng }}
        key="UserMarker"
        zIndex={100}
        icon={{
          url: userMarkerIcon,
          scaledSize: new window.google.maps.Size(45, 45)
        }}
        id="UserMarker"
      />
    ) : (
      ""
    );

    let renderModal = (
      <Modal
        showModal={this.props.showModal}
        handleClose={() => this.props.handleClick(false)}
      >
      {renderLogin}
      </Modal>
    );
  return (<F>
  {renderView}
  {renderModal}
  </F>
)
}
}
export const UserMarker = withAuth(UserMarkerComponent);
