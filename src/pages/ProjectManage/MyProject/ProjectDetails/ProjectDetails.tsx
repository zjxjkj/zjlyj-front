// src/pages/ProjectDetail.tsx
import React, { useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Tabs, Descriptions, Card, Image } from 'antd';
import { useParams } from 'react-router-dom';
import { queryProjectDetail } from '@/services/api';

const { TabPane } = Tabs;

const ProjectDetail: React.FC = () => {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  // const { id } = useParams(); // 获取项目 ID

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await queryProjectDetail(id);
        setData(result);
      } catch (error) {
        console.error("Failed to fetch project details:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, [id]);

  return (
    <PageContainer loading={loading}>
      <Card bordered={false}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="基本信息" key="1">
            <Descriptions bordered>
              <Descriptions.Item label="负责人姓名">{/*{data.name}*/}</Descriptions.Item>
              <Descriptions.Item label="出生年月">{data.birthDate}</Descriptions.Item>
              <Descriptions.Item label="最高学历">{data.education}</Descriptions.Item>
              <Descriptions.Item label="手机号码">{data.phone}</Descriptions.Item>
              <Descriptions.Item label="单位名称">{data.unitName}</Descriptions.Item>
              <Descriptions.Item label="办公通讯地址">{data.address}</Descriptions.Item>
              <Descriptions.Item label="证件种类">{data.idType}</Descriptions.Item>
              <Descriptions.Item label="技术职称">{data.title}</Descriptions.Item>
              <Descriptions.Item label="人员类别">{data.personType}</Descriptions.Item>
              <Descriptions.Item label="性别">{data.gender}</Descriptions.Item>
              <Descriptions.Item label="单位邮编">{data.unitZipCode}</Descriptions.Item>
              <Descriptions.Item label="获学位年份">{data.degreeYear}</Descriptions.Item>
              <Descriptions.Item label="联系邮箱">{data.email}</Descriptions.Item>
              <Descriptions.Item label="单位电话">{data.unitPhone}</Descriptions.Item>
              <Descriptions.Item label="证件号码">{data.idNumber}</Descriptions.Item>
              <Descriptions.Item label="在站博士后">{data.postDoctor}</Descriptions.Item>
            </Descriptions>
            <Image
              width={100}
              src={data.avatar || 'default-avatar-url'}
              alt="Avatar"
              style={{ marginTop: 16 }}
            />
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
