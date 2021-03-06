import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// @ts-ignore
import PublicGoogleSheetsParser from 'public-google-sheets-parser';
import React, { useEffect, useState } from 'react';
// @ts-ignore
import Spinner from 'react-spinkit';
import StockList from './components/StockList';



const App = () => {

  const [stockList, setStockList] = useState(null);

  function fetchStockData() {

    const parser = new PublicGoogleSheetsParser();

    //MWFYem5zOW1ndWNXZjJodjBuT1JuRnFtTjZLdXhObDlGVEZYaklITlllZzQ
    parser.parse('1DULHl89i0YchwTn-LbjUjqDDuMDdGtMAnWqD379f5D4')
      .then((data: any) => {
        setStockList(data)
      });
  }

  useEffect(() => {
    fetchStockData();
  }, []);

  function today() {

    const date = new Date();

    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth() + 1).toString();
    var dd = date.getDate().toString();

    return yyyy + "-" + (mm[1] ? mm : "0" + mm[0]) + "-" + (dd[1] ? dd : "0" + dd[0]);
  }

  return (
    <div>
      <Toolbar disableGutters>
        <Typography variant="h6">
          라퓨타 250
        </Typography>
        <Typography variant="caption" style={{ marginLeft: 40 }} noWrap>
          {today()} <a href="https://github.com/hibuz/hibuz.github.io/issues/new" style={{ textDecoration: 'none' }}>❔</a>
        </Typography>
      </Toolbar>
      {stockList != null ? <StockList rows={stockList} /> : <p style={{ margin: 30 }}>데이터 조회중... <Spinner name='pacman' color="coral" /></p>}
    </div>
  )
}

export default App;
