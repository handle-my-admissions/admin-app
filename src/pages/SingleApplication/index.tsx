import { Col, Row, Tabs } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import './style.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { DetailsOfApplication, ViewSubmittedApplications } from '../../containers';
import { UserContext } from '../../contexts/user';

const { TabPane } = Tabs;

export default function SingleApplication() {
  const { user } = useContext(UserContext);
  const [SingleApplicationData, setSingleApplicationData] = useState<{}>();

  const location = useLocation();

  // fetching the APPLICATION-ID from URL
  let temp = location.pathname.split('/');

  useEffect(() => {
    // effect
    const data = JSON.stringify({
      ApplicationID: temp[temp.length - 1],
    });

    const config = {
      method: 'put',
      url: 'https://d4z2bizxa5.execute-api.us-east-1.amazonaws.com/s1/applications',
      headers: {
        Authorization: `Bearer ${user.idToken.jwtToken}`,
        'Content-Type': 'application/json',
      },
      data,
    };

    axios(config)
      .then((response) => {
        // eslint-disable-next-line eqeqeq
        if (response.data.status == 200) {
          temp = response.data.response;
          setSingleApplicationData(response.data.response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="SingleApplication">
      <Row>
        <Col span={24}>
          <Tabs defaultActiveKey="1" onChange={() => { }} type="card" tabPosition="top">
            <TabPane tab="Details" key="1">
              {
                SingleApplicationData
                && <DetailsOfApplication detailsData={SingleApplicationData} />
              }
            </TabPane>

            <TabPane tab="Submitted Application" key="2">
              <ViewSubmittedApplications />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
}
