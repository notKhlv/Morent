import React from "react";
import { ConfigProvider, Form, TreeSelect } from "antd";

const FormS = () => {
  return (
    <div className="flex flex-wrap gap-8">
      <Form.Item
        label=""
        name=""
        rules={[{ required: true, message: "Please input!" }]}
        className="w-[370px]"
      >
        <p className="text-base text-[#1A202C] mb-1">Locations</p>
        <ConfigProvider theme={{
            token:{
                colorBgContainer: "#F6F7F9"
            },
          components:{
            TreeSelect:{
                selectorBg:"red"
            }
          }  
        }}>
        <TreeSelect placeholder="Name" className="h-10"/>

        </ConfigProvider>
      </Form.Item>
      <Form.Item
        label=""
        name=""
        rules={[{ required: true, message: "Please input!" }]}
        className="w-[370px]"
      >
        <p className="text-base text-[#1A202C">Locations</p>
        <ConfigProvider theme={{
            token:{
                colorBgContainer: "#F6F7F9"
            },
          components:{
            TreeSelect:{
                selectorBg:"red"
            }
          }  
        }}>
        <TreeSelect placeholder="Name" className="h-10"/>

        </ConfigProvider>
      </Form.Item>
      <Form.Item
        label=""
        name=""
        rules={[{ required: true, message: "Please input!" }]}
        className="w-[370px] mt-[-30px]"
      >
        <p className="text-base text-[#1A202C] mb-1">Locations</p>
        <ConfigProvider theme={{
            token:{
                colorBgContainer: "#F6F7F9"
            },
          components:{
            TreeSelect:{
                selectorBg:"red"
            }
          }  
        }}>
        <TreeSelect placeholder="Name" className="h-10"/>

        </ConfigProvider>
      </Form.Item>
    </div>
  );
};

export default FormS;
