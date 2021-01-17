import { makeStyles } from '@material-ui/core/styles';
import { ColDef, DataGrid, RowParams } from '@material-ui/data-grid';
import React from 'react';

const columns: ColDef[] = [
  {
    field: 'id',
    headerName: '순위',
    description: 'description',
    width: 100
  },
  {
    field: '속성',
    headerName: '속성',
    headerAlign: 'center',
    width: 100
  },
  {
    field: '가입계정',
    headerName: '가입계정',
    description: 'description',
    width: 150,
    cellClassName: 'align-right',
    sortable: false
  },
  {
    field: 'PC프로그램',
    headerName: 'PC프로그램',
    description: 'description',
    width: 200,
    cellClassName: 'align-right',
    sortable: false
  },
  { field: '추가설치/제품키', headerName: '추가설치/제품키', width: 200 },
  {
    field: '001_공유드라이브에서 다운로드',
    headerName: '001_공유드라이브에서 다운로드',
    width: 200,
    cellClassName: 'align-right',
    headerAlign: 'right'
  },
  {
    field: '002_사용자매뉴얼 (교육자료실)',
    headerName: '002_사용자매뉴얼 (교육자료실)',
    width: 200
  },
  { field: '003_유튜브 영상', headerName: '003_유튜브 영상', width: 200 },
];

function Company(props: any) {

  let img = '' + props.logo;
  if (!img.startsWith('http')) {
    img = 'https://' + props.logo + '/favicon.ico';
  }
  return <div><img width="15" src={img} alt={props.name} /> <span>{props.name}</span></div>
};

const useStyles = makeStyles({
  root: {
    height: 1000,
    width: '100%',
    '& .align-right': {
      textAlign: 'right',
    },
  },
});

export default function StockList({ rows }: any) {

  const classes = useStyles();

  const onRowClick = (param: RowParams) => {
    window.open('https://finance.google.com/finance?q=' + param.getValue('exchange') + ':' + param.getValue('symbol') + '&tbm=fin', 'google_fin');
  }

  return (
    <div className={classes.root}>
      <DataGrid rows={rows} columns={columns} onRowClick={onRowClick} hideFooter autoHeight />
    </div>
  )
}
