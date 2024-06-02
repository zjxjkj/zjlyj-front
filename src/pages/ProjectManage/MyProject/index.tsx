import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import { ProTable } from '@ant-design/pro-table';
import { Button } from 'antd';
import React, { useRef } from 'react';
import {PageHeaderWrapper} from "@ant-design/pro-layout";
export const waitTimePromise = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const waitTime = async (time: number = 100) => {
  await waitTimePromise(time);
};

type ProjectItem = {

};


const columns: ProColumns<ProjectItem>[] = [
  {
    title: '序号',
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '状态',
    dataIndex: 'state',
    valueType: 'select',
    valueEnum:{
      0: { text: '项目申报', status: 'Default' },
      1: { text: '一级审核', status: 'Success'},
      2: { text: '二级审核', status: 'Success'},
      3: { text: '项目通过', status: 'Success'},
    },

  },
  {
    title: '验收状态',
    dataIndex: 'acceptStatus',
    search : false,
  },
  {
    title: '操作',
    dataIndex: 'title',
    search : false,
  },
  {
    title: '项目名称',
    dataIndex: 'title',
    search : false,
  },
  {
    title: '下载',
    dataIndex: 'title',
    search : false,
  },
  {
    title: '项目申请编号',
    dataIndex: 'title',
    search : false,
  },
  {
    title: '项目批准编号',
    dataIndex: 'title',
    search : false,
  },
  {
    title: '任务书详情',
    dataIndex: 'title',
    search : false,
  },
  {
    title: '申报年度',
    dataIndex: 'title',
  },
  {
    title: '申报类别',
    dataIndex: 'declaterationCategory',
  },

];


const MyProject: React.FC<{}> = () =>
{
  const actionRef = useRef<ActionType>();
  return (
    <PageHeaderWrapper>
      <ProTable<ProjectItem>
        columns={columns}
        actionRef={actionRef}
        cardBordered
        editable={{
          type: 'multiple',
        }}
        columnsState={{
          persistenceKey: 'pro-table-singe-demos',
          persistenceType: 'localStorage',
          defaultValue: {
            option: { fixed: 'right', disable: true },
          },
        }}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        options={false}
        form={{
          // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下

        }}
        pagination={{
          pageSize: 5,
          onChange: (page) => console.log(page),
        }}
        dateFormatter="string"
        headerTitle="高级表格"
        toolBarRender={() => [
          <Button
            key="projectEntry"
            icon={<PlusOutlined />}
            onClick={() => {
              actionRef.current?.reload();
            }}
            type="primary"
          >
            申报项目入口
          </Button>
        ]}
      />
    </PageHeaderWrapper>
  );
}

export default MyProject;
