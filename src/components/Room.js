import React, {Component} from "react";
import webrtc from '../helpers/webrtc'

class Room extends Component {

    componentDidMount() {
        const room_id = this.props.match.params.id;
        this.setState({room_id: room_id})
        webrtc.loadSimpleWebRTC(room_id);
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Room</h1>
                <div id="remotes" className="row">
                    <div className="col-md-6">
                        <div className="videoContainer">
                            <video id="selfVideo" onContextMenu={()=> false}></video>
                            <meter id="localVolume" className="volume" min="-45" max="-20" high="-25" low="-40"></meter>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Room;
