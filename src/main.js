var make_config = require('./config');
var make_params = require('./params/');
var make_viz = require('./viz');

/* clustergrammer 1.0
 * Nick Fernandez, Ma'ayan Lab, Icahn School of Medicine at Mount Sinai
 * (c) 2016
 */
function Clustergrammer(args) {

  /* Main program
   * ----------------------------------------------------------------------- */
  // consume and validate user input
  // build giant config object
  // visualize based on config object
  // handle user events

  console.log('checking args in clustergrammer');
  console.log(args);

  // consume and validate user arguments, produce configuration object
  var config = make_config(args);

  // make visualization parameters using configuration object
  var params = make_params(config);

  if (params.use_sidebar) {
    var make_sidebar = require('./sidebar/');
    params = make_sidebar(config, params);
  }
  
  // make visualization using parameters
  var viz = make_viz(params);

  return {
    params: params,
    config: config,
    find_entity: viz.find_entity,
    get_entities: viz.get_entities,
    reorder: require('./reorder/all_reorder'),
    opacity_slider: viz.opacity_slider,
    opacity_function: viz.opacity_function,
    reset_zoom: viz.reset_zoom,
    change_category: require('./network/change_category')
  };
}

module.exports = Clustergrammer;
