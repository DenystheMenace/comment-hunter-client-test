// Heatmap.js
import React, { useRef, useEffect } from 'react';
import { select, hierarchy, treemap, scaleLinear } from 'd3';

const Heatmap = ({ width, height, data }) => {
    const ref = useRef();

    useEffect(() => {
        select(ref.current)
            .attr("width", width)
            .attr("height", height)

        // Give the data to this cluster layout:
        const root = hierarchy(data).sum(d => d.values);

        const svg = select(ref.current);

        // initialize treemap
        treemap()
            .size([width, height])
            .paddingInner(1)
            (root);

        // calculate max value in data
        let max = Math.max
            .apply(Math, Object
                .values(data.children)
                .map(function(o) {
                    return o.values;
                })
            )

        // set up the color scheme
        const color = scaleLinear()
            .domain([1, max])
            .range([ "dodgerblue", "salmon"]);

        // Select the nodes
        const nodes = svg.selectAll("rect").data(root.leaves());

        // animate new additions
        nodes
            .transition()
            .duration(300)
            .attr('x', d => d.x0)
            .attr('y', d => d.y0)
            .attr('width', d => d.x1 - d.x0)
            .attr('height', d => d.y1 - d.y0)
            .style("fill", d => color(d.data.values))

        // draw rectangles
        nodes.enter()
            .append("rect")
            .attr('x', d => d.x0)
            .attr('y', d => d.y0)
            .attr('width', d => d.x1 - d.x0)
            .attr('height', d => d.y1 - d.y0)
            .style("fill", d => color(d.data.values))

        nodes.exit().remove()

        // select node titles
        const nodeText = svg
            .selectAll("text")
            .data(root.leaves());

        // animate new additions
        nodeText
            .transition()
            .duration(300)
            .attr("x", d => d.x0 + 5)
            .attr("y", d => d.y0 + 20)
            .text(d => d.data.keys)
            .attr("font-size", "1em")
            .attr("fill", "white")

        // add the text
        nodeText.enter()
            .append("text")
            .attr("x", d => d.x0 + 5)
            .attr("y", d => d.y0 + 20)
            .text(d => d.data.keys)
            .attr("font-size", "1em")
            .attr("fill", "white")

        nodeText.exit().remove()

        // add the parent node titles
        svg
            .selectAll("titles")
            .data(root.descendants())
            .enter()

    }, [data, height, width]);

    return (
        <div className="chart">
            <svg ref={ref}></svg>
        </div>
    )
}

export default Heatmap;
