import React from "react";
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CCardLink,
  CLink
} from "@coreui/react";

function PostDetail(props){

  return (
    <CCard style={{ width: "30rem", overflow: "scroll" }}>
      <CCardImage orientation="top" src={props.detailData.img} />
      <CCardBody>
        <CCardTitle>{}</CCardTitle>
        <CCardText>
          {props.detailData.content}
        </CCardText>
      </CCardBody>
      <CListGroup flush>
        <CListGroupItem>Post id: {props.detailData.id}</CListGroupItem>
        <CListGroupItem>Post at: {props.detailData.postAt}</CListGroupItem>
        <CListGroupItem>Update at: {props.detailData.updateAt}</CListGroupItem>
        <CListGroupItem>Post by: {props.detailData.poster}</CListGroupItem>
        <CListGroupItem>Post by id: {props.detailData.posterId}</CListGroupItem>
      </CListGroup>
      <CCardBody>
        <CLink
              href={props.detailData.img}
              target="_blank"
            >
              Here image link
          </CLink>
      </CCardBody>
    </CCard>
  );

}

export default PostDetail;