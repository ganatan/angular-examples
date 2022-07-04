import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';
import { select } from 'd3-selection';
/* import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis'; */

@Component({
  selector: 'app-example-services',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  /*  private data = [
      { "Framework": "Vue", "Stars": "166443", "Released": "2014" },
      { "Framework": "React", "Stars": "150793", "Released": "2013" },
      { "Framework": "Angular", "Stars": "62342", "Released": "2016" },
      { "Framework": "Backbone", "Stars": "27647", "Released": "2010" },
      { "Framework": "Ember", "Stars": "21471", "Released": "2011" },
    ];
    private svg: any;
    private margin = 50;
    private width = 750 - (this.margin * 2);
    private height = 400 - (this.margin * 2); */

  constructor() { }

  ngOnInit() {

    const svgtest = d3.select("figure#toto").append("svg")


    const svg = select("figure#bar")
      .append("svg")
      //var svg = d3.select("figure#bar").append("svg")
      .attr("width", 960)
      .attr("height", 500);

    const rectangle = 50,
      isCircle = false;
    const rect = svg.append("rect")
      .attr("x", 100)
      .attr("y", 100)
      .attr("rx", rectangle)
      .attr("ry", rectangle)
      .attr("width", rectangle * 2)
      .attr("height", rectangle * 2);


    /*    this.createSvg();
        this.drawBars(this.data); */
  }

  /* private createSvg(): void {
    let toto = d3.select("figure#bar");
    console.log('00000000001:toto:' + toto);
    console.log('00000000001:toto:' + JSON.stringify(toto));
    let toto1 = toto.append("svg");
    let toto2 = toto1.attr("width", this.width + (this.margin * 2));
    let toto3 = toto2.attr("height", this.height + (this.margin * 2));
    let toto4 = toto3.append("g");
    this.svg = toto4.attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawBars(data: any[]): void {
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d.Framework))
      .padding(0.2);

    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    const y = d3.scaleLinear()
      .domain([0, 200000])
      .range([this.height, 0]);

    this.svg.append("g")
      .call(d3.axisLeft(y));

    this.svg.selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      //      .attr("x", d => x(d.Framework))
      //      .attr("y", d => y(d.Stars))
      .attr("x", 10)
      .attr("y", 20)
      .attr("width", x.bandwidth())
      //      .attr("height", (d) => this.height - y(d.Stars))
      .attr("height", 40)
      .attr("fill", "#d04a35");
  } */

}
