/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import './style.css';
import {
  Row, Col, Tag, Typography,
} from 'antd';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import type { DropResult } from 'react-beautiful-dnd';

type selectFieldSectionPropType = {
  Labels: {
    title: string,
    type: string,
    index: number,
    value: string,
  }[],
  title: string,
  GlobalLabels: {
    'Personal Details': {}[],
    'Ed-Level Details': {}[],
    'Education/School Details': {}[],
    'Entrance Exam': {}[],
    'Document Uploads': {}[],
    'Payment Modes': {}[],
  },
  setGlobalLabels: React.Dispatch<React.SetStateAction<any>>,
}

type selectedFieldsStateType = {
  title: string,
  type: string,
  index: number,
  value: string,
}[]
// This will be used By TAG component of antd
const colors = ['cyan', 'blue', 'geekblue', 'purple'];

export default function SelectFieldSection({
  Labels, title, GlobalLabels, setGlobalLabels,
}: selectFieldSectionPropType) {
  // Fields/Label dragged from the pool will be stored in the SelectedFields array
  const [SelectedFields, setSelectedFields] = useState<selectedFieldsStateType|[]>([]);

  // Fields/Label in the pool will be stored in GivenFields
  const [GivenFields, setGivenFields] = useState(Labels);


  const handleOnDragEnd = (result: any) => {
    // if dropped outside the droppable area
    if (!result.destination) return;

    // if dragged and dropped areas are same.
    if (result.destination.droppableId === result.source.droppableId) return;

    // item dragged from Selected's pool to the givenOption's pool
    if (result.destination.droppableId === 'Given_option_1') {
      setGivenFields([...GivenFields, SelectedFields[result.source.index]]);
      const arr = [...SelectedFields];
      arr.splice(result.source.index, 1);
      setSelectedFields(arr);
    }

    // item dragged from givenOption's pool to the selectedOption's pool
    if (result.destination.droppableId === 'selected_option_1') {
      // let arr = [...SelectedFields]
      // arr.splice(result.source.index, 0, GivenFields[result.source.index])
      // setSelectedFields(arr);

      // setting up the LOCAL state for UI
      setSelectedFields([...SelectedFields, GivenFields[result.source.index]]);

      // setting up the global state for Application form/DB
      setGlobalLabels({ ...GlobalLabels, [`${title}`]: [...SelectedFields, GivenFields[result.source.index]] });

      const arr = [...GivenFields];
      arr.splice(result.source.index, 1);
      setGivenFields(arr);
    }
  };

  return (
    <Row>
      <Col span={24}>
        <Typography.Title level={5}>{`${title} : `}</Typography.Title>
      </Col>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Col span={12}>
          <Droppable droppableId="Given_option_1">
            {(provided) => (
              <div className="GenerateApplication_Given_Options" {...provided.droppableProps} ref={provided.innerRef}>
                {GivenFields.map((item, index) => (
                  <Draggable key={item.title} draggableId={item.title} index={index} >
                    {
                      (provided) => (
                        <Tag
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          color={colors[index % colors.length]}
                          key={index}
                        >
                          {item.title}
                        </Tag>
                      )
                    }
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Col>

        <Col span={12}>

          <Droppable droppableId="selected_option_1">
            {(provided) => (
              <div
                className="GenerateApplication_Selected_Options"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {SelectedFields.map((item, index) => (
                  <Draggable key={item.title} draggableId={item.title} index={index}>
                    {
                      (provided) => (
                        <Tag
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          color={colors[index % colors.length]}
                          key={index}
                        >
                          {item.title}
                        </Tag>
                      )
                    }
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}

          </Droppable>
        </Col>
      </DragDropContext>
    </Row>
  );
}
