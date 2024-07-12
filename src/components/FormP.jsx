import React from "react";
import { Alert, Form, Input } from "antd";

const FormP = () => {
  return (
    <Form
      name="trigger"
      style={{
        maxWidth: 600,
        maxHeight: 600,
      }}
      layout="vertical"
      autoComplete="off"
      className="text-[#90A3BF]  font-[600] text-[16px]"
    >
      <div className="flex gap-[58px]">

      <div>
        <Form.Item
          hasFeedback
          label="Name"
          name="Name"
          validateDebounce={1000}
          className="w-[360px]"
          rules={[
            {
              max: 8,
            },
          ]}
          >
          <Input placeholder="Name" className="h-12 bg-[#F6F7F9] border-none text-[#90A3BF]" />
        </Form.Item>

        <Form.Item
          hasFeedback
          label="Address"
          name="Address"
          validateDebounce={1000}
          className="w-[360px] text-[#90A3BF]"
          rules={[
            {
              max: 8,
            },
          ]}
          >
          <Input placeholder="Address" className="h-12 bg-[#F6F7F9] border-none text-[#90A3BF]" />
        </Form.Item>
      </div>
      <div>
        <Form.Item
          hasFeedback
          label="Phone Number"
          name="Phone Number"
          validateDebounce={1000}
          className="w-[360px] text-[#90A3BF]"
          rules={[
            {
              max: 8,
            },
          ]}
          >
          <Input placeholder="Phone Number" className="h-12 bg-[#F6F7F9] border-none text-[#90A3BF]" />
        </Form.Item>

        <Form.Item
          hasFeedback
          label="Town/City"
          name="Town/City"
          validateDebounce={1000}
          className="w-[360px] text-[#90A3BF]"
          rules={[
            {
              max: 8,
            },
          ]}
          >
          <Input placeholder="Town or City" className="h-12 bg-[#F6F7F9] border-none text-[#90A3BF]" />
        </Form.Item>
      </div>
          </div>
    </Form>
  );
};

export default FormP;
