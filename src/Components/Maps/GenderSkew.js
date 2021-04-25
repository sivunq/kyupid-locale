import {useState,useEffect} from "react";
import MapComponent from "./MapComponent";
import axios from 'axios';

export default function GenderSkew() {
	
	const [loading,setloading] = useState(true);	
	const [stats,setStats] = useState({});

	const [featureData,setFeatureData] = useState();
	
	useEffect(() => {
		document.title = "Gender Skew";
		
		const findMFRatio = (areaData, usersData) => {
			let i,maxV=Number.MIN_SAFE_INTEGER,minV=Number.MAX_SAFE_INTEGER,maxA,minA;
			areaData?.features?.forEach((area) => {
				//break logic: assuming data will always be sorted by area_id
				let areaFound=false;
				
				let male=0,female=0;
				for (i = 0; i < usersData.length; i++) {
				  if(usersData[i].gender === "M" && usersData[i].area_id === area?.properties.area_id){
					male++;
					areaFound=true;
				  }
				  else if(usersData[i].gender === "F" && usersData[i].area_id === area?.properties.area_id){
					  female++;
					  areaFound=true;
				  }
				  if(areaFound && usersData[i].area_id !== area?.properties.area_id)
					break;
				}
				
				let ratio= female ? male/female: male;
					
				if(ratio>maxV){
					maxV=ratio;
					maxA=area["properties"]["name"];
				}
				if(ratio<minV){
					minV=ratio;
					minA=area["properties"]["name"];
				}
				
				ratio=ratio.toFixed(2);
				area["properties"]["mfRatio"]=ratio;
			})
			
			const obj= {};
			obj["minVal"]=minV;
			obj["maxVal"]=maxV;
			obj["minArea"]=minA;
			obj["maxArea"]=maxA;
			
			setStats({...stats, ...obj });
			setFeatureData(areaData);
			setloading(false);
		}
		
		async function fetchData() {
			let values = await Promise.all([
				axios.get('https://kyupid-api.vercel.app/api/areas'), 
				axios.get('https://kyupid-api.vercel.app/api/users')
			]);
			
			findMFRatio(values[0]?.data, values[1]?.data?.users)
		}
		
		fetchData();
		
	},[]);
	
	const description="This map shows ratio of Male users to Female users count";
		
  return (
		<MapComponent {...{featureData,loading,stats,param:"mfRatio",description}}/>
  );
}