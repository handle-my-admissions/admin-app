import { Row, Col } from 'antd'
import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { CustomTable, PageHeader } from '../../components'
import './style.css'
import { customTableColumnsData } from './data'
import { UserContext } from '../../contexts/user'

interface viewNoticesPropType {
  tempState: number
  settempState: React.Dispatch<React.SetStateAction<number>>
}

export default function ViewNotices ({ tempState, settempState }: viewNoticesPropType): JSX.Element {
  const [Notices, setNotices] = useState([])
  const { user } = useContext(UserContext)

  const [idToBeDeleted, setidToBeDeleted] = useState('') // const [IsLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (Notices.length >= 1) {
      const doc = document.getElementById('notice_delete_btn') as HTMLDivElement | null
      if (doc != null) doc.focus()
    }

    const config = {
      method: 'get',
      url: 'https://d4z2bizxa5.execute-api.us-east-1.amazonaws.com/s1/notices',
      headers: {
        Authorization: `Bearer ${user.idToken.jwtToken}`
      }
    }

    axios(config)
      .then((response) => {
        const result = JSON.parse(response.data)
        if ((result.ResponseMetadata.HTTPStatusCode).toString() === '200') { setNotices(result.Items) }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [tempState])

  // Onclick Function for Notice Delete
  const deleteNotice = (id: string): void => {
    const data = JSON.stringify({
      id
    })

    const config = {
      method: 'delete',
      url: 'https://d4z2bizxa5.execute-api.us-east-1.amazonaws.com/s1/notices',
      headers: {
        Authorization: `Bearer ${user.idToken.jwtToken}`,
        'Content-Type': 'application/json'
      },
      data
    }

    axios(config)
      // eslint-disable-next-line no-unused-vars
      .then((response) => {
        // after delete behavior
        //! CHECk
        const ResponseData = JSON.parse(data)
        setNotices(ResponseData.Items)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="ViewNotices">
      <PageHeader title="View Notices" />
      <Row>
        {Notices && Notices.length >= 1 && (
          <div style={{ marginBottom: '2em', width: '100%' }}>
            <form onSubmit={(e) => { e.preventDefault(); deleteNotice(idToBeDeleted) }}>
              <input
                style={{
                  width: '80%',
                  marginLeft: '0.9em',
                  outline: 'none',
                  border: 'none',
                  background: 'aliceblue',
                  padding: '0.2em',
                  // boxShadow: '0px 1px 1px black',
                  borderRadius: '2px'
                }}
                type="text"
                placeholder="Enter ID of Notice to be deleted "
                required
                value={idToBeDeleted}
                onChange={(e) => { setidToBeDeleted(e.target.value) }}
              />

              <input
                style={{
                  padding: '0.1em',
                  backgroundColor: 'transparent',
                  borderRadius: '3px',
                  marginLeft: '0.3em',
                  border: '0.5px solid black',
                  cursor: 'pointer'
                }}
                type="submit"
                value="Delete"
                id="notice_delete_btn"
              />
            </form>
          </div>
        )}
      </Row>
      {/* sm={24} md={12} lg={6} xl={6} */}
      <Row gutter={{ xs: 24, sm: 24, md: 12, lg: 6 }}>
        <Col>
          {Notices &&
            (
              <CustomTable
                data={Notices}
                customTableColumnsData={customTableColumnsData}
              />
            )}
        </Col>
      </Row>
    </div>
  )
}
