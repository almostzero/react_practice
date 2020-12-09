import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid, ColDef, CellParams, RowParams } from '@material-ui/data-grid';

const columns: ColDef[] = [
  { field: 'id',
    headerName: 'id',
    description: '설치 우선순위',
    width: 62
  },
  { field: '속성',
    headerName: '속성',
    headerAlign: 'center',
    description: '필수/선택',
    width: 140,
    // renderCell: (params: CellParams) => (
      // <Company name={params.value} logo={params.getValue('logo')} />
    // )
  },
  {
    field: '가입계정',
    headerName: '가입계정',
    description: 'BZ_DF1/???/???',
    width: 112,
    cellClassName: 'align-right',
    sortable: false,
    // valueFormatter: ({value}) => Number(value).toLocaleString() + '조원'
  },
  {
    field: 'PC프로그램',
    headerName: 'PC프로그램',
    description: '프로그램 이름',
    width: 134,
    cellClassName: 'align-right',
    sortable: false,
    // valueFormatter: ({value}) =>
    //   (Number(value) < 10000 ? Number(value).toLocaleString()
    //     : Math.floor(Number(value)/10000) + '조' + Number(String(value).substr(1)).toLocaleString()) + '억달러'
  },
  { 
    field: '추가설치/제품키', 
    headerName: '추가설치/제품키',
    width: 250 
    },
  { 
    field: '001_다운로드',
    headerName: '001_다운로드',
    width: 150,
    cellClassName: 'align-right',
    headerAlign: 'right',
    // valueFormatter: ({value}) => Number(value).toLocaleString()
 },
 { 
   field: '002_사용자매뉴얼', 
   headerName: '002_사용자매뉴얼', 
   width: 150
  },
 {
    field: '003_유튜브영상', 
    headerName: '003_유튜브영상',
    width: 150
  },
];

function Company(props: any){

  let img = '' + props.logo;
  if (!img.startsWith('http')) {
    img = 'https://' + props.logo + '/favicon.ico';
  }
  return <div><img width="15" src={img} alt={props.name}/> <span>{props.name}</span></div>
};

const useStyles = makeStyles({
  root: {
    '& .align-right': {
      textAlign: 'right',
    },
  },
});

export default function StockList({rows}: any) {

  const classes = useStyles();

  const onRowClick = (param: RowParams) => {
    window.open('https://finance.google.com/finance?q=' + param.getValue('exchange') + ':' + param.getValue('symbol') + '&tbm=fin', 'google_fin');
  }

  return (
    <div style={{ height: 1000, width: '100%' }} className={classes.root}>
      <DataGrid rows={rows} columns={columns} onRowClick={onRowClick} hideFooter autoHeight />
    </div>
  )
}
