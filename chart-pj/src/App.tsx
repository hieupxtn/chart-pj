import { Chart } from './Component/Chart';

const App = () => {
  const dataChart1 = [20, 25, 48, 48, 20, 25];
  const data1Chart2 = [20, 25, 48, 48, 20, 25];
  const data2Chart2 = [10, 22, 42, 42, 10, 11];
  const dataXNameChart1 = ['<30', '31-40', '41-50', '51-60', '61-70', '>70'];
  const dataXNameChart2 = ['<30', '31-40', '41-50', '51-60', '61-70', '>70'];

  return (
    <div className='App'>
      <Chart
        dataChart1={dataChart1}
        data1Chart2={data1Chart2}
        data2Chart2={data2Chart2}
        dataXNameChart1={dataXNameChart1}
        dataXNameChart2={dataXNameChart2}
      />
    </div>
  );
};

export default App;
