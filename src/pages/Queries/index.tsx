import './style.css'
import {
  Layout, Row, Tabs, Col, Typography, Skeleton
} from 'antd'
// import { BrowserRouter } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { QueryCard } from '../../containers'
import { UserContext } from '../../contexts/user'

type querieListStateType = Array<{
  email: string
  queries: any[]
}>

let tabkey = 0
const { TabPane } = Tabs
export default function Queries (): JSX.Element {
  const [QueryList, setQueryList] = useState<querieListStateType>()
  const { user } = useContext(UserContext)
  // eslint-disable-next-line no-unused-vars
  useEffect(() => {
    // TODO : here the data is of specific student , we need all queries. make new lambda /API EP
    const config = {
      method: 'get',
      url: 'https://d4z2bizxa5.execute-api.us-east-1.amazonaws.com/s1/queries/',
      headers: {
        Authorization: `Bearer ${user.idToken.jwtToken}`

      }
    }

    axios(config)
      .then((response) => {
        setQueryList(response.data.body)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className="myquery">
      <Layout>
        <Row>

          <Col span={20}>
            <div className="myquery_TopTitle">
              <Typography.Title level={2}>Queries</Typography.Title>
            </div>
          </Col>

          <Col span={23}>
            <Tabs>
              <TabPane tab="All Queries" key={tabkey++}>
                <Row>
                  <Col span={24}>
                    {
                      QueryList !== undefined
                        ? QueryList.map(
                          ({ email, queries }) => queries?.map(
                            (data, index) => <QueryCard queryCarddata={data} email={email} key={index} />
                          )
                        )
                        : <Skeleton active />
}
                  </Col>
                </Row>
              </TabPane>

              <TabPane tab="Solved" key={tabkey++}>
                <Row>
                  <Col span={24}>
                    {QueryList?.map(
                      ({ email, queries }) => queries?.map(
                        (data, index) => (
                          data.querystatus.status
                            ? (
                                 <QueryCard
                                   queryCarddata={data}
                                   email={email}
                                   key={index}
                                 />
                              )
                            : <></>
                        )
                      )
                    )}
                  </Col>
                </Row>
              </TabPane>

              <TabPane tab="Pending" key={tabkey++}>
                <Row>
                  <Col span={24}>
                    {QueryList?.map(
                      ({ email, queries }) => queries?.map((data) => (!data.querystatus.status
                        ? (
                        <QueryCard
                          queryCarddata={data}
                          email={email}
                        />
                          )
                        : <></>))
                    )}
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Layout>
    </div>
  )
}
