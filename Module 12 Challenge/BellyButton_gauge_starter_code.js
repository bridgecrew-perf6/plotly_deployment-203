// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    var samples = data.sample;

    // Create a variable that filters the samples for the object with the desired sample number.
    var sampleArray = samples.filter(sampleObj => sampleObj.id == sample);

    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metaData = data.metadata
    var metaArray = metadata.filter(sampleObj => sampleObj.id == sample);

    // Create a variable that holds the first sample in the array.
    var answer = sampleArray[0];

    // 2. Create a variable that holds the first sample in the metadata array.
    var metaAnswer = metaArray[0]

    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids = result.otu_ids
    var otu_labels = result.otu_labels
    var sample_values = result.sample_values

    console.log(otu_ids);
    console.log(otu_labels);
    console.log(sample_values);

    // 3. Create a variable that holds the washing frequency.
    var washFreq = parseFloat(metaAnswer.wfreq)
    console.log(washFreq)
   
    // Create the yticks for the bar chart.

    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot();
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot();
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [
                  {
                        domain: { x: [0, 1], y: [0, 1] },
                        value: washFreq,
                        title: { text: "Belly Button Washing Frequency" },
                        type: "indicator",
                        mode: "gauge+number"
                        gauge: {
                          axis: { range: [null, 10], tickwidth: 1, tickcolor: "black" },
                          steps: [
                            { range: [0, 2], color: "violet" },
                            { range: [2, 4], color: "indigo" },
                            { range: [4, 6], color: "blue" },
                            { range: [6, 8], color: "green" }
                            { range: [8, 10], color: "yellow" }
                        }
                  }
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      width: 500,
      height: 400,
      margin: { t: 25, r: 25, l: 25, b: 25 },
      font: { color: "black", family: "Arial" }
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", data, layout);
  });
}
