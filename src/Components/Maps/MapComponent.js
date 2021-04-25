import React,{useState} from "react";
import { MapContainer,TileLayer,GeoJSON,Tooltip} from "react-leaflet";
import Loader from "../Loader.js";
import {getColor} from "../utils.js"

import "leaflet/dist/leaflet.css";

const MapComponent = ({featureData,loading,stats,param,description}) => {

	const center= [12.971599, 77.594566];
	
	const [name,setName]= useState("");
	const [value,setValue]= useState("");
	
	const Legend = () => {
		const grades = [1,2,3,4,5,6,7,8,9,10];
		return (
			<div className="leaflet-bottom leaflet-right">
			  <div className="legend leaflet-control leaflet-bar">
			  <h6><b>Legend</b></h6>
			  {
				  grades.map(grade=>{ 
					  if(grade===1){
						  return <div key={grade}><i  style={{"background":`${getColor(grade,1,10)}`}}></i>{stats.minVal} (min)<br/></div>
					  }
					  else if(grade===10){
						  return <div key={grade}><i  style={{"background":`${getColor(grade,1,10)}`}}></i>{stats.maxVal} (max)<br/></div>
					  }
					  else{
						  return <div key={grade}><i  style={{"background":`${getColor(grade,1,10)}`}}></i><br/></div>
					  }
				  })
			  }
			  </div>
			</div>
		)
	}
	
	const Stats = () => {
		return (
			<div className="leaflet-top leaflet-right">
			  <div className="stats leaflet-control leaflet-bar">
				<br/>
				<h6><b>Maximum Value:</b></h6>
				<h6>{stats.maxArea} : {stats.maxVal}</h6>
				<br/>
				<h6><b>Minimum Value:</b></h6>
				<h6>{stats.minArea} : {stats.minVal}</h6>
			  </div>
			</div>
		)
	}
	
	const defaultStyle=(feature)=>{
		return {
			fillColor: getColor(feature.properties[param],stats.minVal,stats.maxVal),
			weight: 2,
			color: 'white',
			fillOpacity: 0.7
		}
	}
	
	const hoverStyle ={
		weight: 5,
		fillOpacity: 1
	}
	
	const onEachFeature = (feature,layer) => {
        layer.on({
            mouseover: (e) => {
				e.target.setStyle(hoverStyle);
				setName(feature.properties.name);
				setValue(feature.properties[param]);
			},
			mouseout: (e) => {
				e.target.setStyle(defaultStyle(feature));
				setName("");
				setValue("");
			}
        });
    };

	return (
		<>
		{
			loading 
			?
			<Loader />
			:
			<>
			<b><p>{description}</p></b>
			<MapContainer center={center} zoom={11} style={{height:"80vh",width:"80vw"}}>
				<TileLayer
					url="http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png"
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/>
				
				<Stats />
				
				<Legend />
				
				<GeoJSON 
					key={name}
					style={defaultStyle} 
					data={featureData.features}  
					onEachFeature={onEachFeature}
				>
					<Tooltip sticky direction="top">
						<div>
							<h5>{name}</h5>
							<h6>{value}</h6>
						</div>
					</Tooltip>

				</GeoJSON>
				
			</MapContainer>
			</>
		}
		</>
	);
}

export default MapComponent