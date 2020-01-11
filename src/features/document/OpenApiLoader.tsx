import { Button, Icon, Upload } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { parseOpenApiFile } from "./document-slice";

export const OpenApiLoader: React.FC = () => {
  const dispatch = useDispatch();

  function beforeUpload(file: File): boolean {
    dispatch(parseOpenApiFile(file));
    return false;
  }
  return (
    <Upload beforeUpload={beforeUpload} showUploadList={false}>
      <Button>
        <Icon type="upload" /> Load OpenApi file
      </Button>
    </Upload>
  );
};