import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Button, Form, Grid, Message, Image, Divider, Segment, Icon } from "semantic-ui-react";



export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [auth, setAuth] = useState(false);


  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    // console.log(username +" "+ password);
    event.preventDefault();
    axios.post('http://localhost:3002/login', {

      "UserName": username,
      "PassWord": password

    })
      .then(function (response) {
        if (response.data.message == "Success") {
          setAuth(true)
          setName(response.data.displayname_th)
        }

        else if (response.data.message == "User or Password Invalid!")
          setAuth(false)

        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }



  return (
    <div>
      {auth
        ?
        <div>
          <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 500 }}>
              <Segment padded>
              <Message>
              <Message.Header></Message.Header>
              <p>
                เข้าสู่ระบบด้วย ชื่อ :  
                {name}
             </p>
            </Message>
                <Button color='orange' fluid size='large' as={Link} to="/user">ดำเนินการต่อ</Button>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
        : <>
          <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 500 }}>

              <Form size='huge' onSubmit={handleSubmit}>
                <Segment padded>
                  <Image src='/logo.png' verticalAlign="center" />
                  <Divider />
                  <Form.Input
                    fluid
                    icon='user'
                    iconPosition='left'
                    placeholder=' Username'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder=' Password'
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <Divider />
                  <Button color='orange' fluid size='large' disabled={!validateForm()} type="submit">
                  <Icon name='sign-in' />
                    เข้าสู่ระบบ
              </Button>
                </Segment>
              </Form>

            </Grid.Column>

          </Grid >
        </>
      }
    </div >
  );
}