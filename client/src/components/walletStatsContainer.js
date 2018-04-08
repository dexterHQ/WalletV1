import React from 'react'
import { Button } from 'semantic-ui-react'

import ModalLink from './Modal'

import APIS from '../actions/api'

var peerParams = {
  title: "Connect to Peer",
  sub: "Enter a Peer Address",
  body: "this allows us to connect to a peer"
}

var channelParams = {
  title: "Open a Channel",
  sub: "Enter a Channel",
  body: "opening a channel will allow us to transact back and forth. we need an address and an amount."
}


const WalletStatsContainer = (props) => (

<div className="container--body">
  <p>Node Public Key <br/>
    <span className="sub">{props.address}</span>
  </p>
  <p>Node Balance <br/>
    <span className="sub">{props.balance} Satoshis</span>
  </p>
  <p>Peers ({props.peers})<br/>
    <span className="sub">No peers. Connect now!</span><br/>
    <ModalLink {...peerParams} />
  </p>
  <p>Open Channels<br/>
    <span className="sub">No channels. Connect now!</span><br/>
    <ModalLink {...channelParams} />
  </p>

</div>

)

export default WalletStatsContainer
