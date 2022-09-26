/* eslint-disable react/prop-types */

import React from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { SubCard } from '..';
import './style.css';

/**
 * It's a function that returns a div with a title and a list of subcards
 * @returns A div with a class of ApplicationCard.
 */

type applicationCardPropType={
  title:string,
  subCardData: {title:string,subtitle:string}[]
}

export default function ApplicationCard({ title, subCardData }:applicationCardPropType) {
  return (
    <div className="ApplicationCard">
      <div className="ApplicationCard_inner">
        <div className="ApplicationCard_Title">
          <Link to={`/adm/applications/${subCardData[0].subtitle}`}>
            <Typography.Title level={4}>{title}</Typography.Title>
          </Link>
        </div>
        <div className="ApplicationCard_Details_SubCards_Container">
          {subCardData.map((data) => (
            <SubCard data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
