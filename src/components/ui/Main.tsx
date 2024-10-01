import React from 'react';
import { Flex, Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: '3em',
    maxHeight: '3em',
    lineHeight: '3em',
    backgroundColor: '#4096ff',
    padding: '0em',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
};

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    maxHeight: '2em',
    backgroundColor: '#4096ff',
    padding: '0em',
};

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(100%)',
    maxWidth: 'calc(100%)',
    height: '98vh',
    maxHeight: '98vh',
};

const Main: React.FC = () => (
    <Flex gap="middle" wrap>

        <Layout style={layoutStyle}>
            <Header style={headerStyle}>123</Header>
            <Layout>
                <Sider width="5%" style={siderStyle}>
                    Sider
                </Sider>
                <Content style={contentStyle}>Content</Content>
                <Sider width="10%" style={siderStyle}>
                    Sider
                </Sider>
            </Layout>
            <Footer style={footerStyle}>Footer</Footer>
        </Layout>

    </Flex>
);

export default Main;