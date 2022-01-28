import React, { useState } from "react";
import instance from "../axiosConfig";
import { Form, Input, Button, Select, Checkbox, DatePicker } from "antd";
import "antd/dist/antd.css";
import MessageToUser from "./MessageToUser";
import getAge from "../utils";

export default function InputForm() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [location, setLocation] = useState();
  const [userData, setUserData] = useState();
  const [weatherData, setWeatherData] = useState();
  const { Option } = Select;

  const onSubmit = () => {
    instance
      .post("/users", {
        name,
        age,
        location,
      })
      .then((res) => {
        setUserData(res.data);
      })
      .catch((error) => {});
    instance
      .get("/weather", {
        params: {
          location: location,
          age: getAge(age),
        },
      })
      .then((res) => {
        setWeatherData(res.data[0]);
      })
      .catch((error) => {});
  };

  return (
    <div className="form_box">
      <Form>
        <Form.Item label="Enter Name">
          <Input
            style={{ width: "250px" }}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>
        <Form.Item label=" Enter Age">
          <Input
            style={{ width: "250px" }}
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Item>{" "}
        <Form.Item label="Enter Location">
          <Select
            style={{ width: "250px" }}
            onChange={(e) => {
              setLocation(e);
            }}
          >
            <Option value="UK">UK</Option>
            <Option value="Austria">Austria</Option>
            <Option value="Belgium">Belgium</Option>
            <Option value="india">india</Option>
          </Select>
        </Form.Item>
        <Button type="primary" htmlType="submit" onClick={onSubmit}>
          Submit
        </Button>
        {userData ? (
          <Form.Item>
            <MessageToUser weatherData={weatherData} userData={userData} />
          </Form.Item>
        ) : null}
      </Form>
    </div>
  );
}
