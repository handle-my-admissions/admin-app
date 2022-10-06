import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import { PageHeader } from '../../components'
import './style.css'

interface detailsOfApplicationPropType {
  detailsData: any
}
export default function DetailsOfApplication ({ detailsData }: detailsOfApplicationPropType): JSX.Element {
  const [Details, setDetails] = useState(detailsData)
  const [ClickedOnEdit, setClickedOnEdit] = useState(true)
  useEffect(() => {
    // effect
    setDetails(detailsData)
  }, [])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
  }

  return (
    <div className="DetailsOfApplication">
      <PageHeader title="Details Of Application" />
      <Row>
        <Col span={24}>
          <form autoComplete="off" onSubmit={onSubmit} id="DetailForm">

            <br />
            {' '}
            <label>Application ID:</label>
            <br />

            <input
              type="text"
              value={Details.ApplicationID}
              onChange={(e) => { }}
              required
              disabled={ClickedOnEdit}
            />

            <br />
            <label>Title</label>
            <br />

            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter Title"
              value={Details.title}
              onChange={(e) => { }}
              required
              disabled={ClickedOnEdit}
            />

            <br />
            <label>Description</label>
            <br />

            <input
              type="text"
              id="description"
              name="description"
              placeholder="Enter Description Here"
              value={Details.description}
              onChange={(e) => { }}
              required
              disabled={ClickedOnEdit}
            />

            <br />
            <label>Branch</label>
            <br />
            <input
              type="text"
              id="Branch"
              name="Branch"
              placeholder="For Branch"
              value={Details.branch}
              onChange={(e) => { }}
              required
              disabled={ClickedOnEdit}
            />

            <br />
            {' '}
            <label>stream</label>
            <br />
            <input
              type="text"
              id="stream"
              name="stream"
              placeholder="For stream"
              value={Details.stream}
              onChange={(e) => { }}
              required
              disabled={ClickedOnEdit}
            />

            <br />
            <label>Fees :</label>
            {' '}
            <br />
            <input
              type="number"
              id="Fees"
              min={0}
              name="Fees"
              placeholder="Registration Fees"
              value={Details.fees}
              onChange={(e) => { }}
              required
              disabled={ClickedOnEdit}
            />

            <div style={{ display: 'flex', alignItems: 'center', marginTop: '1.1em' }}>
              <label htmlFor="DueDate">Last Date to fill form :</label>

              <input
                id="DueDate"
                type="date"
                style={{ marginLeft: '0.5em' }}
                value={Details.lastDate}
                onChange={(e) => { }}
                required
                disabled={ClickedOnEdit}
              />

            </div>

            {!ClickedOnEdit && (
            <div className="Application_btn_container">
              <input type="button" value="Cancel" onClick={() => { setClickedOnEdit(!ClickedOnEdit) }} />
              <input type="submit" value="Save Changes" />
            </div>
            )}
            {ClickedOnEdit && (
            <div className="Application_btn_container">
              <input type="button" value="Edit" onClick={() => { setClickedOnEdit(!ClickedOnEdit) }} />
            </div>
            )}

          </form>
        </Col>

      </Row>
    </div>
  )
}
