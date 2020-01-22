import React, { Component } from 'react';
			import './sliderdesc.css';


			class SlideDesc extends Component{
				render(){  
				return  <div >
							<a class="desc"><span>{this.props.desc}</span></a>
						</div>
						}
			}

			export default SlideDesc;