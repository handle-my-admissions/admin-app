import { Tabs } from 'antd'
import React from 'react'
import './style.css'
import { GenerateNotice, ViewNotices } from '../../containers'

const { TabPane } = Tabs

export default function Notices (): JSX.Element {
  // just to remount the viewNotice Component , changing in the generateNotice component
  const [tempState, settempState] = React.useState(0)

  return (
    <div className="Notices">
      <Tabs defaultActiveKey="1" onChange={() => { }} type="card" tabPosition="left">
        <TabPane tab="View Notices" key="1">
          <ViewNotices tempState={tempState} settempState={settempState} />
        </TabPane>
        <TabPane tab="Generate Notice" key="2">
          <GenerateNotice tempState={tempState} settempState={settempState} />
        </TabPane>
      </Tabs>
    </div>
  )
}
