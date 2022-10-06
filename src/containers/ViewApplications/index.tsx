/* eslint-disable react/no-array-index-key */
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Row, Col, Spin } from 'antd'
import { ApplicationCard, PageHeader } from '../../components'
import { UserContext } from '../../contexts/user'

export default function ViewApplication (): JSX.Element {
  const [Details, setDetails] = useState<any[]>([])
  const { user } = useContext(UserContext)

  useEffect(() => {
    // effect
    const config = {
      method: 'get',
      url: `${process.env.REACT_APP_API_GATEWAY_BASE_URL}/applications`,
      headers: {
        Authorization: `Bearer ${user.idToken.jwtToken}`
      }
    }

    axios(config)
      .then((response) => {
        setDetails(response.data.Items)
      })
      .catch()
  }, [])

  return (
    <div className="ViewApplication">
      <PageHeader title="View Applications" />
      <Row>
        <Col span={24}>
          {Details.length === 0
            ? (
            <Spin />
              )
            : (
                Details.length !== 0 &&
            Details.map((item, index) => (
              <ApplicationCard
                key={index}
                title={item.title}
                subCardData={[
                  { title: 'Application ID', subtitle: item.ApplicationID },
                  { title: 'Branch', subtitle: item.branch },
                  { title: 'stream', subtitle: item.stream },
                  { title: 'Fees', subtitle: item.fees },
                  { title: 'Last Date', subtitle: item.lastDate }
                ]}
              />
            ))
              )}
        </Col>
      </Row>
    </div>
  )
}
