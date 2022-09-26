import React from 'react';
import { Tabs } from 'antd';
import './style.css';
import { GenerateApplication, ViewApplications } from '../../containers';

const { TabPane } = Tabs;

export default function Applications() {
  return (
    <div className="Applications">
      {/* <PageHeader title="Applications" /> */}
      <Tabs defaultActiveKey="1" onChange={() => {}} type="card" tabPosition="left">
        <TabPane tab="View Applications" key="1">
          <ViewApplications />
        </TabPane>
        <TabPane tab="Generate Application" key="2">
          <GenerateApplication />
        </TabPane>
      </Tabs>
    </div>
  );
}
