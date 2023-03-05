
import { useEffect } from 'react';
import Plot from 'react-plotly.js';
import "./styles.css";

type Props = {
  data: any;
};

export function ChartComponent({ data }: Props) {
 let dat: {
    x: string;
    y: string;
    z: string;
    type: string;
    mode: string;
  }[] = [];

  useEffect(()=>{
    Object.keys(data).map((d1, index) => {
      const a = {
        x: data[d1].map((d: any[]) => d[0]), //frequency hz
        
        y: data[d1].map((d: any[]) => d[1]), // amplitude
        z: data[d1].map((d: any) => `p${index}`), //measurement point
        type: "scatter3d",
        mode: "lines",
        marker: {color: 'red'},
        
      };
      dat.push(a);
      return a;
    });
  },[])

 
 
  return (
    <>
      <p>Chart Should be displayed here</p>
      <Plot 
       data={dat}
       layout={{
        width: 900,
        height: 800,
        title: { text:`Simple 3D Scatter`,xref: 'paper',},
        hovermode: "closest",
        scene: {
        xaxis: {
          title: {
            text: `Frequency /HZ`,
            
          },
          dtick: 500,
          range: [0, 5000]
        },
        yaxis: {
          title: {
            text: `Amplitude`,
            
          },
          dtick: 0.5,
          autorange: true,
        },
        zaxis: {
          title: {
            text: `Measurement Point`,
            
          },
        },

      }

        
      }}
    />
    </>
  );
}

