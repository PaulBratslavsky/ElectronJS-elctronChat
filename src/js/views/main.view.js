import React from 'react'
import Column from '../components/Column'
import Row from '../components/Row'
import ChatListBar from '../components/ChatListBar'
import ChatActiveBar from '../components/ChatActiveBar'
import ChatSelectBar from '../components/ChatSelectBar'

export default function MainView({...props}) {
  return (
    <div id="main-view">
      <Row styles="row no-gutters fh">
        <Column styles="col-3 fh">
          <ChatListBar {...props} />
        </Column>
        <Column styles="col-9 fh">
          <ChatSelectBar />
          {/* <ChatActiveBar /> */}
        </Column>
      </Row>
    </div>
  )
}
