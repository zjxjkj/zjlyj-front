// src/pages/ProjectDetail.tsx
import React, { useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import {Tabs, Descriptions, Card, Row} from 'antd';
import ProDescriptions from "@ant-design/pro-descriptions";
// import { queryProjectDetail } from '@/services/api';

const { TabPane } = Tabs;

const ProjectDetail: React.FC = () => {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  // const { id } = useParams(); // 获取项目 ID

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // const result = await queryProjectDetail(id);
        const result = '';
        setData(result);
      } catch (error) {
        console.error("Failed to fetch project details:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, [1]);



  return (
    <PageContainer loading={loading}>
      <Card bordered={false}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="基本信息" key="1">
            <ProDescriptions
              dataSource={{
                id: '这是一段文本columns',
                date: '20200809',
                money: '1212100',
                state: 'all',
                state2: 'open',
              }}

              bordered

              columns={[
                {
                  title: '项目名称',
                  key: 'text',
                  dataIndex: 'id',
                  ellipsis: true,
                },
                {
                  title: '状态',
                  key: 'state',
                  dataIndex: 'state',
                  valueType: 'select',
                  valueEnum: {
                    all: {text: '全部', status: 'Default'},
                    open: {
                      text: '未解决',
                      status: 'Error',
                    },
                    closed: {
                      text: '已解决',
                      status: 'Success',
                    },
                  },
                },
                {
                  title: '状态2',
                  key: 'state2',
                  dataIndex: 'state2',
                },
                {
                  title: '时间',
                  key: 'date',
                  dataIndex: 'date',
                  valueType: 'date',
                },
                {
                  title: 'money',
                  key: 'money',
                  dataIndex: 'money',
                  valueType: 'money',
                },
              ]}
            >
              <ProDescriptions.Item label="百分比" valueType="percent">
                100
              </ProDescriptions.Item>
            </ProDescriptions>
          </TabPane>
          <TabPane tab="项目经费" key="2">
            <Descriptions bordered>
              {/* 项目经费的详细信息 */}
              <Descriptions.Item label="申请者曾主持的浙江省自然科学基金资助项目">
                {/* 假设此处是一个嵌套的 Descriptions */}
                <Descriptions bordered>
                  <Descriptions.Item label="项目批准号">{data.projectApprovalNumber}</Descriptions.Item>
                  <Descriptions.Item label="项目名称">{data.projectName}</Descriptions.Item>
                </Descriptions>
              </Descriptions.Item>
              <Descriptions.Item label="申请者曾主持和正在主持的国家和省部级项目">
                <Descriptions bordered>
                  <Descriptions.Item label="项目类别">{data.projectCategory}</Descriptions.Item>
                  <Descriptions.Item label="项目名称">{data.projectTitle}</Descriptions.Item>
                  <Descriptions.Item label="起止年">{data.projectYears}</Descriptions.Item>
                  <Descriptions.Item label="立项年度">{data.projectYear}</Descriptions.Item>
                </Descriptions>
              </Descriptions.Item>
            </Descriptions>
          </TabPane>
          <TabPane tab="合作单位" key="3">
            {/* 合作单位的详细信息 */}
          </TabPane>
          <TabPane tab="项目成员" key="4">
            {/* 项目成员的详细信息 */}
          </TabPane>
          <TabPane tab="研究计划" key="5">
            {/* 研究计划的详细信息 */}
          </TabPane>
          <TabPane tab="预期成果" key="6">
            {/* 预期成果的详细信息 */}
          </TabPane>
          <TabPane tab="需增添的仪器及设备" key="7">
            {/* 需增添的仪器及设备的详细信息 */}
          </TabPane>
          <TabPane tab="正文，附件与申请书全文" key="8">
            {/* 正文，附件与申请书全文的详细信息 */}
          </TabPane>
        </Tabs>
      </Card>
    </PageContainer>
  );
};

export default ProjectDetail;
