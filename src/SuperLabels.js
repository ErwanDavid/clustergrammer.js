function SuperLabels(){

  function make( params ){

    // super col title
    /////////////////////////////////////
    // add super column title background
    d3.select('#main_svg')
    .append('rect')
    .attr('fill', params.background_color) //!! prog_colors
    .attr('height', params.super_label_width + 'px')
    .attr('width', '3000px')
    .attr('class', 'white_bars')
    .attr('transform', 'translate(0,' + params.grey_border_width + ')');

    // super col title
    d3.select('#main_svg')
    .append('text')
    .text(params.super.col)
    .attr('text-anchor', 'center')
    .attr('transform', function() {
      var inst_x = params.clust.dim.width / 2 + params.norm_label.width
        .row;
      var inst_y = params.super_label_width - params.uni_margin;
      return 'translate(' + inst_x + ',' + inst_y + ')';
    })
    .style('font-size', '14px')
    .style('font-weight', 300);

    // super row title
    /////////////////////////////////////
    // add super row title background
    d3.select('#main_svg')
    .append('rect')
    .attr('fill', params.background_color) //!! prog_colors
    .attr('width', params.super_label_width + 'px')
    .attr('height', '3000px')
    .attr('class', 'white_bars')
    .attr('transform', 'translate(' + params.grey_border_width + ',0)');

    // append super title row group
    // this is used to separate translation from rotation
    d3.select('#main_svg')
    .append('g')
    .attr('id', 'super_row_label')
    .attr('transform', function() {
      // position in the middle of the clustergram
      var inst_x = params.super_label_width - params.uni_margin;
      var inst_y = params.clust.dim.height / 2 + params.norm_label.width
        .col;
      return 'translate(' + inst_x + ',' + inst_y + ')';
    });

    // super row label (rotate the already translated title )
    d3.select('#super_row_label')
    .append('text')
    .text(params.super.row)
    .attr('text-anchor', 'center')
    .attr('transform', 'rotate(-90)')
    .style('font-size', '14px')
    .style('font-weight', 300);

  }

  return {
    make : make
  };
 }