import React from 'react';
import { CChart } from '@coreui/react-chartjs';

export default function BarChart({ drinks }) {
  // const labels = drinks.map((x) => x.strAlcoholic);
  // const labelsSet = new Set(labels);
  // const labelsDrinks = Array.from(labelsSet);

  const alco =
    drinks !== null
      ? drinks.filter((drink) => drink.strAlcoholic === 'Alcoholic').length
      : 0;
  const nonAlco =
    drinks !== null
      ? drinks.filter((drink) => drink.strAlcoholic === 'Non alcoholic').length
      : 0;
  const optAlco =
    drinks !== null
      ? drinks.filter((drink) => drink.strAlcoholic === 'Optional alcohol')
          .length
      : 0;

  const labelArray = ['Optional alcohol', 'Alcoholic', 'Non alcoholic'];
  const dataArray = [optAlco, alco, nonAlco];

  return (
    <div className="bar-chart">
      <CChart
        type="bar"
        data={{
          labels: labelArray,
          datasets: [
            {
              label: 'Types of drinks',
              backgroundColor: '#f87979',
              data: dataArray,
              // borderWidth: 1
              borderRadius: 5,
            },
          ],
        }}
        labels="types"
      />
    </div>
  );
}
