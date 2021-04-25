import {useState,useEffect} from "react";
import MapComponent from "./MapComponent";
import axios from 'axios';

export default function MatchesByArea() {
	
	const [loading,setloading] = useState(true);	
	const [stats,setStats] = useState({});
	const [featureData,setFeatureData] = useState();
	
	useEffect(() => {
		document.title = "Matches By Area";
		
		const findUsersPerArea = (areaData, usersData) => {
			let i,maxV=Number.MIN_SAFE_INTEGER,minV=Number.MAX_SAFE_INTEGER,maxA,minA,total;
			areaData?.features?.forEach((area) => {
				total=0;
				//break logic: assuming data will always be sorted by area_id
				let areaFound=false;
				for (i = 0; i < usersData.length; i++) {
				  if(usersData[i].area_id === area?.properties.area_id){
					total += usersData[i].total_matches;
					areaFound=true;
				  }
				  if(areaFound && usersData[i].area_id !== area?.properties.area_id)
					break;
				}
				
				if(total>maxV){
					maxV=total;
					maxA=area["properties"]["name"];
				}
				if(total<minV){
					minV=total;
					minA=area["properties"]["name"];
				}
				
				area["properties"]["matchCount"]=total;
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
			
			findUsersPerArea(values[0]?.data, values[1]?.data?.users)
		}
		
		fetchData();
		
	},[]);
	
	const description="This map shows total number of matches per area";
		
  return (
		<MapComponent {...{featureData,loading,stats,param:"matchCount",description}}/>
  );
}