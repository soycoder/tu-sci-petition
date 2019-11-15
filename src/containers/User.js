import React from "react";
import { Button, Container, Icon, Image, Divider, Menu, Segment, List } from "semantic-ui-react";

const ListExampleFloated = () => (
    <List divided verticalAlign='middle'>
      <List.Item>
        <List.Content floated='right'>
          <Button>แก้ไข</Button>
        </List.Content>
        {/* <Image avatar src='/images/avatar/small/lena.png' /> */}
        <List.Content>คำร้อง #00001</List.Content>
      </List.Item>
      <List.Item>
        <List.Content floated='right'>
          <Button>แก้ไข</Button>
        </List.Content>
        {/* <Image avatar src='/images/avatar/small/lindsay.png' /> */}
        <List.Content>คำร้อง #00003</List.Content>
      </List.Item>
      <List.Item>
        <List.Content floated='right'>
          <Button>แก้ไข</Button>
        </List.Content>
        {/* <Image avatar src='/images/avatar/small/mark.png' /> */}
        <List.Content>คำร้อง #00004</List.Content>
      </List.Item>
      <List.Item>
        <List.Content floated='right'>
          <Button>แก้ไข</Button>
        </List.Content>
        {/* <Image avatar src='/images/avatar/small/molly.png' /> */}
        <List.Content>คำร้อง #00008</List.Content>
      </List.Item>
    </List>
  )

export default function Login(props) {

    return (
        <div>
            <br></br>
            <Container fluid textAlign='center' style={{ marginTop: '1em' }, { background: '#FFFFFF' }} verticalAlign='middle'>
                < Menu secondary>
                    <Menu.Item>
                        <Image size='huge' src='/logo.png' style={{ margin: 'auto' }, { display: 'block' }} />
                    </Menu.Item>

                    <Menu.Menu position='right'>

                        <Menu.Item>
                            <Segment>
                                <p>
                                    ข้อมูลทั่วไป
                                </p>
                                <p>
                                    ชื่อ :
                                </p>
                                <p>
                                    ชั้นปี :
                                </p>
                                <Button color='red' fluid size='small' icon='plus'>
                                <Icon name='sign-out' />
                                    ออกจากระบบ
                            </Button>
                            </Segment>
                        </Menu.Item>

                    </Menu.Menu>
                </Menu>
                < Menu secondary>

                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button color='olive' fluid size='large' >
                            {/* <Icon.Group size='large'> */}
                                <Icon name='file alternate' />

                                {/* <Icon corner name='add' /> */}
                                {/* </Icon.Group> */}
                                กรอกใบคำร้อง
                            </Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>

                <Divider />
                <Segment>
                    {ListExampleFloated()}
                </Segment>

                <Divider />

            </Container>



        </div >
    );
}