var make_filter_title = require('../filters/make_filter_title');


module.exports = function set_sidebar_ini_view(params){

  _.each( _.keys(params.ini_view), function(inst_filter){

    // initialize filter slider using ini_view
    var inst_value = params.ini_view[inst_filter];

    var filter_type = params.viz.possible_filters[inst_filter];

    if (filter_type === 'numerical'){

      var possible_values = params.viz.filter_data[inst_filter];

      if (inst_value != 'all'){
        inst_value = parseInt(inst_value,10);
      }

      if (params.viz.filter_data[inst_filter].indexOf(inst_value) <= -1){
        inst_value = 'all';
      }

      var tmp_index = possible_values.indexOf( inst_value );

      $(params.root+' .slider_'+inst_filter)
        .slider( "value", tmp_index);

      var filter_title = make_filter_title(params, inst_filter);

      d3.select(params.root+' .title_'+inst_filter)
        .text(filter_title.text + inst_value + filter_title.suffix);

      d3.select(params.root+' .slider_'+inst_filter)
        .attr('current_state', inst_value);

    } else {

      // set up button initialization

    }

  });

};
